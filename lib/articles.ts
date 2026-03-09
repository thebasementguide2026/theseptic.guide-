export interface Article {
  title: string
  description: string
  slug: string
  category: string
  readTime: string
  image?: string
}

export const articles: Article[] = [
  {
    title: 'The Complete Guide to Septic Systems: How They Work, Types, and What Every Homeowner Needs to Know',
    description: 'Over 21 million homes in the US rely on septic systems. Learn how they work, the different types, maintenance costs, and warning signs of failure.',
    slug: 'complete-septic-guide',
    category: 'Guide',
    readTime: '25 min read',
    image: '/septic1.jpg',
  },
  {
    title: 'Septic Tank Pumping Cost 2026: What You\'ll Actually Pay',
    description: 'The average septic tank pumping costs $300 to $600. Real pricing by tank size, region, hidden fees to watch for, and the questions to ask before hiring.',
    slug: 'septic-tank-pumping-cost',
    category: 'Cost Guide',
    readTime: '18 min read',
    image: '/pumpingcostguide.jpg',
  },
  {
    title: 'How Often Should You Pump Your Septic Tank? 2026 Schedule',
    description: 'Find your exact septic pumping schedule by tank size and household size. EPA-based table, factors that change your interval, and how to measure when your tank actually needs pumping.',
    slug: 'how-often-pump-septic-tank',
    category: 'Guide',
    readTime: '20 min read',
    image: '/septicpump3.jpg',
  },
  {
    title: 'What You Can and Cannot Flush with a Septic System: The Complete List',
    description: 'The complete list of what is safe to flush, what should never be flushed, and what to keep out of your drains. Protect your septic tank and drainfield from costly damage.',
    slug: 'what-can-cannot-flush-septic-system',
    category: 'Guide',
    readTime: '18 min read',
    image: '/flushing.jpg',
  },
  {
    title: 'Septic Tank Backing Up? Causes, Fixes, and When to Call a Pro',
    description: 'Learn why your septic tank is backing up, how to diagnose the problem, emergency steps, and when professional help is needed. Complete troubleshooting guide.',
    slug: 'problems/tank-backing-up',
    category: 'Problem',
    readTime: '22 min read',
    image: '/1.jpg',
  },
  {
    title: 'Signs Your Drainfield Is Failing: Warning Signs, Causes & What to Do',
    description: 'Learn the 7 warning signs of drainfield failure from earliest to latest. Understand what causes drainfield problems, which ones are fixable, and when you need a full replacement.',
    slug: 'problems/drainfield-failing',
    category: 'Problem',
    readTime: '20 min read',
    image: '/drainfieldexample.jpg',
  },
  {
    title: 'Septic System Installation Cost 2026: Complete Price Breakdown by Type',
    description: 'A new septic system costs $3,000 to $20,000 installed. Complete price breakdown by system type, cost components, tank materials, hidden costs, and how to save money.',
    slug: 'cost-guides/septic-system-installation-cost',
    category: 'Cost Guide',
    readTime: '25 min read',
    image: '/costguide.jpg',
  },
  {
    title: 'Septic Smell in Your Yard? 8 Causes and How to Fix Each One',
    description: 'A septic smell in your yard is caused by hydrogen sulfide and methane gas escaping from your septic system. Learn the 8 most common causes, how to diagnose each one, and the specific fix and cost for each.',
    slug: 'problems/septic-smell-in-yard',
    category: 'Problem',
    readTime: '20 min read',
    image: '/badsepticsmell.jpg',
  },
  {
    title: 'Best Septic Tank Treatments 2025: Honest Reviews After Real Testing',
    description: 'We tested the top septic tank treatments and additives. See which products actually work, which are a waste of money, and what science says about bacterial and enzyme treatments.',
    slug: 'reviews/best-septic-tank-treatments',
    category: 'Review',
    readTime: '22 min read',
    image: '/septicsavor.jpg',
  },
  {
    title: 'Concrete vs. Plastic vs. Fiberglass Septic Tanks: Full 2025 Comparison',
    description: 'Compare concrete, plastic, and fiberglass septic tanks side by side. Costs, lifespan, pros and cons, installation differences, and which material is best for your property.',
    slug: 'comparisons/concrete-vs-plastic-vs-fiberglass-septic-tanks',
    category: 'Comparison',
    readTime: '22 min read',
    image: '/fiberglassplasticconcret.jpg',
  },
    {
    title: 'Buying a Home with a Septic System: What to Know Before You Close',
    description: 'A septic inspection before closing costs $300-$1,000 and can reveal problems costing $5,000-$25,000 to fix. Learn what to ask, what to inspect, and how to negotiate.',
    slug: 'guides/buying-home-with-septic',
    category: 'Guide',
    readTime: '25 min read',
    image: '/septicinspection.jpg',
  },
    {
      title: 'Best Toilet Paper for Septic Systems 2026: Tested and Ranked',
      description: 'The best toilet paper for septic systems dissolves fast, skips the chemicals, and protects your tank. We tested and ranked the top septic-safe brands so you know exactly what to buy.',
      slug: 'reviews/best-toilet-paper-for-septic',
      category: 'Review',
      readTime: '18 min read',
      image: '/toiletpaper.jpg',
  },
  {
    title: 'How to Find Your Septic Tank: 5 Methods That Work',
    description: 'Your septic tank is buried 5 to 25 feet from your house. Learn 5 proven methods to locate it, from checking records to using a soil probe, plus what to do after you find it.',
    slug: 'how-to-find-your-septic-tank',
    category: 'Guide',
    readTime: '18 min read',
        image: '/how to find your septic tank.jpg',
    },
  {
    title: 'Septic System Repair Cost 2026: Every Repair Priced Out',
    description: 'Septic system repairs cost $600 to $3,000 on average. Complete pricing for every repair from $50 filter cleaning to $15,000 drainfield replacement.',
    slug: 'cost-guides/septic-system-repair-cost',
    category: 'Cost Guide',
    readTime: '22 min read',
    image: '/septic repair.jpg',
  },
    {
    title: 'Does Insurance Cover Septic System Repair or Replacement?',
    description: 'Standard homeowners insurance does not cover most septic repairs. Learn what is and isn\'t covered, which add-on coverages are worth buying, and how to protect yourself financially.',
    slug: 'does-insurance-cover-septic-repair-replacement',
    category: 'Guide',
    readTime: '20 min read',
    image: '/insurance.jpg',
  },
    {
    title: 'Aerobic vs Anaerobic Septic Systems: Differences, Costs, and Which You Need',
    description: 'Anaerobic septic systems cost $3,000 to $8,000. Aerobic systems cost $10,000 to $20,000. Complete comparison of costs, maintenance, pros, cons, and which system your property requires.',
    slug: 'comparisons/aerobic-vs-anaerobic-septic-systems',
    category: 'Comparison',
    readTime: '18 min read',
    image: '/aerovsanarobichero.jpg',
  },
    {
    title: 'Best Septic Tank Risers 2026: The Upgrade That Pays for Itself',
    description: 'A septic tank riser costs $100 to $400 and eliminates the $50 to $200 digging fee at every service visit. Compare the best riser kits, learn how to choose the right size, and whether to DIY or hire a pro.',
    slug: 'reviews/best-septic-tank-risers',
    category: 'Review',
    readTime: '18 min read',
    image: '/riser.jpg',
  },
    {
    title: 'Drainfield Replacement Cost 2026: What to Expect and How to Save',
    description: 'Drainfield replacement costs $5,000 to $15,000 for a conventional system. Mound system replacement costs $10,000 to $20,000. Complete cost breakdown, rejuvenation vs replacement, and how to save money.',
    slug: 'cost-guides/drainfield-replacement-cost',
    category: 'Cost Guide',
    readTime: '20 min read',
    image: '/drainfieldcost.jpg',
  },
    {
      title: 'Septic System vs Sewer: Costs, Pros and Cons, and Which Is Better',
      description: 'Septic costs $3,500 to $12,000 to install with no monthly bill. Sewer costs $1,500 to $6,000 plus $15 to $150/month. Complete 20-year cost comparison.',
      slug: 'comparisons/septic-vs-sewer',
      category: 'Comparison',
      readTime: '22 min read',
      image: '/heroseptic-sewer.jpg',
    },
  {
    title: 'Septic Overflow After Rain? Why It Happens and How to Fix It',
    description: 'Septic overflow after rain is caused by groundwater saturating your drainfield, stormwater entering your tank, or a system near capacity. Learn the 5 mechanisms, emergency steps, and long-term fixes.',
    slug: 'problems/septic-overflow-after-rain',
    category: 'Problem',
    readTime: '18 min read',
    image: '/septicafterrain.jpg',
      },
  {
      tle: 'Slow Drains with a Septic System: 5 Causes and How to Fix Each One',
    description: 'Slow drains with a septic tank? Learn the 5 most common causes from P-trap venting to full tanks, plus a one-fixture test to find the problem fast.',
    slug: 'problems/slow-drains',
    category: 'Problem',
    readTime: '20 min read',
    image: '/slowdrainseptic.jpg',
  },
]

export function searchArticles(query: string): Article[] {
  if (!query.trim()) return []
  const terms = query.toLowerCase().split(/\s+/)
  return articles.filter((article) => {
    const searchText = `${article.title} ${article.description} ${article.category}`.toLowerCase()
    return terms.every((term) => searchText.includes(term))
  })
}
