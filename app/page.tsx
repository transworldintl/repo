import type { Metadata } from "next";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import LanguageCardsSection from "./components/LanguageCardsSection";
import AboutSection from "./components/AboutSection";
import QuoteSection from "./components/QuoteSection";
import GetQuoteSection from "./components/GetQuoteSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FaqSection from "./components/FaqSection";
import ReviewsSection from "./components/ReviewsSection";
import CreativeTranslationSection from "./components/CreativeTranslationSection";
import LanguageCoursesSection from "./components/LanguageCoursesSection";
import LanguageBarsSection from "./components/LanguageBarsSection";
import JsonLd, { breadcrumb } from "./components/JsonLd";
import { reviews } from "./data";

const siteUrl = 'https://www.transworldintl.com.pk';

export const metadata: Metadata = {
  title: {
    absolute: "Transworld Translation | Certified Translation Services Islamabad",
  },
  description:
    "Authorised translation services in Pakistan – Italian, French, Spanish, German, Turkish, Arabic & more. Free quotes. Serving local & international clients.",
};

export default function HomePage() {
  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How can I get documents translated for the Italian Embassy in Pakistan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simply email your scanned documents to info@transworldintl.com.pk or bring them to our Islamabad office. We review them, provide a free quote, and once confirmed, our team translates and certifies them as per Italian Embassy requirements. We then deliver the certified translation along with your original documents.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Transworld Translation authorised by the Italian Embassy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we are officially authorised by the Italian Embassy in Islamabad. Our translations are accepted by the Italian Embassy, French Embassy, Turkish Embassy, and other government bodies and institutions worldwide.',
        },
      },
      {
        '@type': 'Question',
        name: 'What documents need IBCC and HEC attestation before translation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Educational documents require prior attestation before we can translate them for embassy submission. Matric and Intermediate certificates must first be attested by IBCC, while graduation degrees need HEC attestation. After that, the Ministry of Foreign Affairs, Pakistan attests them, and then we provide the certified translation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does certified translation take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standard certified translations are completed within 24 to 48 hours. We also offer same-day and next-day express service at no extra charge, so you can get your documents ready as quickly as you need them.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you translate marriage certificates and NADRA documents?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely — we regularly translate marriage certificates, NADRA certificates, birth certificates, educational transcripts, medical reports, legal contracts, and many other personal and official documents.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I send my documents online for translation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you can email your documents to us from anywhere in Pakistan or abroad. We accept online payments, translate your documents, and send the certified translations back to you by courier or email — no need to visit our office in person.',
        },
      },
      {
        '@type': 'Question',
        name: 'What languages do you translate besides Italian?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We translate into and from French, Spanish, German, Arabic, Turkish, English, Urdu, Chinese, Russian, Portuguese, and Pakistani local languages. We have native and local speakers for each language pair.',
        },
      },
    ],
  };

  const reviewSchemas = reviews.map((r) => ({
    '@type': 'Review',
    itemReviewed: { '@type': 'Organization', name: 'Transworld Translation' },
    author: { '@type': 'Person', name: r.name },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    reviewBody: r.review,
  }));

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <JsonLd data={breadcrumb([{ name: 'Home', url: '/' }])} />
      <JsonLd data={faqSchema} />
      {reviewSchemas.map((r, i) => (
        <JsonLd key={i} data={r} />
      ))}
      <Hero />
      <TrustSection />
      <LanguageCardsSection />
      <AboutSection />
      <QuoteSection />
      <GetQuoteSection />
      <HowItWorksSection />
      <FaqSection />
      <ReviewsSection />
      <CreativeTranslationSection />
      <LanguageCoursesSection />
      <LanguageBarsSection />
    </main>
  );
}