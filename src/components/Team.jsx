import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";

const members = [
  { name: "member1", role: "member1_role", image: "/assets/odilon.jpg" },
  { name: "member2", role: "member2_role", image: "/assets/christ.jpg" },
  { name: "member3", role: "member3_role", image: "/assets/charles.jpg" },
];

export default function Team() {
  const { t } = useTranslation();
  return (
    <ScrollReveal>
      <section id="about" className="bg-white px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
              {t("team.label")}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
              {t("team.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-naka-text/50">
              {t("team.desc")}
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-3">
            {members.map((m, i) => (
              <div key={m.name}>
                <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface">
                  <img
                    src={m.image}
                    alt={t(`team.${m.name}_name`)}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-bold tracking-tight text-naka-darkBlue">
                    {t(`team.${m.name}_name`)}
                  </h3>
                  <p className="mt-0.5 text-sm text-naka-text/60">
                    {t(`team.${m.role}`)}
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
