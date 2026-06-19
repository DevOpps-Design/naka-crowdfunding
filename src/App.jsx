import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Values from "./components/Values";
import ImpactGauge from "./components/ImpactGauge";
import Storytelling from "./components/Storytelling";
import Proof from "./components/Proof";
import Team from "./components/Team";
import TierCards from "./components/TierCards";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Values />
        <ImpactGauge />
        <Storytelling />
        <Proof />
        <Team />
        <TierCards />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confidentialite" element={<Privacy />} />
        <Route path="/conditions" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}
