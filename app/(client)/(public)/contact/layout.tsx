import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact DatingWebsitesOnline | Support & Inquiries',
  description:
    'Get in touch with DatingWebsitesOnline for support, feedback, or inquiries. Reach our team for help with dating site reviews and information.',
  keywords: [
    'contact datingwebsitesonline',
    'dating site support',
    'dating website help',
    'contact us',
    'dating site inquiries',
  ],
  openGraph: {
    title: 'Contact DatingWebsitesOnline | Support & Inquiries',
    description:
      'Get in touch with DatingWebsitesOnline for support, feedback, or inquiries. Reach our team for help with dating site reviews and information.',
    url: 'https://datingwebsitesonline.com/contact',
  },
  alternates: {
    canonical: 'https://datingwebsitesonline.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
