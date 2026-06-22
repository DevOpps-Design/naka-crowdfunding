import ScrollReveal from "./ScrollReveal";

const members = [
  {
    name: "Odilon HOUNKPATI",
    role: "Chief Executive Officer",
    image: "/assets/odilon.jpg",
  },
  {
    name: "Christ Odéric YASSINGUEZO",
    role: "Chief Technology Officer",
    image: "/assets/christ.jpg",
  },
  {
    name: "Charles LEMOU",
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
              L'équipe dirigeante
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
              Des talents engagés pour la transition
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-naka-text/50">
              NAKA réunit des passionnés de tech, de logistique et de climat,
              unis pour décarboner la mobilité urbaine au Togo. Voici l'équipe
              qui porte cette vision.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-16 md:grid-cols-3">
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
                  <h3 className="text-sm font-bold tracking-tight text-naka-darkBlue">
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
