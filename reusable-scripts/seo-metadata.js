/**
 * SEO METADATA HELPER
 * 
 * Purpose: Generate SEO metadata for pages
 * Usage: Import and use in page metadata
 * 
 * Features:
 * - Title and description
 * - Open Graph tags
 * - Twitter cards
 * - Structured data
 * 
 * Example:
 * import { generateMetadata } from './seo-metadata'
 * export const metadata = generateMetadata({
 *   title: 'About Us',
 *   description: 'Learn about our company'
 * })
 */

const defaultMetadata = {
  siteName: 'Your SaaS Platform',
  siteUrl: 'https://yourdomain.com',
  twitterHandle: '@yourusername',
  ogImage: '/og-image.jpg',
}

export function generateMetadata({
  title,
  description,
  image,
  url,
  type = 'website',
  noindex = false,
}) {
  const fullTitle = title 
    ? `${title} | ${defaultMetadata.siteName}` 
    : defaultMetadata.siteName

  const fullUrl = url 
    ? `${defaultMetadata.siteUrl}${url}` 
    : defaultMetadata.siteUrl

  const ogImage = image || defaultMetadata.ogImage

  return {
    title: fullTitle,
    description,
    ...(noindex && { robots: 'noindex, nofollow' }),
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: defaultMetadata.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: defaultMetadata.twitterHandle,
    },
  }
}

// Pre-built metadata for common pages
export const pageMetadata = {
  home: generateMetadata({
    title: 'Home',
    description: 'Build your SaaS faster with our complete boilerplate',
    url: '/',
  }),
  
  pricing: generateMetadata({
    title: 'Pricing',
    description: 'Choose the perfect plan for your needs',
    url: '/pricing',
  }),
  
  dashboard: generateMetadata({
    title: 'Dashboard',
    description: 'Your personal dashboard',
    url: '/dashboard',
    noindex: true, // Don't index private pages
  }),
}

