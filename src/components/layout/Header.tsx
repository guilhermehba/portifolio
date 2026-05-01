import Link from "next/link";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site"; 
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        {/* Nome profissional com ícone discreto */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100"
        >
          <Sparkles className="h-5 w-5 text-teal-400" />
          <span>{siteConfig.name}</span>
        </Link>

        {/* Navegação principal responsiva */}
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-200">
          <Link href="#services" className="transition hover:text-white">
            Serviços
          </Link>
          <Link href="#projects" className="transition hover:text-white">
            Projetos
          </Link>
          <Link href="#contact" className="transition hover:text-white">
            Contato
          </Link>
        </nav>

        {/* Botão do WhatsApp importado como export default */}
        <div className="flex items-center">
          <WhatsAppButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
