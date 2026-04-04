"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { packages } from "@/data/pricing";

export default function PricingCards() {
  return (
    <section className="section bg-surface">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, Transparent Pricing"
          subtitle="Choose the package that fits your needs. No hidden fees, no surprises."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-2xl p-7 lg:p-8 ${
                pkg.isMostPopular
                  ? "card-featured lg:scale-105 lg:-my-2"
                  : "card"
              }`}
            >
              {/* Most Popular Badge */}
              {pkg.isMostPopular && (
                <span
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-[#007BFF] text-white text-[11px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg shadow-accent/30"
                  style={{ letterSpacing: "0.5px" }}
                >
                  MOST POPULAR ⭐
                </span>
              )}

              {/* Tier label */}
              <p
                className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
                  pkg.isMostPopular ? "text-[#93C5FD]" : "text-text-muted"
                }`}
              >
                {pkg.name}
              </p>

              {/* Price */}
              <div className="mb-3">
                <span className="text-4xl font-bold text-white tracking-tight">
                  {pkg.price}
                </span>
              </div>
              <p className="text-text-faint text-sm mb-7 leading-relaxed">{pkg.description}</p>

              {/* Features */}
              <ul className="space-y-3.5 mb-8">
                {pkg.features.map((feat) => (
                  <li key={feat.text} className="flex items-start gap-3">
                    {feat.included ? (
                      <div className="w-5 h-5 rounded-full bg-success/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-success" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-border/30 flex items-center justify-center shrink-0 mt-0.5">
                        <X size={10} className="text-text-disabled" />
                      </div>
                    )}
                    <span
                      className={`text-sm ${
                        feat.included
                          ? pkg.isMostPopular
                            ? "text-text-secondary"
                            : "text-text-muted"
                          : "text-text-disabled line-through"
                      }`}
                    >
                      {feat.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                href={pkg.ctaLink}
                variant={pkg.isMostPopular ? "primary" : "outline"}
                size="lg"
                className="w-full"
              >
                {pkg.ctaLabel}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
