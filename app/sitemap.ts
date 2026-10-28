import { MetadataRoute } from 'next'
import { articles } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://theseptic.guide'

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/reviews`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/cost-guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/problems`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/comparisons`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/get-quote`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/maintenance`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/septic-services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]

  const datedSlugs: Record<string, string> = {
    'guides/septic-system-financial-assistance': '2026-10-27',
    'articles/septic-tank-pumping-cost': '2026-10-27',
    'guides/septic-tank-size-guide': '2026-10-27',
    'cost-guides/septic-inspection-cost': '2026-10-27',
    'problems/frozen-septic-system': '2026-10-15',
    'cost-guides/septic-tank-removal-cost': '2026-10-21',
    'cost-guides/septic-to-sewer-conversion-cost': '2026-10-21',
    'cost-guides/septic-system-installation-cost': '2026-10-21',
  }

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/${article.slug.startsWith('problems/') || article.slug.startsWith('cost-guides/') || article.slug.startsWith('reviews/') || article.slug.startsWith('comparisons/') || article.slug.startsWith('guides/') || article.slug.startsWith('maintenance/') ? article.slug : `articles/${article.slug}`}`,
    lastModified: datedSlugs[article.slug] ?? new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...articlePages]
}
