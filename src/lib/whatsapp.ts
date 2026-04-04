export type WhatsAppMessageType = "consultancy" | "general" | "quotation";

export function getWhatsAppUrl(type: WhatsAppMessageType = "general"): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917739262522";
  let message = "Hi Amit! I'm interested in your services and would like to learn more.";

  if (type === "consultancy") {
    message = "Hi Amit! I'm reaching out from your website and would like to book a free consultation.";
  } else if (type === "quotation") {
    message = "Hi Amit! I want a quotation for my business.";
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
