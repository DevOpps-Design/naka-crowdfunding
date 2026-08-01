import { useState } from "react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    const data = new FormData(e.target);
    data.append("_subject", `Contact site NAKA — ${data.get("subject") || ""}`);
    try {
      const res = await fetch("https://formsubmit.co/ajax/support@naka-africa.com", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Formsubmit error");
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-naka-darkBlue">
        <img
          src="/assets/banniere-contact.png"
          alt={t("contact.title")}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-naka-darkBlue/70 via-naka-darkBlue/50 to-naka-darkBlue/85" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-naka-cyan blur-3xl" />
          <div className="absolute -bottom-20 right-10 h-80 w-80 rounded-full bg-naka-green blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-5 pt-16 text-center md:px-8 md:pt-18">
          <h1 className="max-w-4xl text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {t("contact.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
            {t("contact.desc")}
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mt-16 grid gap-12 md:grid-cols-5 first:mt-0">
            <div className="md:col-span-3">
              {sent ? (
                <div className="rounded-3xl border border-black/[0.04] bg-gray-50/50 p-10 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-naka-green/10">
                    <svg className="h-7 w-7 text-naka-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-naka-darkBlue">{t("contact.success_title")}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-naka-text/60">{t("contact.success_desc")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-naka-text/50">{t("contact.name")}</label>
                      <input type="text" name="name" required className="w-full rounded-xl border border-black/[0.06] bg-gray-50/50 px-4 py-3 text-sm text-naka-darkBlue outline-none transition-all duration-300 focus:border-naka-cyan/30 focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,210,255,0.08)] placeholder:text-naka-text/30" placeholder={t("contact.name_placeholder")} />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-naka-text/50">{t("contact.email")}</label>
                      <input type="email" name="email" required className="w-full rounded-xl border border-black/[0.06] bg-gray-50/50 px-4 py-3 text-sm text-naka-darkBlue outline-none transition-all duration-300 focus:border-naka-cyan/30 focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,210,255,0.08)] placeholder:text-naka-text/30" placeholder={t("contact.email_placeholder")} />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-naka-text/50">{t("contact.subject")}</label>
                    <input type="text" name="subject" required className="w-full rounded-xl border border-black/[0.06] bg-gray-50/50 px-4 py-3 text-sm text-naka-darkBlue outline-none transition-all duration-300 focus:border-naka-cyan/30 focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,210,255,0.08)] placeholder:text-naka-text/30" placeholder={t("contact.subject_placeholder")} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-naka-text/50">{t("contact.message")}</label>
                    <textarea name="message" rows={5} required className="w-full resize-none rounded-xl border border-black/[0.06] bg-gray-50/50 px-4 py-3 text-sm text-naka-darkBlue outline-none transition-all duration-300 focus:border-naka-cyan/30 focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,210,255,0.08)] placeholder:text-naka-text/30" placeholder={t("contact.message_placeholder")} />
                  </div>
                  {error && (
                    <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                      {t("contact.error")}
                    </p>
                  )}
                  <button type="submit" disabled={sending} className="rounded-full bg-naka-cyan px-8 py-3 text-sm font-semibold text-naka-darkBlue transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100">
                    {sending ? t("contact.sending") : t("contact.send")}
                  </button>
                </form>
              )}
            </div>

            <div className="md:col-span-2">
              <div className="rounded-3xl border border-black/[0.04] bg-gray-50/50 p-8">
                <h3 className="mb-6 text-sm font-semibold tracking-tight text-naka-darkBlue">{t("contact.info_title")}</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3.5">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-naka-text/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-naka-darkBlue">{t("contact.address")}</p>
                      <p className="mt-0.5 text-sm text-naka-text/50">Totsi, Lomé, Togo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-naka-text/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-naka-darkBlue">{t("contact.phone")}</p>
                      <p className="mt-0.5 text-sm text-naka-text/50">+228 72 67 02 03</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-naka-text/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-10 7L2 7" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-naka-darkBlue">{t("contact.email")}</p>
                      <p className="mt-0.5 text-sm text-naka-text/50">support@naka-africa.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="bg-naka-darkBlue px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                {t("contact.cta_eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {t("contact.cta_title")}
              </h2>
              <p className="mt-3 text-sm text-white/55">
                {t("contact.cta_desc")}
              </p>
              <a
                href="/soutenir"
                className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-naka-green to-naka-cyan px-8 py-3.5 text-sm font-semibold text-naka-darkBlue shadow-[0_12px_30px_rgba(0,210,255,0.18)] transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                {t("contact.cta_link")}
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
