import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCampaign } from "../hooks/useCampaign";
import { useCounter } from "../hooks/useCounter";
import { shareUrl } from "../hooks/useSourceTracking";
import ScrollReveal from "./ScrollReveal";

export default function Thanks() {
  const { t } = useTranslation();
  const { campaign, progress } = useCampaign();
  const pct = useCounter(progress, 1800);
  const co2Kg = Math.round((campaign.totalAmount / 1000) * 2.4);

  return (
    <div className="min-h-screen bg-naka-darkBlue">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
        <ScrollReveal>
          <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-naka-ecoGreen/15">
            <svg
              className="h-8 w-8 text-naka-ecoGreen"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {t("thanks.title")}
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            {t("thanks.desc")}
          </p>

          <div className="mx-auto mt-12 flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              <svg width="160" height="160" viewBox="0 0 160 160" className="-rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="68"
                  fill="none"
                  stroke="white"
                  strokeOpacity="0.08"
                  strokeWidth="6"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="68"
                  fill="none"
                  stroke="#00D2FF"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 68}
                  strokeDashoffset={2 * Math.PI * 68 * (1 - pct / 100)}
                  className="transition-all duration-1500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </svg>
              <span className="absolute text-3xl font-semibold tracking-tight text-white">
                {pct.toFixed(1)}<span className="text-lg font-normal text-naka-cyan">%</span>
              </span>
            </div>
            <p className="mt-4 text-xs text-white/30">
              {t("thanks.co2_prefix")} {co2Kg.toLocaleString()} {t("thanks.co2_unit")} CO<sub>2</sub> {t("thanks.co2_label")}
            </p>
          </div>

          <div className="mt-10">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              {t("thanks.share_title")}
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href={shareUrl("whatsapp")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all duration-300 hover:border-naka-cyan hover:text-naka-cyan"
                aria-label={t("footer.whatsapp")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
              <a
                href={shareUrl("linkedin")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all duration-300 hover:border-naka-cyan hover:text-naka-cyan"
                aria-label={t("footer.linkedin")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={shareUrl("twitter")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all duration-300 hover:border-naka-cyan hover:text-naka-cyan"
                aria-label={t("footer.twitter")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
                </svg>
              </a>
            </div>
          </div>

          <Link
            to="/"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white/60 backdrop-blur-sm transition-all duration-500 hover:bg-white/15 hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {t("thanks.back")}
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}
