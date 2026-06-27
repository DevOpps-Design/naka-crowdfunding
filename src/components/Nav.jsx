import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav() {
  const { t } = useTranslation();
  const links = [
    { label: t("nav.impact"), href: "#impact" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.tiers"), href: "#paliers" },
  ];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] md:px-8 ${
          scrolled
            ? "bg-white/80 shadow-[0_1px_0_rgba(0,0,0,0.05)] backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between md:h-18">
          <a href="#">
            <img
              src="/icon-logo.png"
              alt={t("nav.alt_logo")}
              className={`h-7 w-auto transition-all duration-500 ${
                scrolled || open ? "" : "brightness-0 invert"
              }`}
            />
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors duration-300 ${
                  scrolled
                    ? "text-naka-text/50 hover:text-naka-darkBlue"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#paliers"
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] active:scale-[0.98] ${
                scrolled
                  ? "bg-naka-cyan text-naka-darkBlue"
                  : "border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              }`}
            >
              {t("nav.support")}
            </a>
            <LanguageSwitcher light={!scrolled} />
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="relative flex h-8 w-8 items-center justify-center md:hidden"
            aria-label={t("nav.menu")}
          >
            <span
              className={`absolute h-[2px] w-5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open
                  ? "rotate-45 bg-naka-darkBlue"
                  : scrolled
                    ? "-translate-y-[5px] bg-naka-darkBlue"
                    : "-translate-y-[5px] bg-white"
              }`}
            />
            <span
              className={`absolute h-[2px] w-5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open
                  ? "scale-0 opacity-0 bg-naka-darkBlue"
                  : scrolled
                    ? "scale-100 bg-naka-darkBlue"
                    : "scale-100 bg-white"
              } ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute h-[2px] w-5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open
                  ? "-rotate-45 bg-naka-darkBlue"
                  : scrolled
                    ? "translate-y-[5px] bg-naka-darkBlue"
                    : "translate-y-[5px] bg-white"
              }`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-white/95 backdrop-blur-3xl md:hidden">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-medium text-naka-text/50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-naka-darkBlue"
              style={{
                transitionDelay: `${i * 80}ms`,
                transform: open ? "translateY(0)" : "translateY(24px)",
                opacity: open ? 1 : 0,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#paliers"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-naka-cyan px-8 py-3 text-lg font-medium text-naka-darkBlue"
          >
            {t("nav.support")}
          </a>
          <div className="mt-4">
            <LanguageSwitcher light={false} />
          </div>
        </div>
      )}
    </>
  );
}
