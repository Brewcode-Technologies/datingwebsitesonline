const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://datingwebsitesonline.com';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DatingWebsitesOnline',
    url: BASE_URL,
    description:
      'Compare the best dating sites and apps online. Read honest reviews of Plenty of Fish, Match.com, eHarmony, Zoosk and more. Find free dating sites for singles, seniors, christian, gay & lesbian dating.',
    sameAs: [],
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DatingWebsitesOnline',
    url: BASE_URL,
    description:
      'Find the best dating websites and apps. Compare features, read reviews, and discover your perfect dating platform for singles, seniors, christian, gay & lesbian dating.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/category?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

export function generateReviewSchema(review: {
  name: string;
  score: string;
  category: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: review.name,
      applicationCategory: 'DatingApplication',
      description: review.description,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.score,
      bestRating: '10',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      name: 'DatingWebsitesOnline',
    },
    publisher: {
      '@type': 'Organization',
      name: 'DatingWebsitesOnline',
      url: BASE_URL,
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
