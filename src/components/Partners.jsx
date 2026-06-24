import ScrollReveal from "./ScrollReveal";

const partners = [
  { name: "Spiro", logo: "/parterners/Spiro-logo.png" },
  { name: "CATAL1.5T", logo: "/parterners/CATAL1.5T-logo.png" },
  { name: "AfricArena", logo: "/parterners/AfricArise-logo.png" },
];

export default function Partners() {
  return (
    <ScrollReveal>
      <section className="bg-white px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
              Ils nous soutiennent
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
              Partenaires & accompagnateurs
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {partners.map((p) => (
              <div key={p.name} className="group">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-auto max-h-10 max-w-36 opacity-40 grayscale transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-80 group-hover:grayscale-0 md:max-h-12 md:max-w-44"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
