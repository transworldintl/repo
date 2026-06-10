"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { languageCards } from "../../data";
import ReviewsSection from "../../components/ReviewsSection";
import {
  CheckCircle,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  FileText,
  IdCard,
  Scale,
  Briefcase,
  HeartPulse,
  GraduationCap,
  BookText,
  Globe,
  BadgeCheck,
  Users,
  Zap,
  ScrollText,
  Shield,
  Building,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

interface LangData {
  name: string;
  subtitle: string;
  requirements: string[];
  documents: { title: string; desc: string }[];
  whyItems: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
}

const languageData: Record<string, LangData> = {
  turkish: {
    name: "Turkish",
    subtitle:
      "Provides Expert Human Translation Services — based in Islamabad, serving Pakistan and the world.",
    requirements: [
      "Readable documents shall be booked for translation.",
      "Original documents shall duly be attested first by Ministry of Foreign Affairs Pakistan.",
      "If applicant needs translation for Embassy of Turkey, Pakistan, it will be translated by authorized Turkish translator by Embassy of Turkey.",
      "If applicant needs translation for submission directly in Turkey for his/her educational or any other purpose, it will be translated from any qualified translator.",
    ],
    documents: [
      { title: "Embassy Documents", desc: "Visa applications, passport copies, and embassy-submitted certificates." },
      { title: "NADRA Certificates", desc: "Marriage, birth, death, and family registration certificates." },
      { title: "Legal Papers", desc: "Court rulings, affidavits, power of attorney, and contracts." },
      { title: "Business Documents", desc: "Company registration, financial statements, and commercial contracts." },
      { title: "Medical Reports", desc: "Doctor's notes, lab reports, prescriptions, and hospital records." },
      { title: "Educational Transcripts", desc: "Degrees, diplomas, mark sheets, and academic certificates." },
      { title: "Technical Manuals", desc: "User guides, product specifications, and engineering documents." },
      { title: "Website & Content", desc: "Website localization, marketing content, and mobile apps." },
    ],
    whyItems: [
      { title: "Authorized by Embassy of Turkey", desc: "Our Turkish translations are accepted by the Embassy of Turkey, Pakistan." },
      { title: "Native Turkish Linguists", desc: "Experienced native speakers ensure accurate, culturally appropriate translations." },
      { title: "Fast Turnaround", desc: "Most documents completed within 24–48 hours." },
      { title: "Certified & Accurate", desc: "Every translation is certified and verified for legal and official use." },
      { title: "Islamabad Office", desc: "Visit us in person or get your documents translated remotely from anywhere." },
      { title: "Confidential & Secure", desc: "Your documents are handled with complete privacy and security." },
    ],
    faq: [
      { q: "How long does Turkish translation take?", a: "Standard documents are completed within 24–48 hours. Urgent requests can be processed same-day." },
      { q: "Is your Turkish translation accepted by the Embassy of Turkey?", a: "Yes, we are authorized by the Embassy of Turkey, Pakistan. Our translations are accepted for visa, immigration, and legal purposes." },
      { q: "Can I get Turkish translation done remotely?", a: "Absolutely. Upload your documents online, and we will deliver the translated copies via email or courier anywhere in Pakistan or abroad." },
      { q: "What documents do you translate from Turkish?", a: "We translate all types of documents including legal papers, business contracts, medical reports, educational certificates, and personal documents." },
      { q: "Do you offer Turkish to Urdu or English translation?", a: "Yes, we offer Turkish to Urdu, Turkish to English, and English/Urdu to Turkish translation services." },
    ],
  },
  italian: {
    name: "Italian",
    subtitle: "Professional Italian translation for embassy documents, legal papers, and academic records.",
    requirements: [
      "Readable documents shall be booked for translation.",
      "Original documents shall duly be attested first by Ministry of Foreign Affairs Pakistan.",
      "Translation will be done by authorized Italian translators.",
    ],
    documents: [
      { title: "Embassy Documents", desc: "Visa applications and embassy-submitted certificates." },
      { title: "Legal Papers", desc: "Court rulings, affidavits, and contracts." },
      { title: "Educational Transcripts", desc: "Degrees, diplomas, and mark sheets." },
      { title: "Business Documents", desc: "Company registration and financial statements." },
    ],
    whyItems: [
      { title: "Authorized by Italian Embassy", desc: "Our Italian translations are accepted by the Embassy of Italy." },
      { title: "Native Linguists", desc: "Experienced Italian translators for accurate results." },
      { title: "Fast Turnaround", desc: "Most documents completed within 24–48 hours." },
      { title: "Certified & Accurate", desc: "Every translation is certified for legal use." },
    ],
    faq: [
      { q: "How long does Italian translation take?", a: "Standard documents are completed within 24–48 hours." },
      { q: "Is your translation accepted by the Italian Embassy?", a: "Yes, we are authorized by the Embassy of Italy, Pakistan." },
    ],
  },
  spanish: {
    name: "Spanish",
    subtitle: "Expert Spanish translation with certified accuracy for official documentation.",
    requirements: [
      "Readable documents shall be booked for translation.",
      "Original documents shall duly be attested first by Ministry of Foreign Affairs Pakistan.",
    ],
    documents: [
      { title: "Embassy Documents", desc: "Visa applications and embassy-submitted certificates." },
      { title: "Legal Papers", desc: "Court rulings, affidavits, and contracts." },
      { title: "Educational Transcripts", desc: "Degrees, diplomas, and mark sheets." },
      { title: "Business Documents", desc: "Company registration and financial statements." },
    ],
    whyItems: [
      { title: "Experienced Translators", desc: "Native-level Spanish translators." },
      { title: "Fast Turnaround", desc: "Most documents completed within 24–48 hours." },
      { title: "Certified & Accurate", desc: "Every translation is certified for legal use." },
    ],
    faq: [
      { q: "How long does Spanish translation take?", a: "Standard documents are completed within 24–48 hours." },
    ],
  },
  french: {
    name: "French",
    subtitle: "Native French expertise for international communications and document verification.",
    requirements: [
      "Readable documents shall be booked for translation.",
      "Original documents shall duly be attested first by Ministry of Foreign Affairs Pakistan.",
    ],
    documents: [
      { title: "Embassy Documents", desc: "Visa applications and embassy-submitted certificates." },
      { title: "Legal Papers", desc: "Court rulings, affidavits, and contracts." },
      { title: "Educational Transcripts", desc: "Degrees, diplomas, and mark sheets." },
      { title: "Business Documents", desc: "Company registration and financial statements." },
    ],
    whyItems: [
      { title: "Authorized by French Embassy", desc: "Our French translations are accepted by the Embassy of France." },
      { title: "Native Linguists", desc: "Experienced French translators." },
      { title: "Fast Turnaround", desc: "Most documents completed within 24–48 hours." },
    ],
    faq: [
      { q: "How long does French translation take?", a: "Standard documents are completed within 24–48 hours." },
    ],
  },
  german: {
    name: "German",
    subtitle: "Professional German translation for business, legal, and technical documents.",
    requirements: [
      "Readable documents shall be booked for translation.",
      "Original documents shall duly be attested first by Ministry of Foreign Affairs Pakistan.",
    ],
    documents: [
      { title: "Embassy Documents", desc: "Visa applications and embassy-submitted certificates." },
      { title: "Legal Papers", desc: "Court rulings, affidavits, and contracts." },
      { title: "Educational Transcripts", desc: "Degrees, diplomas, and mark sheets." },
      { title: "Technical Manuals", desc: "User guides and engineering documents." },
    ],
    whyItems: [
      { title: "Experienced Translators", desc: "Native-level German translators." },
      { title: "Fast Turnaround", desc: "Most documents completed within 24–48 hours." },
      { title: "Certified & Accurate", desc: "Every translation is certified for legal use." },
    ],
    faq: [
      { q: "How long does German translation take?", a: "Standard documents are completed within 24–48 hours." },
    ],
  },
  arabic: {
    name: "Arabic",
    subtitle: "Comprehensive Arabic translation with cultural and linguistic precision.",
    requirements: [
      "Readable documents shall be booked for translation.",
      "Original documents shall duly be attested first by Ministry of Foreign Affairs Pakistan.",
    ],
    documents: [
      { title: "Embassy Documents", desc: "Visa applications and embassy-submitted certificates." },
      { title: "Legal Papers", desc: "Court rulings, affidavits, and contracts." },
      { title: "Educational Transcripts", desc: "Degrees, diplomas, and mark sheets." },
      { title: "Business Documents", desc: "Company registration and financial statements." },
    ],
    whyItems: [
      { title: "Experienced Translators", desc: "Native-level Arabic translators." },
      { title: "Fast Turnaround", desc: "Most documents completed within 24–48 hours." },
      { title: "Certified & Accurate", desc: "Every translation is certified for legal use." },
    ],
    faq: [
      { q: "How long does Arabic translation take?", a: "Standard documents are completed within 24–48 hours." },
    ],
  },
  english: {
    name: "English",
    subtitle: "Professional English translation services for global communication.",
    requirements: [
      "Readable documents shall be booked for translation.",
      "Original documents shall duly be attested first by Ministry of Foreign Affairs Pakistan.",
    ],
    documents: [
      { title: "Embassy Documents", desc: "Visa applications and embassy-submitted certificates." },
      { title: "Legal Papers", desc: "Court rulings, affidavits, and contracts." },
      { title: "Educational Transcripts", desc: "Degrees, diplomas, and mark sheets." },
      { title: "Business Documents", desc: "Company registration and financial statements." },
    ],
    whyItems: [
      { title: "Experienced Translators", desc: "Native-level English translators." },
      { title: "Fast Turnaround", desc: "Most documents completed within 24–48 hours." },
      { title: "Certified & Accurate", desc: "Every translation is certified for legal use." },
    ],
    faq: [
      { q: "How long does English translation take?", a: "Standard documents are completed within 24–48 hours." },
    ],
  },
};

export default function LanguageClientPage({ slug }: { slug: string }) {
  const lang = languageCards.find((l) => l.slug === slug);
  const data = languageData[slug];

  if (!lang || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">Language Not Found</h1>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative flex min-h-[480px] items-center justify-center overflow-hidden px-6 text-white"
        style={{
          backgroundImage: "url('/Services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center"
        >
          <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-yellow-400 bg-white shadow-xl">
            <img
              src={lang.flag}
              alt={data.name}
              className="h-full w-full object-cover"
            />
          </div>

          <h1 className="text-5xl font-bold uppercase tracking-wide sm:text-6xl">
            {data.name} Translation
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            {data.subtitle}
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-200">
            <Link href="/" className="hover:text-amber-500">Home</Link>
            <span>|</span>
            <span>{data.name} Translation</span>
          </div>
        </motion.div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="bg-white py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-block rounded-full bg-yellow-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-yellow-700">
                Professional Language Services
              </span>
              <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
                {data.name} Translation
              </h2>

              <div className="mt-4 h-1.5 w-20 rounded-full bg-yellow-500" />

              <p className="mt-8 text-lg leading-8 text-slate-600">
                {data.subtitle}
              </p>

              <p className="mt-4 text-base leading-7 text-slate-500">
                Based in Islamabad, we serve clients across Pakistan and
                internationally. Whether you need to visit our office or prefer
                remote translation services, we make the process simple and
                hassle-free.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="h-72 w-72 overflow-hidden rounded-2xl border-4 border-yellow-200 bg-white shadow-xl sm:h-80 sm:w-80">
                  <img
                    src={lang.flag}
                    alt={data.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-yellow-500 px-5 py-3 text-sm font-bold text-white shadow-lg">
                  {data.name} Translation
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== GENERAL REQUIREMENTS ===== */}
      {data.requirements.length > 0 && (
        <section className="bg-[#f8f9fc] py-20 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-slate-900">
                General Requirements
              </h3>

              <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-yellow-500" />

              <ol className="mt-10 space-y-5">
                {data.requirements.map((req, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-4 rounded-lg bg-white p-5 shadow-sm"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="text-base leading-7 text-slate-700">{req}</p>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          </div>
        </section>
      )}

      {/* ===== DOCUMENTS WE TRANSLATE ===== */}
      <section className="bg-white py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-slate-900">
              Documents We Translate
            </h3>

            <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-yellow-500" />

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              We handle all types of documents with precision and
              confidentiality.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.documents.map((doc, i) => {
              const iconMap: Record<string, React.ReactNode> = {
                "Embassy Documents": <FileText className="h-5 w-5 text-yellow-600" />,
                "NADRA Certificates": <IdCard className="h-5 w-5 text-yellow-600" />,
                "Legal Papers": <Scale className="h-5 w-5 text-yellow-600" />,
                "Business Documents": <Briefcase className="h-5 w-5 text-yellow-600" />,
                "Medical Reports": <HeartPulse className="h-5 w-5 text-yellow-600" />,
                "Educational Transcripts": <GraduationCap className="h-5 w-5 text-yellow-600" />,
                "Technical Manuals": <BookText className="h-5 w-5 text-yellow-600" />,
                "Website & Content": <Globe className="h-5 w-5 text-yellow-600" />,
              };
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-yellow-200"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100">
                    {iconMap[doc.title] || <CheckCircle className="h-5 w-5 text-yellow-600" />}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    {doc.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {doc.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-[#1c1c22] py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-white">
              Why Choose Us for {data.name} Translation
            </h3>

            <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-yellow-500" />
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.whyItems.map((item, i) => {
              const iconMap: Record<string, React.ReactNode> = {
                "Authorized by Embassy of Turkey": <BadgeCheck className="h-6 w-6 text-yellow-500" />,
                "Authorized by French Embassy": <BadgeCheck className="h-6 w-6 text-yellow-500" />,
                "Authorized by Italian Embassy": <BadgeCheck className="h-6 w-6 text-yellow-500" />,
                "Native Turkish Linguists": <Users className="h-6 w-6 text-yellow-500" />,
                "Native Linguists": <Users className="h-6 w-6 text-yellow-500" />,
                "Fast Turnaround": <Zap className="h-6 w-6 text-yellow-500" />,
                "Certified & Accurate": <ScrollText className="h-6 w-6 text-yellow-500" />,
                "Islamabad Office": <Building className="h-6 w-6 text-yellow-500" />,
                "Confidential & Secure": <Shield className="h-6 w-6 text-yellow-500" />,
                "Experienced Translators": <Users className="h-6 w-6 text-yellow-500" />,
              };
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-xl border border-slate-700 bg-[#25252d] p-6 transition-all duration-300 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-900/20"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10">
                    {iconMap[item.title] || <CheckCircle className="h-6 w-6 text-yellow-500" />}
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-white py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-slate-900">How It Works</h3>
            <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-yellow-500" />
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-slate-200 bg-[#f8f9fc] p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                <MapPin className="h-6 w-6 text-yellow-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Visit Our Office
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Walk in to our Islamabad office with your documents. Our team
                will guide you through the process and provide a free quote.
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-700">
                Office # 14, Friends Market, Park Rd, near Gerry's Fedex,
                Chatta Bakhtawar, Islamabad
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-slate-200 bg-[#f8f9fc] p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                <MessageSquare className="h-6 w-6 text-yellow-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Remote Service
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Send us your documents online. We translate and deliver
                electronically or via courier anywhere in Pakistan or abroad.
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-700">
                Upload your documents, get a quote, and receive your
                translation — all without leaving your home.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <ReviewsSection />

      {/* ===== FAQ ===== */}
      {data.faq.length > 0 && (
        <section className="bg-white py-20 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-slate-900">
                Frequently Asked Questions
              </h3>

              <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-yellow-500" />
            </motion.div>

            <div className="mt-12 space-y-4">
              {data.faq.map((item, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group cursor-pointer rounded-lg border border-slate-200 p-5 transition-colors duration-200 hover:border-yellow-300 [&[open]]:border-yellow-400"
                >
                  <summary className="flex items-center justify-between text-base font-semibold text-slate-900">
                    {item.q}
                    <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-90" />
                  </summary>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.a}
                  </p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA SECTION ===== */}
      <section
        className="relative flex min-h-[400px] items-center justify-center overflow-hidden px-6 text-white"
        style={{
          backgroundImage: "url('/bg_cta2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 w-full max-w-3xl text-center"
        >
          <h3 className="text-3xl font-bold sm:text-4xl">
            Get Your {data.name} Translation Today
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-300">
            Visit our Islamabad office or get a free quote online. We respond
            within minutes.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:0331-5166421"
              className="inline-flex items-center gap-2 rounded-md bg-yellow-500 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-yellow-600"
            >
              <Phone className="h-4 w-4" />
              0331-5166421
            </a>

            <a
              href="mailto:info@transworldintl.com.pk"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>

            <Link
              href="/components/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-all duration-300 hover:bg-yellow-500 hover:text-white"
            >
              <MessageSquare className="h-4 w-4" />
              Get Free Quote
            </Link>
          </div>

          <div className="mx-auto mt-8 flex items-center justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              Islamabad
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3.5 w-3.5" />
              Remote Available
            </span>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
