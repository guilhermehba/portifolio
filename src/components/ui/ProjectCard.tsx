import { ExternalLink, Globe  } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  projectUrl?: string;
  codeUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  projectUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-700/50 rounded-lg p-6 transition-all duration-300 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-900/50">
      {/* Efeito de hover sutil no background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-lg transition-all duration-300" />

      <div className="relative z-10">
        {/* Título */}
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h3>

        {/* Descrição */}
        <p className="text-slate-300 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tecnologias */}
        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-block bg-slate-700/50 text-slate-200 text-xs px-3 py-1 rounded-full border border-slate-600/50 hover:border-slate-500 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botões */}
        <div className="flex gap-3">
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
            >
              <ExternalLink size={16} />
              Ver projeto
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white text-sm px-4 py-2 rounded-lg transition-colors duration-300 font-medium border border-slate-600 hover:border-slate-500"
            >
              <Globe size={16} />
              Ver código
            </a>
            
            
          )}
          
        </div>
      </div>
    </div>
  );
}
