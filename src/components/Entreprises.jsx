import ScrollReveal from "./ScrollReveal";
import { useTranslation } from "react-i18next";

const useCaseIcons = [
  <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>,
  <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
</svg>,
  <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
</svg>,
];

const benefitIcons = [
  <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>,
  <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
</svg>,
  <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0 0C8.25 20.25 3 16.5 3 12V5.25l9-2.25 9 2.25V12c0 4.5-5.25 8.25-9 9z" />
</svg>,
];

const featureIcons = [
  <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
  </svg>,
  <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>,
  <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
  </svg>,
  <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>,
  <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0 0C8.25 20.25 3 16.5 3 12V5.25l9-2.25 9 2.25V12c0 4.5-5.25 8.25-9 9z" />
  </svg>,
];

export default function Entreprises() {
  const { t } = useTranslation();

  const useCases = t("entreprises.use_cases", { returnObjects: true });
  const pilotItems = t("entreprises.pilot_items", { returnObjects: true });
  const benefits = t("entreprises.benefits", { returnObjects: true });
  const appFeatures = t("entreprises.app_features", { returnObjects: true });

  return (
    <>
      <ScrollReveal>
        <section className="relative overflow-hidden bg-naka-darkBlue">
          <img
            src="/assets/banniere-entreprises.png"
            alt={t("entreprises.hero_title")}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-naka-darkBlue/75 via-naka-darkBlue/55 to-naka-darkBlue/90" />
          <div className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-5 text-center md:px-8">
            <h1 className="max-w-4xl text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {t("entreprises.hero_title")}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
              {t("entreprises.hero_desc")}
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="cas-usage" className="bg-white px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-[780px]">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
                {t("entreprises.use_cases_label")}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("entreprises.use_cases_title")}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {useCases.map((uc, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="mb-6 flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-gradient-to-br from-naka-green/20 to-naka-cyan/20">
                    {useCaseIcons[i]}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold tracking-tight text-naka-darkBlue">
                    {uc.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-naka-text/60">
                    {uc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-gray-50 px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
                  {t("entreprises.pilot_label")}
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                  {t("entreprises.pilot_title")}
                </h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-naka-text/60 md:text-lg">
                  {t("entreprises.pilot_desc")}
                </p>
                <ul className="mt-6 space-y-3">
                  {pilotItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-naka-text/70">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-naka-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-naka-darkBlue via-[#101f30] to-naka-darkBlue p-10 shadow-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1">
                <span className="inline-flex items-center gap-2 rounded-full bg-naka-green/15 px-4 py-1.5 text-xs font-semibold text-naka-green">
                  {t("entreprises.pilot_badge")}
                </span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                  {t("entreprises.pilot_model_title")}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {t("entreprises.pilot_model_desc")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-white px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-[780px]">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
                {t("entreprises.benefits_label")}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("entreprises.benefits_title")}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="mb-6 flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-gradient-to-br from-naka-green/20 to-naka-cyan/20">{benefitIcons[i]}</div>
                  <h3 className="text-lg font-semibold tracking-tight text-naka-darkBlue">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-naka-text/60">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-gray-50 px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-[780px]">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
                {t("entreprises.features_label")}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("entreprises.features_title")}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {appFeatures.map((f, i) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="mb-6 flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-gradient-to-br from-naka-green/20 to-naka-cyan/20">
                    {featureIcons[i]}
                  </div>
                  <h3 className="mb-3.5 text-lg font-semibold tracking-tight text-naka-darkBlue">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-naka-text/60">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative overflow-hidden bg-gradient-to-br from-naka-darkBlue via-[#0d1f33] to-naka-darkBlue px-5 py-4 md:px-8 md:py-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(0,210,255,0.06)_0%,transparent_60%),radial-gradient(ellipse_at_80%_50%,rgba(46,204,113,0.05)_0%,transparent_60%)]" />

          <div className="relative mx-auto max-w-6xl">
            <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-24">
              <div className="relative w-full max-w-[280px] shrink-0 md:max-w-[260px] lg:max-w-[280px]">
                <div className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-b from-naka-cyan/20 to-naka-green/10 blur-2xl" />
                <div className="relative rounded-[3rem] border-[3px] border-[#2a2a2e] bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                  <div className="absolute left-1/2 top-0 z-10 h-5 w-32 -translate-x-1/2 rounded-b-2xl bg-[#2a2a2e]">
                    <div className="mx-auto mt-1.5 h-2.5 w-2.5 rounded-full bg-[#1a1a1e]" />
                  </div>
                  <div className="overflow-hidden rounded-[calc(3rem-6px)]">
                    <div className="flex h-[560px] flex-col bg-[#f5f7fa]">
                      <div className="flex items-center justify-between bg-white px-6 pb-1 pt-8">
                        <span className="text-[13px] font-semibold text-black">9:41</span>
                        <div className="flex items-center gap-1.5">
                          <svg className="h-3.5 w-3.5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                          <svg className="h-3 w-3 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-white px-6 pb-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-naka-cyan text-[11px] font-bold text-white">N</div>
                        <div className="text-sm font-semibold text-naka-darkBlue">Bonjour, Adjo!</div>
                      </div>
                      <div className="relative mx-4 mt-3 h-32 rounded-2xl bg-gradient-to-br from-naka-cyan to-naka-green p-4">
                        <div className="text-[10px] font-medium uppercase tracking-wider text-white/70">Course en cours</div>
                        <div className="mt-2 text-lg font-bold text-white">Livraison #NAK-284</div>
                        <div className="mt-1 flex items-center gap-1.5 text-[11px] text-white/80">
                          <svg className="h-3 w-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                          Lomé — Kodjoviakopé
                        </div>
                      </div>
                      <div className="mx-4 mt-3 rounded-2xl bg-white p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-naka-green/10">
                              <svg className="h-4 w-4 text-naka-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <div>
                              <div className="text-[11px] text-naka-text/50">Arrivée estimée</div>
                              <div className="text-sm font-semibold text-naka-darkBlue">14 min</div>
                            </div>
                          </div>
                          <span className="rounded-full bg-naka-green/10 px-3 py-0.5 text-[11px] font-medium text-naka-green">En route</span>
                        </div>
                      </div>
                      <div className="mx-4 mt-3 rounded-2xl bg-white p-4 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-naka-cyan/10">
                            <svg className="h-4 w-4 text-naka-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                          </div>
                          <div>
                            <div className="text-[11px] text-naka-text/50">Justificatif</div>
                            <div className="text-sm font-semibold text-naka-darkBlue">À signer à la livraison</div>
                          </div>
                        </div>
                      </div>
                      <div className="mx-4 mt-3 flex items-center justify-between rounded-2xl bg-naka-green/5 p-3">
                        <div className="text-[11px] text-naka-text/50">kg CO₂ évités</div>
                        <div className="text-sm font-bold text-naka-green">2.4 kg</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-1 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 ring-1 ring-inset ring-white/[0.06]">
                  <span className="h-1.5 w-1.5 rounded-full bg-naka-cyan" />
                  {t("entreprises.download_label")}
                </span>
                <h2 className="mt-5 text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-5xl">
                  {t("entreprises.download_title")}
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50 md:text-base">
                  {t("entreprises.download_desc")}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.naka.client&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-naka-cyan px-6 py-3 text-sm font-semibold text-naka-darkBlue transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {t("entreprises.cta_download")}
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-naka-darkBlue/10 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H9m10.5 0v10.5" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.naka.client&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://play.google.com/intl/en/badges/static/images/badges/en_badge_web_generic.png"
                      alt="Google Play"
                      className="h-12 w-auto opacity-70 transition-all duration-500 hover:opacity-100"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}