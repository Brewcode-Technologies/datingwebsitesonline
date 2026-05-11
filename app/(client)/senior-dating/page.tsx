import { Metadata } from 'next';
import DatingSitesUI from '@/components/DatingSitesUI';
import DynamicBreadcrumb from '@/components/DynamicBreadcrumb';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'Senior Dating Sites in USA | Free Dating Over 50 & 60',
  description:
    'Senior dating sites in USA for singles over 50 and 60. Free senior dating sites, mature dating platforms, and senior dating near you for meaningful connections.',
  keywords: [
    'best senior dating sites in usa',
    'free senior dating sites over 60',
    'senior singles dating sites',
    'dating sites for seniors over 50',
    'mature dating sites free',
    'senior dating near me',
    'meeting older women',
    'my time',
    'mytime dating',
    'mytime com dating site',
    'seniors dating seniors',
    'older women dating',
    'older women seeking men',
    '50 plus dating sites',
    '50 dating',
    'dating 50 plus',
    'over 50 dating sites',
    'dating website over 50',
    '40 dating',
    'dating for 40 somethings',
    '40 plus singles dating',
    'meet people over 50',
    'older singles dating sites',
    'dating older women',
    'old women looking for men',
    'looking for older women',
    'senior mingle',
    'granny date site',
    '50 and over dating',
    'dating sites for over 60s free',
    '50s dating sites',
    'older women looking for men',
    'older adults dating website',
    'rich old men',
    'meet older guys online',
    'dating website older people',
    'old woman dating sites',
    'senior singles dating sites',
    'dating site for older women',
    'datingwebsitesonline',
  ],
  openGraph: {
    title: 'Best Senior Dating Sites 2026 | DatingWebsitesOnline',
    description:
      'Compare the best senior dating sites for over 50 and 60. Find mature dating platforms, free senior dating sites, and meet seniors near you.',
    url: 'https://datingwebsitesonline.com/senior-dating',
  },
  alternates: {
    canonical: 'https://datingwebsitesonline.com/senior-dating',
  },
};

const SeniorDatingPage = () => {
  return (
    <>
      <Container>
        <DynamicBreadcrumb
          customItems={[
            { label: 'Senior Dating' },
          ]}
        />
      </Container>
      <DatingSitesUI category="senior" />
    </>
  );
};

export default SeniorDatingPage;
