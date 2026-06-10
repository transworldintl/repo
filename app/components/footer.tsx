"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { languageCards } from "../data";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#13131a] text-white px-6 pt-24 pb-8 sm:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* ===== COLUMN 1 – COMPANY INFO ===== */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/Logo.png"
                alt="Transworld Translation footer logo"
                width={200}
                height={70}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-sm leading-7 text-slate-400">
              Certified translation services in Islamabad. Embassy-authorized
              translations for all major languages. Fast, accurate, and
              confidential.
            </p>

            <div className="space-y-4 text-sm">
              <a
                href="mailto:info@transworldintl.com.pk"
                className="flex items-center gap-3 text-slate-400 transition-colors hover:text-yellow-500"
              >
                <Mail className="h-4 w-4 shrink-0 text-yellow-500" />
                info@transworldintl.com.pk
              </a>

              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
                <span>
                  Office # 14, Friends Market, Park Rd, near Gerry&apos;s Fedex,
                  Chatta Bakhtawar, Islamabad
                </span>
              </div>

              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
                <span>
                  283MB Ibrahim Plaza behind BLS Visa Office, DHA Phase 6,
                  Lahore
                </span>
              </div>
            </div>
          </div>

          {/* ===== COLUMN 2 – QUICK LINKS ===== */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Quick Links</h4>

            <ul className="space-y-4">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/components/about" },
                { label: "Services", href: "/services" },
                { label: "Courses", href: "/all_courses" },
                { label: "Contact Us", href: "/components/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-yellow-500"
                  >
                    <ChevronRight className="h-3 w-3 text-yellow-600 transition-transform duration-200 group-hover:translate-x-0.5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== COLUMN 3 – TRANSLATION SERVICES ===== */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Translation Services</h4>

            <ul className="space-y-4">
              {[
                { label: "Translation", href: "/services/translation" },
                { label: "Interpreting", href: "/services/interpreting" },
                { label: "Proofreading", href: "/services/proofreading" },
                { label: "Localization", href: "/services/localization" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-yellow-500"
                  >
                    <ChevronRight className="h-3 w-3 text-yellow-600 transition-transform duration-200 group-hover:translate-x-0.5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="mb-6 mt-8 text-lg font-bold">Languages</h4>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {languageCards.map((lang) => (
                <Link
                  key={lang.slug}
                  href={`/language/${lang.slug}`}
                  className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-yellow-500"
                >
                  <span className="h-5 w-5 shrink-0 overflow-hidden rounded-full border border-slate-600">
                    <img
                      src={lang.flag}
                      alt={lang.name}
                      className="h-full w-full object-cover"
                    />
                  </span>
                  {lang.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ===== COLUMN 4 – CONTACT ===== */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">
              Call Now For <br /> Services!
            </h4>

            <a
              href="tel:0331-5166421"
              className="flex items-center gap-3 text-2xl font-bold text-yellow-500 transition-colors hover:text-yellow-400"
            >
              <Phone className="h-6 w-6" />
              0331-5166421
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/Transworld21/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877f2] text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-lg" />
              </a>

              <a
                href="https://www.instagram.com/transworld21/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
            </div>

            <Link
              href="/components/contact"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-600 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-yellow-500"
            >
              Get Free Quote
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Transworld Translation. All
            rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/components/about"
              className="transition-colors hover:text-yellow-500"
            >
              About
            </Link>
            <Link
              href="/services"
              className="transition-colors hover:text-yellow-500"
            >
              Services
            </Link>
            <Link
              href="/components/contact"
              className="transition-colors hover:text-yellow-500"
            >
              Contact
            </Link>
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-yellow-500"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
