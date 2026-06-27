import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Terms() {
  const { t } = useTranslation();
  const s = t("terms.sections", { returnObjects: true });

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/[0.04] bg-white/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-naka-darkBlue transition-colors duration-300 hover:text-naka-cyan">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {t("terms.back")}
          </Link>
          <img src="/icon-logo.png" alt="NAKA" className="h-6 w-auto brightness-0" />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pt-28 pb-24 md:px-8 md:pt-32">
        <h1 className="mb-2 text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
          {t("terms.title")}
        </h1>
        <p className="mb-12 text-sm text-black/40">
          {t("terms.updated")}
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-black/60">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.object.title}</h2>
            <p className="mb-3">{s.object.content1}</p>
            <p className="mb-3">{s.object.content2}</p>
            <p>{s.object.content3}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.definitions.title}</h2>
            <p className="mb-3">{s.definitions.intro}</p>
            <ul className="ml-5 list-disc space-y-1.5">
              {s.definitions.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*"(.*?)"\*/g, '<strong>"$1"</strong>') }} />
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.campaign.title}</h2>
            <p className="mb-3">{s.campaign.content1}</p>
            <p className="mb-3">{s.campaign.content2}</p>
            <ul className="ml-5 mb-4 list-disc space-y-1.5">
              {s.campaign.items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />)}
            </ul>
            <p><em>{s.campaign.b2b_note}</em></p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.payment.title}</h2>
            <p className="mb-3">{s.payment.intro}</p>
            <ul className="ml-5 mb-4 list-disc space-y-1.5">
              {s.payment.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="mb-3">{s.payment.content2}</p>
            <p>{s.payment.content3}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.contribution.title}</h2>
            <p className="mb-3">{s.contribution.intro}</p>
            <ol className="ml-5 list-decimal space-y-1.5">
              {s.contribution.items.map((item, i) => <li key={i}>{item}</li>)}
            </ol>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.withdrawal.title}</h2>
            <p className="mb-3">{s.withdrawal.content1}</p>
            <p className="mb-3">{s.withdrawal.content2}</p>
            <ol className="ml-5 mb-4 list-decimal space-y-1.5">
              {s.withdrawal.steps.map((step, i) => <li key={i}>{step}</li>)}
            </ol>
            <p>{s.withdrawal.content3}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.ip.title}</h2>
            <p className="mb-3">{s.ip.content1}</p>
            <p className="mb-3">{s.ip.content2}</p>
            <p>{s.ip.content3}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.liability.title}</h2>
            <p className="mb-3">{s.liability.intro}</p>
            <ul className="ml-5 mb-4 list-disc space-y-1.5">
              {s.liability.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p>{s.liability.outro}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.guarantees.title}</h2>
            <p className="mb-3">{s.guarantees.intro}</p>
            <ul className="ml-5 list-disc space-y-1.5">
              {s.guarantees.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.personal_data.title}</h2>
            <p>
              {s.personal_data.content.split("crowdfunding.naka-africa.com/confidentialite").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <Link to="/confidentialite" className="mx-1 text-naka-cyan underline underline-offset-2 transition-colors duration-300 hover:text-naka-darkBlue">
                      crowdfunding.naka-africa.com/confidentialite
                    </Link>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.jurisdiction.title}</h2>
            <p className="mb-3">{s.jurisdiction.content1}</p>
            <p className="mb-3">{s.jurisdiction.content2}</p>
            <p className="mb-3">{s.jurisdiction.content3}</p>
            <ol className="ml-5 mb-4 list-decimal space-y-1.5">
              {s.jurisdiction.items.map((item, i) => <li key={i}>{item}</li>)}
            </ol>
            <p>{s.jurisdiction.outro}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.nullity.title}</h2>
            <p>{s.nullity.content}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{s.contact.title}</h2>
            <p className="mb-4">{s.contact.intro}</p>
            <div className="rounded-xl border border-black/[0.06] bg-black/[0.02] p-4 text-sm">
              <p className="font-medium text-naka-darkBlue">{s.contact.company}</p>
              <p className="mt-1 text-black/50">{s.contact.email}</p>
              <p className="text-black/50">{s.contact.support}</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
