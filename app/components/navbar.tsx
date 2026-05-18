"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 overflow-x-hidden transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-20">

          {/* LEFT */}
          <div className="flex items-center gap-5">
            <Link href="/">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="h-14 w-auto object-contain"
              />
            </Link>

            <a
              href="https://wa.me/923315166421"
              className="hidden lg:flex items-center gap-2 text-white"
            >
              <FaPhone className="text-green-400" />
              <span className="font-semibold">0331-5166421</span>
            </a>
          </div>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">

            {/* HOME */}
            <Link href="/" className="hover:text-yellow-400">
              HOME
            </Link>

            {/* ABOUT */}
            <div className="group relative">
              <Link href="/components/about" className="hover:text-yellow-400">
                ABOUT
              </Link>

              <div className="
                invisible absolute left-1/2 top-9 z-50
                w-[95vw] md:w-[800px]
                -translate-x-1/2 rounded-2xl bg-yellow-600 p-6 text-white
                opacity-0 shadow-2xl transition-all duration-300
                group-hover:visible group-hover:opacity-100 group-hover:translate-y-2
              ">
                <h2 className="mb-4 text-2xl font-bold">
                  Transworld Translation
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">

                  <div>
                    <h3 className="font-bold mb-1">Company Overview</h3>
                    <p>
                      Transworld Translation is currently the best translation company in business for people around the globe. We are in contact with different embassies in Pakistan like French Embassy, Pakistan.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold mb-1">Objective</h3>
                    <p>
                      The main goal of our company is to introduce products and services that will make your daily life and dealings easier and satisfying. We are always thinking a step ahead for our clients’ needs.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold mb-1">Offer</h3>
                    <p>
                      We offer professional translation services with accuracy, speed, and reliability tailored to business and personal needs.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold mb-1">Founder</h3>
                    <p>
                      The founder has linguistics background and experience in embassy-level translation. Our team includes native & local experts ensuring 100% confidentiality.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* SERVICES */}
            <div className="group relative">
              <Link href="/services" className="hover:text-yellow-400">
                SERVICES
              </Link>

              <div className="
                invisible absolute left-1/2 top-9 z-50
                w-[95vw] md:w-[850px]
                -translate-x-1/2 rounded-2xl bg-yellow-600 p-6 text-white
                opacity-0 shadow-2xl transition-all duration-300
                group-hover:visible group-hover:opacity-100 group-hover:translate-y-2
              ">
                <h2 className="mb-4 text-2xl font-bold">
                  Our Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">

                  <div>
                    <h3 className="font-bold">Localization</h3>
                    <p>
                      Worldwide trade has united the world. You can buy something halfway across the globe from the comfort of your home...
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold">Proofreading</h3>
                    <p>
                      It can be quite a challenge to write papers, reports, CVs, thesis and other documents in English under deadlines...
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold">Interpreting</h3>
                    <p>
                      Interpretation services help communicate globally without language barriers in meetings and conferences...
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold">Translation</h3>
                    <p>
                      We find the best language specialists worldwide to ensure accuracy, quality, and client satisfaction every year.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* CONTACT */}
            <div className="group relative">
              <Link href="/components/contact" className="hover:text-yellow-400">
                CONTACT
              </Link>

              <div className="
                invisible absolute left-1/2 top-9 z-50 flex
                w-[95vw] md:w-[650px]
                -translate-x-1/2 overflow-hidden rounded-2xl bg-yellow-600
                text-white opacity-0 shadow-2xl transition-all duration-300
                group-hover:visible group-hover:opacity-100 group-hover:translate-y-2
              ">
                <div className="flex-1 p-6">
                  <h3 className="mb-3 text-2xl font-bold">
                    Stay in Touch
                  </h3>

                  <p>
                    OFFICE # 14, FRIENDS MARKET, ISLAMABAD, PAKISTAN
                  </p>

                  <p className="mt-2">
                    DHA Phase 6, Lahore
                  </p>
                </div>

                <div className="w-[220px] bg-black/20 p-6">
                  <p className="font-bold">Phone</p>
                  <p>0331-5166421</p>
                  <p>051-2650033</p>

                  <p className="font-bold mt-4">Email</p>
                  <p className="break-all">
                    info@transworldintl.com.pk
                  </p>
                </div>
              </div>
            </div>

          </nav>

          {/* RIGHT */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setShowLogin(true)}
              className="text-white hover:text-yellow-400 font-semibold"
            >
              LOGIN
            </button>

            <Link
              href="/components/contact"
              className="bg-yellow-600 text-white px-5 py-2 rounded-md font-semibold"
            >
              TRANSLATE NOW
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileMenu(true)}
          >
            ☰
          </button>

        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="fixed inset-0 z-[998] bg-black/95 flex flex-col items-center justify-center gap-6 text-white text-lg">
          
          <Link href="/" onClick={() => setMobileMenu(false)}>HOME</Link>
          <Link href="/components/about" onClick={() => setMobileMenu(false)}>ABOUT</Link>
          <Link href="/services" onClick={() => setMobileMenu(false)}>SERVICES</Link>
          <Link href="/components/contact" onClick={() => setMobileMenu(false)}>CONTACT</Link>

          <button
            onClick={() => {
              setShowLogin(true);
              setMobileMenu(false);
            }}
            className="text-yellow-400"
          >
            LOGIN
          </button>

          <button
            onClick={() => setMobileMenu(false)}
            className="absolute top-6 right-6 text-2xl"
          >
            <FaTimes />
          </button>
        </div>
      )}

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 z-[999] flex items-start justify-center bg-black/60 pt-28">
          <div className="w-[530px] bg-white shadow-2xl">
            <div className="flex justify-between items-center h-14 px-4 bg-gray-200">
              LOGIN
              <button onClick={() => setShowLogin(false)}>
                <FaTimes />
              </button>
            </div>

            <div className="p-6">
              <input className="w-full mb-4 p-3 border" placeholder="Login" />
              <input className="w-full mb-4 p-3 border" type="password" placeholder="Password" />

              <button className="w-full bg-yellow-600 text-white py-3">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}