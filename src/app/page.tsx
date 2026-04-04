import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import HowItWorks from "@/components/sections/HowItWorks";
import PricingCards from "@/components/sections/PricingCards";
import Testimonials from "@/components/sections/Testimonials";
import AboutSnapshot from "@/components/sections/AboutSnapshot";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Modern Web Development Agency",
  description: "High-performance websites that grow your business. ShivxTech specializes in modern, fast, and conversion-optimized web designs across India.",
  alternates: {
    canonical: "https://shivxtech.online",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <PortfolioPreview />
      <HowItWorks />
      <PricingCards />
      <Testimonials />
      <AboutSnapshot />
      <CTABanner />
    </>
  );
}
