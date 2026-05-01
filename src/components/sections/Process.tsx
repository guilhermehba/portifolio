// 🔹 Dados do processo (fácil de editar e manter)
const processSteps = [
  {
    number: "01",
    title: "Entendimento do negócio",
    description:
      "Conversa direta para conhecer suas metas, seu público e o valor que você quer transmitir.",
    highlight: "foco no cliente",
  },
  {
    number: "02",
    title: "Planejamento da solução",
    description:
      "Definimos a melhor estrutura para sua presença online, sem enrolação e com prioridade nas suas necessidades.",
    highlight: "sem complicação",
  },
  {
    number: "03",
    title: "Desenvolvimento rápido",
    description:
      "Construção ágil com atenção aos detalhes para entregar uma experiência visual e funcional de alto nível.",
    highlight: "entrega ágil",
  },
  {
    number: "04",
    title: "Entrega e ajustes finais",
    description:
      "Você recebe o projeto pronto para uso e eu ajusto o que for necessário para que tudo fique alinhado ao seu objetivo.",
    highlight: "confiança garantida",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-20">
        
        {/* 🔹 Cabeçalho */}
        <div className="mb-12 max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Processo
          </span>

          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Um processo simples para colocar seu negócio online rápido
          </h2>

          <p className="mt-4 text-slate-400 sm:text-lg">
            Um fluxo claro para entender seu negócio, planejar com foco no cliente e entregar um site moderno sem perda de prazo.
          </p>
        </div>

        {/* 🔹 Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-[0_25px_50px_-25px_rgba(15,23,42,0.8)] transition hover:-translate-y-1 hover:border-cyan-500"
            >
              {/* Número */}
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                {step.number}
              </div>

              {/* Título */}
              <h3 className="text-xl font-semibold text-white">
                {step.title}
              </h3>

              {/* Descrição */}
              <p className="mt-3 text-slate-400">
                {step.description}
              </p>

              {/* Highlight */}
              <span className="mt-5 inline-block rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
                {step.highlight}
              </span>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}