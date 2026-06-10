"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { languageCards } from "../data"; // adjust path if needed (e.g. @/app/data)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on Escape & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenu(false);
    };
    if (mobileMenu) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="Homepage">
            <Image
              src="/Logo.png"
              alt="Transworld Translation logo – authorised Italian translation services Pakistan"
              width={140}
              height={56}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[0.95rem] font-semibold uppercase tracking-widest text-white">
            {/* Home */}
            <Link
              href="/"
              className="relative py-2 transition-colors duration-200 hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
            >
              Home
            </Link>

            {/* About – simple link, no dropdown */}
            <Link
              href="/components/about"
              className="relative py-2 transition-colors duration-200 hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
            >
              About
            </Link>

            {/* Services – dropdown with actual languages */}
            <div className="group relative">
              <Link
                href="/services"
                className="inline-flex items-center gap-1 py-2 transition-colors duration-200 hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              >
                Services
                <svg
                  className="h-3 w-3 fill-current opacity-70 group-hover:opacity-100"
                  viewBox="0 0 10 6"
                >
                  <path d="M0 0l5 6 5-6z" />
                </svg>
              </Link>

              {/* Dropdown panel */}
              <div className="invisible absolute left-1/2 top-full mt-4 z-50 w-[95vw] md:w-[900px] -translate-x-1/2 rounded-2xl bg-white p-8 text-gray-800 opacity-0 shadow-2xl shadow-black/20 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-2">
                <h3 className="mb-6 text-2xl font-bold text-yellow-600">
                  Our Translation Services
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {languageCards.map((lang) => (
                    <Link
                      key={lang.slug}
                      href={`/language/${lang.slug}`}
                      className="flex items-center gap-3 rounded-lg p-3 transition-all duration-200 hover:bg-yellow-50 hover:shadow-sm group/item"
                    >
                      <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-white shadow-sm">
                        <img
                          src={lang.flag}
                          alt={lang.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-800 group-hover/item:text-yellow-700">
                        {lang.name} Translation
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact – simple link */}
            <Link
              href="/components/contact"
              className="relative py-2 transition-colors duration-200 hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA – much bigger and prominent */}
          <div className="hidden lg:block">
            <Link
              href="/components/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-yellow-600 to-amber-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-yellow-900/30 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400/50"
            >
              <span className="relative z-10">Translate Now</span>
              {/* subtle shimmer effect */}
              <span className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700" />
            </Link>
          </div>

          {/* Mobile menu button (hamburger) */}
          <button
            className="lg:hidden p-2 text-white transition-colors hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
            onClick={() => setMobileMenu(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenu}
          >
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
              <rect width="28" height="2" fill="currentColor" rx="1" />
              <rect y="9" width="28" height="2" fill="currentColor" rx="1" />
              <rect y="18" width="28" height="2" fill="currentColor" rx="1" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <div
          className="fixed inset-0 z-[998] flex flex-col items-center justify-center gap-8 bg-black/95 text-white animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setMobileMenu(false)}
            className="absolute top-6 right-6 text-2xl p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          <nav className="flex flex-col items-center gap-6 text-xl font-semibold">
            <Link
              href="/"
              onClick={() => setMobileMenu(false)}
              className="hover:text-yellow-400 transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/components/about"
              onClick={() => setMobileMenu(false)}
              className="hover:text-yellow-400 transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenu(false)}
              className="hover:text-yellow-400 transition-colors"
            >
              SERVICES
            </Link>
            <Link
              href="/components/contact"
              onClick={() => setMobileMenu(false)}
              className="hover:text-yellow-400 transition-colors"
            >
              CONTACT
            </Link>
            <Link
              href="/components/contact"
              onClick={() => setMobileMenu(false)}
              className="mt-4 rounded-full bg-gradient-to-r from-yellow-600 to-amber-500 px-10 py-4 text-lg font-bold hover:scale-105 active:scale-95 transition-transform focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400/50"
            >
              Translate Now
            </Link>
          </nav>
        </div>
      )}

      {/* Simple fade-in animation */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}