"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { packages } from "@/data/pricing";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Typically 2–4 weeks depending on complexity. A simple landing page can be done in under a week, while a full e-commerce store may take 3–4 weeks.",
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Yes! All our packages include post-launch support. We also offer monthly maintenance plans for ongoing updates, security patches, and performance monitoring.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Absolutely. You can start with Starter and upgrade to Pro or Premium anytime. We'll seamlessly add the additional features without rebuilding from scratch.",
  },
  {
    q: "Do you provide hosting?",
    a: "We deploy on Vercel which offers free hosting with global CDN, SSL, and automatic deployments. For custom hosting needs, we can configure any platform you prefer.",
  },
  {
    q: "What if I need something not in any package?",
    a: "No problem — contact us for a custom quote. We build tailored solutions for unique business requirements.",
  },
];

export default function PricingPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
            <span className="eyebrow inline-block mb-4">Pricing</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 tracking-tight">
              Simple, <span className="accent-text">Transparent</span> Pricing
            </h1>
            <p className="text-text-muted text-base max-w-lg mx-auto leading-relaxed">
              No hidden fees. No surprises. Choose the package that fits your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section bg-surface">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative rounded-2xl p-7 lg:p-8 ${
                  pkg.isMostPopular
                    ? "card-featured lg:scale-105 lg:-my-2"
                    : "card"
                }`}
              >
                {pkg.isMostPopular && (
                  <span
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-[#007BFF] text-white text-[11px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg shadow-accent/30"
                    style={{ letterSpacing: "0.5px" }}
                  >
                    MOST POPULAR ⭐
                  </span>
                )}
                <p
                  className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
                    pkg.isMostPopular ? "text-[#93C5FD]" : "text-text-muted"
                  }`}
                >
                  {pkg.name}
                </p>
                <div className="mb-3">
                  <span className="text-4xl font-bold text-white tracking-tight">
                    {pkg.price}
                  </span>
                </div>
                <p className="text-text-faint text-sm mb-7 leading-relaxed">
                  {pkg.description}
                </p>
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
                <Button
                  href={whatsappUrl}
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

      {/* Feature comparison table */}
      <section className="section bg-primary section-divider">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12 tracking-tight">
            Feature Comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface">
                  <th className="text-left text-text-muted font-medium py-4 px-6">Feature</th>
                  <th className="text-center text-text-muted font-medium py-4 px-4">Starter</th>
                  <th className="text-center text-accent font-medium py-4 px-4">Pro</th>
                  <th className="text-center text-text-muted font-medium py-4 px-4">Premium</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pages", "Up to 5", "Up to 10", "Unlimited"],
                  ["Revisions", "2", "4", "Unlimited"],
                  ["CMS", "✗", "✓", "✓"],
                  ["E-commerce", "✗", "✗", "✓"],
                  ["SEO", "Basic", "Full", "Full + ongoing"],
                  ["Support", "1 month", "3 months", "6 months"],
                ].map(([feature, s, p, pr]) => (
                   <tr key={feature} className="border-t border-border/50">
                    <td className="text-text-secondary py-3.5 px-6">{feature}</td>
                    <td className="text-text-muted text-center py-3.5 px-4">{s}</td>
                    <td className="text-text-secondary text-center py-3.5 px-4">{p}</td>
                    <td className="text-text-muted text-center py-3.5 px-4">{pr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-surface">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
             {faqs.map((faq, i) => (
              <div
                key={i}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer"
                >
                  <span className="text-white text-sm font-medium pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-text-muted shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                     <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-6 text-text-muted text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary section-divider text-center">
        <div className="mx-auto max-w-xl px-6 sm:px-8">
          <h2 className="text-3xl font-bold text-white mb-5">
            Still Have Questions?
          </h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            Get in touch with us — we&apos;re happy to help.
          </p>
          <Button href={whatsappUrl} size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}
