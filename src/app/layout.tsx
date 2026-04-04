import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://shivxtech.online"),
  title: {
    default: "ShivxTech — Modern Web Development & Digital Solutions",
    template: "%s | ShivxTech",
  },
  description:
    "We build high-performance, modern websites that help businesses across India grow online. Specialist in Next.js, React, E-commerce, and Custom Web Solutions.",
  keywords: ["web development", "next.js developer", "india", "ecommerce website", "landing page", "shivxtech", "amit kumar", "cloud-based developers"],
  authors: [{ name: "Amit Kumar" }],
  creator: "ShivxTech",
  publisher: "ShivxTech",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shivxtech.online",
    siteName: "ShivxTech",
    title: "ShivxTech — Modern Web Development & Digital Solutions",
    description: "High-performance websites designed to convert. Let our team build your digital future.",
    images: [
      {
        url: "/og-image.png", // Assuming this will be added later or fallback to default
        width: 1200,
        height: 630,
        alt: "ShivxTech Modern Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShivxTech — Modern Web Development & Digital Solutions",
    description: "High-performance websites designed to convert. Let our team build your digital future.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
