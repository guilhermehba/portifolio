"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Briefcase, CheckCircle2 } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      {/* Background glow subtle */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-900/80 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-emerald-400">
            Vamos conversar
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Transforme sua ideia em resultado com atendimento profissional
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Orçamento para landing page, catálogo, sistema simples ou automação com estratégia clara e entrega objetiva.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-[0_20px_120px_-70px_rgba(14,165,233,0.45)]"
          >
            {/* Main action card */}
            <div className="flex flex-col gap-6">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full bg-emerald-500/10 px-4 py-2 text-emerald-300">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="text-sm font-medium">Atendimento rápido e personalizado</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-medium text-white">
                  Pronto para conversar pelo WhatsApp? Peça seu orçamento com confiança.
                </p>
                <p className="text-sm leading-7 text-slate-400">
                  Seja para uma landing page que converte, catálogo digital, sistema sob medida ou automação inteligente, eu entrego solução com foco no seu negócio.
                </p>
              </div>

              <div className="mt-6 max-w-xs">
                <WhatsAppButton />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-[0_20px_120px_-80px_rgba(15,23,42,0.6)]"
          >
            {/* Contact details and benefit blocks */}
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl bg-slate-900/80 p-6">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-400">
                  Contato
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <MapPin className="h-5 w-5 text-emerald-400" />
                    <span>{siteConfig.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Mail className="h-5 w-5 text-emerald-400" />
                    <span>{siteConfig.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Briefcase className="h-5 w-5 text-emerald-400" />
                    <span>{siteConfig.role}</span>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  "Resposta direta",
                  "Projeto sob medida",
                  "Entrega objetiva",
                ].map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 text-center">
                    <p className="text-sm font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
