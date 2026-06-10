"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden flex items-center justify-center text-white"
      style={{
        backgroundImage: "url(/slide2-1903-by-814-1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay – slightly softer */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Subtle lighting effect */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.12),transparent_35%),radial-gradient(circle_at_85%_40%,_rgba(59,130,246,0.10),transparent_40%)]" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center space-y-8">
        {/* Urdu subheading */}
        <motion.p
          className="text-lg sm:text-2xl font-light text-slate-200"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          اطالوی اور فرانسیسی سفارت خانے اسلام آباد سے منظور شدہ ٹرانسلیشن
          کمپنی ہے
        </motion.p>

        {/* Main headline */}
        <motion.h1
          className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Authorized
          <span className="text-yellow-400"> Translation</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.h2
          className="text-xl sm:text-3xl font-medium text-slate-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Company by Italian & French Embassy ISB.
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Transworld Translation provides certified translations for many
          international languages with embassy‑level accuracy.
        </motion.p>

        {/* CTA Button – enhanced for mobile & desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="#quote"
            className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-600 to-amber-500 px-10 py-4 text-base sm:text-lg font-bold text-white shadow-2xl shadow-yellow-900/30 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Get a Free Quote</span>
            {/* Hover background slide */}
            <span className="absolute inset-0 rounded-full bg-black/20 transition-all duration-300 group-hover:opacity-0" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}