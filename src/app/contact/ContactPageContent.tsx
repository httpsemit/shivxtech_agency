"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Calendar, Instagram } from "lucide-react";
import Button from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  projectType: z.enum(["website", "ecommerce", "landing", "redesign", "seo"], {
    message: "Please select a service",
  }),
  budget: z.enum(["under25k", "25kto50k", "50kto1L", "1Lplus"], {
    message: "Please select a budget range",
  }),
  message: z.string().min(20, "Please tell us a bit more (at least 20 characters)"),
  honeypot: z.string().max(0),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: Mail, label: "hello@shivxtech.com", href: "mailto:hello@shivxtech.com" },
  { icon: Phone, label: "+91 77392 62522", href: "tel:+917739262522" },
  { icon: MapPin, label: "Cloud-Based · India 🇮🇳", href: "#" },
];

const inputClasses =
  "w-full bg-primary text-white text-sm rounded-xl px-4 py-3.5 placeholder:text-text-faint focus:ring-2 focus:ring-accent focus:outline-none transition-all duration-200";

export default function ContactPageContent() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { honeypot: "" },
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      console.log("Form data:", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

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
            <span className="eyebrow inline-block mb-4">Contact</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 tracking-tight">
              Let&apos;s <span className="accent-text">Talk</span>
            </h1>
            <p className="text-text-muted text-base max-w-lg mx-auto leading-relaxed">
              Have a project in mind? Fill out the form or book a free consultation call.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Calendly */}
      <section className="section bg-surface">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">
                Send Us a Message
              </h2>

              {status === "success" && (
                <div className="flex items-center gap-3 bg-success/10 border border-success/30 rounded-xl p-4 mb-6">
                  <CheckCircle size={18} className="text-success shrink-0" />
                  <p className="text-success text-sm">
                    Message sent! We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-3 bg-error/10 border border-error/30 rounded-xl p-4 mb-6">
                  <AlertCircle size={18} className="text-error shrink-0" />
                  <p className="text-error text-sm">
                    Something went wrong. Please try again or email us directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <input
                  type="text"
                  {...register("honeypot")}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Your full name"
                    {...register("name")}
                    className={`${inputClasses} ${
                      errors.name ? "border border-error" : "border border-border"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-error text-xs mt-1.5">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    {...register("email")}
                    className={`${inputClasses} ${
                      errors.email ? "border border-error" : "border border-border"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-error text-xs mt-1.5">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210 (optional)"
                    {...register("phone")}
                    className={`${inputClasses} border border-border`}
                  />
                </div>

                {/* Project Type */}
                <div>
                  <select
                    {...register("projectType")}
                    className={`${inputClasses} appearance-none ${
                      errors.projectType ? "border border-error" : "border border-border"
                    }`}
                    defaultValue=""
                  >
                    <option value="" disabled className="text-text-faint">Select a service</option>
                    <option value="website">Web Development</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="landing">Landing Page</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="seo">SEO Optimization</option>
                  </select>
                  {errors.projectType && (
                    <p className="text-error text-xs mt-1.5">{errors.projectType.message}</p>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <select
                    {...register("budget")}
                    className={`${inputClasses} appearance-none ${
                      errors.budget ? "border border-error" : "border border-border"
                    }`}
                    defaultValue=""
                  >
                    <option value="" disabled className="text-text-faint">Select a budget range</option>
                    <option value="under25k">Under ₹25,000</option>
                    <option value="25kto50k">₹25,000 - ₹50,000</option>
                    <option value="50kto1L">₹50,000 - ₹1,00,000</option>
                    <option value="1Lplus">₹1,00,000+</option>
                  </select>
                  {errors.budget && (
                    <p className="text-error text-xs mt-1.5">{errors.budget.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    {...register("message")}
                    className={`${inputClasses} resize-none ${
                      errors.message ? "border border-error" : "border border-border"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-error text-xs mt-1.5">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </Button>
              </form>
            </motion.div>

            {/* WhatsApp / Booking side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">
                Book a Free Consultation
              </h2>
              <div
                className="card overflow-hidden flex flex-col items-center justify-center relative p-8"
                style={{
                  minHeight: "500px",
                  background: "linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.8) 100%)",
                }}
              >
                {/* Glow BG */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full glow-blue opacity-20 pointer-events-none" />

                <div className="text-center relative z-10">
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-[#25D366]/20 border border-[#25D366]/30 shadow-lg shadow-[#25D366]/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#25D366"
                      className="w-8 h-8"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4">
                    Chat Directly on WhatsApp
                  </h3>
                  <p className="text-text-muted text-sm mx-auto mb-8 max-w-[280px] leading-relaxed">
                    Skip the forms and email chains. Send me a quick message on WhatsApp and let&apos;s discuss your ideas instantly.
                  </p>
                  
                  <Button 
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917739262522"}?text=${encodeURIComponent("Hi Amit, I'd like to book a free consultation for my project.")}`}
                    className="w-full bg-[#25D366] hover:bg-[#1EBE5A] text-white border-none"
                    size="lg"
                  >
                    Start WhatsApp Chat
                  </Button>
                  
                  <p className="text-text-faint text-xs mt-6">
                    Typically replies within a few hours.
                  </p>
                </div>

                <div className="relative z-10 mt-12 pt-8 border-t border-white/10 w-full text-center">
                  <h4 className="text-white font-semibold mb-4 text-sm">Follow Us on Social Media</h4>
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://instagram.com/shivxtech.online"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-surface-raised border border-white/5 flex items-center justify-center text-text-muted hover:text-white hover:border-accent/40 transition-all duration-300 shadow-sm"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="bg-primary py-14 section-divider">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center gap-3 text-text-muted hover:text-white transition-colors"
              >
                <div className="icon-box icon-box-sm">
                  <info.icon size={16} className="text-accent" />
                </div>
                <span className="text-sm">{info.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
