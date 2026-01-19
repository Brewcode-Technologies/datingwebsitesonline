import HomeBanner from '@/components/HomeBanner';
import IntroductionSection from '@/components/IntroductionSection';
import WhyOnlineDatingSection from '@/components/WhyOnlineDatingSection';
import FreeVsPaidSection from '@/components/FreeVsPaidSection';
import KeyFeaturesSection from '@/components/KeyFeaturesSection';
import SecurityPrivacySection from '@/components/SecurityPrivacySection';
import DatingCategoriesSection from '@/components/DatingCategoriesSection';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/seo';

export default async function Home() {
  // Generate structured data
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

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
