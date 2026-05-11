import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | DatingWebsitesOnline USA',
  description:
    'Read the terms and conditions for using DatingWebsitesOnline. Learn about user responsibilities, site usage rules, and legal information.',
  keywords: [
    'terms and conditions',
    'datingwebsitesonline terms',
    'dating site terms of service',
    'user agreement',
    'site usage rules',
  ],
  openGraph: {
    title: 'Terms and Conditions | DatingWebsitesOnline USA',
    description:
      'Read the terms and conditions for using DatingWebsitesOnline. Learn about user responsibilities, site usage rules, and legal information.',
    url: 'https://datingwebsitesonline.com/terms',
  },
  alternates: {
    canonical: 'https://datingwebsitesonline.com/terms',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
