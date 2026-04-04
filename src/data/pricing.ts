import { getWhatsAppUrl } from "@/lib/whatsapp";

export type PricingPackage = {
  name: "Starter" | "Pro" | "Premium";
  price: string;
  description: string;
  features: { text: string; included: boolean }[];
  isMostPopular: boolean;
  ctaLabel: string;
  ctaLink: string;
};

export const packages: PricingPackage[] = [
  {
    name: "Starter",
    price: "₹24,999",
    description: "Perfect for small businesses and local shops getting started online.",
    features: [
      { text: "Up to 5 pages", included: true },
      { text: "Mobile responsive design", included: true },
      { text: "Basic SEO setup", included: true },
      { text: "Contact form", included: true },
      { text: "2 revisions", included: true },
      { text: "1 month support", included: true },
      { text: "CMS integration", included: false },
      { text: "E-commerce", included: false },
    ],
    isMostPopular: false,
    ctaLabel: "Get Started",
    ctaLink: getWhatsAppUrl("consultancy"),
  },
  {
    name: "Pro",
    price: "₹49,999",
    description: "Ideal for growing businesses that need more features and flexibility.",
    features: [
      { text: "Up to 10 pages", included: true },
      { text: "Mobile responsive design", included: true },
      { text: "Full SEO setup", included: true },
      { text: "Contact form", included: true },
      { text: "4 revisions", included: true },
      { text: "3 months support", included: true },
      { text: "CMS integration", included: true },
      { text: "E-commerce", included: false },
    ],
    isMostPopular: true,
    ctaLabel: "Most Popular",
    ctaLink: getWhatsAppUrl("consultancy"),
  },
  {
    name: "Premium",
    price: "₹99,999",
    description: "Full-featured solution for businesses needing e-commerce and custom builds.",
    features: [
      { text: "Unlimited pages", included: true },
      { text: "Mobile responsive design", included: true },
      { text: "Full SEO + ongoing", included: true },
      { text: "Contact form + CRM", included: true },
      { text: "Unlimited revisions", included: true },
      { text: "6 months support", included: true },
      { text: "CMS integration", included: true },
      { text: "E-commerce store", included: true },
    ],
    isMostPopular: false,
    ctaLabel: "Let's Talk",
    ctaLink: getWhatsAppUrl("consultancy"),
  },
];
