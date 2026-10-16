import type { Metadata } from 'next'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import ArticleStructuredData from '@/components/ArticleStructuredData'
import content from './content.json'
import styles from './article.module.css'

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  authors: [{ name: content.byline }],
  alternates: { canonical: content.url },
  openGraph: {
    type: 'article',
    title: content.title,
    description: content.description,
    url: content.url,
    siteName: 'The Septic Guide',
    publishedTime: '2026-10-15',
    modifiedTime: '2026-10-15',
    images: [{ url: 'https://theseptic.guide/frozen-septic-system.jpg', width: 1600, height: 900, alt: content.alt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: content.title,
    description: content.description,
    images: ['https://theseptic.guide/frozen-septic-system.jpg'],
  },
}

function ArticleFAQ() {
  return <section className="mb-16" aria-labelledby="frequently-asked-questions">
    <h2 id="frequently-asked-questions" className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
    <div className="space-y-3">{content.faq.map(item => (
      <details key={item.label} className="border border-slate-200 rounded-lg group">
        <summary className="p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50">{item.label}</summary>
        <div className={`px-4 pb-4 text-slate-600 text-sm leading-relaxed ${styles.answer}`} dangerouslySetInnerHTML={{ __html: item.html }} />
      </details>
    ))}</div>
  </section>
}

function ArticleGlossary() {
  return <section className="mb-16" aria-labelledby="glossary">
    <h2 id="glossary" className="text-2xl font-bold text-slate-900 mb-6">Glossary</h2>
    <dl className="space-y-4">{content.glossary.map(item => (
      <div key={item.label} className="border-b border-slate-200 pb-3">
        <dt className="font-bold text-slate-900 text-sm mb-1">{item.label}</dt>
        <dd className="text-slate-600 text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: item.html }} />
      </div>
    ))}</dl>
  </section>
}

export default function FrozenSepticSystem() {
  return <>
    <ArticleStructuredData id="frozen-septic-structured-data" json={JSON.stringify(content.schema).replace(/</g, '\\u003c')} />
    <Breadcrumbs items={[{ label: 'Problems', href: '/problems' }, { label: 'Frozen Septic System' }]} />
    <section data-article-hero className="relative min-h-[500px] md:min-h-[630px] bg-slate-900 overflow-hidden">
      <Image src="/frozen-septic-system.jpg" alt={content.alt} fill priority sizes="100vw"
        className="object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-px bg-amber-700" />
          <span className="text-amber-500 font-bold tracking-[0.3em] text-sm uppercase">Problems</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[0.95] tracking-tighter max-w-5xl">{content.heading}</h1>
        <p data-article-intro className="text-lg text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed">{content.intro}</p>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 shrink-0 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-sm">SG</div>
          <div><p className="text-white font-semibold">{content.byline}</p>
            <p className="text-slate-400 text-sm">Updated Oct 2026 &middot; {content.readTime}</p></div>
        </div>
      </div>
    </section>
    <article className="max-w-4xl mx-auto px-4 py-12">
      <div data-verbatim-content>
        {content.sections.map((section, index) => (
          <section key={section.title || 'introduction'} className={`mb-16 ${styles.content}`}>
            {section.title && <h2 id={`section-${index}`} className="text-2xl font-bold text-slate-900 mb-6">{section.title}</h2>}
            <div dangerouslySetInnerHTML={{ __html: section.html }} />
          </section>
        ))}
        <ArticleFAQ />
        <ArticleGlossary />
        <section className={`bg-slate-50 border border-slate-200 rounded-xl p-6 mb-16 ${styles.content} ${styles.author}`}>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">About the Author</h2>
          <div dangerouslySetInnerHTML={{ __html: content.authorHtml }} />
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Guides</h2>
          <ul className="grid md:grid-cols-2 gap-4">{content.related.map(item => (
            <li key={item.href} className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
              <a href={item.href} className="font-bold text-slate-900 mb-1 text-sm hover:text-amber-700">{item.title}</a>
              <span className="text-slate-600 text-xs leading-relaxed">{item.suffix}</span>
            </li>
          ))}</ul>
        </section>
      </div>
      <section className="py-12 bg-[#F5F0EB] rounded-2xl mt-12">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4A6741] text-center mb-3">Get Expert Septic Help</h2>
          <p className="text-gray-600 text-center mb-8">Connect with qualified septic professionals in your area. Free quotes, no obligation.</p>
          <LeadForm />
        </div>
      </section>
    </article>
  </>
}
