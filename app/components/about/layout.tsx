import type { Metadata } from "next";
import JsonLd, { breadcrumb } from "../JsonLd";

const siteUrl = 'https://www.transworldintl.com.pk';

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Transworld Translation – Pakistan's trusted translation company. Embassy-authorised translations, expert linguists, serving clients globally since 2020. Accurate & confidential.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    '@type': 'Organization',
    name: 'Transworld Translation',
    url: siteUrl,
    logo: `${siteUrl}/Logo.png`,
    description: 'Certified translation services in Islamabad. Embassy-authorised translations for all major languages including Turkish, French, Italian, Spanish, Arabic, German, and English.',
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
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-331-5166421',
      email: 'info@transworldintl.com.pk',
      contactType: 'customer service',
    },
    sameAs: [
      'https://www.facebook.com/Transworld21',
      'https://www.instagram.com/transworld21/',
    ],
  };

  const aboutSchema = {
    '@type': 'AboutPage',
    name: 'About Transworld Translation',
    description: 'Learn about Transworld Translation – Pakistan\'s trusted translation company.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Transworld Translation',
    },
  };

  return (
    <>
      <JsonLd data={breadcrumb([{ name: 'Home', url: '/' }, { name: 'About', url: '/components/about' }])} />
      <JsonLd data={orgSchema} />
      <JsonLd data={aboutSchema} />
      {children}
    </>
  );
}
