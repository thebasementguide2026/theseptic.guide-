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
    description: 'Over 21 million homes in the US rely on septic systems. Learn how they work, the different types, maintenance schedules, costs, and warning signs of failure.',
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
]
