"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

interface WhatsAppButtonProps {
  label?: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  label = "Falar no WhatsApp",
  className = "",
}) => {
  // 🔹 Pega os dados centralizados do siteConfig
  const number = siteConfig.whatsappNumber;
  const message = encodeURIComponent(siteConfig.whatsappMessage);

  // 🔹 Monta o link correto do WhatsApp
  const whatsappLink = `https://wa.me/${number}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-all duration-200 hover:scale-105 ${className}`}
    >
      <MessageCircle size={18} />
      {label}
    </a>
  );
};

export default WhatsAppButton;