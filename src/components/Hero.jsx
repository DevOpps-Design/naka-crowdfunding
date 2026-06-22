export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/hero-img.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-naka-darkBlue/80 via-naka-darkBlue/65 to-naka-darkBlue/85" />

      <div className="absolute inset-0 bg-gradient-to-t from-naka-darkBlue/40 via-transparent to-naka-darkBlue/20" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-naka-cyan blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[100dvh] max-w-3xl flex-col items-center justify-center px-6 text-center md:px-8">
        <h1 className="max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Propulsons ensemble la{" "}
          <span className="text-naka-cyan">logistique verte</span> et l'inclusion
          des jeunes au Togo.
        </h1>

        <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/50 md:text-base">
          Soutenez l'infrastructure technologique qui transforme la livraison
          urbaine à Lomé grâce à la mobilité électrique.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#paliers"
            className="group inline-flex items-center gap-2 rounded-full bg-naka-cyan px-6 py-3 text-sm font-semibold text-naka-darkBlue transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Soutenir le projet
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-naka-darkBlue/10 text-[11px] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
          <a
            href="#impact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-500 hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            Comprendre l'impact
          </a>
        </div>
      </div>
    </section>
  );
}
