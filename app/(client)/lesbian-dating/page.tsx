import { Metadata } from 'next';
import DatingSitesUI from '@/components/DatingSitesUI';
import DynamicBreadcrumb from '@/components/DynamicBreadcrumb';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'Lesbian Dating Apps USA | Safe Online Dating Sites & Apps',
  description:
    'Lesbian dating sites and apps in the USA. Connect with lesbian singles near you using safe online platforms and modern dating apps.',
  keywords: [
    'best lesbian dating apps usa',
    'free lesbian dating sites',
    'lesbian singles near me',
    'lesbian dating apps free',
    'online lesbian dating sites',
    'safe lesbian dating apps',
    'lesbian dating',
    'woman seeking woman',
    'women searching for men',
    'her dating app',
    'datingwebsitesonline',
  ],
  openGraph: {
    title: 'Best Lesbian Dating Apps & Sites 2026 | DatingWebsitesOnline',
    description:
      'Compare the best lesbian dating apps and sites. Find safe lesbian dating platforms and meet lesbian singles near you.',
    url: 'https://datingwebsitesonline.com/lesbian-dating',
  },
  alternates: {
    canonical: 'https://datingwebsitesonline.com/lesbian-dating',
  },
};

const LesbianDatingPage = () => {
  return (
    <>
      <Container>
        <DynamicBreadcrumb
          customItems={[
            { label: 'Lesbian Dating' },
          ]}
        />
      </Container>
      <DatingSitesUI category="lesbian" />
    </>
  );
};

export default LesbianDatingPage;
