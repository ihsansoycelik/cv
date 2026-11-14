import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'

// robots.ts advertises `${WEBSITE_URL}/sitemap.xml`; without this route that URL
// was a 404, so crawlers were pointed at a sitemap that did not exist.
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const pages: { path: string; priority: number }[] = [
    { path: '/', priority: 1 },
    { path: '/cv', priority: 0.9 },
    { path: '/home', priority: 0.7 },
  ]
  return pages.map(({ path, priority }) => ({
    url: `${WEBSITE_URL}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority,
  }))
}
