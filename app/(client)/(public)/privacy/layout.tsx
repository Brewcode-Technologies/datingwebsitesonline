import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | DatingWebsitesOnline',
  description:
    'Read how DatingWebsitesOnline collects, uses, and protects user data. Details on cookies, data security, third-party services, and privacy rights.',
  keywords: [
    'privacy policy',
    'datingwebsitesonline privacy',
    'data protection',
    'cookies policy',
    'user data security',
    'privacy rights',
  ],
  openGraph: {
    title: 'Privacy Policy | DatingWebsitesOnline',
    description:
      'Read how DatingWebsitesOnline collects, uses, and protects user data. Details on cookies, data security, third-party services, and privacy rights.',
    url: 'https://datingwebsitesonline.com/privacy',
  },
  alternates: {
    canonical: 'https://datingwebsitesonline.com/privacy',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
