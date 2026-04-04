"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  ShoppingBag,
  Layers,
  LayoutDashboard,
  Search,
  MessageSquare,
  PenTool,
  Rocket,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  ShoppingBag,
  Layers,
  LayoutDashboard,
  Search,
};

const processSteps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    desc: "We hop on a free call to understand your business, goals, target audience, and budget. No obligations.",
  },
  {
    num: "02",
    icon: PenTool,
    title: "Design & Development",
    desc: "We design mockups, get your approval, and then build your site using modern, fast technologies.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Launch & Support",
    desc: "We deploy your site, set up analytics, and provide ongoing support to keep everything running smoothly.",
  },
];

export default function ServicesPageContent() {
  const whatsappUrl = getWhatsAppUrl("consultancy");

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
            <span className="eyebrow inline-block mb-4">Our Services</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 tracking-tight">
              What We <span className="accent-text">Build</span>
            </h1>
            <p className="text-text-muted text-base max-w-lg mx-auto leading-relaxed">
              From simple brochure sites to complex e-commerce platforms — we
              specialize in building websites that drive real business results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-surface">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Monitor;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card p-7"
                >
                  <div className="icon-box icon-box-lg mb-5">
                    <Icon size={26} strokeWidth={1.5} className="text-accent" />
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}

            {/* Custom CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card-featured rounded-2xl p-7 flex flex-col justify-center items-center text-center"
            >
              <h3 className="text-white text-lg font-semibold mb-2">
                Need Something Custom?
              </h3>
              <p className="text-text-muted text-sm mb-5">
                We build tailored solutions for unique business needs.
              </p>
              <a
                href={whatsappUrl}
                className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:gap-3 transition-all duration-200"
              >
                Let&apos;s Talk <ArrowRight size={15} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-primary section-divider">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <span className="eyebrow inline-block mb-4">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              How We Work With You
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="relative inline-flex mb-6">
                  <div className="icon-box icon-box-lg">
                    <step.icon size={26} strokeWidth={1.5} className="text-accent" />
                  </div>
                  <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-accent text-white text-[11px] font-bold flex items-center justify-center shadow-lg shadow-accent/30">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-white text-lg font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm max-w-xs mx-auto leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-surface text-center">
        <div className="mx-auto max-w-xl px-6 sm:px-8">
          <h2 className="text-3xl font-bold text-white mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            Let&apos;s discuss your project. No commitment, no hidden fees.
          </p>
          <Button href={whatsappUrl} size="lg">
            Book Free Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
