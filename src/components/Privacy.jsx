import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t } = useTranslation();
  const s = t("privacy.sections", { returnObjects: true });

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/[0.04] bg-white/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-naka-darkBlue transition-colors duration-300 hover:text-naka-cyan">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {t("privacy.back")}
          </Link>
          <img src="/icon-logo.png" alt="NAKA" className="h-6 w-auto brightness-0" />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pt-28 pb-24 md:px-8 md:pt-32">
        <h1 className="mb-2 text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
          {t("privacy.title")}
        </h1>
        <p className="mb-12 text-sm text-black/40">
          {t("privacy.updated")}
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-black/60">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.preamble.title}</h2>
            <p>{s.preamble.content}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.controller.title}</h2>
            <p className="mb-3">{s.controller.intro}</p>
            <div className="rounded-xl border border-black/[0.06] bg-black/[0.02] p-4 text-sm">
              <p className="font-medium text-naka-darkBlue">{s.controller.company}</p>
              <p className="mt-1 text-black/50">{s.controller.address}</p>
              <p className="text-black/50">{s.controller.email}</p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.data.title}</h2>
            <p className="mb-4">{s.data.intro}</p>

            <h3 className="mb-2 font-medium text-naka-darkBlue">{s.data.direct_title}</h3>
            <ul className="ml-5 mb-4 list-disc space-y-1.5">
              {s.data.direct_items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h3 className="mb-2 font-medium text-naka-darkBlue">{s.data.auto_title}</h3>
            <ul className="ml-5 mb-4 list-disc space-y-1.5">
              {s.data.auto_items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h3 className="mb-2 font-medium text-naka-darkBlue">{s.data.crowdfunding_title}</h3>
            <ul className="ml-5 list-disc space-y-1.5">
              {s.data.crowdfunding_items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.legal.title}</h2>
            <p className="mb-4">{s.legal.intro}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-black/[0.06]">
                    <th className="pb-2 pr-4 font-medium text-naka-darkBlue">{s.legal.table_headers[0]}</th>
                    <th className="pb-2 font-medium text-naka-darkBlue">{s.legal.table_headers[1]}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.04]">
                  {s.legal.table_rows.map((row, i) => (
                    <tr key={i}>
                      <td className="py-2.5 pr-4 align-top">{row[0]}</td>
                      <td className="py-2.5 align-top">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.recipients.title}</h2>
            <p className="mb-4">{s.recipients.intro}</p>
            <ul className="ml-5 mb-4 list-disc space-y-1.5">
              {s.recipients.items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />)}
            </ul>
            <p>{s.recipients.outro}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.retention.title}</h2>
            <p className="mb-4">{s.retention.intro}</p>
            <ul className="ml-5 list-disc space-y-1.5">
              {s.retention.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.rights.title}</h2>
            <p className="mb-4">{s.rights.intro}</p>
            <div className="mb-4 grid gap-3">
              {s.rights.items.map((r, i) => (
                <div key={i} className="rounded-lg border border-black/[0.04] bg-black/[0.02] p-3">
                  <p className="font-medium text-naka-darkBlue">{r.title}</p>
                  <p className="mt-0.5 text-xs text-black/50">{r.desc}</p>
                </div>
              ))}
            </div>
            <p dangerouslySetInnerHTML={{ __html: s.rights.outro.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.cookies.title}</h2>
            <p className="mb-4">{s.cookies.intro}</p>
            <p className="mb-3">{s.cookies.types_title}</p>
            <ul className="ml-5 list-disc space-y-1.5">
              {s.cookies.types.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />)}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.security.title}</h2>
            <p>{s.security.content}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.minors.title}</h2>
            <p>{s.minors.content}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.changes.title}</h2>
            <p>{s.changes.content}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.contact.title}</h2>
            <p className="mb-4">{s.contact.intro}</p>
            <div className="rounded-xl border border-black/[0.06] bg-black/[0.02] p-4 text-sm">
              <p className="font-medium text-naka-darkBlue">{s.contact.company}</p>
              <p className="mt-1 text-black/50">{s.contact.email}</p>
              <p className="text-black/50">{s.contact.dpo}</p>
            </div>
            <p className="mt-4">{s.contact.outro}</p>
          </section>
        </div>
      </main>
    </div>
  );
}
