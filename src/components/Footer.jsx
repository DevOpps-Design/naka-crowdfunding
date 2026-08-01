import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#071019] px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-12 md:grid-cols-4">
          <div className="md:pr-8">
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt={t("footer.alt_logo")}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              {t("footer.desc")}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/naka.africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 hover:border-naka-cyan hover:text-naka-cyan"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61589794345123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 hover:border-naka-cyan hover:text-naka-cyan"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/naka-africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 hover:border-naka-cyan hover:text-naka-cyan"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://whatsapp.com/channel/0029Vb7NLGj60eBemJYQHJ3P"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 hover:border-naka-cyan hover:text-naka-cyan"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 md:col-span-2">
            <div>
              <h4 className="mb-5 font-semibold text-white">{t("footer.solutions")}</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="/#particuliers"
                  className="text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {t("footer.solutions_particuliers")}
                </a>
                <Link
                  to="/entreprises"
                  className="text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {t("footer.nav_entreprises")}
                </Link>
                <Link
                  to="/pilotes"
                  className="text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {t("footer.nav_pilotes")}
                </Link>
                <a
                  href="/#impact"
                  className="text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {t("footer.solutions_impact")}
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-5 font-semibold text-white">{t("footer.naka_title")}</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="/#a-propos"
                  className="text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {t("footer.naka_about")}
                </a>
                <Link
                  to="/soutenir"
                  className="text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {t("footer.nav_soutenir")}
                </Link>
                <Link
                  to="/blog"
                  className="text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {t("footer.naka_news")}
                </Link>
                <a
                  href="/#contact"
                  className="text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {t("footer.nav_contact")}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-semibold text-white">{t("footer.info_title")}</h4>
            <div className="flex flex-col gap-3 text-sm text-white/50">
              <Link
                to="/confidentialite"
                className="transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                {t("footer.privacy_policy")}
              </Link>
              <Link
                to="/conditions"
                className="transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                {t("footer.terms_of_service")}
              </Link>
              <Link
                to="/mentions-legales"
                className="transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                {t("footer.legal_notice")}
              </Link>
              <a
                href="mailto:support@naka-africa.com"
                className="transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                support@naka-africa.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-6 border-t border-white/[0.06] pt-8 md:flex-row md:justify-between">
          <p className="text-xs text-white/20">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-start gap-6">
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs text-white/40">{t("footer.download_client")}</span>
              <a
                href="https://play.google.com/store/apps/details?id=com.naka.client&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://play.google.com/intl/en/badges/static/images/badges/en_badge_web_generic.png"
                  alt={t("footer.download_client")}
                  className="h-10 w-auto"
                />
              </a>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs text-white/40">{t("footer.download_pilot")}</span>
              <a
                href="https://play.google.com/store/apps/details?id=com.naka.pilot&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://play.google.com/intl/en/badges/static/images/badges/en_badge_web_generic.png"
                  alt={t("footer.download_pilot")}
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
