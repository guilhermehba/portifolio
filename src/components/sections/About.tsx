const differentials = [
  "Entrega rápida com foco em valor real.",
  "Estruturas limpas e fáceis de manter.",
  "Design moderno e comunicação clara.",
  "Soluções pensadas para resultados locais.",
];

export default function About() {
  return (
    <section id="about" className="bg-slate-950 px-6 py-20 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <span className="inline-block border-l-4 border-cyan-500 pl-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Sobre mim
        </span>

        <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Crio soluções digitais simples, rápidas e úteis para pequenos negócios.
        </h2>

        <p className="mt-6 max-w-3xl leading-8 text-slate-300">
          Sou desenvolvedor freelancer com foco em sites, catálogos online,
          sistemas simples e automações. Meu objetivo é transformar ideias em
          soluções práticas, bonitas e fáceis de usar.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-lg shadow-slate-950/40">
            <h3 className="text-xl font-medium text-white">Diferenciais</h3>

            <ul className="mt-4 space-y-3 text-slate-300">
              {differentials.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6 shadow-lg shadow-slate-950/40">
            <h3 className="text-xl font-medium text-white">Vamos conversar?</h3>

            <p className="mt-4 leading-7 text-slate-300">
              Se você quer um site ou uma aplicação para seu negócio, posso te
              ajudar com um projeto direto ao ponto, visual profissional e foco
              em resultado.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Falar com o desenvolvedor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}