import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ScrollReveal({ children, className = "" }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-12 opacity-0 blur-[2px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
