import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Septic Smell Inside the House: 10 Causes and How to Fix Each One | The Septic Guide',
  description: 'A septic smell inside the house is caused by hydrogen sulfide escaping through dry drain traps, blocked vent pipes, a full septic tank, failed wax seals, or cracked pipes.',
}

export default function SepticSmellInsideHouse() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Problems', href: '/problems' }, { label: 'Septic Smell Inside the House' }]} />
      <h1>Septic Smell Inside the House</h1>
      <p>Test page - content will be restored after build verification.</p>
    </div>
  )
}
