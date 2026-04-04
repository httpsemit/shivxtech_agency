import type { Metadata } from "next";
import PortfolioPageContent from "./PortfolioPageContent";

export const metadata: Metadata = {
  title: "Our Work — Project Portfolio",
  description:
    "See how we've helped businesses across various industries including Health, Real Estate, Education, and Retail with modern web solutions.",
  alternates: {
    canonical: "https://shivxtech.online/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
