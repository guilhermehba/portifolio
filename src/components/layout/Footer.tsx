import { ExternalLink, Mail, MapPin, Globe } from "lucide-react";

import { siteConfig } from "@/data/site";

// 🔹 Mapeia nome -> ícone
const iconMap: Record<string, React.ReactNode> = {
  github: <Globe className="h-4 w-4" />,
  linkedin: <Globe className="h-4 w-4" />,
  instagram: <Globe className="h-4 w-4" />,
  whatsapp: <Globe className="h-4 w-4" />,
};

// 🔹 Retorna ícone ou fallback
const getSocialIcon = (name?: string) => {
  const key = name?.toLowerCase() ?? "";
  return iconMap[key] ?? <ExternalLink className="h-4 w-4" />;
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          
          {/* 🔹 Info principal */}
          <div>
            <h2 className="text-2xl font-semibold text-white">
              {siteConfig.name}
            </h2>

            <p className="mt-3 text-slate-400">
              {siteConfig.role}
            </p>

            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {siteConfig.location}
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* 🔹 Redes sociais */}
          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Conecte-se
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {siteConfig.socialLinks?.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-slate-800 px-4 py-2 hover:bg-slate-800 transition"
                >
                  {getSocialIcon(link.name)}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 🔹 Rodapé final */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {year} {siteConfig.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}