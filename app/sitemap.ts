import { MetadataRoute } from 'next'
import { articles } from '@/lib/articles'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import ts from 'typescript'

export const dynamic = 'force-static'

function normalizeDate(value: unknown): string | undefined {
  return typeof value === 'string'
    ? value.trim().match(/^(\d{4}-\d{2}-\d{2})(?:$|T)/)?.[1]
    : undefined
}

// Preserve these verified content dates without changing any page's schema.
const preservedDates: Record<string, string> = {
  '/guides/septic-tank-size-guide': '2026-10-27',
  '/articles/septic-tank-pumping-cost': '2026-10-27',
  '/guides/septic-system-financial-assistance': '2026-10-27',
  '/cost-guides/septic-inspection-cost': '2026-10-27',
}

function contentDate(pathname: string): string | undefined {
  if (preservedDates[pathname]) return preservedDates[pathname]

  const filename = join(process.cwd(), 'app', pathname.slice(1), 'page.tsx')
  if (!existsSync(filename)) return undefined

  const source = ts.createSourceFile(
    filename,
    readFileSync(filename, 'utf8'),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  )
  const bindings = new Map<string, ts.Expression>()
  function collectBindings(node: ts.Node) {
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.initializer) {
      bindings.set(node.name.text, node.initializer)
    }
    ts.forEachChild(node, collectBindings)
  }
  collectBindings(source)

  function resolve(value: ts.Expression | undefined, seen = new Set<string>()): ts.Expression | undefined {
    if (!value) return undefined
    if (ts.isIdentifier(value)) {
      if (seen.has(value.text)) return undefined
      seen.add(value.text)
      return resolve(bindings.get(value.text), seen)
    }
    if (ts.isAsExpression(value) || ts.isSatisfiesExpression(value) || ts.isParenthesizedExpression(value)) {
      return resolve(value.expression, seen)
    }
    return value
  }
  function literal(value: ts.Expression | undefined): string | undefined {
    const resolved = resolve(value)
    return resolved && (ts.isStringLiteral(resolved) || ts.isNoSubstitutionTemplateLiteral(resolved))
      ? resolved.text
      : undefined
  }
  function date(value: ts.Expression | undefined): string | undefined {
    return normalizeDate(literal(value))
  }

  let articleModified: string | undefined
  let articlePublished: string | undefined
  let pagePublished: string | undefined
  let importedModified: string | undefined
  let importedPublished: string | undefined
  let importedPagePublished: string | undefined
  function visitData(value: unknown) {
    if (!value || typeof value !== 'object') return
    if (Array.isArray(value)) {
      value.forEach(visitData)
      return
    }
    const object = value as Record<string, unknown>
    if (object['@type'] === 'Article' ||
        (Array.isArray(object['@type']) && object['@type'].includes('Article'))) {
      importedModified ??= normalizeDate(object.dateModified)
      importedPublished ??= normalizeDate(object.datePublished)
    }
    importedPagePublished ??= normalizeDate(object.datePublished)
    Object.values(object).forEach(visitData)
  }
  function visit(node: ts.Node) {
    if (ts.isImportDeclaration(node) && ts.isStringLiteral(node.moduleSpecifier) &&
        node.moduleSpecifier.text.startsWith('.') && node.moduleSpecifier.text.endsWith('.json')) {
      const jsonFile = join(dirname(filename), node.moduleSpecifier.text)
      if (existsSync(jsonFile)) visitData(JSON.parse(readFileSync(jsonFile, 'utf8')))
    }
    if (ts.isObjectLiteralExpression(node)) {
      const properties = new Map<string, ts.Expression>()
      for (const property of node.properties) {
        if (ts.isPropertyAssignment(property) &&
            (ts.isIdentifier(property.name) || ts.isStringLiteral(property.name))) {
          properties.set(property.name.text, property.initializer)
        }
      }
      const type = resolve(properties.get('@type'))
      const isArticle = literal(type) === 'Article' ||
        (type && ts.isArrayLiteralExpression(type) && type.elements.some(value => literal(value) === 'Article'))
      if (isArticle) {
        articleModified ??= date(properties.get('dateModified'))
        articlePublished ??= date(properties.get('datePublished'))
      }
      pagePublished ??= date(properties.get('datePublished'))
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  return articleModified ?? importedModified ?? articlePublished ?? importedPublished ??
    pagePublished ?? importedPagePublished
}

function withContentDate(page: MetadataRoute.Sitemap[number]): MetadataRoute.Sitemap[number] {
  const lastModified = contentDate(new URL(page.url).pathname)
  return lastModified ? { ...page, lastModified } : page
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://theseptic.guide'

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/guides`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/reviews`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/cost-guides`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/problems`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/comparisons`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/get-quote`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/maintenance`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/septic-services`, changeFrequency: 'monthly', priority: 0.7 },
  ]

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/${article.slug.startsWith('problems/') || article.slug.startsWith('cost-guides/') || article.slug.startsWith('reviews/') || article.slug.startsWith('comparisons/') || article.slug.startsWith('guides/') || article.slug.startsWith('maintenance/') ? article.slug : `articles/${article.slug}`}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...articlePages].map(withContentDate)
}
