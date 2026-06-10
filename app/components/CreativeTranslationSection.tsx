"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function CreativeTranslationSection() {
  return (
    <motion.section
      id="creative-translation"
      className="bg-white px-6 py-24 sm:px-10 lg:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={fadeUp}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="lg:ml-12 mt-6 lg:mt-12">
          <div className="flex items-center gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-700">
              Quality You Control
            </p>
            <div className="h-[2px] w-12 bg-yellow-500"></div>
          </div>
          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            Highly Creative <br /> Translation
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-slate-600">
            Interpreting, or "interpretation," is the facilitation of oral or sign-language communication, either simultaneously or consecutively, between two, or among three or more, speakers who are not speaking, or signing, the same language. The term is used for this activity to avoid confusion
          </p>
          <div className="mt-8">
            <Link
              href="/services"
              className="bg-yellow-600 text-white px-5 py-2 rounded-md font-semibold text-sm group relative overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                DISCOVER MORE
              </span>
              <span className="absolute left-0 top-0 h-full w-0 rounded-md bg-black transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </div>

        <div className="relative mt-6 lg:mt-12">
          <img
            src="/img_promo3.jpg"
            alt="Creative translation services illustration"
            className="w-full object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
}