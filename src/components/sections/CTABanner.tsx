"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

import { getWhatsAppUrl } from "@/lib/whatsapp";

// ... Inside component:
export default function CTABanner() {
  const whatsappConsultancy = getWhatsAppUrl("consultancy");
  const whatsappGeneral = getWhatsAppUrl("general");

  return (
    <section className="relative py-24 sm:py-28 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1E293B 0%, #0F172A 40%, #172554 100%)",
        }}
      />
      {/* Glow decorations */}
      <div className="absolute top-[-120px] right-[10%] w-[400px] h-[400px] rounded-full glow-blue opacity-40" />
      <div className="absolute bottom-[-100px] left-[5%] w-[300px] h-[300px] rounded-full glow-blue opacity-25" />

      <div className="relative mx-auto max-w-3xl px-6 sm:px-8 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <span className="eyebrow inline-block mb-4">Ready to Start?</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Let&apos;s Build Something{" "}
            <span className="accent-text">Amazing</span> Together
          </h2>
          <p className="text-text-muted text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Book a free consultation and let&apos;s discuss your project. No
            commitment, no pressure — just a friendly chat with us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={whatsappConsultancy} size="lg">
              Book Free Consultation
            </Button>
            <Button
              href={whatsappGeneral}
              variant="outline"
              size="lg"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
