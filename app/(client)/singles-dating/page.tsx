import { Metadata } from 'next';
import DatingSitesUI from '@/components/DatingSitesUI';
import DynamicBreadcrumb from '@/components/DynamicBreadcrumb';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'Dating Sites for Singles in USA | Free & Safe Online Dating',
  description:
    'Find the best online dating sites for singles in the USA. Explore free, safe dating platforms and meet singles near you for real connections.',
  keywords: [
    'best dating sites for singles in usa',
    'free dating sites for singles near me',
    'online dating sites for singles',
    'best online dating for singles',
    'meet singles near me free',
    'safe dating sites for singles',
    'dating site for singles 50',
    'single ladies looking for men',
    'single women near me',
    'single ladies in my area',
    'single women seeking men',
    'singles mingle',
    'meet singles free',
    'singles net',
    'single com',
    'beautiful single women',
    'single girls near me',
    'single rich ladies',
    'single dating com',
    'single females in my area',
    'single women in prison',
    'men looking for women',
    'women who want men',
    'datingwebsitesonline',
  ],
  openGraph: {
    title: 'Best Dating Sites for Singles 2026 | DatingWebsitesOnline',
    description:
      'Compare the best dating sites for singles. Find free dating platforms, meet singles near you, and read honest reviews.',
    url: 'https://datingwebsitesonline.com/singles-dating',
  },
  alternates: {
    canonical: 'https://datingwebsitesonline.com/singles-dating',
  },
};

const SinglesDatingPage = () => {
  return (
    <>
      <Container>
        <DynamicBreadcrumb
          customItems={[
            { label: 'Singles Dating' },
          ]}
        />
      </Container>
      <DatingSitesUI category="singles" />
    </>
  );
};

export default SinglesDatingPage;
