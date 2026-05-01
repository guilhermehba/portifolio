import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  detail: string;
  icon: LucideIcon;
}

export default function ServiceCard({
  title,
  description,
  detail,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-[0_25px_50px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-slate-900/95">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 shadow-[0_8px_30px_rgba(34,211,238,0.12)] transition duration-300 group-hover:bg-cyan-500/15">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-cyan-300/80">
        <span className="inline-flex h-2 w-2 rounded-full bg-cyan-300/80" />
        <span>{detail}</span>
      </div>
    </article>
  );
}