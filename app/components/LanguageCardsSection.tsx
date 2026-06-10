"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { languageCards } from "../data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function LanguageCardsSection() {
  return (
    <motion.section
      id="languages"
      className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 px-6 py-24 sm:px-10 lg:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={{ hidden: {}, visible: {} }}
    >
      {/* Decorative blob */}
      <div className="pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-yellow-50 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block rounded-full bg-yellow-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-yellow-700">
            Professional Language Services
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Translation Services
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-slate-600">
            Certified translations for all major languages – fast, accurate, and
            embassy‑ready.
          </p>
          <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-yellow-500" />
        </motion.div>

        {/* Cards – flex wrap with improved sizing */}
        <motion.div
          className="flex flex-wrap justify-center gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {languageCards.slice(0, 7).map((lang) => (
            <motion.div
              key={lang.slug}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group flex w-[300px] flex-col items-center rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/50 transition-shadow duration-300 hover:shadow-xl hover:shadow-yellow-100/40"
            >
              {/* Language name */}
              <h3 className="mb-6 text-3xl font-extrabold text-slate-900">
                {lang.name}
              </h3>

              {/* Flag circle */}
              <div className="mb-8 h-36 w-36 overflow-hidden rounded-full border-4 border-yellow-200 bg-white shadow-md transition-transform duration-300 group-hover:scale-105">
                <img
                  src={lang.flag}
                  alt={lang.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Call-to-action button */}
              <Link
                href={`/language/${lang.slug}`}
                className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-yellow-600 to-amber-500 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-yellow-900/20 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400/50"
              >
                <span className="relative z-10">Translate Now</span>
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover/btn:translate-x-[150%] transition-transform duration-700" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}