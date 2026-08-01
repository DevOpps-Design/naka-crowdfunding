import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden bg-naka-darkBlue">
      <img
        src="/assets/hero-img.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-naka-darkBlue/75 via-naka-darkBlue/55 to-naka-darkBlue/90" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center md:px-8">
        <h1 className="max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl">
          {t("hero.title_before")}{" "}
          <span className="text-naka-cyan">{t("hero.title_highlight")}</span>{" "}
          {t("hero.title_after")}
        </h1>

        <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/50 md:text-base">
          {t("hero.desc")}
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#paliers"
            className="group inline-flex items-center gap-2 rounded-full bg-naka-cyan px-6 py-3 text-sm font-semibold text-naka-darkBlue transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] active:scale-[0.98]"
          >
            {t("hero.cta_support")}
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-naka-darkBlue/10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H9m10.5 0v10.5" />
              </svg>
            </span>
          </a>
          <a
            href="#impact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-500 hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            {t("hero.cta_impact")}
          </a>
        </div>
      </div>
    </section>
  );
}
