'use client'

import { useState } from 'react'

type ProjectType = 'new-install' | 'tank-replacement' | 'drainfield-replacement' | 'full-replacement'
type SystemType = 'conventional-gravity' | 'conventional-pressure' | 'aerobic' | 'mound' | 'sand-filter'
type SoilDifficulty = 'easy' | 'moderate' | 'difficult'
type TankMaterial = 'concrete' | 'plastic' | 'fiberglass'
type Region = 'low' | 'average' | 'high'
type Bedrooms = '2' | '3' | '4' | '5plus'

interface Result {
  low: number
  high: number
  category: string
  note: string
}

// Anchored to published ranges on theseptic.guide:
//   Conventional new install: $5,000-$10,000
//   Mound/aerobic/engineered new install: $12,000-$25,000
//   Tank replacement only: $3,000-$7,000
//   Drainfield replacement only: $5,000-$15,000
//   Full system replacement: $8,000-$20,000+
function calculate(
  project: ProjectType,
  system: SystemType,
  bedrooms: Bedrooms,
  soil: SoilDifficulty,
  material: TankMaterial,
  region: Region,
): Result {
  // 1. Base range by project type + system type
  let baseLow = 0
  let baseHigh = 0
  let category = ''
  const engineered = system === 'aerobic' || system === 'mound' || system === 'sand-filter'

  if (project === 'new-install') {
    if (engineered) {
      baseLow = 12000
      baseHigh = 25000
      category = system === 'mound' ? 'New mound system install' : system === 'aerobic' ? 'New aerobic treatment system install' : 'New engineered sand filter install'
    } else {
      baseLow = 5000
      baseHigh = 10000
      category = system === 'conventional-pressure' ? 'New conventional pressure-distribution install' : 'New conventional gravity-fed install'
    }
  } else if (project === 'tank-replacement') {
    baseLow = 3000
    baseHigh = 7000
    category = 'Septic tank replacement only'
  } else if (project === 'drainfield-replacement') {
    if (engineered) {
      baseLow = 10000
      baseHigh = 20000
      category = 'Engineered drainfield replacement (mound or aerobic)'
    } else {
      baseLow = 5000
      baseHigh = 15000
      category = 'Conventional drainfield replacement'
    }
  } else {
    // full-replacement
    if (engineered) {
      baseLow = 15000
      baseHigh = 30000
      category = 'Full engineered system replacement'
    } else {
      baseLow = 8000
      baseHigh = 20000
      category = 'Full conventional system replacement'
    }
  }

  // 2. Bedroom / tank-size multiplier (tank size scales with bedrooms)
  // 2 BR = 1,000 gal, 3 BR = 1,000-1,250 gal, 4 BR = 1,250-1,500 gal, 5+ BR = 1,500+ gal
  const bedroomMult: Record<Bedrooms, number> = {
    '2': 0.92,
    '3': 1.0,
    '4': 1.1,
    '5plus': 1.22,
  }

  // 3. Soil / site difficulty
  const soilMult: Record<SoilDifficulty, number> = {
    easy: 0.95,
    moderate: 1.0,
    difficult: 1.18,
  }

  // 4. Tank material (only really moves cost on installs that include the tank)
  const includesTank = project === 'new-install' || project === 'tank-replacement' || project === 'full-replacement'
  const materialMult: Record<TankMaterial, number> = includesTank
    ? { plastic: 0.95, concrete: 1.0, fiberglass: 1.08 }
    : { plastic: 1.0, concrete: 1.0, fiberglass: 1.0 }

  // 5. Regional cost factor
  const regionMult: Record<Region, number> = {
    low: 0.88,
    average: 1.0,
    high: 1.18,
  }

  const mult = bedroomMult[bedrooms] * soilMult[soil] * materialMult[material] * regionMult[region]

  // Round to nearest $100 for low and $500 for high
  const low = Math.round((baseLow * mult) / 100) * 100
  const high = Math.round((baseHigh * mult) / 500) * 500

  // Planning note
  let note = 'Get three to five quotes from licensed installers and ask each one to itemize permitting, soil evaluation, excavation, tank, drainfield, and site restoration.'
  if (engineered) {
    note = 'Engineered systems require a design from a licensed soil scientist or engineer and ongoing service contracts. Ask for the design fee and the annual maintenance cost up front.'
  } else if (project === 'tank-replacement') {
    note = 'A tank-only replacement makes sense when the drainfield is healthy. Ask the contractor to inspect the drainfield before quoting so you do not pay twice.'
  } else if (project === 'drainfield-replacement') {
    note = 'Confirm the drainfield is actually failing before replacing it. A failed pump, clogged effluent filter, or biomat issue can mimic drainfield failure at a fraction of the cost.'
  }

  return { low, high, category, note }
}

const formatCurrency = (n: number) => `$${n.toLocaleString('en-US')}`

const fieldClass = 'w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600'
const labelClass = 'block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5'

