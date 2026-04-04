export type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "web-development",
    icon: "Monitor",
    title: "Web Development",
    description:
      "Custom websites built with modern technologies. Fast, responsive, and optimized for conversions.",
  },
  {
    id: "ecommerce",
    icon: "ShoppingBag",
    title: "E-Commerce Solutions",
    description:
      "Full-featured online stores with secure payments, inventory management, and seamless checkout experiences.",
  },
  {
    id: "landing-pages",
    icon: "Layers",
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to capture leads and drive action for your campaigns.",
  },
  {
    id: "website-redesign",
    icon: "LayoutDashboard",
    title: "Website Redesign",
    description:
      "Transform your outdated website into a modern, high-performing digital experience that converts.",
  },
  {
    id: "seo-optimization",
    icon: "Search",
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies to improve your search rankings, organic traffic, and online visibility.",
  },
];
