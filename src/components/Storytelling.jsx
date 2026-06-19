import ScrollReveal from "./ScrollReveal";

export default function Storytelling() {
  return (
    <ScrollReveal>
      <section className="bg-white px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="relative">
              <div className="group relative">
                <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-b from-naka-cyan/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative overflow-hidden rounded-[2.5rem] border border-black/[0.04] bg-surface p-2">
                  <div className="overflow-hidden rounded-[calc(2.5rem-8px)]">
                    <img
                      src="/assets/Spiro.png"
                      alt="Test terrain a Adidogome"
                      className="h-full w-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      style={{ aspectRatio: "1/1" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
                Le constat
              </p>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                La livraison urbaine a Lome face a un double defi
              </h2>
              <p className="mb-8 text-base leading-relaxed text-naka-text/60">
                Pollution de l'air croissante et precarite economique des
                livreurs, lourdement impactes par les fluctuations du prix du
                carburant et l'absence d'outils d'optimisation.
              </p>

              <div className="border-t border-black/[0.06] pt-8">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-cyan">
                  La solution NAKA
                </p>
                <p className="text-base leading-relaxed text-naka-text/60">
                  Nous deployons l'infrastructure logicielle qui connecte les
                  jeunes conducteurs de motos electriques aux marches
                  professionnels. Nos modules{" "}
                  <span className="font-medium text-naka-darkBlue">
                    Carbon Engine
                  </span>{" "}
                  et{" "}
                  <span className="font-medium text-naka-darkBlue">
                    Carbon Converter
                  </span>{" "}
                  mesurent precisement l'empreinte carbone evitee a chaque
                  kilometre, tandis que notre modele inclusif permet a toute la
                  jeunesse d'acceder a des revenus stables.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-black/[0.06] pt-8">
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-naka-darkBlue">
                    23 Mai
                  </p>
                  <p className="mt-1 text-xs text-naka-text/40">
                    Validation terrain
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-naka-darkBlue">
                    TOP 10
                  </p>
                  <p className="mt-1 text-xs text-naka-text/40">
                    GITEX Africa 2025
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-naka-ecoGreen">
                    600K USD
                  </p>
                  <p className="mt-1 text-xs text-naka-text/40">
                    Valorisation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
