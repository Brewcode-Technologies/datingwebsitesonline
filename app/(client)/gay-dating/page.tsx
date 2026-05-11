import { Metadata } from 'next';
import DatingSitesUI from '@/components/DatingSitesUI';
import DynamicBreadcrumb from '@/components/DynamicBreadcrumb';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'Gay Dating Sites in USA | Free & Safe Gay Dating Apps',
  description:
    'Best gay dating sites in the USA with free gay dating apps. Meet gay singles near you and use safe platforms for real connections.',
  keywords: [
    'best gay dating sites in usa',
    'free gay dating apps usa',
    'gay dating sites near me',
    'safe gay dating apps',
    'gay singles near me',
    'online gay dating sites',
    'meet gay men',
    'meet gay men in my area',
    'local gay men',
    'gay dating',
    'gay seniors',
    'married men for married men',
    'older men seeking men',
    'grindr',
    'skout',
    'datingwebsitesonline',
  ],
  openGraph: {
    title: 'Best Gay Dating Sites & Apps 2026 | DatingWebsitesOnline',
    description:
      'Compare the best gay dating sites and apps. Find safe gay dating platforms and meet gay men near you.',
    url: 'https://datingwebsitesonline.com/gay-dating',
  },
  alternates: {
    canonical: 'https://datingwebsitesonline.com/gay-dating',
  },
};

const GayDatingPage = () => {
  return (
    <>
      <Container>
        <DynamicBreadcrumb
          customItems={[
            { label: 'Gay Dating' },
          ]}
        />
      </Container>
      <DatingSitesUI category="gay" />
    </>
  );
};

export default GayDatingPage;
