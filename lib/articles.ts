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
