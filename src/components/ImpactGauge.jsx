import ScrollReveal from "./ScrollReveal";
import { useCounter } from "../hooks/useCounter";
import { useCampaign } from "../hooks/useCampaign";

export default function ImpactGauge() {
  const { campaign, progress, goal } = useCampaign();
  const co2Kg = Math.round((campaign.totalAmount / 1000) * 2.4);

  const amount = useCounter(campaign.totalAmount, 2200);
  const co2 = useCounter(co2Kg, 2200);
  const people = useCounter(campaign.totalContributors, 1800);
  const pct = useCounter(progress, 1800);

  return (
    <ScrollReveal>
      <section id="impact" className="bg-naka-darkBlue px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/40">
              Impact en temps reel
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Ensemble, construisons la logistique de demain
            </h2>
          </div>

          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {amount.toLocaleString()}
              </p>
              <p className="mt-1 text-sm text-white/40">FCFA collectés</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-white/40">Objectif</p>
              <p className="text-lg font-medium text-white/80">
                {goal.toLocaleString()} FCFA
              </p>
            </div>
          </div>

          <div className="relative mb-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-naka-cyan transition-all duration-1500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-semibold tracking-tight text-naka-ecoGreen">
                {co2} kg
              </span>
              <span className="text-sm text-white/40">CO2 évité</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-semibold tracking-tight text-white">
                {people}
              </span>
              <span className="text-sm text-white/40">contributeurs</span>
            </div>
            <div className="text-sm text-white/40">
              <span className="font-medium text-white/80">
                {pct.toFixed(1)}%
              </span>{" "}
              de l'objectif atteint
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
