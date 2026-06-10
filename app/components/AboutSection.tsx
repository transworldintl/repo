"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="relative px-6 py-28 sm:px-10 lg:px-12 text-center text-white"
      style={{
        background:
          "linear-gradient(135deg, #1f1f25 0%, #2a2a31 40%, #1a1a1f 100%)",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={fadeUp}
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-20">
          <div className="flex flex-col items-center gap-3">
            <img src="/FAVORITE-BOOK.png" className="h-12 w-12" alt="Personal documents icon" />
            <p className="text-sm text-gray-300">Personal Documents</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src="/FILING-DOCUMENTS.png" className="h-12 w-12" alt="Business and legal translation icon" />
            <p className="text-sm text-gray-300">
              Business and Legal Translation
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src="/BUSINESS-PAPER.png" className="h-12 w-12" alt="Technical translation icon" />
            <p className="text-sm text-gray-300">Technical Translation</p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold tracking-wide sm:text-4xl">
          AUTHORIZED ITALIAN TRANSLATION
        </h2>

        <p className="mt-6 text-sm leading-7 text-gray-300">
          Transworld Translation (Pvt) Ltd is an authorized company by the Italian Embassy. We have vast experience in providing translations to people who would like to submit their documents in Italian Embassy.
        </p>

        <p className="mt-4 text-sm leading-7 text-gray-300">
          Our aim is to provide translations according to the Embassy's requirement. We facilitate people as much as we can.
        </p>

        <h3 className="mt-10 text-lg font-semibold text-white">
          General Requirements
        </h3>

        <ul className="mt-6 space-y-3 text-left text-sm text-gray-300">
          <li>• Documents should be in good condition and in a readable form. Torn papers will not be accepted by the Embassies.</li>
          <li>• Documents for submission to Embassies must be attested by the Ministry of Foreign Affairs, Pakistan.</li>
          <li>• Educational documents should be attested by IBCC (Matric & Inter Certificates) & HEC (Graduation Certificates) then the Ministry of Foreign Affairs, Pakistan will attest these certificates.</li>
        </ul>

        <p className="mt-6 text-sm text-gray-300">
          Translation Fee is charged in advance. Applicants sending their documents via courier can pay their fee online and dispatch a photocopy of the payment receipt along with their documents.
        </p>

        <div className="mt-10">
          <a
            href="/services"
            className="inline-block rounded-md bg-yellow-600 px-8 py-3 text-xs font-semibold tracking-wide text-white group relative overflow-hidden"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              MORE ABOUT SERVICES
            </span>
            <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </div>
    </motion.section>
  );
}