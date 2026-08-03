import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const clientPlayStore = "https://play.google.com/store/apps/details?id=com.naka.client&pcampaignid=web_share";

function Label({ children, dark = false }) {
  return (
    <p className={`mb-4 text-xs font-medium uppercase tracking-[0.25em] ${dark ? "text-white/50" : "text-naka-text/40"}`}>
      {children}
    </p>
  );
}

function Check({ className = "h-4 w-4 text-naka-green" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H9m10.5 0v10.5" />
    </svg>
  );
}

const valueIcons = [
  <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>,
  <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
  </svg>,
  <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.912 5.813a2 2 0 001.272 1.272L21 12l-5.816 1.915a2 2 0 00-1.272 1.272L12 21l-1.912-5.813a2 2 0 00-1.272-1.272L3 12l5.816-1.915a2 2 0 001.272-1.272L12 3z" />
  </svg>,
  <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>,
];

export default function About() {
  const { t } = useTranslation();

  const whyChallenges = t("about.why_challenges", { returnObjects: true });
  const whySolution = t("about.why_solution", { returnObjects: true });
  const jasonFeatures = t("about.app_jason_features", { returnObjects: true });
  const modelItems = t("about.model_items", { returnObjects: true });
  const evBenefits = t("about.ev_benefits", { returnObjects: true });
  const evQuality = t("about.ev_quality", { returnObjects: true });
  const dataItems = t("about.data_items", { returnObjects: true });
  const launchItems = t("about.launch_items", { returnObjects: true });
  const onboardingSteps = t("about.onboarding_steps", { returnObjects: true });
  const visionItems = t("about.vision_items", { returnObjects: true });
  const values = t("about.values", { returnObjects: true });

  const ctaBtn = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] active:scale-[0.98]";

  return (
    <>
      <ScrollReveal>
        <section className="relative overflow-hidden bg-naka-darkBlue px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-44">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(86,211,100,0.08)_0%,transparent_55%),radial-gradient(ellipse_at_85%_30%,rgba(0,210,255,0.08)_0%,transparent_55%)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 ring-1 ring-inset ring-white/[0.06]">
              <span className="h-1.5 w-1.5 rounded-full bg-naka-ecoGreen" />
              {t("about.hero_eyebrow")}
            </span>
            <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {t("about.hero_title_line1")}{" "}
              <span className="bg-gradient-to-r from-naka-cyan to-naka-ecoGreen bg-clip-text text-transparent">
                {t("about.hero_title_line2")}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              {t("about.hero_intro_1")}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/50 md:text-base">
              {t("about.hero_intro_2")}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={clientPlayStore}
                target="_blank"
                rel="noopener noreferrer"
                className={`${ctaBtn} bg-naka-ecoGreen text-naka-darkBlue`}
              >
                {t("about.cta_download")}
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-naka-darkBlue/10">
                  <Arrow />
                </span>
              </a>
              <Link to="/pilotes" className={`${ctaBtn} border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20`}>
                {t("about.cta_jason")}
              </Link>
              <Link to="/contact" className={`${ctaBtn} text-sm text-white/50 hover:text-white`}>
                {t("about.cta_demo")}
              </Link>
              <Link to="/contact" className={`${ctaBtn} text-sm text-white/50 hover:text-white`}>
                {t("about.cta_partner")}
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-white px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-[820px]">
              <Label>{t("about.why_eyebrow")}</Label>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("about.why_title")}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-naka-text/60 md:text-base">
                {t("about.why_intro")}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-naka-darkBlue p-8 md:p-10">
                <h3 className="mb-6 text-lg font-semibold tracking-tight text-white">
                  {t("about.why_challenges_title")}
                </h3>
                <ul className="space-y-4">
                  {whyChallenges.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 shrink-0">
                        <XIcon />
                      </span>
                      <span className="text-base leading-relaxed text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)] md:p-10">
                <h3 className="mb-6 text-lg font-semibold tracking-tight text-naka-darkBlue">
                  {t("about.why_solution_intro")}
                </h3>
                <ul className="space-y-4">
                  {whySolution.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 shrink-0">
                        <Check />
                      </span>
                      <span className="text-base leading-relaxed text-naka-text/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-gray-50 px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-[820px]">
              <Label>{t("about.apps_eyebrow")}</Label>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("about.apps_title")}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-naka-text/60 md:text-base">
                {t("about.apps_desc")}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="flex flex-col rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)] md:p-10">
                <div className="mb-6 inline-flex">
                  <span className="rounded-full bg-naka-cyan/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-naka-cyan">
                    {t("about.app_client_badge")}
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-semibold tracking-tight text-naka-darkBlue">
                  {t("about.app_client_title")}
                </h3>
                <p className="text-sm leading-relaxed text-naka-text/60">
                  {t("about.app_client_desc")}
                </p>
                <a
                  href={clientPlayStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${ctaBtn} mt-auto inline-flex w-fit bg-naka-cyan text-naka-darkBlue`}
                >
                  {t("about.app_client_link")}
                  <Arrow />
                </a>
              </div>
              <div className="flex flex-col rounded-3xl bg-naka-darkBlue p-8 md:p-10">
                <div className="mb-6 inline-flex">
                  <span className="rounded-full bg-naka-ecoGreen/15 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-naka-ecoGreen">
                    {t("about.app_jason_badge")}
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-semibold tracking-tight text-white">
                  {t("about.app_jason_title")}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {t("about.app_jason_intro")}
                </p>
                <ul className="mt-6 space-y-3">
                  {jasonFeatures.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 shrink-0">
                        <Check className="h-4 w-4 text-naka-ecoGreen" />
                      </span>
                      <span className="text-sm leading-relaxed text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-white/50">
                  {t("about.app_jason_outro")}
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-3xl border border-naka-cyan/20 bg-gradient-to-br from-naka-cyan/[0.06] to-naka-ecoGreen/[0.06] p-8 md:p-10">
              <h3 className="mb-3 text-lg font-semibold tracking-tight text-naka-darkBlue">
                {t("about.jason_name_title")}
              </h3>
              <p className="max-w-4xl text-sm leading-relaxed text-naka-text/60 md:text-base">
                {t("about.jason_name_desc")}
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-white px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <Label>{t("about.model_eyebrow")}</Label>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("about.model_title")}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-naka-text/60 md:text-base">
                {t("about.model_intro")}
              </p>
              <p className="mt-5 rounded-2xl border border-naka-ecoGreen/25 bg-naka-ecoGreen/[0.06] p-6 text-sm leading-relaxed text-naka-text/70">
                {t("about.model_outro")}
              </p>
            </div>
            <div className="rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)] md:p-10">
              <h3 className="mb-6 text-base font-semibold tracking-tight text-naka-darkBlue">
                {t("about.model_title")}
              </h3>
              <ul className="grid gap-4 sm:grid-cols-2">
                {modelItems.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-gray-50 p-5"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <span className="mt-0.5 shrink-0">
                      <Check />
                    </span>
                    <span className="text-sm leading-relaxed text-naka-text/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-gray-50 px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-[820px]">
              <Label>{t("about.ev_eyebrow")}</Label>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("about.ev_title")}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-naka-text/60 md:text-base">
                {t("about.ev_intro")}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-naka-ecoGreen/20 bg-white p-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)] md:p-10">
                <div className="mb-6 flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-gradient-to-br from-naka-ecoGreen/20 to-naka-cyan/20">
                  <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l8.25-3.75L20.25 7.5M3.75 7.5l8.25 8.25M3.75 7.5v4.875c0 .621.504 1.125 1.125 1.125h.038m13.587 0h.037a1.125 1.125 0 001.126-1.125V7.5m-14.688 0l7.5 2.25m6.938-2.25l-6.938 2.25M12 9.75v3.75M20.25 7.5v4.875c0 .621-.504 1.125-1.125 1.125H8.913" />
                  </svg>
                </div>
                <ul className="space-y-4">
                  {evBenefits.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 shrink-0">
                        <Check />
                      </span>
                      <span className="text-base leading-relaxed text-naka-text/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-naka-cyan/20 bg-white p-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)] md:p-10">
                <div className="mb-6 flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-gradient-to-br from-naka-cyan/20 to-naka-ecoGreen/20">
                  <svg className="h-6 w-6 text-naka-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-naka-text/70">
                  {t("about.ev_quality_title")}
                </p>
                <ul className="space-y-4">
                  {evQuality.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 shrink-0">
                        <Check />
                      </span>
                      <span className="text-base leading-relaxed text-naka-text/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 max-w-[820px] text-sm leading-relaxed text-naka-text/60 md:text-base">
              {t("about.ev_outro")}
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative overflow-hidden bg-gradient-to-br from-naka-darkBlue via-[#0d1f33] to-naka-darkBlue px-5 py-24 md:px-8 md:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(86,211,100,0.08)_0%,transparent_55%),radial-gradient(ellipse_at_85%_80%,rgba(0,210,255,0.08)_0%,transparent_55%)]" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12 max-w-[820px]">
              <Label dark>{t("about.data_eyebrow")}</Label>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {t("about.data_title")}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/60 md:text-base">
                {t("about.data_intro")}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {dataItems.map((item, i) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06]">
                    <Check className="h-4 w-4 text-naka-ecoGreen" />
                  </div>
                  <p className="text-sm leading-relaxed text-white/70">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-[820px] text-sm leading-relaxed text-white/50 md:text-base">
              {t("about.data_outro")}
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-white px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <Label>{t("about.launch_eyebrow")}</Label>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("about.launch_title")}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-naka-text/60 md:text-base">
                {t("about.launch_intro")}
              </p>
            </div>
            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {launchItems.map((item, i) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-black/[0.06] bg-gray-50 p-6"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <span className="mt-0.5 shrink-0">
                      <Check />
                    </span>
                    <span className="text-sm leading-relaxed text-naka-text/70">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 max-w-[620px] text-sm leading-relaxed text-naka-text/60 md:text-base">
                {t("about.launch_outro")}
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-gray-50 px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-[820px]">
              <Label>{t("about.onboarding_eyebrow")}</Label>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("about.onboarding_title")}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-naka-text/60 md:text-base">
                {t("about.onboarding_intro")}
              </p>
            </div>
            <ol className="grid gap-4 md:grid-cols-3">
              {onboardingSteps.map((step, i) => (
                <li
                  key={step}
                  className="rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)]"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-naka-ecoGreen/20 to-naka-cyan/20 text-base font-bold text-naka-darkBlue">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-base font-medium leading-relaxed text-naka-darkBlue">{step}</p>
                </li>
              ))}
            </ol>
            <div className="mt-6 rounded-3xl bg-naka-darkBlue p-8 md:p-10">
              <p className="max-w-4xl text-sm leading-relaxed text-white/70 md:text-base">
                {t("about.onboarding_outro")}
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-white px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-[820px]">
              <Label>{t("about.values_eyebrow")}</Label>
              <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
                {t("about.values_title")}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="mb-6 flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-gradient-to-br from-naka-ecoGreen/20 to-naka-cyan/20">
                    {valueIcons[i]}
                  </div>
                  <h3 className="mb-3.5 text-lg font-semibold tracking-tight text-naka-darkBlue">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-naka-text/60">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-3xl bg-gradient-to-br from-naka-ecoGreen/[0.08] to-naka-cyan/[0.08] p-8 md:p-10">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-naka-darkBlue">
                <svg className="h-5 w-5 text-naka-ecoGreen" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold tracking-tight text-naka-darkBlue">
                {t("about.values_human_title")}
              </h3>
              <p className="max-w-4xl text-sm leading-relaxed text-naka-text/60 md:text-base">
                {t("about.values_human_desc")}
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative overflow-hidden bg-gradient-to-br from-naka-darkBlue via-[#0d1f33] to-naka-darkBlue px-5 py-24 md:px-8 md:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(0,210,255,0.08)_0%,transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(86,211,100,0.08)_0%,transparent_55%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
            <div>
              <Label dark>{t("about.story_eyebrow")}</Label>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {t("about.story_title")}
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-white/60 md:text-base">
                {t("about.story_desc")}
              </p>
            </div>
            <div>
              <Label dark>{t("about.vision_eyebrow")}</Label>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {t("about.vision_title")}
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-white/60 md:text-base">
                {t("about.vision_intro")}
              </p>
              <ul className="mt-6 space-y-3">
                {visionItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 shrink-0">
                      <Check className="h-4 w-4 text-naka-ecoGreen" />
                    </span>
                    <span className="text-sm leading-relaxed text-white/70 md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-white/50 md:text-base">
                {t("about.vision_outro")}
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-gray-50 px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <Label>{t("about.team_eyebrow")}</Label>
            <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
              {t("about.team_title")}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-naka-text/60 md:text-base">
              {t("about.team_desc")}
            </p>
            <div className="mt-10 inline-flex flex-col items-center gap-3 rounded-3xl border border-black/[0.06] bg-white px-10 py-8 shadow-[0_12px_36px_rgba(11,22,35,0.06)]">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-naka-ecoGreen to-naka-cyan text-xl font-bold text-naka-darkBlue">
                OH
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight text-naka-darkBlue">
                  {t("about.team_ceo_name")}
                </p>
                <p className="mt-0.5 text-sm text-naka-text/50">
                  {t("about.team_ceo_role")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative overflow-hidden bg-gradient-to-br from-naka-darkBlue via-[#0d1f33] to-naka-darkBlue px-5 py-24 md:px-8 md:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,210,255,0.1)_0%,transparent_55%),radial-gradient(ellipse_at_50%_100%,rgba(86,211,100,0.1)_0%,transparent_55%)]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 ring-1 ring-inset ring-white/[0.06]">
              <span className="h-1.5 w-1.5 rounded-full bg-naka-ecoGreen" />
              {t("about.cta_title")}
            </span>
            <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-5xl">
              {t("about.cta_title")}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
              {t("about.cta_desc")}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={clientPlayStore}
                target="_blank"
                rel="noopener noreferrer"
                className={`${ctaBtn} bg-naka-ecoGreen text-naka-darkBlue`}
              >
                {t("about.cta_download")}
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-naka-darkBlue/10">
                  <Arrow />
                </span>
              </a>
              <Link to="/pilotes" className={`${ctaBtn} bg-naka-cyan text-naka-darkBlue`}>
                {t("about.cta_jason")}
              </Link>
              <Link to="/contact" className={`${ctaBtn} border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20`}>
                {t("about.cta_demo")}
              </Link>
              <Link to="/contact" className={`${ctaBtn} border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20`}>
                {t("about.cta_partner")}
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
