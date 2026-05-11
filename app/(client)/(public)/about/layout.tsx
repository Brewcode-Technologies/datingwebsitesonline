import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About DatingWebsitesOnline | USA Dating Sites & Apps Guide',
  description:
    'Learn about DatingWebsitesOnline, a platform reviewing dating sites and apps in the USA, helping users compare services and connect with singles.',
  keywords: [
    'about datingwebsitesonline',
    'dating sites guide',
    'dating apps usa',
    'dating site reviews',
    'online dating guide',
    'compare dating sites',
    'dating platform reviews',
  ],
  openGraph: {
    title: 'About DatingWebsitesOnline | USA Dating Sites & Apps Guide',
    description:
      'Learn about DatingWebsitesOnline, a platform reviewing dating sites and apps in the USA, helping users compare services and connect with singles.',
    url: 'https://datingwebsitesonline.com/about',
  },
  alternates: {
    canonical: 'https://datingwebsitesonline.com/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
