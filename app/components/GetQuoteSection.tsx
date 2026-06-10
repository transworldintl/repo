"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function GetQuoteSection() {
  return (
    <motion.section
      id="get-quote"
      className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 lg:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={fadeUp}
    >
      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative ml-20">
          <div className="w-[400px] h-[400px] relative rounded-md overflow-hidden">
            <img
              src="/img_promo2.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <p className="text-[12px] tracking-[0.35em] text-[#1f2a44] font-semibold">
              WE WORK FOR YOU
            </p>
            <span className="block h-[2px] w-16 bg-yellow-500"></span>
          </div>

          <p className="text-[#6b7280] text-[15px] leading-7 mb-6 max-w-xl">
            We deliver translations of documents like Marriage Certificates,
            Affidavits, FIR’s, Birth Certificates, B-form, NADRA Identity
            Cards, Passport, Court Rulings, Court Order, Court Proceedings,
            Employment Contracts, Incumbency Certificates, Property Documents,
            Power of Attorneys and Warrants, NADRA documents, Polio Cards.
          </p>

          <p className="text-[#6b7280] text-[15px] leading-7 mb-6 max-w-xl">
            We have professional linguists in the Italian & French language who
            have very vast experience in their fields. Transworld always tries
            to guide people as per the Embassy’s requirement. We check the
            documents before booking to facilitate you in a better way.
          </p>

          <p className="text-[#6b7280] text-[15px] leading-7 max-w-xl">
            The Confidentiality of our client’s sensitive information is of
            prime importance to us. We are extremely careful about the
            information of our clients. We make sure to take care of our
            client’s information.
          </p>
        </div>
      </div>
    </motion.section>
  );
}