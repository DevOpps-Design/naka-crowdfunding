import ScrollReveal from "./ScrollReveal";

const values = [
  {
    title: "Logistique verte",
    desc: "Un modele asset-light qui connecte les conducteurs de motos electriques aux marches professionnels, sans posseder de flottes.",
    accent: "cyan",
  },
  {
    title: "Inclusion des jeunes",
    desc: "Nous permettons a la jeunesse de 18 a 35 ans d'acceder a des revenus stables et dignes, independamment du parcours academique.",
    accent: "cyan",
  },
  {
    title: "Suivi carbone",
    desc: "Nos modules Carbon Engine et Carbon Converter mesurent precisement l'empreinte carbone evitee a chaque kilometre parcouru.",
    accent: "green",
  },
];

export default function Values() {
  return (
    <ScrollReveal>
      <section className="bg-white px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
              Notre approche
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
              Une infrastructure technologique au service de l'impact
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group rounded-3xl border border-black/[0.04] bg-white p-8 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.04)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]"
                style={{
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                    v.accent === "green"
                      ? "bg-naka-ecoGreen/10 text-naka-ecoGreen"
                      : "bg-naka-cyan/10 text-naka-cyan"
                  }`}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {i === 0 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    )}
                    {i === 1 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    )}
                    {i === 2 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                      />
                    )}
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-naka-darkBlue">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-naka-text/60">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
