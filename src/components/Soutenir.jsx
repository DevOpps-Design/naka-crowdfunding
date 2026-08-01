import Hero from "./Hero";
import Values from "./Values";
import ImpactGauge from "./ImpactGauge";
import Storytelling from "./Storytelling";
import Proof from "./Proof";
import Team from "./Team";
import Partners from "./Partners";
import TierCards from "./TierCards";
import { useSourceTracking } from "../hooks/useSourceTracking";

export default function Soutenir() {
  useSourceTracking();

  return (
    <>
      <Hero />
      <section id="impact">
        <Values />
      </section>
      <ImpactGauge />
      <section id="about">
        <Storytelling />
      </section>
      <Proof />
      <Team />
      <Partners />
      <section id="paliers">
        <TierCards />
      </section>
    </>
  );
}
