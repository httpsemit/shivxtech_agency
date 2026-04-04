import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us — Start Your Project",
  description:
    "Get a free quotation for your next website project. Reach out via WhatsApp, email, or our inquiry form. We're ready to build with you.",
  alternates: {
    canonical: "https://shivxtech.online/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
