import { Metadata } from 'next';
import HomeBanner from '@/components/HomeBanner';
import IntroductionSection from '@/components/IntroductionSection';
import WhyOnlineDatingSection from '@/components/WhyOnlineDatingSection';
import FreeVsPaidSection from '@/components/FreeVsPaidSection';
import KeyFeaturesSection from '@/components/KeyFeaturesSection';
import SecurityPrivacySection from '@/components/SecurityPrivacySection';
import DatingCategoriesSection from '@/components/DatingCategoriesSection';
import { generateOrganizationSchema, generateWebsiteSchema, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Best Dating Sites in USA 2026 | Free Online Dating Sites & Apps',
  description:
    'Discover the best dating sites and free online dating apps in the USA. Compare top dating websites, meet singles near you, and start dating today with trusted platforms.',
  keywords: [
    'dating sites',
    'free dating sites',
    'best dating sites',
    'online dating sites',
    'dating websites',
    'best online dating sites',
    'free online dating',
    'dating apps',
    'singles near me',
    'dating near me',
    'plenty of fish dating',
    'match.com',
    'eharmony',
    'zoosk dating site',
    'top 10 dating sites',
    'meet singles free',
    'single ladies looking for men',
    'meet women in my area',
    'single women near me',
    'dating site for singles',
    'meet singles near me free',
    'safe dating sites for singles',
    'datingwebsitesonline',
  ],
  openGraph: {
    title: 'Best Dating Sites in USA 2026 | Free Online Dating Sites & Apps',
    description:
      'Discover the best dating sites and free online dating apps in the USA. Compare top dating websites, meet singles near you, and start dating today with trusted platforms.',
    url: 'https://datingwebsitesonline.com',
  },
  alternates: {
    canonical: 'https://datingwebsitesonline.com',
  },
};

export default async function Home() {
  // Generate structured data
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
  ]);

  return (
    <div>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <HomeBanner />
      <IntroductionSection />
      <WhyOnlineDatingSection />
      {/* <FreeVsPaidSection /> */}
      {/* <KeyFeaturesSection /> */}
      {/* <SecurityPrivacySection /> */}
      <DatingCategoriesSection />
    </div>
  );
}
