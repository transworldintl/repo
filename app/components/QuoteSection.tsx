"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function QuoteSection() {
  return (
    <motion.section
      id="quote"
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="h-[320px] md:h-[400px] w-full relative">
        <img
          src="/bf_quote.jpg"
          alt="Professional translator working on documents"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="bg-white pt-24 pb-20">
        <div className="relative mx-auto max-w-6xl grid lg:grid-cols-2 gap-8 items-start px-6">
          <div className="relative -mt-40 z-10 ml-4 md:ml-10">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100 max-w-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-5">
                Get a Quote
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="Name" className="rounded-full bg-gray-100 px-4 py-2.5 text-sm outline-none" />
                  <input type="text" placeholder="Phone" className="rounded-full bg-gray-100 px-4 py-2.5 text-sm outline-none" />
                </div>
                <input type="email" placeholder="Email" className="w-full rounded-full bg-gray-100 px-4 py-2.5 text-sm outline-none" />
                <input type="file" className="w-full text-sm text-gray-500 file:mr-3 file:rounded-full file:border-0 file:bg-gray-200 file:px-3 file:py-1.5" />
                <textarea placeholder="Notes" rows={3} className="w-full rounded-xl bg-gray-100 px-4 py-2.5 text-sm outline-none" />
                <button
                  type="submit"
                  className="mt-2 rounded-md bg-yellow-600 px-6 py-2.5 text-white text-sm font-medium group relative overflow-hidden"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Submit Order
                  </span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </button>
              </form>
            </div>
          </div>

          <div className="mr-4 md:mr-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs tracking-[0.3em] uppercase text-slate-500">
                Why choose us
              </span>
              <div className="w-14 h-[2px] bg-yellow-400"></div>
            </div>
            <h2 className="text-4xl font-semibold text-slate-900 leading-tight">
              We Offer Certified <br /> Translation
            </h2>
            <p className="mt-5 text-slate-600 leading-7 max-w-md">
              We have a vast variety of certified professionals who have years of experience in translating text. These professionals are perfectly capable of translating text from original texts or old text into a language that has evolved with time which might make it hard for some readers to understand it.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}