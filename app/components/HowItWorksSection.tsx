"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HowItWorksSection() {
  return (
    <motion.section
      id="how-it-works"
      className="relative bg-cover bg-center px-6 py-28 sm:px-10 lg:px-12"
      style={{ backgroundImage: "url('/bg_serv1.jpg')" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={fadeUp}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative mx-auto max-w-7xl text-center text-white">
        <h2 className="text-4xl font-semibold sm:text-5xl">How It Works</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-200">
          All you have to do is send us an email with the document in question attached. <br />
          Our QA department would be more than happy to evaluate the document for clarity. <br />
          And related industry standards and would call you as soon as possible. <br />
          With confirmation.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4">
          {[
            {
              title: "Order",
              icon: "/ezgif1.png",
              text: "Your documents are checked briefly, If any detail is found wrong we ask clients to rectify them.",
            },
            {
              title: "Translate",
              icon: "/ezgif2.png",
              text: "We take deadlines seriously & make sure we deliver the project before time.",
            },
            {
              title: "Check",
              icon: "/ezgif3.png",
              text: "Your documents are not delivered until we proofread them multiple times.",
            },
            {
              title: "Deliver",
              icon: "/ezgif4.png",
              text: "We deliver translations with original documents for our client's ease.",
            },
          ].map((card, index) => (
            <div key={index} className="flip-card h-48 w-full">
              <div className="flip-inner">
                <div className="flip-front flex flex-col items-center justify-center bg-white text-slate-800">
                  <img
                    src={card.icon}
                    alt={`${card.title} step icon`}
                    className="h-10 w-10 object-contain"
                  />
                  <p className="mt-3 font-medium">{card.title}</p>
                </div>
                <div className="flip-back flex flex-col items-center justify-center bg-yellow-600 p-4 text-center text-white">
                  <p className="text-base font-semibold mb-2">{card.title}</p>
                  <p className="text-sm">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/components/contact"
            className="inline-block mt-5 rounded-md bg-yellow-600 px-5 py-2 text-sm font-semibold text-white group relative overflow-hidden"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              START TRANSLATING NOW
            </span>
            <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-inner {
          transform: rotateY(180deg);
        }
        .flip-front,
        .flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        .flip-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </motion.section>
  );
}