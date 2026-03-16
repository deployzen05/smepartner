import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Inter, Montserrat, Poppins } from 'next/font/google';
import './globals.css';
import { ScrollToTop } from '@/components/common/scroll-to-top';
import { ScrollProgress } from '@/components/common/scroll-progress';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#ea580c', // orange-600
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.smepartner.in'),
  title: {
    default: 'SME Partner - Leading Solar Energy Solution Provider in UP',
    template: '%s | SME Partner',
  },
  description:
    'SME Partner delivers end-to-end solar execution services. From Residential Rooftops to Industrial Power Plants, secure government subsidies and financing.',
  keywords: [
    'Solar Energy',
    'SME Partner',
    'Solar Panel Installation',
    'UPNEDA',
    'Solar Subsidy',
    'Industrial Solar',
    'Commercial Solar',
    'Residential Solar',
    'Solar Water Pumps',
    'Uttar Pradesh Solar',
    'Kanpur Solar',
    'Lucknow Solar',
  ],
  authors: [{ name: 'SME Partner' }],
  creator: 'SME Partner',
  publisher: 'SME Partner',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.smepartner.in',
  },
  category: 'Business',
  openGraph: {
    title: 'SME Partner - Leading Solar Energy Solution Provider in UP',
    description:
      'Empowering businesses and homes with sustainable solar energy solutions. Authorized UPNEDA vendor offering subsidies and financing.',
    url: 'https://www.smepartner.in',
    siteName: 'SME Partner',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.smepartner.in/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'SME Partner - Solar & Industrial Consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SME Partner - Leading Solar Energy Solution Provider in UP',
    description:
      'Empowering businesses and homes with sustainable solar energy solutions. Authorized UPNEDA vendor offering subsidies and financing.',

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} ${poppins.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ScrollProgress />
        <main className="mx-auto">{children}</main>
        <ScrollToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SME Partner',
              alternateName: 'SME Partner',
              url: 'https://www.smepartner.in',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+91-9169478991',
                  contactType: 'customer service',
                  areaServed: 'IN',
                  availableLanguage: 'en',
                },
                {
                  '@type': 'ContactPoint',
                  telephone: '+91-9140299799',
                  contactType: 'customer service',
                  areaServed: 'IN',
                  availableLanguage: 'en',
                },
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress:
                  '128/758, Krishna Rama Chandra Apartment, K-Block, Kidwai Nagar',
                addressLocality: 'Kanpur',
                addressRegion: 'Uttar Pradesh',
                postalCode: '208011',
                addressCountry: 'IN',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
