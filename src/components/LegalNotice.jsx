import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LegalNotice() {
  const { t } = useTranslation();
  const s = t("legal.sections", { returnObjects: true });

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/[0.04] bg-white/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-naka-darkBlue transition-colors duration-300 hover:text-naka-cyan">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {t("legal.back")}
          </Link>
          <img src="/icon-logo.png" alt="NAKA" className="h-6 w-auto brightness-0" />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pt-28 pb-24 md:px-8 md:pt-32">
        <h1 className="mb-2 text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
          {t("legal.title")}
        </h1>
        <p className="mb-12 text-sm text-black/40">
          {t("legal.updated")}
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-black/60">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.publisher.title}</h2>
            <p className="mb-4">{s.publisher.content}</p>
            <div className="rounded-xl border border-black/[0.06] bg-black/[0.02] p-4 text-sm">
              <p className="font-medium text-naka-darkBlue">{s.publisher.company}</p>
              <p className="mt-1 text-black/50">{s.publisher.capital}</p>
              <p className="text-black/50">{s.publisher.rcs}</p>
              <p className="text-black/50">{s.publisher.address}</p>
              <p className="text-black/50">{s.publisher.email}</p>
              <p className="text-black/50">{s.publisher.phone}</p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.director.title}</h2>
            <p>{s.director.content}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.hosting.title}</h2>
            <p className="mb-3">{s.hosting.provider}</p>
            <div className="rounded-xl border border-black/[0.06] bg-black/[0.02] p-4 text-sm">
              <p className="font-medium text-naka-darkBlue">{s.hosting.name}</p>
              <p className="mt-1 text-black/50">{s.hosting.address}</p>
              <p className="text-black/50">
                <a href={s.hosting.site} target="_blank" rel="noopener noreferrer" className="text-naka-cyan hover:underline">{s.hosting.site}</a>
              </p>
            </div>
            <p className="mt-4">{s.hosting.content}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.ip.title}</h2>
            <p>{s.ip.content}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.liability.title}</h2>
            <p>{s.liability.content}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.data.title}</h2>
            <p>{s.data.content}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.cookies.title}</h2>
            <p>{s.cookies.content}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.applicable.title}</h2>
            <p>{s.applicable.content}</p>
          </section>
        </div>
      </main>
    </div>
  );
}