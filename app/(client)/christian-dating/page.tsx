import { Metadata } from 'next';
import DatingSitesUI from '@/components/DatingSitesUI';
import DynamicBreadcrumb from '@/components/DynamicBreadcrumb';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'Best Christian Dating Sites in USA | Free & Trusted Dating',
  description:
    'Explore the best Christian dating sites in the USA. Find free, trusted platforms for serious relationships and connect with Christian singles online.',
  keywords: [
    'best christian dating sites in usa',
    'free christian dating sites usa',
    'christian singles dating sites',
    'christian dating apps free',
    'christian dating for serious relationships',
    'trusted christian dating sites',
    'christian dating',
    'christian singles',
    'faith based dating',
    'christian matchmaking',
    'christian mingle',
    'datingwebsitesonline',
  ],
  openGraph: {
    title: 'Best Christian Dating Sites 2026 | DatingWebsitesOnline',
    description:
      'Compare the best christian dating sites and apps. Find faith-based dating platforms for serious relationships.',
    url: 'https://datingwebsitesonline.com/christian-dating',
  },
  alternates: {
    canonical: 'https://datingwebsitesonline.com/christian-dating',
  },
};

const ChristianDatingPage = () => {
  return (
    <>
      <Container>
        <DynamicBreadcrumb
          customItems={[
            { label: 'Christian Dating' },
          ]}
        />
      </Container>
      <DatingSitesUI category="christian" />
    </>
  );
};

export default ChristianDatingPage;
