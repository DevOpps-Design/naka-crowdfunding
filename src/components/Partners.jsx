import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";

const partners = [
  { name: "Spiro", logo: "/parterners/Spiro-logo.png" },
  { name: "CATAL1.5T", logo: "/parterners/CATAL1.5T-logo.png" },
  { name: "AfricArena", logo: "/parterners/AfricArise-logo.png" },
  { name: "Freshyx", logo: "/parterners/freshyx-logo.png", large: true },
  { name: "IYBA", logo: "/parterners/IYBA_logo.png" },
];

export default function Partners() {
  const { t } = useTranslation();
  return (
    <ScrollReveal>
      <section className="bg-white px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-naka-darkBlue md:text-3xl">
              {t("partners.title")}
            </h2>
          </div>

          <div className="flex items-center justify-center gap-6 md:gap-12">
            {partners.map((p) => (
              <div key={p.name} className="group">
                <img
                  src={p.logo}
                  alt={p.name}
                  className={`h-auto opacity-40 grayscale transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-80 group-hover:grayscale-0 ${p.large ? "max-h-14 max-w-48 md:max-h-20 md:max-w-64" : "max-h-8 max-w-28 md:max-h-12 md:max-w-44"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
