import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";

export default function Pilotes() {
  const { t } = useTranslation();

  const pourquoiItems = [
    { icon: <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>, title: t("pilotes.why_card1_title"), description: t("pilotes.why_card1_desc") },
    { icon: <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" /></svg>, title: t("pilotes.why_card2_title"), description: t("pilotes.why_card2_desc") },
    { icon: <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>, title: t("pilotes.why_card3_title"), description: t("pilotes.why_card3_desc") },
  ];

  const itemsProfil = t("pilotes.profile_items", { returnObjects: true });
  const appFeatures = t("pilotes.app_features", { returnObjects: true });

  const featureIcons = [
    <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>,
    <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>,
    <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
    </svg>,
    <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>,
    <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>,
    <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>,
  ];

  return (
    <>
      <ScrollReveal>
        <section className="relative overflow-hidden bg-naka-darkBlue">
          <img
            src="/assets/banniere-pilotes.png"
            alt={t("pilotes.title")}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-naka-darkBlue/75 via-naka-darkBlue/55 to-naka-darkBlue/90" />
          <div className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-5 text-center md:px-8">
            <h1 className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {t("pilotes.title")}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
              {t("pilotes.desc")}
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-white px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-[780px]">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
                {t("pilotes.why_label")}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("pilotes.why_title")}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {pourquoiItems.map((item, i) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="mb-6 flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-gradient-to-br from-naka-ecoGreen/20 to-naka-cyan/20">
                    {item.icon}
                  </div>
                  <h3 className="mb-3.5 text-lg font-semibold tracking-tight text-naka-darkBlue">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-naka-text/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-surface px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
            <div className="relative min-h-[470px] overflow-hidden rounded-[30px] bg-naka-darkBlue shadow-[0_18px_50px_rgba(11,22,35,0.12)]">
              <img
                src="/assets/pilotes-profil.png"
                alt={t("pilotes.profile_title")}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-naka-darkBlue/30 via-transparent to-transparent" />
            </div>
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
                {t("pilotes.profile_label")}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("pilotes.profile_title")}
              </h2>
              <ul className="mt-6 space-y-3">
                {itemsProfil.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 shrink-0">
                      <svg className="h-4 w-4 text-naka-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-base leading-relaxed text-naka-text/70">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-naka-text/50">
                {t("pilotes.profile_footnote")}
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-gray-50 px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-[780px]">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
                {t("pilotes.features_label")}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("pilotes.features_title")}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {appFeatures.map((f, i) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="mb-6 flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-gradient-to-br from-naka-ecoGreen/20 to-naka-cyan/20">
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
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(46,204,113,0.06)_0%,transparent_60%),radial-gradient(ellipse_at_80%_50%,rgba(0,210,255,0.05)_0%,transparent_60%)]" />

          <div className="relative mx-auto max-w-6xl">
            <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-24">
              <div className="relative w-full max-w-[280px] shrink-0 md:max-w-[260px] lg:max-w-[280px]">
                <div className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-b from-naka-ecoGreen/20 to-naka-cyan/10 blur-2xl" />
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
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-naka-ecoGreen text-[11px] font-bold text-white">P</div>
                        <div className="text-sm font-semibold text-naka-darkBlue">Bonjour, Koffi!</div>
                      </div>
                      <div className="mx-4 mt-3 rounded-2xl bg-white p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="text-[10px] font-medium uppercase tracking-wider text-naka-text/50">Aujourd'hui</div>
                          <span className="text-[11px] text-naka-ecoGreen">En ligne</span>
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-3">
                          <div className="rounded-xl bg-naka-ecoGreen/5 p-3 text-center">
                            <div className="text-lg font-bold text-naka-ecoGreen">4</div>
                            <div className="text-[10px] text-naka-text/50">Missions</div>
                          </div>
                          <div className="rounded-xl bg-naka-cyan/5 p-3 text-center">
                            <div className="text-lg font-bold text-naka-cyan">17.2k</div>
                            <div className="text-[10px] text-naka-text/50">F CFA</div>
                          </div>
                        </div>
                      </div>
                      <div className="mx-4 mt-3 flex items-center justify-between">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-naka-text/50">Nouvelles missions</span>
                        <span className="text-[10px] text-naka-cyan">Voir tout</span>
                      </div>
                      <div className="mx-4 mt-2 rounded-2xl border border-naka-ecoGreen/20 bg-white p-4 shadow-sm">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="text-sm font-semibold text-naka-darkBlue">#NAK-291</div>
                            <div className="mt-0.5 flex items-center gap-1 text-[11px] text-naka-text/50">
                              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                              Adidogomé → Centre-ville
                            </div>
                          </div>
                          <span className="rounded-full bg-naka-ecoGreen/10 px-2.5 py-0.5 text-[10px] font-medium text-naka-ecoGreen">3.2 km</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-[11px] text-naka-text/50">
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                          Collecte dans 20 min
                        </div>
                      </div>
                      <div className="mx-4 mt-2 rounded-2xl bg-white p-4 shadow-sm">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="text-sm font-semibold text-naka-darkBlue">#NAK-288</div>
                            <div className="mt-0.5 flex items-center gap-1 text-[11px] text-naka-text/50">
                              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                              Kodjoviakopé → Bè
                            </div>
                          </div>
                          <span className="rounded-full bg-naka-cyan/10 px-2.5 py-0.5 text-[10px] font-medium text-naka-cyan">2.8 km</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-[11px] text-naka-text/50">
                          <div className="h-1.5 w-1.5 rounded-full bg-naka-green animate-pulse" />
                          Terminée
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-1 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 ring-1 ring-inset ring-white/[0.06]">
                  <span className="h-1.5 w-1.5 rounded-full bg-naka-ecoGreen" />
                  {t("pilotes.download_label")}
                </span>
                <h2 className="mt-5 text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-5xl">
                  {t("pilotes.download_title")}
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50 md:text-base">
                  {t("pilotes.download_desc")}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.naka.pilot&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-naka-ecoGreen px-6 py-3 text-sm font-semibold text-naka-darkBlue transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {t("pilotes.cta_download")}
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-naka-darkBlue/10 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H9m10.5 0v10.5" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.naka.pilot&pcampaignid=web_share"
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
