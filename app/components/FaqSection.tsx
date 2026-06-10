"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const faqs = [
  {
    q: "How can I get documents translated for the Italian Embassy in Pakistan?",
    a: "Simply email your scanned documents to info@transworldintl.com.pk or bring them to our Islamabad office. We review them, provide a free quote, and once confirmed, our team translates and certifies them as per Italian Embassy requirements. We then deliver the certified translation along with your original documents.",
  },
  {
    q: "Is Transworld Translation authorised by the Italian Embassy?",
    a: "Yes, we are officially authorised by the Italian Embassy in Islamabad. Our translations are accepted by the Italian Embassy, French Embassy, Turkish Embassy, and other government bodies and institutions worldwide.",
  },
  {
    q: "What documents need IBCC and HEC attestation before translation?",
    a: "Educational documents require prior attestation before we can translate them for embassy submission. Matric and Intermediate certificates must first be attested by IBCC, while graduation degrees need HEC attestation. After that, the Ministry of Foreign Affairs, Pakistan attests them, and then we provide the certified translation.",
  },
  {
    q: "How long does certified translation take?",
    a: "Standard certified translations are completed within 24 to 48 hours. We also offer same-day and next-day express service at no extra charge, so you can get your documents ready as quickly as you need them.",
  },
  {
    q: "Do you translate marriage certificates and NADRA documents?",
    a: "Absolutely — we regularly translate marriage certificates, NADRA certificates, birth certificates, educational transcripts, medical reports, legal contracts, and many other personal and official documents.",
  },
  {
    q: "Can I send my documents online for translation?",
    a: "Yes, you can email your documents to us from anywhere in Pakistan or abroad. We accept online payments, translate your documents, and send the certified translations back to you by courier or email — no need to visit our office in person.",
  },
  {
    q: "What languages do you translate besides Italian?",
    a: "We translate into and from French, Spanish, German, Arabic, Turkish, English, Urdu, Chinese, Russian, Portuguese, and Pakistani local languages. We have native and local speakers for each language pair.",
  },
];

export default function FaqSection() {
  return (
    <motion.section
      id="faq"
      className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 lg:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={fadeUp}
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full bg-yellow-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-yellow-700">
            FAQ
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Quick answers to the most common questions about our translation services.
          </p>
        </div>

        <div className="space-y-10">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-slate-900">
                {faq.q}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-slate-600">
            Still have questions?{" "}
            <Link
              href="/components/contact"
              className="font-semibold text-yellow-600 underline hover:text-yellow-700"
            >
              Get in touch with us
            </Link>
          </p>
        </div>
      </div>
    </motion.section>
  );
}
