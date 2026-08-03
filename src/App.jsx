import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Accueil = lazy(() => import("./components/Accueil"));
const About = lazy(() => import("./components/About"));
const Entreprises = lazy(() => import("./components/Entreprises"));
const Pilotes = lazy(() => import("./components/Pilotes"));
const Soutenir = lazy(() => import("./components/Soutenir"));
const Contact = lazy(() => import("./components/Contact"));
const Blog = lazy(() => import("./components/Blog"));
const BlogArticle = lazy(() => import("./components/BlogArticle"));
const Privacy = lazy(() => import("./components/Privacy"));
const Terms = lazy(() => import("./components/Terms"));
const Thanks = lazy(() => import("./components/Thanks"));
const AppPrivacy = lazy(() => import("./components/AppPrivacy"));
const LegalNotice = lazy(() => import("./components/LegalNotice"));

function PageFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-naka-darkBlue">
      <p className="animate-pulse text-sm font-medium text-white/60">
        Chargement…
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
        <Route path="/" element={<><Nav /><main><Accueil /></main><Footer /></>} />
        <Route path="/a-propos" element={<><Nav /><main><About /></main><Footer /></>} />
        <Route path="/about" element={<><Nav /><main><About /></main><Footer /></>} />
        <Route path="/entreprises" element={<><Nav /><main><Entreprises /></main><Footer /></>} />
        <Route path="/pilotes" element={<><Nav /><main><Pilotes /></main><Footer /></>} />
        <Route path="/soutenir" element={<><Nav /><main><Soutenir /></main><Footer /></>} />
        <Route path="/contact" element={<><Nav /><main><Contact /></main><Footer /></>} />
        <Route path="/blog" element={<><Nav /><main><Blog /></main><Footer /></>} />
        <Route path="/blog/:slug" element={<><Nav /><main><BlogArticle /></main><Footer /></>} />
        <Route path="/merci" element={<Thanks />} />
        <Route path="/confidentialite" element={<><Nav /><Privacy /></>} />
        <Route path="/conditions" element={<><Nav /><Terms /></>} />
        <Route path="/app-confidentialite" element={<><Nav /><AppPrivacy /></>} />
        <Route path="/app-privacy" element={<><Nav /><AppPrivacy /></>} />
        <Route path="/mentions-legales" element={<><Nav /><LegalNotice /></>} />
        <Route path="/legal-notice" element={<><Nav /><LegalNotice /></>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
