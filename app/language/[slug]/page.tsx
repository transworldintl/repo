import type { Metadata } from "next";
import LanguageClientPage from "./LanguageClientPage";
import { languageCards } from "../../data";
import JsonLd, { breadcrumb, serviceSchema } from "../../components/JsonLd";

const metaMap: Record<string, { title: string; description: string }> = {
  italian: {
    title: "Italian Translation",
    description:
      "Certified Italian translation authorised by the Italian Embassy. Marriage, birth, educational & legal documents. Fast, reliable service in Pakistan.",
  },
  spanish: {
    title: "Spanish Translation",
    description:
      "Professional Spanish translation services in Pakistan. Certified translations for business, legal, educational & personal documents. Embassy accepted.",
  },
  french: {
    title: "French Translation",
    description:
      "Certified French translation authorised by the French Embassy. Birth, marriage, educational & legal documents. Fast, reliable service across Pakistan.",
  },
  german: {
    title: "German Translation",
    description:
      "Professional German translation services in Pakistan. Certified translations for business, legal, academic & personal documents. Fast turnaround.",
  },
  arabic: {
    title: "Arabic Translation",
    description:
      "Expert Arabic translation services in Pakistan. Certified translations for legal, business, educational & personal documents. Accurate & confidential.",
  },
  turkish: {
    title: "Turkish Translation",
    description:
      "Expert Turkish translation services in Pakistan. Certified translations for business, legal, educational & personal documents. Reliable & confidential.",
  },
  english: {
    title: "English Translation",
    description:
      "Professional English translation services in Pakistan. Certified translations for business, legal, educational & personal needs. Accurate & timely.",
  },
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const meta = metaMap[params.slug];
  if (!meta) {
    return { title: "Translation Services" };
  }
  return {
    title: meta.title,
    description: meta.description,
  };
}

export function generateStaticParams() {
  return languageCards.map((lang) => ({
    slug: lang.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const lang = languageCards.find((c) => c.slug === params.slug);
  const meta = metaMap[params.slug];
  const langName = lang?.name || params.slug;
  const desc = meta?.description || `${langName} translation services in Pakistan.`;
  const svc = serviceSchema(`${langName} Translation Services`, desc, langName);

  return (
    <>
      <JsonLd data={breadcrumb([{ name: 'Home', url: '/' }, { name: `${langName} Translation`, url: `/language/${params.slug}` }])} />
      <JsonLd data={svc} />
      <LanguageClientPage slug={params.slug} />
    </>
  );
}