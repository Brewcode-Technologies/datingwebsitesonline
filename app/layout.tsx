import { ReactNode } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Toaster } from 'sonner';
import Script from 'next/script';
import Head from 'next/head';
import { UserDataProvider } from '@/contexts/UserDataContext';
import PremiumFloatingButton from '@/components/PremiumFloatingButton';
import './globals.css';

const poppins = localFont({
  src: './fonts/Poppins.woff2',
  variable: '--font-poppins',
  weight: '400',
  preload: false,
});
const raleway = localFont({
  src: './fonts/Raleway.woff2',
  variable: '--font-raleway',
  weight: '100 900',
});

const opensans = localFont({
  src: './fonts/Open Sans.woff2',
  variable: '--font-open-sans',
  weight: '100 800',
});

export const metadata: Metadata = {
  // metadataBase: new URL("https://findlove-dating.com"),
  title: {
    template: '%s |datingwebsitesonline',
    default: 'Find Love - Your Premier Dating Platform for Meaningful Connections',
  },
  description:
    'Find your perfect match withdatingwebsitesonline, the premier dating platform connecting singles worldwide. Join thousands who found love through our secure, inclusive dating community for all relationship types.',
  keywords: [
    'online dating',
    'dating app',
    'find love',
    'singles dating',
    'christian dating',
    'gay dating',
    'lesbian dating',
    'senior dating',
    'relationships',
    'matchmaking',
    'dating platform',
    'Find Love',
  ],
  authors: [{ name: 'Find Love' }],
  creator: 'Find Love',
  publisher: 'Find Love',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://findlove-dating.com',
    siteName: 'Find Love',
    title: 'Find Love - Your Premier Dating Platform for Meaningful Connections',
    description:
      'Find your perfect match withdatingwebsitesonline, the premier dating platform connecting singles worldwide. Join our secure, inclusive dating community.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Find Love Dating Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find Love - Your Premier Dating Platform for Meaningful Connections',
    description:
      'Find your perfect match withdatingwebsitesonline, the premier dating platform connecting singles worldwide. Join our secure, inclusive dating community.',
    images: ['/og-image.jpg'],
    creator: '@findlove',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // Add other verification codes as needed
  },
  alternates: {
    canonical: 'https://findlove-dating.com',
  },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const GADSENSE_CLIENT_ID = 'ca-pub-6542623777003381'; // Define it once
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="google-adsense-account" content={GADSENSE_CLIENT_ID} />
      </Head>
      <body
        className={`${poppins.variable} ${raleway.variable} ${opensans.variable} antialiased`}
      >
        <UserDataProvider>{children}</UserDataProvider>
        <PremiumFloatingButton />
        <Toaster
          position="bottom-right"
          richColors
          closeButton
          toastOptions={{
            style: {
              background: '#ffffff',
              color: '#1f2937',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
            },
            className: 'sonner-toast',
          }}
        />

        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GADSENSE_CLIENT_ID}`}
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
};

export default RootLayout;
