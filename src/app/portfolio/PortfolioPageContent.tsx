"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { projects, industryColors } from "@/data/portfolio";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const industries = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.industry))),
];

export default function PortfolioPageContent() {
  const [filter, setFilter] = useState("All");
  const whatsappUrl = getWhatsAppUrl("consultancy");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.industry === filter);

  return (
    <>
      {/* Hero sub-banner */}
      <section className="bg-primary py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full glow-blue opacity-25" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow inline-block mb-4">Our Work</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 tracking-tight">
              Our <span className="accent-text">Portfolio</span>
            </h1>
            <p className="text-text-muted text-base max-w-lg mx-auto leading-relaxed">
              Real projects delivered to real businesses. See the quality and range of our work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section bg-surface">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          {/* Filter bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setFilter(ind)}
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                  filter === ind
                    ? "bg-accent text-white shadow-lg shadow-accent/20"
                    : "bg-primary text-text-muted hover:text-white border border-border hover:border-accent/40"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => {
                const colors = industryColors[project.industry] || {
                  bg: "rgba(59,130,246,0.15)",
                  text: "#93C5FD",
                };
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <Link
                      href={project.liveUrl || "#"}
                      target={project.liveUrl && project.liveUrl !== "#" ? "_blank" : undefined}
                      rel={project.liveUrl && project.liveUrl !== "#" ? "noopener noreferrer" : undefined}
                      className="block h-full bg-primary rounded-2xl overflow-hidden group border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-black/20"
                    >
                    {/* Image area */}
                    <div className="relative h-[180px] bg-surface-raised flex items-center justify-center overflow-hidden">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="text-text-disabled text-5xl font-bold opacity-10">
                          {project.title.charAt(0)}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <span className="bg-primary/90 text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm border border-border/50">
                          View project <ExternalLink size={13} />
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span
                        className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full mb-3"
                        style={{ background: colors.bg, color: colors.text }}
                      >
                        {project.industry}
                      </span>
                      <h3 className="text-white text-base font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-text-faint text-sm leading-relaxed line-clamp-2 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-surface text-text-muted text-[11px] font-medium px-2.5 py-1 rounded-lg border border-border/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-center section-divider">
        <div className="mx-auto max-w-xl px-6 sm:px-8">
          <h2 className="text-3xl font-bold text-white mb-5">
            Like What You See?
          </h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            Let&apos;s build something amazing for your business too.
          </p>
          <Button href={whatsappUrl} size="lg">
            Start Your Project
          </Button>
        </div>
      </section>
    </>
  );
}
