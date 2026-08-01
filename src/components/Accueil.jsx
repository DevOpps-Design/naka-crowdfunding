import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import Partners from "./Partners";
import { useTranslation } from "react-i18next";

function CheckIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-naka-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function Accueil() {
  const { t } = useTranslation();
  return (
    <>
      <section className="relative min-h-[100dvh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-naka-darkBlue via-[#0f1d31] to-naka-darkBlue" />
        <div className="absolute inset-0 bg-gradient-to-t from-naka-darkBlue/60 via-transparent to-naka-darkBlue/30" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-naka-cyan blur-3xl" />
          <div className="absolute -bottom-20 right-1/4 h-64 w-64 rounded-full bg-naka-green blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none" />

        <div className="relative mx-auto grid min-h-[100dvh] max-w-7xl items-center px-5 pt-32 md:px-8 md:pt-36 md:grid-cols-[1.06fr_0.94fr] md:gap-[70px]">
          <div>
            <h1 className="max-w-4xl text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {t("accueil.hero_title")}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
              {t("accueil.hero_desc")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <a
                href="/entreprises#demonstration"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-naka-green to-naka-cyan px-7 py-3.5 text-sm font-semibold text-naka-darkBlue shadow-[0_12px_30px_rgba(0,210,255,0.18)] transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                {t("accueil.hero_cta_demo")}
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-500 hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                {t("accueil.hero_cta_discover")}
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/65">
              <span className="inline-flex items-center gap-2">
                <span className="font-bold text-naka-green"><CheckIcon /></span>
                {t("accueil.hero_benefit1")}
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="font-bold text-naka-green"><CheckIcon /></span>
                {t("accueil.hero_benefit2")}
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="font-bold text-naka-green"><CheckIcon /></span>
                {t("accueil.hero_benefit3")}
              </span>
            </div>
          </div>

          <div className="relative min-h-[560px] max-md:min-h-[420px]" aria-label={t("accueil.hero_img_alt")}>
            <div
              className="absolute right-[12%] top-[6%] w-[min(320px,75%)] rounded-[42px] border-[10px] border-[#071019] bg-[#0d1926] p-3.5 shadow-[0_36px_90px_rgba(0,0,0,0.42)]"
              style={{ aspectRatio: "9/18.5", transform: "rotate(5deg)" }}
            >
              <div className="-mt-2 mb-5 mx-auto h-[22px] w-[42%] rounded-full bg-[#071019]" />
              <div className="h-full overflow-hidden rounded-[28px] bg-gradient-to-b from-naka-cyan/15 via-[#14283b] to-[#0b1623] p-5">
                <small className="text-[#8ba4ba]">{t("accueil.hero_phone_greeting")}</small>
                <h3 className="mt-2 text-lg font-semibold text-white">{t("accueil.hero_phone_title")}</h3>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                    <small className="text-[#8ba4ba]">{t("accueil.hero_phone_stat_label")}</small>
                    <strong className="block text-naka-green">{t("accueil.hero_phone_stat_value")}</strong>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                    <small className="text-[#8ba4ba]">{t("accueil.hero_phone_impact_label")}</small>
                    <strong className="block text-naka-cyan">{t("accueil.hero_phone_impact_value")}</strong>
                  </div>
                </div>
                <div
                  className="mt-4 h-[160px] rounded-[20px] border border-white/10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 70%, #2ecc71 0 5px, transparent 6px), radial-gradient(circle at 78% 22%, #00d2ff 0 5px, transparent 6px), linear-gradient(125deg, transparent 46%, rgba(255,255,255,0.15) 47% 49%, transparent 50%)",
                    backgroundColor: "rgba(255,255,255,0.04)",
                  }}
                />
              </div>
            </div>

            <div className="absolute bottom-[11%] left-0 w-[72%] rounded-[28px] border border-white/15 bg-white/10 p-6 shadow-[0_18px_50px_rgba(11,22,35,0.12)] backdrop-blur-md">
              <strong className="mb-3.5 block text-white">{t("accueil.hero_card_title")}</strong>
              <div className="relative h-[210px] overflow-hidden rounded-[22px] bg-gradient-to-b from-naka-cyan/10 to-white/5">
                <div className="absolute left-[14%] top-[36%] h-[34%] w-[68%] -skew-x-[7deg] rounded-[26px_42px_18px_18px] bg-gradient-to-r from-naka-green to-naka-cyan" />
                <div className="absolute bottom-[21%] left-[22%] h-[50px] w-[50px] rounded-full border-8 border-[#25394d] bg-[#071019]" />
                <div className="absolute bottom-[21%] right-[22%] h-[50px] w-[50px] rounded-full border-8 border-[#25394d] bg-[#071019]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/[0.03] bg-gray-50/50 px-5 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid divide-y divide-black/[0.04] md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="py-5 text-center md:py-0">
              <svg className="mx-auto mb-3 h-7 w-7 text-naka-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path d="M19.07 4.93a10 10 0 010 14.14" />
                <path d="M15.54 8.46a5 5 0 010 7.07" opacity="0.35" />
              </svg>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-naka-text/40">
                {t("accueil.badge_silent_title")}
              </div>
              <p className="mx-auto mt-1.5 max-w-[220px] text-sm leading-relaxed text-naka-text/60">
                {t("accueil.badge_silent_desc")}
              </p>
            </div>
            <div className="py-5 text-center md:py-0">
              <svg className="mx-auto mb-3 h-7 w-7 text-naka-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="5" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
                <line x1="7" y1="12" x2="10" y2="12" />
                <line x1="14" y1="12" x2="17" y2="12" />
              </svg>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-naka-text/40">
                {t("accueil.badge_traceable_title")}
              </div>
              <p className="mx-auto mt-1.5 max-w-[220px] text-sm leading-relaxed text-naka-text/60">
                {t("accueil.badge_traceable_desc")}
              </p>
            </div>
            <div className="py-5 text-center md:py-0">
              <svg className="mx-auto mb-3 h-7 w-7 text-naka-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 12l4-5" />
              </svg>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-naka-text/40">
                {t("accueil.badge_measurable_title")}
              </div>
              <p className="mx-auto mt-1.5 max-w-[220px] text-sm leading-relaxed text-naka-text/60">
                {t("accueil.badge_measurable_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Partners />

      <ScrollReveal>
        <section id="solutions" className="bg-gray-50 px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-[780px]">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
                {t("accueil.solutions_eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("accueil.solutions_title")}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-naka-text/60 md:text-base">
                {t("accueil.solutions_desc")}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 2L3 14h8l-1.5 8L19 10h-8l1.5-8z" />
</svg>, title: t("accueil.solution1_title"), desc: t("accueil.solution1_desc") },
                { icon: <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6-5.7-6-10a6 6 0 0112 0c0 4.3-6 10-6 10z" />
  <circle cx="12" cy="11" r="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>, title: t("accueil.solution2_title"), desc: t("accueil.solution2_desc") },
                { icon: <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5V12m0 0a7.5 7.5 0 007.5-7.5H12m0 0H4.5A7.5 7.5 0 0012 12z" />
</svg>, title: t("accueil.solution3_title"), desc: t("accueil.solution3_desc") },
              ].map((item, i) => (
                <div key={item.title} className="group rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="mb-6 flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-gradient-to-br from-naka-green/20 to-naka-cyan/20">
                    {item.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold tracking-tight text-naka-darkBlue">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-naka-text/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="particuliers" className="bg-white px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl items-center gap-[70px] md:grid md:grid-cols-2">
            <div className="relative min-h-[470px] overflow-hidden rounded-[30px] bg-naka-darkBlue shadow-[0_18px_50px_rgba(11,22,35,0.12)] max-md:min-h-[320px] max-md:mb-10">
              <img
                src="/assets/accueil-particuliers.png"
                alt={t("accueil.individuals_title")}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-naka-darkBlue/30 via-transparent to-transparent" />
            </div>
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
                {t("accueil.individuals_eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("accueil.individuals_title")}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-naka-text/60 md:text-base">
                {t("accueil.individuals_desc")}
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm text-naka-text/60">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-naka-green/10">
                    <CheckIcon />
                  </span>
                  {t("accueil.individuals_feature1")}
                </li>
                <li className="flex items-start gap-3 text-sm text-naka-text/60">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-naka-green/10">
                    <CheckIcon />
                  </span>
                  {t("accueil.individuals_feature2")}
                </li>
                <li className="flex items-start gap-3 text-sm text-naka-text/60">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-naka-green/10">
                    <CheckIcon />
                  </span>
                  {t("accueil.individuals_feature3")}
                </li>
                <li className="flex items-start gap-3 text-sm text-naka-text/60">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-naka-green/10">
                    <CheckIcon />
                  </span>
                  {t("accueil.individuals_feature4")}
                </li>
              </ul>
              <a
                href="#applications"
                className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-naka-darkBlue px-7 py-3.5 text-sm font-semibold text-white transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                {t("accueil.individuals_cta")}
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-gray-50 px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl items-center gap-[70px] md:grid md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
                {t("accueil.businesses_eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("accueil.businesses_title")}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-naka-text/60 md:text-base">
                {t("accueil.businesses_desc")}
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm text-naka-text/60">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-naka-green/10">
                    <CheckIcon />
                  </span>
                  {t("accueil.businesses_feature1")}
                </li>
                <li className="flex items-start gap-3 text-sm text-naka-text/60">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-naka-green/10">
                    <CheckIcon />
                  </span>
                  {t("accueil.businesses_feature2")}
                </li>
                <li className="flex items-start gap-3 text-sm text-naka-text/60">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-naka-green/10">
                    <CheckIcon />
                  </span>
                  {t("accueil.businesses_feature3")}
                </li>
                <li className="flex items-start gap-3 text-sm text-naka-text/60">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-naka-green/10">
                    <CheckIcon />
                  </span>
                  {t("accueil.businesses_feature4")}
                </li>
              </ul>
              <a
                href="/entreprises"
                className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-naka-green to-naka-cyan px-7 py-3.5 text-sm font-semibold text-naka-darkBlue shadow-[0_12px_30px_rgba(0,210,255,0.18)] transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                {t("accueil.businesses_cta")}
              </a>
            </div>
            <div
              className="rounded-[28px] bg-naka-darkBlue p-9 text-white max-md:mt-10"
              style={{
                backgroundImage: "radial-gradient(circle at 90% 10%, rgba(0,210,255,0.18), transparent 26%)",
              }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-naka-green/15 px-3 py-2 text-xs font-bold text-naka-green">
                {t("accueil.dashboard_badge")}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">{t("accueil.dashboard_title")}</h3>
              <div className="mt-7 grid grid-cols-2 gap-[18px]">
                <div className="rounded-[18px] border border-white/10 bg-white/5 p-5">
                  <small className="text-white/70">{t("accueil.dashboard_metric1_label")}</small>
                  <strong className="block text-lg font-bold leading-tight text-white md:text-[1.9rem]">{t("accueil.dashboard_metric1_value")}</strong>
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/5 p-5">
                  <small className="text-white/70">{t("accueil.dashboard_metric2_label")}</small>
                  <strong className="block text-lg font-bold leading-tight text-white md:text-[1.9rem]">{t("accueil.dashboard_metric2_value")}</strong>
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/5 p-5">
                  <small className="text-white/70">{t("accueil.dashboard_metric3_label")}</small>
                  <strong className="block text-lg font-bold leading-tight text-white md:text-[1.9rem]">{t("accueil.dashboard_metric3_value")}</strong>
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/5 p-5">
                  <small className="text-white/70">{t("accueil.dashboard_metric4_label")}</small>
                  <strong className="block text-lg font-bold leading-tight text-white md:text-[1.9rem]">{t("accueil.dashboard_metric4_value")}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-white px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-[780px]">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
                {t("accueil.how_eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("accueil.how_title")}
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-[20px] border border-black/[0.06] bg-white p-7 shadow-[0_12px_36px_rgba(11,22,35,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
                <div className="mb-5 flex h-[42px] w-[42px] items-center justify-center rounded-[14px] bg-naka-darkBlue text-sm font-bold text-white">
                  1
                </div>
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-naka-darkBlue">{t("accueil.how_step1_title")}</h3>
                <p className="text-sm leading-relaxed text-naka-text/60">
                  {t("accueil.how_step1_desc")}
                </p>
              </div>
              <div className="rounded-[20px] border border-black/[0.06] bg-white p-7 shadow-[0_12px_36px_rgba(11,22,35,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
                <div className="mb-5 flex h-[42px] w-[42px] items-center justify-center rounded-[14px] bg-naka-darkBlue text-sm font-bold text-white">
                  2
                </div>
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-naka-darkBlue">{t("accueil.how_step2_title")}</h3>
                <p className="text-sm leading-relaxed text-naka-text/60">
                  {t("accueil.how_step2_desc")}
                </p>
              </div>
              <div className="rounded-[20px] border border-black/[0.06] bg-white p-7 shadow-[0_12px_36px_rgba(11,22,35,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
                <div className="mb-5 flex h-[42px] w-[42px] items-center justify-center rounded-[14px] bg-naka-darkBlue text-sm font-bold text-white">
                  3
                </div>
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-naka-darkBlue">{t("accueil.how_step3_title")}</h3>
                <p className="text-sm leading-relaxed text-naka-text/60">
                  {t("accueil.how_step3_desc")}
                </p>
              </div>
              <div className="rounded-[20px] border border-black/[0.06] bg-white p-7 shadow-[0_12px_36px_rgba(11,22,35,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
                <div className="mb-5 flex h-[42px] w-[42px] items-center justify-center rounded-[14px] bg-naka-darkBlue text-sm font-bold text-white">
                  4
                </div>
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-naka-darkBlue">{t("accueil.how_step4_title")}</h3>
                <p className="text-sm leading-relaxed text-naka-text/60">
                  {t("accueil.how_step4_desc")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="applications" className="bg-naka-darkBlue px-5 py-20 text-white md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-[780px]">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                {t("accueil.apps_eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {t("accueil.apps_title")}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
                {t("accueil.apps_desc")}
              </p>
            </div>
            <div className="grid gap-7 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-9">
                <span className="inline-flex items-center gap-2 rounded-full bg-naka-green/15 px-3 py-2 text-xs font-bold text-naka-green">
                  {t("accueil.app_client_badge")}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">{t("accueil.app_client_title")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {t("accueil.app_client_desc")}
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.naka.client&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-naka-darkBlue transition-all duration-500 hover:scale-[1.02]"
                >
                  {t("accueil.app_client_cta")}
                </a>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-9">
                <span className="inline-flex items-center gap-2 rounded-full bg-naka-green/15 px-3 py-2 text-xs font-bold text-naka-green">
                  {t("accueil.app_pilot_badge")}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">{t("accueil.app_pilot_title")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {t("accueil.app_pilot_desc")}
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.naka.pilot&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-naka-darkBlue transition-all duration-500 hover:scale-[1.02]"
                >
                  {t("accueil.app_pilot_cta")}
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="impact" className="bg-white px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl items-center gap-[70px] md:grid md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
                {t("accueil.impact_eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("accueil.impact_title")}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-naka-text/60 md:text-base">
                {t("accueil.impact_desc")}
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm text-naka-text/60">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-naka-green/10">
                    <CheckIcon />
                  </span>
                  {t("accueil.impact_feature1")}
                </li>
                <li className="flex items-start gap-3 text-sm text-naka-text/60">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-naka-green/10">
                    <CheckIcon />
                  </span>
                  {t("accueil.impact_feature2")}
                </li>
                <li className="flex items-start gap-3 text-sm text-naka-text/60">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-naka-green/10">
                    <CheckIcon />
                  </span>
                  {t("accueil.impact_feature3")}
                </li>
                <li className="flex items-start gap-3 text-sm text-naka-text/60">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-naka-green/10">
                    <CheckIcon />
                  </span>
                  {t("accueil.impact_feature4")}
                </li>
              </ul>
            </div>
            <div className="max-md:mt-10">
              <div className="overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src="/assets/accueil-impact.png"
                  alt={t("accueil.impact_title")}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="a-propos" className="bg-gray-50 px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-[780px]">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
                {t("accueil.about_eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("accueil.about_title")}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-naka-text/60 md:text-base">
                {t("accueil.about_desc")}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-naka-darkBlue">{t("accueil.about_card1_title")}</h3>
                <p className="text-sm leading-relaxed text-naka-text/60">
                  {t("accueil.about_card1_desc")}
                </p>
              </div>
              <div className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-naka-darkBlue">{t("accueil.about_card2_title")}</h3>
                <p className="text-sm leading-relaxed text-naka-text/60">
                  {t("accueil.about_card2_desc")}
                </p>
              </div>
              <div className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-naka-darkBlue">{t("accueil.about_card3_title")}</h3>
                <p className="text-sm leading-relaxed text-naka-text/60">
                  {t("accueil.about_card3_desc")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="actualites" className="bg-white px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-[780px]">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
                {t("accueil.news_eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("accueil.news_title")}
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link to="/blog" className="block rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
                <span className="inline-flex items-center gap-2 rounded-full bg-naka-green/15 px-3 py-2 text-xs font-bold text-naka-green">
                  {t("accueil.news_post1_category")}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-naka-darkBlue">
                  {t("accueil.news_post1_title")}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-naka-text/60">
                  {t("accueil.news_post1_desc")}
                </p>
              </Link>
              <Link to="/blog" className="block rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
                <span className="inline-flex items-center gap-2 rounded-full bg-naka-green/15 px-3 py-2 text-xs font-bold text-naka-green">
                  {t("accueil.news_post2_category")}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-naka-darkBlue">
                  {t("accueil.news_post2_title")}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-naka-text/60">
                  {t("accueil.news_post2_desc")}
                </p>
              </Link>
              <Link to="/blog" className="block rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
                <span className="inline-flex items-center gap-2 rounded-full bg-naka-green/15 px-3 py-2 text-xs font-bold text-naka-green">
                  {t("accueil.news_post3_category")}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-naka-darkBlue">
                  {t("accueil.news_post3_title")}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-naka-text/60">
                  {t("accueil.news_post3_desc")}
                </p>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="contact" className="bg-white px-5 py-16 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div
              className="flex items-center justify-between gap-8 rounded-[32px] bg-naka-darkBlue p-12 text-white max-md:flex-col max-md:items-start"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 90% 10%, rgba(0,210,255,0.18), transparent 26%), radial-gradient(circle at 10% 90%, rgba(46,204,113,0.15), transparent 25%)",
              }}
            >
              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                  {t("accueil.cta_eyebrow")}
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {t("accueil.cta_title")}
                </h2>
                <p className="mt-3 text-sm text-white/55">
                  {t("accueil.cta_desc")}
                </p>
              </div>
              <a
                href="/entreprises#demonstration"
                className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-gradient-to-r from-naka-green to-naka-cyan px-7 py-3.5 text-sm font-semibold text-naka-darkBlue shadow-[0_12px_30px_rgba(0,210,255,0.18)] transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                {t("accueil.cta_button")}
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
