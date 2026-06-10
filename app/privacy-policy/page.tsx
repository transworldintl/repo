"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section
        className="relative flex min-h-[420px] items-center justify-center overflow-hidden px-6 text-white"
        style={{
          backgroundImage: "url('/Services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl font-bold uppercase tracking-wide sm:text-5xl">
            Privacy Policy
          </h1>
          <div className="mt-4 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-200">
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
            <span>|</span>
            <span>PRIVACY POLICY</span>
          </div>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-24 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10 text-sm leading-7 text-slate-600"
          >
            <p className="text-base">
              <strong>Transworld Translation (Pvt) Ltd</strong> (&ldquo;we,&rdquo;
              &ldquo;our,&rdquo; &ldquo;us&rdquo;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website or use our
              translation services.
            </p>

            {/* 1. Information We Collect */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                1. Information We Collect
              </h2>
              <p>We may collect the following types of information:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Identification Information:</strong> Name, email
                  address, phone number, postal address, and CNIC/NICOP/Passport
                  details when you request a quote or place an order.
                </li>
                <li>
                  <strong>Document Data:</strong> The documents you submit for
                  translation, which may contain personal or sensitive information.
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing details processed
                  through third-party payment gateways. We do not store credit/debit
                  card numbers on our servers.
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type, device
                  information, and browsing activity collected via cookies and
                  analytics tools.
                </li>
              </ul>
            </div>

            {/* 2. How We Use Your Information */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                2. How We Use Your Information
              </h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>To provide translation and interpretation services.</li>
                <li>To process payments and deliver completed translations.</li>
                <li>To communicate with you regarding your orders and inquiries.</li>
                <li>To improve our website, services, and customer experience.</li>
                <li>To comply with legal obligations and regulatory requirements.</li>
                <li>To send service-related updates and promotional materials (with your consent).</li>
              </ul>
            </div>

            {/* 3. Cookies */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                3. Cookies
              </h2>
              <p>
                Our website uses cookies and similar tracking technologies to enhance
                your browsing experience, analyze site traffic, and understand where
                our visitors come from. Cookies are small text files stored on your
                device by your web browser.
              </p>
              <p className="mt-3">We use the following types of cookies:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for the website to
                  function properly.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors
                  interact with our website (e.g., Google Analytics).
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember your preferences and
                  settings.
                </li>
              </ul>
              <p className="mt-3">
                You can control and manage cookies through your browser settings.
                Disabling certain cookies may affect the functionality of our website.
              </p>
            </div>

            {/* 4. Third-Party Services */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                4. Third-Party Services
              </h2>
              <p>
                We may engage trusted third-party service providers to perform
                functions on our behalf, including:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Payment processing (via secure third-party gateways).</li>
                <li>Email communication and marketing platforms.</li>
                <li>Website analytics (e.g., Google Analytics).</li>
                <li>Cloud storage and data backup services.</li>
              </ul>
              <p className="mt-3">
                These third parties have access to your personal information only to
                perform specific tasks on our behalf and are obligated not to disclose
                or use it for any other purpose. We ensure that all third-party
                providers comply with applicable data protection laws.
              </p>
              <p className="mt-3">
                We do not sell, trade, or otherwise transfer your personal information
                to third parties without your consent, except as required by law.
              </p>
            </div>

            {/* 5. Data Security */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. These measures include
                encryption, secure servers, access controls, and regular security
                audits.
              </p>
              <p className="mt-3">
                However, no method of transmission over the internet or electronic
                storage is 100% secure. While we strive to protect your data, we
                cannot guarantee absolute security.
              </p>
            </div>

            {/* 6. Data Retention */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                6. Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as necessary to
                fulfill the purposes for which it was collected, including legal,
                accounting, or reporting requirements. Translated documents and
                associated data are retained for a period of up to three years after
                project completion, after which they are securely deleted or
                anonymized.
              </p>
            </div>

            {/* 7. Your Rights */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                7. Your Rights
              </h2>
              <p>
                Depending on applicable law, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>The right to access your personal data.</li>
                <li>The right to rectify inaccurate or incomplete data.</li>
                <li>The right to request deletion of your data.</li>
                <li>The right to restrict or object to processing.</li>
                <li>The right to data portability.</li>
                <li>The right to withdraw consent at any time.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us using the
                information provided below.
              </p>
            </div>

            {/* 8. Third-Party Links */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                8. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are not
                responsible for the privacy practices or content of such websites.
                We encourage you to review the privacy policies of any third-party
                sites you visit.
              </p>
            </div>

            {/* 9. Children&apos;s Privacy */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                9. Children&rsquo;s Privacy
              </h2>
              <p>
                Our services are not directed to individuals under the age of 18. We
                do not knowingly collect personal information from children. If we
                become aware that a child has provided us with personal data, we will
                take steps to delete it promptly.
              </p>
            </div>

            {/* 10. Changes to This Policy */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                10. Changes to This Privacy Policy
              </h2>
              <p>
                We reserve the right to update or modify this Privacy Policy at any
                time. Changes will be posted on this page with an updated revision
                date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* 11. Contact Us */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                11. Contact Us
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 space-y-2 rounded-lg bg-slate-50 p-6">
                <p>
                  <strong>Transworld Translation (Pvt) Ltd</strong>
                </p>
                <p>
                  <strong>Islamabad Office:</strong> Office # 14, Friends Market,
                  Park Rd, near Gerry&apos;s Fedex, Chatta Bakhtawar, Islamabad
                </p>
                <p>
                  <strong>Lahore Office:</strong> 283MB Ibrahim Plaza behind BLS Visa
                  Office, DHA Phase 6, Lahore
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:0331-5166421" className="text-yellow-600 hover:underline">
                    0331-5166421
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@transworldintl.com.pk"
                    className="text-yellow-600 hover:underline"
                  >
                    info@transworldintl.com.pk
                  </a>
                </p>
              </div>
            </div>

            <p className="pt-6 text-xs text-slate-400">
              Last updated: June 2026
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
