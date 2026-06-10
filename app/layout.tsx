import './globals.css';
import type { Metadata } from 'next';
import WhatsAppButton from './components/WhatsAppButton';
import Navbar from './components/navbar';
import Footer from './components/footer';

const siteUrl = 'https://www.transworldintl.com.pk';

export const metadata: Metadata = {
  title: {
    default: 'Transworld Translation | Certified Translation Services Islamabad',
    template: '%s | Transworld Translation',
  },
  description:
    'Certified translation services in Islamabad for embassy, legal, business & personal documents. Authorized by French & Italian Embassies. Turkish, Arabic, Spanish & more languages. Fast, accurate, confidential.',
  keywords: [
    'translation services Islamabad',
    'certified translation Pakistan',
    'embassy authorized translation',
    'Turkish translation Islamabad',
    'French translation Pakistan',
    'Italian translation services',
    'document translation Lahore',
    'legal document translation',
    'NADRA certificate translation',
    'Urdu to English translation',
  ],
  authors: [{ name: 'Transworld Translation' }],
  creator: 'Transworld Translation',
  publisher: 'Transworld Translation',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Transworld Translation',
    title: 'Transworld Translation | Certified Translation Services Islamabad',
    description:
      'Certified translation services in Islamabad for embassy, legal, business & personal documents. Authorized by French & Italian Embassies.',
    images: [
      {
        url: '/Logo.png',
        width: 400,
        height: 120,
        alt: 'Transworld Translation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transworld Translation | Certified Translation Services',
    description:
      'Certified translation services in Islamabad. Embassy-authorized translations for all major languages.',
    images: ['/Logo.png'],
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
    google: '',
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'translation services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Transworld Translation',
    image: `${siteUrl}/Logo.png`,
    url: siteUrl,
    telephone: '+92-331-5166421',
    email: 'info@transworldintl.com.pk',
    description:
      'Certified translation services in Islamabad. Embassy-authorized translations for all major languages including Turkish, French, Italian, Spanish, Arabic, German, and English.',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Office # 14, Friends Market, Park Rd, near Gerry\'s Fedex, Chatta Bakhtawar',
        addressLocality: 'Islamabad',
        addressCountry: 'PK',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '283MB Ibrahim Plaza behind BLS Visa Office, DHA Phase 6',
        addressLocality: 'Lahore',
        addressCountry: 'PK',
      },
    ],
    openingHours: 'Mo-Sa 09:00-18:00',
    areaServed: ['PK', 'Global'],
    priceRange: '$$',
    award: 'Authorised by the Italian Embassy, Islamabad',
    sameAs: [
      'https://www.facebook.com/Transworld21',
      'https://www.instagram.com/transworld21/',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5.0',
      ratingCount: '50',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Translation Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Turkish Translation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'French Translation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Italian Translation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Spanish Translation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Arabic Translation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'German Translation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'English Translation' } },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect to improve font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
