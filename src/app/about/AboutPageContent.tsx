"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Award,
  Globe,
  Heart,
  Zap,
  Shield,
  Target,
  X,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const values = [
  {
    icon: Heart,
    title: "Client-First",
    description:
      "Your success is my success. Every decision I make is guided by what's best for your business.",
  },
  {
    icon: Zap,
    title: "Speed & Quality",
    description:
      "I don't compromise. Fast delivery timelines with premium quality code and design.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description:
      "No hidden fees, no jargon, no surprises. You know exactly what you're getting at every stage.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Target },
  { value: "30+", label: "Happy Clients", icon: Users },
  { value: "3+", label: "Years Experience", icon: Award },
  { value: "100%", label: "Delivery Rate", icon: Globe },
];

const teamMembers = [
  {
    name: "Amit Kumar",
    role: "Founder & Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    bio: "With over 3 years of web development experience, Amit leads the ShivxTech team with a strong focus on high-performance infrastructure, modern web practices, and driving real results for every client."
  },
  {
    name: "Priyanka Singh",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    bio: "Priyanka crafts beautiful, user-centered digital experiences. She turns complex requirements into intuitive and engaging interfaces that captivate users and lower bounce rates."
  },
  {
    name: "Rahul Verma",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    bio: "Rahul specializes in creating seamless, responsive frontends. He ensures that our designs are translated perfectly into code, focusing on accessibility, micro-interactions, and fast load times."
  }
];

// ... Inside component:
export default function AboutPageContent() {
  const whatsappUrl = getWhatsAppUrl("consultancy");
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  // Close modal on escape key
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setSelectedMember(null);
    });
  }

  return (
    <>
      {/* Hero sub-banner */}
      <section className="bg-primary py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full glow-blue opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow inline-block mb-4">About Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 tracking-tight">
              We are <span className="accent-text">ShivxTech</span>
            </h1>
            <p className="text-text-muted text-base max-w-lg mx-auto leading-relaxed">
              A dedicated team of cloud-based web developers helping businesses build their digital presence with modern, fast websites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* My Story */}
      <section className="section bg-surface">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow inline-block mb-4">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                Why We Started <span className="accent-text">ShivxTech</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                We started ShivxTech with one simple belief: every business —
                big or small — deserves a professional online presence that
                actually drives results.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                Led by Founder Amit Kumar, our team saw too many businesses stuck with slow, outdated websites
                that didn&apos;t convert. So we set out to change that — building
                fast, modern websites with clear pricing and zero complexity.
              </p>
              <p className="text-text-muted leading-relaxed">
                Today, our team has helped 50+ businesses across India transform
                their digital presence. As a cloud-based agency, we work with
                clients from anywhere — all you need is an idea, and we&apos;ll
                bring it to life.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="card flex items-center justify-center p-8"
              style={{
                background: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
              }}
            >
              <div className="text-center w-full">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white shadow-lg"
                  style={{ background: "linear-gradient(135deg, #00E1FF, #007BFF)" }}
                >
                  AK
                </div>
                <p className="text-white text-lg font-semibold">Amit Kumar & Team</p>
                <p className="text-text-faint text-sm mt-1">Founding Director</p>
                <div className="mt-4 pt-4 border-t border-white/5 flex flex-col items-center">
                  <p className="text-text-muted text-sm italic w-full">"Great design is a collaborative effort."</p>
                </div>
                <a
                  href="https://instagram.com/shivxtech.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-accent text-sm font-medium hover:underline underline-offset-4"
                >
                  @shivxtech.online
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="section bg-primary section-divider">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <span className="eyebrow inline-block mb-4">Our Team</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Meet the People Behind <span className="accent-text">ShivxTech</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card overflow-hidden group cursor-pointer hover:border-accent/40"
                onClick={() => setSelectedMember(member)}
              >
                <div className="aspect-[4/5] overflow-hidden bg-surface-raised relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-white text-lg font-bold">{member.name}</h3>
                  <p className="text-accent text-sm font-medium mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Member Modal */}
        <AnimatePresence>
          {selectedMember && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-sm"
                onClick={() => setSelectedMember(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="card relative z-10 w-full max-w-2xl overflow-hidden p-0 shadow-2xl glass-panel border border-[#00E1FF]/20"
              >
                <div className="flex justify-end p-4 absolute top-0 right-0 z-20">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="p-2 rounded-full bg-surface-raised text-text-muted hover:text-white transition-colors border border-white/5"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-2/5 aspect-square md:aspect-auto">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-3/5 flex flex-col justify-center">
                    <span className="eyebrow inline-block mb-2">{selectedMember.role}</span>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {selectedMember.name}
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      {selectedMember.bio}
                    </p>
                    <div className="mt-8 pt-6 border-t border-white/5">
                      <Button href={whatsappUrl} variant="outline" size="sm" className="w-full sm:w-auto">
                        Say Hello
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* Values */}
      <section className="section bg-surface section-divider">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <span className="eyebrow inline-block mb-4">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="card p-7 text-center"
            >
              <div className="icon-box icon-box-lg mx-auto mb-5">
                <Heart size={26} strokeWidth={1.5} className="text-accent" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-3">Client-First</h3>
              <p className="text-text-muted text-sm leading-relaxed">Your success is our success. Every decision we make is guided by what's best for your business.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-7 text-center"
            >
              <div className="icon-box icon-box-lg mx-auto mb-5">
                <Zap size={26} strokeWidth={1.5} className="text-accent" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-3">Speed & Quality</h3>
              <p className="text-text-muted text-sm leading-relaxed">We don't compromise. Fast delivery timelines with premium quality code and design.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-7 text-center"
            >
              <div className="icon-box icon-box-lg mx-auto mb-5">
                <Shield size={26} strokeWidth={1.5} className="text-accent" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-3">Transparency</h3>
              <p className="text-text-muted text-sm leading-relaxed">No hidden fees, no jargon, no surprises. You know exactly what you're getting at every stage.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="section bg-surface">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="icon-box icon-box-md mx-auto mb-4">
                  <stat.icon size={22} strokeWidth={1.5} className="text-accent" />
                </div>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-text-faint text-xs mt-1.5">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary section-divider text-center">
        <div className="mx-auto max-w-xl px-6 sm:px-8">
          <h2 className="text-3xl font-bold text-white mb-5">
            Let&apos;s Work Together
          </h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            Ready to start your project? We&apos;d love to hear from you.
          </p>
          <Button href={whatsappUrl} size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
