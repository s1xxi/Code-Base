/**
 * ANALYTICS TRACKER
 * 
 * Purpose: Track user events, page views, conversions
 * Usage: Import and call tracking functions
 * 
 * Supports:
 * - Google Analytics
 * - Plausible Analytics (privacy-friendly)
 * - PostHog (open source)
 * 
 * Example:
 * import { trackEvent, trackPageView } from './analytics-tracker'
 * trackEvent('button_click', { button_name: 'signup' })
 * 
 * Setup Required:
 * - Analytics service API key
 */

// Google Analytics 4
export function initGA4(measurementId) {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  function gtag() { dataLayer.push(arguments) }
  gtag('js', new Date())
  gtag('config', measurementId)
}

// Track custom events
export function trackEvent(eventName, eventData = {}) {
  if (typeof window === 'undefined') return

  // Google Analytics
  if (window.gtag) {
    window.gtag('event', eventName, eventData)
  }

  // Plausible Analytics
  if (window.plausible) {
    window.plausible(eventName, { props: eventData })
  }

  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Event:', eventName, eventData)
  }
}

// Track page views
export function trackPageView(url) {
  if (typeof window === 'undefined') return

  // Google Analytics
  if (window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    })
  }

  // Plausible Analytics
  if (window.plausible) {
    window.plausible('pageview')
  }
}

// Track conversions (purchases, signups, etc.)
export function trackConversion(type, value = 0) {
  trackEvent('conversion', {
    conversion_type: type,
    value: value,
    currency: 'USD'
  })
}

// Common event shortcuts
export const analytics = {
  // User events
  signup: (method = 'email') => trackEvent('signup', { method }),
  login: (method = 'email') => trackEvent('login', { method }),
  logout: () => trackEvent('logout'),
  
  // Product events
  viewPricing: () => trackEvent('view_pricing'),
  startCheckout: (planName) => trackEvent('begin_checkout', { plan: planName }),
  completePurchase: (planName, amount) => trackConversion('purchase', amount),
  
  // Engagement events
  clickCTA: (location) => trackEvent('cta_click', { location }),
  shareContent: (method) => trackEvent('share', { method }),
  contactSupport: () => trackEvent('contact_support'),
}

