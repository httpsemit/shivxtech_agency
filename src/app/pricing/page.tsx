import type { Metadata } from "next";
import PricingPageContent from "./PricingPageContent";

export const metadata: Metadata = {
  title: "Pricing Packages — Budget-Friendly Website Solutions",
  description:
    "Compare our transparent pricing plans: Starter, Pro, and Premium packages designed to fit your business growth and technical requirements.",
  alternates: {
    canonical: "https://shivxtech.online/pricing",
  },
};

export default function PricingPage() {
  return <PricingPageContent />;
}
