export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FindLove",
    "url": process.env.NEXT_PUBLIC_BASE_URL,
    "description": "Discover amazing dating sites at FindLove, your trusted online destination for finding love and meaningful connections."
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FindLove - Dating Website Reviews",
    "url": process.env.NEXT_PUBLIC_BASE_URL,
    "description": "Find the best dating websites and apps. Compare features, read reviews, and discover your perfect match."
  }
}