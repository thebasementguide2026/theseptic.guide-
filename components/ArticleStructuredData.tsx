'use client'

import { useEffect, useRef } from 'react'
import { useServerInsertedHTML } from 'next/navigation'

/** Insert page-specific JSON-LD into the initial document head and on client navigation. */
export default function ArticleStructuredData({ id, json }: { id: string; json: string }) {
  const inserted = useRef(false)
  useServerInsertedHTML(() => {
    if (inserted.current) return null
    inserted.current = true
    return <script id={id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  })
  useEffect(() => {
    let script = document.getElementById(id) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = id
      script.type = 'application/ld+json'
      script.textContent = json
      document.head.appendChild(script)
    }
    return () => { script?.remove() }
  }, [id, json])
  return null
}
