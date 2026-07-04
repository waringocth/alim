import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.SITE_URL || 'https://www.dhsaluminyum.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/404', '/500'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
