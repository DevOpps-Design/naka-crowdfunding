import { useTranslation } from "react-i18next";

export default function LanguageSwitcher({ light }) {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => i18n.changeLanguage("fr")}
        className={`rounded-md px-2 py-1 text-xs font-medium transition-colors duration-300 ${
          i18n.language === "fr"
            ? light
              ? "text-white"
              : "text-naka-darkBlue"
            : light
              ? "text-white/40 hover:text-white/70"
              : "text-naka-text/40 hover:text-naka-text/70"
        }`}
      >
        FR
      </button>
      <span className={light ? "text-white/20" : "text-naka-text/20"}>|</span>
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`rounded-md px-2 py-1 text-xs font-medium transition-colors duration-300 ${
          i18n.language === "en"
            ? light
              ? "text-white"
              : "text-naka-darkBlue"
            : light
              ? "text-white/40 hover:text-white/70"
              : "text-naka-text/40 hover:text-naka-text/70"
        }`}
      >
        EN
      </button>
    </div>
  );
}
