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
  metadataBase: new URL('https://datingwebsitesonline.com'),
  title: {
    template: '%s | DatingWebsitesOnline - Best Dating Sites Reviewed',
    default: 'Best Dating Sites in USA 2026 | Free Online Dating Sites & Apps',
  },
  description:
    'Discover the best dating sites and free online dating apps in the USA. Compare top dating websites, meet singles near you, and start dating today with trusted platforms.',
  keywords: [
    'dating sites',
    'free dating sites',
    'best dating sites',
    'online dating sites',
    'dating websites',
    'best online dating sites',
    'free online dating',
    'dating apps',
    'singles near me',
    'dating near me',
    'plenty of fish dating',
    'plenty of fish',
    'plenty fish dating free site',
    'plenty of fish search',
    'fish singles',
    'plenty of fish dating site',
    'plenty fish online dating',
    'fishing dating website',
    'search plenty of fish',
    'friendly fish dating',
    'lots of fish dating',
    'fish dating sites',
    'plenty fish dating site online',
    'dating sites fish plenty',
    'plenty of fish com',
    'plentyoffish',
    'fish in the sea',
    'plenty more fish dating',
    'go fish dating site',
    'fish finder dating site',
    'plenty of fish in the sea',
    'more fish in the sea',
    'match.com',
    'eharmony',
    'zoosk dating site',
    'meet singles free',
    'meet singles near me free',
    'singles dating',
    'christian dating',
    'best christian dating sites',
    'christian singles dating sites',
    'christian dating apps free',
    'gay dating',
    'best gay dating sites',
    'free gay dating apps',
    'meet gay men',
    'lesbian dating',
    'best lesbian dating apps',
    'lesbian singles near me',
    'senior dating',
    'senior singles dating sites',
    'dating sites for seniors over 50',
    'mature dating sites',
    'senior dating near me',
    '50 plus dating sites',
    'meeting older women',
    'my time',
    'mytime dating',
    'older women dating',
    'seniors dating seniors',
    'single ladies looking for men',
    'single women near me',
    'meet women in my area',
    'meet people over 50',
    '40 dating',
    'dating for 40 somethings',
    'over 50 dating sites',
    'dating website over 50',
    'top 10 dating sites',
    'dating site for singles',
    'free dating sites for singles near me',
    'safe dating sites for singles',
    'datingwebsitesonline',
  ],
  authors: [{ name: 'DatingWebsitesOnline' }],
  creator: 'DatingWebsitesOnline',
  publisher: 'DatingWebsitesOnline',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://datingwebsitesonline.com',
    siteName: 'DatingWebsitesOnline',
    title: 'Best Dating Sites in USA 2026 | Free Online Dating Sites & Apps',
    description:
      'Discover the best dating sites and free online dating apps in the USA. Compare top dating websites, meet singles near you, and start dating today with trusted platforms.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DatingWebsitesOnline - Best Dating Sites Reviewed',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dating Sites in USA 2026 | Free Online Dating Sites & Apps',
    description:
      'Discover the best dating sites and free online dating apps in the USA. Compare top dating websites, meet singles near you, and start dating today with trusted platforms.',
    images: ['/og-image.jpg'],
    creator: '@datingwebsonline',
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: 'https://datingwebsitesonline.com',
  },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const GADSENSE_CLIENT_ID = 'ca-pub-6542623777003381';
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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

        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}

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
