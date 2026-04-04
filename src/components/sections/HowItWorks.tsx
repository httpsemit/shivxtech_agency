"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Rocket } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and target audience through a free consultation call.",
  },
  {
    num: "02",
    icon: PenTool,
    title: "Design & Build",
    description:
      "Our team designs and develops your website with your feedback at every stage. No surprises.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We launch your site, optimize performance, and provide ongoing support to ensure success.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section bg-primary section-divider">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Our Process"
          title="How It Works"
          subtitle="Three simple steps from idea to launch. No complexity, no jargon."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative"
            >
              {/* Connector line (desktop only) */}
              {i < 2 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
              )}

              <div className="relative inline-flex mb-6">
                <div className="icon-box icon-box-lg">
                  <step.icon
                    size={26}
                    strokeWidth={1.5}
                    className="text-accent"
                  />
                </div>
                <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-accent text-white text-[11px] font-bold flex items-center justify-center shadow-lg shadow-accent/30">
                  {step.num}
                </span>
              </div>
              <h3 className="text-white text-lg font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-text-muted text-sm max-w-xs mx-auto leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
