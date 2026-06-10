import type { Metadata } from "next";
import ServiceClientPage from "./ServiceClientPage";
import JsonLd, { breadcrumb, cptServiceSchema } from "../../components/JsonLd";

const metaMap: Record<string, { title: string; description: string }> = {
  translation: {
    title: "Translation Services",
    description:
      "Professional translation services in Pakistan. Accurate document translation for business, legal, technical & personal needs. Embassy-accepted certified translations.",
  },
  interpreting: {
    title: "Interpreting Services",
    description:
      "Professional interpreting services in Pakistan. Consecutive & simultaneous interpretation for business, conferences, and legal proceedings. Expert linguists.",
  },
  localization: {
    title: "Localization Services",
    description:
      "Expert localization services in Pakistan. Adapt your website, software & content for global markets. Cultural & linguistic precision for your target audience.",
  },
  proofreading: {
    title: "Proofreading Services",
    description:
      "Professional proofreading services in Pakistan. Error-free documents for business, academic & legal purposes. Native-level accuracy with quick turnaround.",
  },
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const meta = metaMap[params.slug];
  if (!meta) {
    return { title: "Our Services" };
  }
  return {
    title: meta.title,
    description: meta.description,
  };
}

export function generateStaticParams() {
  return [
    { slug: "localization" },
    { slug: "proofreading" },
    { slug: "interpreting" },
    { slug: "translation" },
  ];
}

export default function Page({ params }: { params: { slug: string } }) {
  const meta = metaMap[params.slug];
  const serviceName = meta?.title || `${params.slug} Services`;
  const desc = meta?.description || `${serviceName} provided by Transworld Translation in Pakistan.`;
  const svc = cptServiceSchema(serviceName, desc);

  return (
    <>
      <JsonLd data={breadcrumb([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: serviceName, url: `/services/${params.slug}` }])} />
      <JsonLd data={svc} />
      <ServiceClientPage slug={params.slug} />
    </>
  );
}
