import ScrollReveal from "./ScrollReveal";

const partners = [
  { name: "Spiro", logo: "/parterners/Spiro-logo.png" },
  { name: "CATAL1.5T", logo: "/parterners/CATAL1.5T-logo.png" },
  { name: "AfricArena", logo: "/parterners/AfricArise-logo.png" },
  { name: "Freshyx", logo: "/parterners/freshyx-logo.png" },
  { name: "IYBA", logo: "/parterners/IYBA_logo.png" },
];

export default function Partners() {
  return (
    <ScrollReveal>
      <section className="bg-white px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-naka-darkBlue md:text-3xl">
              Ils nous soutiennent
            </h2>
          </div>

          <div className="flex items-center justify-center gap-6 md:gap-12">
            {partners.map((p) => (
              <div key={p.name} className="group">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-auto max-h-8 max-w-28 opacity-40 grayscale transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-80 group-hover:grayscale-0 md:max-h-12 md:max-w-44"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
