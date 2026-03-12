// Networx Task ID mapping for each article on theseptic.guide
// Rule: when in doubt, add MORE task IDs for broader coverage

// Default task IDs applied to ALL articles (core septic services)
const DEFAULT_TASK_IDS = [133, 345, 347]
// 133 = Install or Replace a Septic System
// 345 = Pump Out a Septic Tank
// 347 = Repair a Septic System

export const FALLBACK_TASK_IDS = DEFAULT_TASK_IDS

export const TASK_ID_MAP: Record<string, number[]> = {
  // Articles
  'complete-septic-guide': [...DEFAULT_TASK_IDS, 130, 461, 123],
  'how-often-pump-septic-tank': [...DEFAULT_TASK_IDS, 130, 461],
  'how-to-find-your-septic-tank': [...DEFAULT_TASK_IDS, 461, 130],
  'septic-tank-pumping-cost': [...DEFAULT_TASK_IDS, 130, 461],
  'how-long-does-a-septic-system-last': [...DEFAULT_TASK_IDS, 130, 461],
  'what-can-cannot-flush-septic-system': [...DEFAULT_TASK_IDS, 123, 130],
  'does-insurance-cover-septic-repair-replacement': [...DEFAULT_TASK_IDS, 130],

  // Comparisons
  'septic-vs-sewer': [...DEFAULT_TASK_IDS, 233, 234, 130],
  'aerobic-vs-anaerobic-septic-systems': [...DEFAULT_TASK_IDS, 130],
  'concrete-vs-plastic-vs-fiberglass-septic-tanks': [...DEFAULT_TASK_IDS, 130],

  // Cost guides
  'pumping-cost': [...DEFAULT_TASK_IDS, 130, 461],
  'septic-inspection-cost': [...DEFAULT_TASK_IDS, 461, 130],
  'septic-system-repair-cost': [...DEFAULT_TASK_IDS, 130],
  'drainfield-replacement-cost': [...DEFAULT_TASK_IDS, 483, 130],
  'septic-system-installation-cost': [...DEFAULT_TASK_IDS, 483, 130],

  // Guides
  'septic-dos-and-donts': [...DEFAULT_TASK_IDS, 130, 461],
  'septic-tank-size-guide': [...DEFAULT_TASK_IDS, 130],
  'buying-home-with-septic': [...DEFAULT_TASK_IDS, 461, 130],
  'garbage-disposal-septic-systems': [...DEFAULT_TASK_IDS, 123, 130],

  // Maintenance
  'septic-system-maintenance-checklist': [...DEFAULT_TASK_IDS, 461, 130],

  // Problems
  'slow-drains': [...DEFAULT_TASK_IDS, 123, 227, 130],
  'tank-backing-up': [...DEFAULT_TASK_IDS, 123, 234, 130],
  'drainfield-failing': [...DEFAULT_TASK_IDS, 483, 130],
  'septic-smell-in-yard': [...DEFAULT_TASK_IDS, 461, 130],
  'septic-overflow-after-rain': [...DEFAULT_TASK_IDS, 229, 573, 130],

  // Reviews
  'best-septic-tank-risers': [...DEFAULT_TASK_IDS, 130],
  'best-septic-system-alarms': [...DEFAULT_TASK_IDS, 130],
  'best-septic-tank-treatments': [...DEFAULT_TASK_IDS, 130],
  'best-toilet-paper-for-septic': [...DEFAULT_TASK_IDS, 130],
  'best-drain-cleaners-for-septic': [...DEFAULT_TASK_IDS, 123, 130],
}

export function getTaskIdsForArticle(slug: string): number[] {
  return TASK_ID_MAP[slug] || FALLBACK_TASK_IDS
}
