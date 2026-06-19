import ScrollReveal from "./ScrollReveal";

const proofs = [
  {
    title: "Validation terrain",
    desc: "Test grandeur nature a Adidogome, Lome le 23 mai 2026. Performances techniques et donnees d'impact environnemental validees.",
  },
  {
    title: "GITEX Africa 2025",
    desc: "NAKA classee dans le TOP 10 des startups les plus prometteuses du continent africain.",
  },
  {
    title: "IYBA-SEED & CATAL1.5T",
    desc: "Laurcat du programme Investing in Young Businesses in Africa et accompagne par l'accelerateur CATAL1.5T.",
  },
  {
    title: "AfricArena 2025",
    desc: "Selection a AfricArena Climate Tech & FinTech a Nairobi, rayonnement continental confirme.",
  },
];

export default function Proof() {
  return (
    <ScrollReveal>
      <section className="bg-surface px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
              Preuves & realisations
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
              Un modele valide, recompense et soutenu
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {proofs.map((p, i) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-black/[0.04] bg-white p-7 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.04)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-naka-cyan/10 text-naka-cyan">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-base font-semibold tracking-tight text-naka-darkBlue">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-naka-text/60">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
