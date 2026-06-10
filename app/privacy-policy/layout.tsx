import type { Metadata } from "next";
import JsonLd, { breadcrumb } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy of Transworld Translation. Learn how we collect, use, and protect your personal information and documents. Your data security matters.",
  alternates: {
    canonical: "https://www.transworldintl.com.pk/privacy-policy/",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy-policy' }])} />
      {children}
    </>
  );
}
