export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  industry: string;
  techStack: string[];
  liveUrl?: string;
  featured: boolean;
};

export const industryColors: Record<string, { bg: string; text: string }> = {
  Restaurant: { bg: "rgba(59,130,246,0.15)", text: "#93C5FD" },
  "Gym / Health": { bg: "rgba(34,197,94,0.15)", text: "#86EFAC" },
  "Real Estate": { bg: "rgba(167,139,250,0.15)", text: "#C4B5FD" },
  Hotel: { bg: "rgba(251,191,36,0.15)", text: "#FDE68A" },
  School: { bg: "rgba(249,115,22,0.15)", text: "#FDBA74" },
  Clinic: { bg: "rgba(20,184,166,0.15)", text: "#5EEAD4" },
  Tattoo: { bg: "rgba(239,68,68,0.15)", text: "#F87171" },
};

export const projects: Project[] = [
  {
    id: "ms-chello-yaku",
    title: "MS Chello Yaku Guest House",
    description:
      "A modern hotel booking website that allows users to explore rooms, check availability, and make reservations online.",
    image: "/images/portfolio/ms-chello-yaku.png",
    industry: "Hotel",
    techStack: ["Next.js", "TailwindCSS", "Firebase", "Resend", "Stripe"],
    liveUrl: "https://yakustay.online",
    featured: true,
  },
  {
    id: "artfibre-tattoos",
    title: "Artfibre Tattoos",
    description:
      "A professional tattoo studio website featuring artist portfolios, booking inquiries, and studio information.",
    image: "/images/portfolio/artfibre-tattoos.png",
    industry: "Tattoo",
    techStack: ["Next.js", "TailwindCSS"],
    liveUrl: "https://artfibretattoos.vercel.app/",
    featured: true,
  },
  {
    id: "bella-cucina",
    title: "Bella Cucina",
    description:
      "A modern restaurant website with online reservations, menu display, and customer reviews integration.",
    image: "/images/portfolio/bella-cucina.webp",
    industry: "Restaurant",
    techStack: ["Next.js", "Tailwind", "Stripe"],
    liveUrl: "#",
    featured: true,
  },
  {
    id: "ironfit-gym",
    title: "IronFit Gym",
    description:
      "Membership management platform with class scheduling, trainer profiles, and online payment system.",
    image: "/images/portfolio/ironfit-gym.webp",
    industry: "Gym / Health",
    techStack: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    featured: true,
  },
  {
    id: "skyline-realty",
    title: "Skyline Realty",
    description:
      "Property listing platform with advanced search, virtual tours, and agent management dashboard.",
    image: "/images/portfolio/skyline-realty.webp",
    industry: "Real Estate",
    techStack: ["Next.js", "Supabase", "Mapbox"],
    liveUrl: "#",
    featured: true,
  },
  {
    id: "grand-hotel",
    title: "The Grand Hotel",
    description:
      "Luxury hotel booking website with room showcase, amenity highlights, and integrated booking engine.",
    image: "/images/portfolio/grand-hotel.webp",
    industry: "Hotel",
    techStack: ["Next.js", "Tailwind", "Stripe"],
    featured: false,
  },
  {
    id: "bright-academy",
    title: "Bright Academy",
    description:
      "Educational institution website with course catalog, admissions portal, and parent dashboard.",
    image: "/images/portfolio/bright-academy.webp",
    industry: "School",
    techStack: ["React", "Firebase", "Tailwind"],
    featured: false,
  },
];