export default function SepticCostCalculator() {
  const [project, setProject] = useState<ProjectType>('new-install')
  const [system, setSystem] = useState<SystemType>('conventional-gravity')
  const [bedrooms, setBedrooms] = useState<Bedrooms>('3')
  const [soil, setSoil] = useState<SoilDifficulty>('moderate')
  const [material, setMaterial] = useState<TankMaterial>('concrete')
  const [region, setRegion] = useState<Region>('average')
  const [result, setResult] = useState<Result | null>(null)
  const [started, setStarted] = useState(false)

  const handleChange = <T,>(setter: (v: T) => void) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    setter(e.target.value as T)
    if (!started) {
      setStarted(true)
      if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (...a: unknown[]) => void }).gtag('event', 'calculator_start', { calculator: 'septic_tank_cost' })
      }
    }
  }

  const handleCalculate = () => {
    const r = calculate(project, system, bedrooms, soil, material, region)
    setResult(r)
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag) {
      ;(window as unknown as { gtag: (...a: unknown[]) => void }).gtag('event', 'calculator_complete', {
        calculator: 'septic_tank_cost',
        project,
        system,
        bedrooms,
        soil,
        material,
        region,
        low: r.low,
        high: r.high,
      })
    }
    setTimeout(() => {
      const el = document.getElementById('septic-calc-result')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  const handleReset = () => {
    setProject('new-install')
    setSystem('conventional-gravity')
    setBedrooms('3')
    setSoil('moderate')
    setMaterial('concrete')
    setRegion('average')
    setResult(null)
    setStarted(false)
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag) {
      ;(window as unknown as { gtag: (...a: unknown[]) => void }).gtag('event', 'calculator_reset', { calculator: 'septic_tank_cost' })
    }
  }

  return (
    <div className='rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden'>
      <div className='bg-slate-900 px-6 py-5'>
        <h2 className='text-xl font-bold text-white'>Septic Tank Cost Calculator</h2>
        <p className='text-sm text-slate-300 mt-1'>Free homeowner estimate. Six inputs, instant range.</p>
      </div>

      <div className='p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <div>
            <label className={labelClass} htmlFor='project'>Project type</label>
            <select id='project' value={project} onChange={handleChange<ProjectType>(setProject)} className={fieldClass}>
              <option value='new-install'>New install</option>
              <option value='tank-replacement'>Tank replacement only</option>
              <option value='drainfield-replacement'>Drainfield replacement only</option>
              <option value='full-replacement'>Full system replacement</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor='system'>System type</label>
            <select id='system' value={system} onChange={handleChange<SystemType>(setSystem)} className={fieldClass}>
              <option value='conventional-gravity'>Conventional (gravity-fed)</option>
              <option value='conventional-pressure'>Conventional (pressure distribution)</option>
              <option value='aerobic'>Aerobic treatment unit</option>
              <option value='mound'>Mound system</option>
              <option value='sand-filter'>Sand filter / engineered</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor='bedrooms'>Home size (bedrooms)</label>
            <select id='bedrooms' value={bedrooms} onChange={handleChange<Bedrooms>(setBedrooms)} className={fieldClass}>
              <option value='2'>2 bedrooms (1,000 gal tank)</option>
              <option value='3'>3 bedrooms (1,000-1,250 gal)</option>
              <option value='4'>4 bedrooms (1,250-1,500 gal)</option>
              <option value='5plus'>5+ bedrooms (1,500+ gal)</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor='soil'>Soil and site difficulty</label>
            <select id='soil' value={soil} onChange={handleChange<SoilDifficulty>(setSoil)} className={fieldClass}>
              <option value='easy'>Easy: good soil, flat lot, easy access</option>
              <option value='moderate'>Moderate: typical site</option>
              <option value='difficult'>Difficult: rocky, steep, high water table, tight access</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor='material'>Tank material</label>
            <select id='material' value={material} onChange={handleChange<TankMaterial>(setMaterial)} className={fieldClass}>
              <option value='concrete'>Concrete (most common)</option>
              <option value='plastic'>Plastic / polyethylene</option>
              <option value='fiberglass'>Fiberglass</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor='region'>Regional cost factor</label>
            <select id='region' value={region} onChange={handleChange<Region>(setRegion)} className={fieldClass}>
              <option value='low'>Low cost (rural South, parts of Midwest)</option>
              <option value='average'>Average (national)</option>
              <option value='high'>High cost (Northeast, West Coast, dense suburban)</option>
            </select>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-3 mt-6'>
          <button
            type='button'
            onClick={handleCalculate}
            className='flex-1 rounded-lg bg-amber-600 px-5 py-3 text-sm font-bold text-white hover:bg-amber-700 transition-colors'
          >
            Calculate my estimate
          </button>
          <button
            type='button'
            onClick={handleReset}
            className='rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors'
          >
            Reset
          </button>
        </div>

        {result && (
          <div id='septic-calc-result' className='mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5'>
            <p className='text-xs font-bold uppercase tracking-wider text-amber-800'>Estimated installed cost range</p>
            <p className='mt-1 text-3xl sm:text-4xl font-extrabold text-slate-900'>
              {formatCurrency(result.low)} <span className='text-slate-400 font-bold'>-</span> {formatCurrency(result.high)}
            </p>
            <p className='mt-2 text-sm text-slate-700'>
              <span className='font-semibold'>Project scope:</span> {result.category}
            </p>
            <p className='mt-3 text-sm text-slate-700 leading-relaxed'>
              <span className='font-semibold'>Planning note:</span> {result.note}
            </p>
            <p className='mt-4 text-xs text-slate-500 leading-relaxed'>
              Estimates are based on published cost ranges from The Septic Guide. Local permit requirements, soil conditions, water table depth, and engineered system design can move the actual quoted price meaningfully in either direction. Always get three to five itemized written quotes from licensed installers in your area.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
