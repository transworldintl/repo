"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section
        className="relative flex min-h-[450px] items-center justify-center overflow-hidden px-6 text-white"
        style={{
          backgroundImage: "url('/Services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            Contact <span className="text-yellow-400">Us</span>
          </h1>
          <div className="mt-6 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-slate-300">
            <Link href="/" className="hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <span className="text-yellow-400">|</span>
            <span>Contact</span>
          </div>
        </motion.div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 lg:px-12">
        {/* Soft background glow */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-yellow-50 blur-3xl opacity-60" />

        <div className="relative mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">
          {/* LEFT SIDE – Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <span className="mb-3 inline-block rounded-full bg-yellow-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-yellow-700">
                Get in Touch
              </span>
              <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
                Stay in Touch
              </h2>
              <p className="mt-4 max-w-md text-lg text-slate-600">
                Our team is ready to assist you. Reach out via any of the channels below.
              </p>
            </div>

            <div className="space-y-10">
              {/* Address 1 */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-yellow-600 text-xl" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-slate-900">
                    Office in Islamabad
                  </h3>
                  <p className="leading-7 text-slate-600">
                    OFFICE # 14, FRIENDS MARKET, PARK RD, NEAR GERRY'S FEDEX,
                    CHATTA BAKHTAWAR, ISLAMABAD, 44000, PAKISTAN
                  </p>
                </div>
              </div>

              {/* Address 2 */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-yellow-600 text-xl" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-slate-900">
                    Office in Lahore
                  </h3>
                  <p className="leading-7 text-slate-600">
                    283M Ibrahim Plaza behind BLS Visa Office, DHA Phase 6,
                    Lahore
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <FaPhoneAlt className="text-yellow-600 text-lg" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-slate-900">
                    Phone
                  </h3>
                  <p className="text-slate-600">0331-5166421</p>
                  <p className="text-slate-600">051-2650033</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <FaEnvelope className="text-yellow-600 text-lg" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-slate-900">
                    Email
                  </h3>
                  <p className="text-slate-600">info@transworldintl.com.pk</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE – Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-10">
              <span className="mb-3 inline-block rounded-full bg-yellow-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-yellow-700">
                Send a Message
              </span>
              <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
                Contact Us Right Now
              </h2>
              <p className="mt-4 max-w-md text-lg text-slate-600">
                Fill out the form and we’ll get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-7">
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-14 rounded-2xl border-2 border-slate-200 bg-slate-50 px-6 outline-none transition-all duration-300 focus:border-yellow-400 focus:bg-white focus:shadow-md"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full h-14 rounded-2xl border-2 border-slate-200 bg-slate-50 px-6 outline-none transition-all duration-300 focus:border-yellow-400 focus:bg-white focus:shadow-md"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject"
                className="w-full h-14 rounded-2xl border-2 border-slate-200 bg-slate-50 px-6 outline-none transition-all duration-300 focus:border-yellow-400 focus:bg-white focus:shadow-md"
              />

              {/* Message */}
              <textarea
                rows={7}
                placeholder="Enter your message"
                className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 p-6 outline-none transition-all duration-300 focus:border-yellow-400 focus:bg-white focus:shadow-md"
              />

              {/* Button */}
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-yellow-600 to-amber-500 px-10 py-4 text-base font-bold text-white shadow-xl shadow-yellow-900/20 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400/50"
              >
                <span className="relative z-10">Send Message</span>
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="w-full relative">
        <div className="absolute inset-0 pointer-events-none border-t-8 border-yellow-100" />
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13287.140921339083!2d73.106433!3d33.684422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf7b5e8d4c6f%3A0x9b6d4f1c31b5dce4!2sIslamabad!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
          width="100%"
          height="500"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 block"
        />
      </section>
    </div>
  );
}