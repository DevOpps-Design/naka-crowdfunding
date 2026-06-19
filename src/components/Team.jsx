import ScrollReveal from "./ScrollReveal";

const members = [
  {
    name: "Odilon Hounkpati",
    role: "Fondateur & CEO",
    image: "/assets/odilon.jpg",
  },
  {
    name: "Christ Christopher",
    role: "Collaborateur Technique",
    image: "/assets/christ.jpg",
  },
  {
    name: "Charles S-Abalo LEMOU",
    role: "Lead Communication & Branding",
    image: "/assets/charles.jpg",
  },
];

export default function Team() {
  return (
    <ScrollReveal>
      <section id="about" className="bg-white px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
              L'equipe dirigeante
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
              Des talents engages pour la transition
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            {members.map((m, i) => (
              <div key={m.name}>
                <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-semibold tracking-tight text-naka-darkBlue">
                    {m.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-naka-text/60">
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
