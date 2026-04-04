"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects, industryColors } from "@/data/portfolio";

export default function PortfolioPreview() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="section bg-surface">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Our Work"
          title="Featured Projects"
          subtitle="Real projects we've delivered for real businesses. Browse our latest work."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {featured.map((project, i) => {
            const colors = industryColors[project.industry] || {
              bg: "rgba(59,130,246,0.15)",
              text: "#93C5FD",
            };
            return (
              <Link
                key={project.id}
                href={project.liveUrl || "#"}
                target={project.liveUrl && project.liveUrl !== "#" ? "_blank" : undefined}
                rel={project.liveUrl && project.liveUrl !== "#" ? "noopener noreferrer" : undefined}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="h-full bg-primary rounded-2xl overflow-hidden group border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-black/20"
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
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-primary/90 text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm border border-border/50">
                      View project <ExternalLink size={13} />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Industry badge */}
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

                  {/* Tech stack pills */}
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
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Footer link */}
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="text-accent text-sm font-semibold hover:underline underline-offset-4 inline-flex items-center gap-1.5 transition-colors"
          >
            View all projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
