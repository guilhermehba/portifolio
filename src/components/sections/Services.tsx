"use client";
import { Cpu, LayoutDashboard, Sparkles, Smartphone } from 'lucide-react'
import ServiceCard from "@/components/ui/ServiceCard";

const serviceItems = [
  {
    title: 'Landing Pages',
    description: 'Páginas rápidas, bonitas e focadas em gerar contato pelo WhatsApp.',
    icon: LayoutDashboard,
    detail: 'Design alinhado a conversão e ação imediata.',
  },
  {
    title: 'Catálogos Online',
    description: 'Vitrine digital para produtos, cardápios, lojas e serviços.',
    icon: Smartphone,
    detail: 'Apresentação clara para clientes navegarem com confiança.',
  },
  {
    title: 'Sistemas Simples',
    description: 'Painéis, controles internos, cadastros e fluxos administrativos.',
    icon: Cpu,
    detail: 'Ferramentas que simplificam processos e economizam tempo.',
  },
  {
    title: 'Automações com IA',
    description: 'Integrações futuras com n8n, agentes de IA e automações de atendimento.',
    icon: Sparkles,
    detail: 'Melhore o suporte e capture oportunidades sem perder foco.',
  },
]

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 text-slate-100 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Serviços premium</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Soluções digitais para negócios locais e profissionais autônomos.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-300">
          Não é apenas site. São experiências digitais que ajudam a captar clientes, organizar vendas e automatizar rotinas.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {serviceItems.map((item) => (
        <ServiceCard
          key={item.title}
          title={item.title}
          description={item.description}
          detail={item.detail}
          icon={item.icon}
        />
      ))}
      </div>
    </section>
  )
}
