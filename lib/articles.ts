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
]
