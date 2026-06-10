"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { courses } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function LanguageCoursesSection() {
  return (
    <motion.section
      id="language-courses"
      className="bg-[#f6f7fb] px-6 py-24 sm:px-10 lg:px-12 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={fadeUp}
    >
      <h2 className="text-[34px] font-bold text-[#1f2a44] mb-3">
        Language Courses
      </h2>
      <p className="text-[#6b7280] text-[14px] max-w-xl mx-auto mb-16">
        With the help of our professional teachers and translators
        <br />
        you will be able to sharpen your skills in no time at all
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-white shadow-sm w-full">
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[230px] object-cover"
              />
              <Link href={`/courses/${course.slug}`}>
                <button className="absolute right-4 bottom-[-22px] bg-[#d4a24c] text-white text-[12px] w-12 h-12 flex items-center justify-center rounded-full">
                  {course.short}
                </button>
              </Link>
            </div>
            <div className="pt-12 pb-8 px-6 text-left min-h-[180px]">
              <h3 className="text-[20px] font-semibold text-[#1f2a44] mb-3">
                {course.title}
              </h3>
              <p className="text-[#6b7280] text-[14px] leading-6">
                {course.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <Link
          href="/components/contact"
          className="inline-block mt-5 rounded-md bg-yellow-600 px-5 py-2 text-sm font-semibold text-white group relative overflow-hidden"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            CONTACT US FOR MORE INFO
          </span>
          <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full" />
        </Link>
      </div>
    </motion.section>
  );
}