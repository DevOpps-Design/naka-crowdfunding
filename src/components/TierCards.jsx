import ScrollReveal from "./ScrollReveal";
import { withSource } from "../hooks/useSourceTracking";

const REDIRECT = "https://crowdfunding.naka-africa.com/merci";

const tiers = [
  {
    amount: "10 000",
    label: "FCFA",
    title: "Membre Pionnier",
    type: "B2C",
    link: `https://direct.kkiapay.me/43978/membre-pionnier-M0QfpxnWa?redirect_url=${REDIRECT}`,
    perks: [
      "Certificat numérique exclusif Pionnier de la transition",
      "Nom gravé sur le Mur des fondateurs dans l'app NAKA",
    ],
    highlight: false,
  },
  {
    amount: "25 000",
    label: "FCFA",
    title: "Pack Early Adopter",
    type: "B2C",
    link: `https://direct.kkiapay.me/43978/pack-early-adopter-sGgfnWk-U?redirect_url=${REDIRECT}`,
    perks: [
      "Tous les avantages Membre Pionnier",
      "15 livraisons de colis prépayées à vie sur Lomé",
      "Statut VIP dans l'app (priorite algorithmique)",
    ],
    highlight: true,
  },
  {
    amount: "50 000",
    label: "FCFA",
    title: "Partenaire Entreprise",
    type: "B2B",
    link: `https://direct.kkiapay.me/43978/partenaire-entreprise-oAjiJAFAH?redirect_url=${REDIRECT}`,
    perks: [
      "1 mois d'abonnement B2B offert",
      "Accès complet au Carbon Converter",
      "Certificat officiel d'économie de CO2 pour bilan RSE",
    ],
    highlight: false,
  },
  {
    amount: "250 000",
    label: "FCFA",
    title: "Sponsor Gold",
    type: "B2B",
    link: `https://direct.kkiapay.me/43978/sponsor-gold-250000-4qQrcdxjR?redirect_url=${REDIRECT}`,
    perks: [
      "6 mois d'abonnement B2B premium",
      "Logo sur l'interface du Carbon Engine",
      "Visibilité sur les caisses de livraison pendant 1 an",
    ],
    highlight: false,
    badge: "Limite a 10 places",
  },
];

export default function TierCards() {
  return (
    <ScrollReveal>
      <section id="paliers" className="bg-surface px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-naka-text/40">
              Choisissez votre impact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
              Contribuez à la transition et recevez des contreparties
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t, i) => (
              <div
                key={t.title}
                className={`group relative flex flex-col rounded-3xl border p-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 ${
                  t.highlight
                    ? "border-naka-cyan/20 bg-white shadow-[0_8px_30px_-12px_rgba(0,210,255,0.15)]"
                    : "border-black/[0.04] bg-white shadow-[0_2px_20px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {t.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-naka-cyan px-4 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-naka-darkBlue">
                    Recommande
                  </div>
                )}
                {t.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-naka-darkBlue px-4 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white">
                    {t.badge}
                  </div>
                )}

                <div className="mb-3">
                  <span className="inline-block rounded-md bg-naka-text/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-naka-text/50">
                    {t.type}
                  </span>
                </div>

                <h3 className="mb-4 text-lg font-semibold tracking-tight text-naka-darkBlue">
                  {t.title}
                </h3>

                <div className="mb-6">
                  <span className="text-3xl font-semibold tracking-tight text-naka-darkBlue">
                    {t.amount}
                  </span>
                  <span className="ml-1 text-sm text-naka-text/40">
                    {t.label}
                  </span>
                </div>

                <ul className="flex-1 space-y-3">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-naka-text/60">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-naka-cyan"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4"
                        />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex justify-start pt-6">
                  <a
                    href={withSource(t.link)}
                    
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${
                      t.highlight
                        ? "bg-naka-cyan text-naka-darkBlue"
                        : "border border-naka-cyan/30 bg-naka-cyan/5 text-naka-darkBlue hover:bg-naka-cyan/10"
                    }`}
                  >
                    Soutenir
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-naka-darkBlue/10 text-[10px]">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
