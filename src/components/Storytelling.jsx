import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";

export default function Storytelling() {
  const { t } = useTranslation();
  return (
    <ScrollReveal>
      <section className="bg-white px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/assets/Spiro.webp"
                  alt={t("story.alt")}
                  className="h-full w-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
                {t("story.label_constat")}
              </p>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("story.title")}
              </h2>
              <p className="mb-8 text-base leading-relaxed text-naka-text/60">
                {t("story.desc_constat")}
              </p>

              <div className="border-t border-black/[0.06] pt-8">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-cyan">
                  {t("story.label_solution")}
                </p>
                <p className="text-base leading-relaxed text-naka-text/60">
                  {t("story.desc_solution")}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-black/[0.06] pt-8">
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-naka-darkBlue">
                    {t("story.stat_date")}
                  </p>
                  <p className="mt-1 text-xs text-naka-text/40">
                    {t("story.stat_field")}
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-naka-darkBlue">
                    {t("story.stat_rank")}
                  </p>
                  <p className="mt-1 text-xs text-naka-text/40">
                    {t("story.stat_gitex")}
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-naka-ecoGreen">
                    {t("story.stat_value")}
                  </p>
                  <p className="mt-1 text-xs text-naka-text/40">
                    {t("story.stat_valuation")}
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
