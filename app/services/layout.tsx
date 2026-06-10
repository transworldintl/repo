import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive translation services in Pakistan – Translation, Interpreting, Localization, Proofreading. Embassy-authorised. Certified linguists. Get a free quote today.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
