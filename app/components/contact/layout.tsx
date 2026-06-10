import type { Metadata } from "next";
import JsonLd, { breadcrumb } from "../JsonLd";

const siteUrl = 'https://www.transworldintl.com.pk';

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Transworld Translation for a free quote. Certified translation services in Islamabad & Lahore. Italian, French, Spanish, Arabic & more. Call 0331-5166421.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = {
    '@type': 'LocalBusiness',
    name: 'Transworld Translation',
    url: siteUrl,
    telephone: '+92-331-5166421',
    email: 'info@transworldintl.com.pk',
    description: 'Certified translation services in Islamabad. Embassy-authorized translations for all major languages.',
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
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-331-5166421',
      email: 'info@transworldintl.com.pk',
      contactType: 'customer service',
      availableLanguage: ['English', 'Urdu'],
    },
  };

  return (
    <>
      <JsonLd data={breadcrumb([{ name: 'Home', url: '/' }, { name: 'Contact', url: '/components/contact' }])} />
      <JsonLd data={localBusinessSchema} />
      {children}
    </>
  );
}
