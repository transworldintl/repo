"use client";

import { useEffect, useState, useCallback } from "react";
import {
  FaStar,
  FaChevronRight,
  FaChevronLeft,
  FaGoogle,
  FaCheckCircle,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { reviews as staticReviews } from "../data"; // fallback
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Replace with your actual Google review link
const GOOGLE_REVIEW_LINK =
  "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(staticReviews);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchReviews = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/reviews", { next: { revalidate: 3600 } });
      const data = await res.json();
      if (data.reviews && data.reviews.length > 0) {
        setReviews(data.reviews);
      } else {
        setReviews(staticReviews);
      }
      setError(false);
    } catch (err) {
      console.error("Failed to fetch reviews", err);
      setError(true);
      setReviews(staticReviews);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  // Auto‑refresh every 30 minutes
  useEffect(() => {
    const interval = setInterval(fetchReviews, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchReviews]);

  // Skeleton loader matching the new card style
  const SkeletonCard = () => (
    <div className="bg-white rounded-3xl p-6 h-[230px] flex flex-col justify-between shadow-sm animate-pulse border border-yellow-100">
      <div>
        <div className="flex items-start gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-24" />
            <div className="h-3 bg-gray-200 rounded w-32" />
          </div>
        </div>
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-200 rounded-full" />
          ))}
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-5/6" />
          <div className="h-3 bg-gray-200 rounded w-3/4" />
        </div>
      </div>
      <div className="mt-3 h-4 bg-gray-200 rounded w-20 self-start" />
    </div>
  );

  return (
    <motion.section
      id="reviews"
      className="relative overflow-hidden bg-gradient-to-b from-white to-yellow-50/50 px-6 py-24 sm:px-10 lg:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={fadeUp}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-yellow-100 blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-amber-50 blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-3 inline-block rounded-full bg-yellow-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-yellow-700">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            Real feedback from real clients. Your satisfaction is our priority.
          </p>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-yellow-500" />
        </motion.div>

        {/* Google rating summary & CTA */}
        <div className="bg-white rounded-3xl px-6 py-8 md:px-10 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10 shadow-lg border border-yellow-100">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-yellow-50 flex items-center justify-center">
              <FaGoogle className="text-2xl text-yellow-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800">
                Google Reviews
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-3xl font-extrabold text-slate-900">
                  5.0
                </span>
                <div className="flex items-center gap-1 text-yellow-500 text-xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-gray-500 text-sm font-medium">
                  ({reviews.length} reviews)
                </span>
              </div>
            </div>
          </div>
          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-yellow-600 to-amber-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-yellow-900/20 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaStar className="text-yellow-200" />
              Leave a Review
            </span>
            <span className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700" />
          </a>
        </div>

        {/* Slider */}
        <div className="relative">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {reviews.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-3xl p-6 h-[240px] flex flex-col justify-between shadow-md border border-yellow-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-300 group">
                    <div>
                      {/* User info */}
                      <div className="flex items-start gap-3 mb-4">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 rounded-full object-cover shrink-0"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-white text-lg font-bold shrink-0">
                            {item.letter}
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-base text-slate-800">
                              {item.name}
                            </h4>
                            <FaCheckCircle className="text-yellow-500 text-xs" />
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <FaGoogle className="text-yellow-600 text-xs" />
                            <span className="text-gray-500 text-xs">
                              {item.time}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex items-center gap-1 text-yellow-500 text-sm mb-3">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>

                      {/* Review text */}
                      <p className="text-slate-600 leading-6 text-sm line-clamp-3 min-h-[72px]">
                        {item.review}
                      </p>
                    </div>

                    {/* Read more */}
                    <button className="mt-2 text-amber-600 text-sm font-semibold hover:text-amber-700 hover:underline self-start transition-colors">
                      Read more
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Navigation arrows – now with gold style */}
          <button className="custom-prev absolute top-1/2 -left-5 z-20 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-yellow-200 flex items-center justify-center text-yellow-600 hover:bg-yellow-50 hover:border-yellow-400 shadow-lg transition-all duration-300">
            <FaChevronLeft className="text-sm" />
          </button>
          <button className="custom-next absolute top-1/2 -right-5 z-20 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-yellow-200 flex items-center justify-center text-yellow-600 hover:bg-yellow-50 hover:border-yellow-400 shadow-lg transition-all duration-300">
            <FaChevronRight className="text-sm" />
          </button>
        </div>

        {/* Fallback note (only if error) */}
        {error && (
          <p className="text-center text-xs text-gray-400 mt-4">
            Showing cached reviews. Live data could not be loaded.
          </p>
        )}
      </div>
    </motion.section>
  );
}