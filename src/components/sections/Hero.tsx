"use client";

import { ArrowRight, Code2, Monitor, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";
// Hero section para a primeira dobra do portfólio
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-50">
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.18),transparent_50%)] blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex w-fit rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-sky-300"
            >
              Desenvolvedor Web Freelancer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Sites, sistemas e automações para negócios que querem vender melhor
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Transformo ideias em páginas, catálogos e sistemas práticos para você
              mostrar seus serviços, facilitar vendas e escalar com confiança.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Falar no WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
              >
                Ver projetos
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {[
                { label: "Landing Pages", icon: Monitor },
                { label: "Catálogos Online", icon: Sparkles },
                { label: "Sistemas sob medida", icon: Code2 },
                { label: "Automações com IA", icon: Zap },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-3xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-200"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-sky-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    {item.label}
                  </div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-[0_35px_120px_-35px_rgba(15,23,42,0.8)]"
          >
            <div className="absolute -right-10 top-10 h-24 w-24 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-950/90 p-5">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Painel de resultados</p>
                <p className="mt-2 text-3xl font-semibold text-white">+82%</p>
              </div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900 text-sky-300">
                <Sparkles className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/85 p-5">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Visitas semanais</span>
                  <span className="font-semibold text-slate-100">+1.2k</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-3/4 rounded-full bg-sky-400" />
                </div>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/85 p-5">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Leads qualificados</span>
                  <span className="font-semibold text-slate-100">+37</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-1/2 rounded-full bg-sky-400" />
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-4 text-sm text-slate-300">
                <p className="font-semibold text-white">Catálogo smart</p>
                <p className="mt-2">Navegação rápida para clientes locais.</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-4 text-sm text-slate-300">
                <p className="font-semibold text-white">Sistema leve</p>
                <p className="mt-2">Administração simples para pequenos negócios.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
