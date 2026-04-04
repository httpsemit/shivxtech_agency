"use client";

import { motion } from "framer-motion";
import { Users, Award, Globe, ArrowRight } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects", icon: Globe },
  { value: "30+", label: "Clients", icon: Users },
  { value: "3+", label: "Years", icon: Award },
];

export default function AboutSnapshot() {
  return (
    <section className="section bg-surface">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow inline-block mb-4">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Welcome to <span className="accent-text">ShivxTech</span>
            </h2>
            <p className="text-text-muted leading-relaxed mb-5">
              We are a dedicated team of cloud-based web developers focused on building
              fast, modern, and conversion-optimized websites for businesses of all sizes.
              Led by Founder Amit Kumar, we bring your digital vision to life.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              With 50+ projects delivered and a 100% client satisfaction rate,
              we take pride in delivering quality results on time and on budget.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:gap-3 transition-all duration-200"
            >
              Learn more about us <ArrowRight size={15} />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="card text-center p-6"
              >
                <div className="icon-box icon-box-md mx-auto mb-4">
                  <stat.icon size={22} strokeWidth={1.5} className="text-accent" />
                </div>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-text-faint text-xs mt-1.5">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
