"use client";

import { motion } from "framer-motion";
import { ArrowRight, Monitor, ShoppingBag, Layers, LayoutDashboard, Search, type LucideIcon } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { services } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  ShoppingBag,
  Layers,
  LayoutDashboard,
  Search,
};

export default function ServicesOverview() {
  const whatsappUrl = getWhatsAppUrl("consultancy");

  return (
    <section className="section bg-surface">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-14">
          <span className="eyebrow inline-block mb-4">What I Do</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Services I Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const IconComponent = iconMap[service.icon] || Monitor;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-7 group"
              >
                <div className="icon-box icon-box-lg mb-6">
                  <IconComponent size={26} strokeWidth={1.5} className="text-accent" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="card-featured p-8 flex flex-col justify-center text-center relative overflow-hidden"
          >
            <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] rounded-full glow-blue opacity-30" />
            <h3 className="text-white text-2xl font-bold mb-4">
              Ready to start?
            </h3>
            <p className="text-text-muted mb-8 text-sm">
              Let&apos;s discuss your project and see how I can help your
              business grow.
            </p>
            <Button
              href={whatsappUrl}
              variant="primary"
              className="w-full flex items-center justify-center gap-2 group"
            >
              Book a Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
