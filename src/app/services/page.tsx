import type { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Our Services — Web Development & SEO",
  description:
    "Explore our professional web services: Custom Next.js development, E-commerce stores, high-converting Landing Pages, and comprehensive SEO optimization.",
  alternates: {
    canonical: "https://shivxtech.online/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
