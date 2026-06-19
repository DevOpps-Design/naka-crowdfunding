import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-naka-darkBlue px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-16 md:grid-cols-3">
          <div className="md:pr-8">
            <img src="/logo.png" alt="NAKA" className="mb-5 h-7 w-auto" />
            <p className="mb-6 text-sm leading-relaxed text-white/40">
              Infrastructure logicielle pour la logistique urbaine decarbonee et
              l'inclusion des jeunes au Togo.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 hover:border-naka-cyan hover:text-naka-cyan"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
              <a
                href="#"
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
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 hover:border-naka-cyan hover:text-naka-cyan"
                aria-label="Twitter X"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.25em] text-white/20">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#impact"
                className="text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                Impact
              </a>
              <a
                href="#about"
                className="text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                Equipe
              </a>
              <a
                href="#paliers"
                className="text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                Paliers
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.25em] text-white/20">
              Nous ecrire
            </p>
            <form className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-naka-cyan focus:bg-white/[0.06]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-naka-cyan focus:bg-white/[0.06]"
                />
              </div>
              <textarea
                rows={3}
                placeholder="Votre message"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-naka-cyan focus:bg-white/[0.06]"
              />
              <button
                type="submit"
                className="group relative inline-flex items-center gap-2 self-start overflow-hidden rounded-xl bg-naka-cyan px-5 py-2.5 text-xs font-medium text-naka-darkBlue transition-all duration-300 hover:bg-white"
              >
                <span>Envoyer</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} NAKA. Tous droits reserves.
          </p>
          <div className="flex gap-6">
            <Link to="/confidentialite" className="text-xs text-white/20 transition-colors duration-300 hover:text-white/50">
              Confidentialite
            </Link>
            <Link to="/conditions" className="text-xs text-white/20 transition-colors duration-300 hover:text-white/50">
              Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
