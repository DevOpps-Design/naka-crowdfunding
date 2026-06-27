import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-naka-darkBlue px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-16 md:grid-cols-3">
          <div className="md:pr-8">
            <img src="/logo.png" alt={t("footer.alt_logo")} className="mb-5 h-7 w-auto" />
            <p className="mb-6 text-sm leading-relaxed text-white/40">
              {t("footer.desc")}
            </p>
            <div className="flex gap-4">
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

          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.25em] text-white/20">
              {t("footer.nav_title")}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#impact"
                className="text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                {t("footer.nav_impact")}
              </a>
              <a
                href="#about"
                className="text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                {t("footer.nav_team")}
              </a>
              <a
                href="#paliers"
                className="text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                {t("footer.nav_tiers")}
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.25em] text-white/20">
              {t("footer.contact_title")}
            </p>
            <div className="flex flex-col gap-4 text-sm text-white/50">
              <a href="tel:+22870251414" className="flex items-center gap-3 transition-all duration-300 hover:text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white/20">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +228 70 25 14 14
              </a>
              <div className="flex items-start gap-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-white/20">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>316, Rue 189 Agbalépedogan, Lomé, Togo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
          <p className="text-xs text-white/20">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-6">
            <Link to="/confidentialite" className="text-xs text-white/20 transition-colors duration-300 hover:text-white/50">
              {t("footer.privacy")}
            </Link>
            <Link to="/conditions" className="text-xs text-white/20 transition-colors duration-300 hover:text-white/50">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
