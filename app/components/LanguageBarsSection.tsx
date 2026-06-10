"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function LanguageBarsSection() {
  return (
    <motion.section
      id="languages-bars"
      className="relative overflow-hidden bg-[#1c1c22] px-6 py-24 sm:px-10 lg:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={fadeUp}
    >
      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-[12px] tracking-[0.35em] text-white font-semibold">
              LANGUAGES
            </p>
            <span className="block h-[2px] w-16 bg-yellow-500"></span>
          </div>
          <h2 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-10">
            Overcome the Language <br />
            Barrier with Multilingual <br />
            Translation <br />
            <span>Services</span>
          </h2>
          <Link
            href="/components/contact"
            className="inline-block mt-5 rounded-md bg-yellow-600 px-5 py-2 text-sm font-semibold text-white group relative overflow-hidden"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              More information
            </span>
            <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        <div className="space-y-8 mr-12 max-w-lg">
          {[
            { label: "ITALIAN", value: 90 },
            { label: "FRENCH", value: 85 },
            { label: "ENGLISH", value: 80 },
            { label: "SPANISH", value: 75 },
            { label: "MORE LANGUAGES", value: 70 },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-white text-xs tracking-[0.25em] mb-2">
                {item.label}
              </p>
              <div className="w-[350px] h-[12px] bg-black/60 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-yellow-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}