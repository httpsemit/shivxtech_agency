export type Testimonial = {
  id: string;
  name: string;
  company: string;
  role: string;
  rating: number;
  text: string;
  avatarColor: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    company: "Bella Cucina",
    role: "Owner, Bella Cucina Restaurant",
    rating: 5,
    text: "They transformed our online presence completely. Our reservations increased by 40% within the first month of launching the new website. Incredible team to work with!",
    avatarColor: "#3B82F6",
  },
  {
    id: "t2",
    name: "Rahul Verma",
    company: "IronFit Gym",
    role: "Founder, IronFit Gym",
    rating: 5,
    text: "Professional, fast, and they truly understood our vision. The membership portal they built has streamlined our entire business. Highly recommended for any fitness business.",
    avatarColor: "#22C55E",
  },
  {
    id: "t3",
    name: "Anita Desai",
    company: "Skyline Realty",
    role: "Director, Skyline Realty",
    rating: 5,
    text: "The property listing platform exceeded our expectations. The virtual tour integration and advanced search filters have made house hunting effortless for our clients.",
    avatarColor: "#A78BFA",
  },
];
