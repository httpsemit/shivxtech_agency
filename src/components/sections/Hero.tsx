"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, Star } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "4.9", label: "Client Rating", icon: true },
  { value: "2 wks", label: "Avg. Delivery" },
];

export default function Hero() {
  const whatsappUrl = getWhatsAppUrl("consultancy");

  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full glow-blue opacity-40" />
      <div className="absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] rounded-full glow-blue opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-20 sm:py-28 lg:py-36 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl flex flex-col items-center"
        >
          {/* Eyebrow badge */}
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.25)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold tracking-wide" style={{ color: "#93C5FD" }}>
              Web Development Agency
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-title mb-6">
            We Build Websites That{" "}
            <span className="accent-text">Drive Growth</span>
          </h1>

          {/* Subheadline */}
          <p className="text-text-muted text-base sm:text-lg mb-10 max-w-lg leading-relaxed">
            From stunning landing pages to full-featured e-commerce stores — we
            craft digital experiences that convert visitors into customers.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={whatsappUrl} size="lg">
              Book a Free Consultation
            </Button>
            <Button href="/portfolio" variant="ghost" size="lg">
              View Our Work <ArrowRight size={16} />
            </Button>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mt-16 lg:mt-20 inline-flex flex-wrap items-center justify-center gap-8 sm:gap-0 sm:divide-x sm:divide-border rounded-2xl bg-surface/50 backdrop-blur-sm px-6 py-5 sm:px-8"
          style={{ border: "1px solid rgba(51, 65, 85, 0.5)" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="sm:px-8 flex flex-col items-center first:sm:pl-0 last:sm:pr-0"
            >
              <div className="flex items-center gap-1.5 justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </span>
                {stat.icon && (
                  <Star size={18} className="text-warning" fill="#FBBF24" />
                )}
              </div>
              <p className="text-text-faint text-xs sm:text-sm mt-1 text-center">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
