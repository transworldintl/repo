"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function TrustSection() {
  return (
    <motion.section
      id="trust"
      className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 lg:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={fadeUp}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-yellow-50 blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-80 h-80 rounded-full bg-yellow-50 blur-3xl opacity-60" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Tagline with decorative line */}
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-yellow-500" />
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-yellow-600">
              Transworld Translation (Pvt) Ltd
            </p>
          </div>

          {/* Main headline */}
          <h2 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl xl:text-6xl">
            Translation Services{" "}
            <span className="relative inline-block text-yellow-600">
              with comfort
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-yellow-300 opacity-60"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 10 Q 50 20, 100 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                />
              </svg>
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg leading-8 text-slate-600 font-medium max-w-2xl">
            We provide authorized Italian translation & also provide translations
            of many languages like French, Chinese, Russian, Turkish, Spanish,
            Urdu, German, Pakistani local languages, Portuguese, and more. We
            deliver certified translations from English & Urdu languages and vice
            versa. Our services are available for clients in Pakistan and abroad
            with embassy‑level accuracy.
          </p>

          {/* CTA Button */}
          <div>
            <Link
              href="/components/about"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-yellow-600 to-amber-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-yellow-900/20 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400/50"
            >
              <span className="relative z-10">Discover More</span>
              {/* Shimmer effect */}
              <span className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700" />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative blob behind the image */}
          <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-50 blur-2xl opacity-70" />

          <motion.div
            className="relative"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="/img_promo2.jpg"
              alt="Professional translation services"
              className="relative z-10 h-[380px] w-[500px] max-w-none rounded-3xl object-cover shadow-2xl shadow-black/20 md:h-[480px] md:w-[580px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}