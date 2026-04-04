import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ShivxTech — a cloud-based development team led by Amit Kumar. We're dedicated to building fast, high-quality websites for businesses of all sizes.",
  alternates: {
    canonical: "https://shivxtech.online/about",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
