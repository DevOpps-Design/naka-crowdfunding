import { useTranslation } from "react-i18next";

const conservationRows = [
  ["app_privacy:conservation_row1_cat", "app_privacy:conservation_row1_dur"],
  ["app_privacy:conservation_row2_cat", "app_privacy:conservation_row2_dur"],
  ["app_privacy:conservation_row3_cat", "app_privacy:conservation_row3_dur"],
  ["app_privacy:conservation_row4_cat", "app_privacy:conservation_row4_dur"],
  ["app_privacy:conservation_row5_cat", "app_privacy:conservation_row5_dur"],
  ["app_privacy:conservation_row6_cat", "app_privacy:conservation_row6_dur"],
  ["app_privacy:conservation_row7_cat", "app_privacy:conservation_row7_dur"],
  ["app_privacy:conservation_row8_cat", "app_privacy:conservation_row8_dur"],
  ["app_privacy:conservation_row9_cat", "app_privacy:conservation_row9_dur"],
  ["app_privacy:conservation_row10_cat", "app_privacy:conservation_row10_dur"],
];

export default function AppPrivacy() {
  const { t } = useTranslation();
  const toc = [
    { id: "responsable", label: t("app_privacy.toc_items.0") },
    { id: "champ", label: t("app_privacy.toc_items.1") },
    { id: "donnees", label: t("app_privacy.toc_items.2") },
    { id: "permissions", label: t("app_privacy.toc_items.3") },
    { id: "finalites", label: t("app_privacy.toc_items.4") },
    { id: "partage", label: t("app_privacy.toc_items.5") },
    { id: "admin", label: t("app_privacy.toc_items.6") },
    { id: "transferts", label: t("app_privacy.toc_items.7") },
    { id: "conservation", label: t("app_privacy.toc_items.8") },
    { id: "securite", label: t("app_privacy.toc_items.9") },
    { id: "droits", label: t("app_privacy.toc_items.10") },
    { id: "suppression", label: t("app_privacy.toc_items.11") },
    { id: "mineurs", label: t("app_privacy.toc_items.12") },
    { id: "cookies", label: t("app_privacy.toc_items.13") },
    { id: "modifications", label: t("app_privacy.toc_items.14") },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/[0.04] bg-white/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-end px-5 md:px-8">
          <img src="/icon-logo.png" alt="NAKA" className="h-6 w-auto brightness-0" />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pt-28 pb-24 md:px-8 md:pt-32">
        <h1 className="mb-2 text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
          {t("app_privacy.title")}
        </h1>
        <p className="text-sm leading-relaxed text-black/60">
          {t("app_privacy.intro")}
        </p>
        <p className="mb-12 mt-2 text-xs text-black/40">{t("app_privacy.updated")}</p>

        <div className="mb-10 rounded-xl border border-black/[0.06] bg-black/[0.02] p-4 text-sm leading-relaxed text-black/60">
          <strong className="text-naka-darkBlue">{t("app_privacy.remember")}</strong> {t("app_privacy.remember_text")}
        </div>

        <nav className="mb-10 rounded-xl border border-black/[0.06] bg-black/[0.02] p-4 text-sm" aria-label={t("app_privacy.toc")}>
          <h2 className="mb-3 text-base font-semibold text-naka-darkBlue">{t("app_privacy.toc")}</h2>
          <ol className="columns-1 gap-x-10 md:columns-2">
            {toc.map((s) => (
              <li key={s.id} className="mb-1.5 break-inside-avoid">
                <a href={`#app-${s.id}`} className="text-naka-cyan underline-offset-2 hover:underline">{s.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-10 text-sm leading-relaxed text-black/60">
          {/* 1 */}
          <Section id="responsable" label={t("app_privacy.section1_label")}>
            <p>{t("app_privacy.section1_p1")}</p>
            <div className="rounded-xl border border-black/[0.06] bg-black/[0.02] p-4">
              <p><strong>{t("app_privacy.section1_box_name")}</strong> {t("app_privacy.section1_box_name_val")}</p>
              <p className="mt-1"><strong>{t("app_privacy.section1_box_structure")}</strong> {t("app_privacy.section1_box_structure_val")}</p>
              <p className="mt-1"><strong>{t("app_privacy.section1_box_location")}</strong> {t("app_privacy.section1_box_location_val")}</p>
              <p className="mt-1"><strong>{t("app_privacy.section1_box_contact")}</strong> <a href="mailto:support@naka-africa.com" className="text-naka-cyan">support@naka-africa.com</a></p>
              <p className="mt-1"><strong>{t("app_privacy.section1_box_website")}</strong> <a href="https://www.naka-africa.com/" rel="noopener noreferrer" className="text-naka-cyan">www.naka-africa.com</a></p>
              <p className="mt-1"><strong>{t("app_privacy.section1_box_policy")}</strong> <a href="https://www.naka-africa.com/confidentialite" rel="noopener noreferrer" className="text-naka-cyan">www.naka-africa.com/confidentialite</a></p>
            </div>
          </Section>

          {/* 2 */}
          <Section id="champ" label={t("app_privacy.section2_label")}>
            <p>{t("app_privacy.section2_intro")}</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li><strong>NAKA :</strong> {t("app_privacy.section2_li1")}</li>
              <li><strong>NAKA Pilote :</strong> {t("app_privacy.section2_li2")}</li>
              <li><strong>NAKA Admin :</strong> {t("app_privacy.section2_li3")}</li>
              <li><strong>{t("app_privacy.section2_li4")}</strong></li>
              <li><strong>{t("app_privacy.section2_li5")}</strong></li>
            </ul>
            <p className="text-xs text-black/40">{t("app_privacy.section2_note")}</p>
          </Section>

          {/* 3 */}
          <Section id="donnees" label={t("app_privacy.section3_label")}>
            <SubSection label={t("app_privacy.section3_sub1_label")}>
              <ul className="ml-5 list-disc space-y-1.5">
                <li>{t("app_privacy.section3_sub1_li1")}</li>
                <li>{t("app_privacy.section3_sub1_li2")}</li>
                <li>{t("app_privacy.section3_sub1_li3")}</li>
                <li>{t("app_privacy.section3_sub1_li4")}</li>
                <li>{t("app_privacy.section3_sub1_li5")}</li>
              </ul>
              <p className="text-xs text-black/50">{t("app_privacy.section3_sub1_note")}</p>
            </SubSection>

            <SubSection label={t("app_privacy.section3_sub2_label")}>
              <ul className="ml-5 list-disc space-y-1.5">
                <li>{t("app_privacy.section3_sub2_li1")}</li>
                <li>{t("app_privacy.section3_sub2_li2")}</li>
                <li>{t("app_privacy.section3_sub2_li3")}</li>
                <li>{t("app_privacy.section3_sub2_li4")}</li>
                <li>{t("app_privacy.section3_sub2_li5")}</li>
                <li>{t("app_privacy.section3_sub2_li6")}</li>
                <li>{t("app_privacy.section3_sub2_li7")}</li>
                <li>{t("app_privacy.section3_sub2_li8")}</li>
                <li>{t("app_privacy.section3_sub2_li9")}</li>
              </ul>
            </SubSection>

            <SubSection label={t("app_privacy.section3_sub3_label")}>
              <ul className="ml-5 list-disc space-y-1.5">
                <li>{t("app_privacy.section3_sub3_li1")}</li>
                <li>{t("app_privacy.section3_sub3_li2")}</li>
                <li>{t("app_privacy.section3_sub3_li3")}</li>
                <li>{t("app_privacy.section3_sub3_li4")}</li>
                <li>{t("app_privacy.section3_sub3_li5")}</li>
                <li>{t("app_privacy.section3_sub3_li6")}</li>
                <li>{t("app_privacy.section3_sub3_li7")}</li>
              </ul>
            </SubSection>

            <SubSection label={t("app_privacy.section3_sub4_label")}>
              <ul className="ml-5 list-disc space-y-1.5">
                <li>{t("app_privacy.section3_sub4_li1")}</li>
                <li>{t("app_privacy.section3_sub4_li2")}</li>
                <li>{t("app_privacy.section3_sub4_li3")}</li>
                <li>{t("app_privacy.section3_sub4_li4")}</li>
              </ul>
            </SubSection>

            <SubSection label={t("app_privacy.section3_sub5_label")}>
              <ul className="ml-5 list-disc space-y-1.5">
                <li>{t("app_privacy.section3_sub5_li1")}</li>
                <li>{t("app_privacy.section3_sub5_li2")}</li>
                <li>{t("app_privacy.section3_sub5_li3")}</li>
                <li>{t("app_privacy.section3_sub5_li4")}</li>
              </ul>
            </SubSection>

            <SubSection label={t("app_privacy.section3_sub6_label")}>
              <p>{t("app_privacy.section3_sub6_content")}</p>
            </SubSection>

            <SubSection label={t("app_privacy.section3_sub7_label")}>
              <ul className="ml-5 list-disc space-y-1.5">
                <li>{t("app_privacy.section3_sub7_li1")}</li>
                <li>{t("app_privacy.section3_sub7_li2")}</li>
                <li>{t("app_privacy.section3_sub7_li3")}</li>
              </ul>
            </SubSection>
          </Section>

          {/* 4 */}
          <Section id="permissions" label={t("app_privacy.section4_label")}>
            <p>{t("app_privacy.section4_intro")}</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li><strong>{t("app_privacy.section4_li1")}</strong></li>
              <li><strong>{t("app_privacy.section4_li2")}</strong></li>
              <li><strong>{t("app_privacy.section4_li3")}</strong></li>
              <li><strong>{t("app_privacy.section4_li4")}</strong></li>
              <li><strong>{t("app_privacy.section4_li5")}</strong></li>
            </ul>
            <p>{t("app_privacy.section4_outro")}</p>
          </Section>

          {/* 5 */}
          <Section id="finalites" label={t("app_privacy.section5_label")}>
            <ul className="ml-5 list-disc space-y-1.5">
              <li>{t("app_privacy.section5_li1")}</li>
              <li>{t("app_privacy.section5_li2")}</li>
              <li>{t("app_privacy.section5_li3")}</li>
              <li>{t("app_privacy.section5_li4")}</li>
              <li>{t("app_privacy.section5_li5")}</li>
              <li>{t("app_privacy.section5_li6")}</li>
              <li>{t("app_privacy.section5_li7")}</li>
              <li>{t("app_privacy.section5_li8")}</li>
              <li>{t("app_privacy.section5_li9")}</li>
              <li>{t("app_privacy.section5_li10")}</li>
              <li>{t("app_privacy.section5_li11")}</li>
              <li>{t("app_privacy.section5_li12")}</li>
              <li>{t("app_privacy.section5_li13")}</li>
            </ul>

            <h3 className="mt-6 mb-2 font-medium text-naka-darkBlue">{t("app_privacy.section5_sub1_label")}</h3>
            <p>{t("app_privacy.section5_sub1_intro")}</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li>{t("app_privacy.section5_sub1_li1")}</li>
              <li>{t("app_privacy.section5_sub1_li2")}</li>
              <li>{t("app_privacy.section5_sub1_li3")}</li>
              <li>{t("app_privacy.section5_sub1_li4")}</li>
            </ul>

            <h3 className="mt-6 mb-2 font-medium text-naka-darkBlue">{t("app_privacy.section5_sub2_label")}</h3>
            <p>{t("app_privacy.section5_sub2_content")}</p>
          </Section>

          {/* 6 */}
          <Section id="partage" label={t("app_privacy.section6_label")}>
            <p>{t("app_privacy.section6_p1")}</p>
            <p>{t("app_privacy.section6_intro")}</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li><strong>{t("app_privacy.section6_li1")}</strong></li>
              <li><strong>{t("app_privacy.section6_li2")}</strong></li>
              <li><strong>{t("app_privacy.section6_li3")}</strong></li>
              <li><strong>{t("app_privacy.section6_li4")}</strong></li>
              <li><strong>{t("app_privacy.section6_li5")}</strong></li>
              <li><strong>{t("app_privacy.section6_li6")}</strong></li>
              <li><strong>{t("app_privacy.section6_li7")}</strong></li>
              <li><strong>{t("app_privacy.section6_li8")}</strong></li>
              <li><strong>{t("app_privacy.section6_li9")}</strong></li>
            </ul>
            <p>{t("app_privacy.section6_outro")}</p>
          </Section>

          {/* 7 */}
          <Section id="admin" label={t("app_privacy.section7_label")}>
            <p>{t("app_privacy.section7_intro")}</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li>{t("app_privacy.section7_li1")}</li>
              <li>{t("app_privacy.section7_li2")}</li>
              <li>{t("app_privacy.section7_li3")}</li>
              <li>{t("app_privacy.section7_li4")}</li>
              <li>{t("app_privacy.section7_li5")}</li>
            </ul>
            <p>{t("app_privacy.section7_outro")}</p>
          </Section>

          {/* 8 */}
          <Section id="transferts" label={t("app_privacy.section8_label")}>
            <p>{t("app_privacy.section8_content")}</p>
          </Section>

          {/* 9 */}
          <Section id="conservation" label={t("app_privacy.section9_label")}>
            <p>{t("app_privacy.section9_intro")}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-black/[0.06]">
                    <th className="pb-2 pr-4 font-medium text-naka-darkBlue">{t("app_privacy.section9_cat_header")}</th>
                    <th className="pb-2 font-medium text-naka-darkBlue">{t("app_privacy.section9_dur_header")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.04]">
                  {conservationRows.map(([catKey, durKey], i) => (
                    <tr key={i}>
                      <td className="py-2.5 pr-4 align-top">{t(catKey)}</td>
                      <td className="py-2.5 align-top text-black/50">{t(durKey)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-black/40">{t("app_privacy.section9_note")}</p>
          </Section>

          {/* 10 */}
          <Section id="securite" label={t("app_privacy.section10_label")}>
            <p>{t("app_privacy.section10_intro")}</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li>{t("app_privacy.section10_li1")}</li>
              <li>{t("app_privacy.section10_li2")}</li>
              <li>{t("app_privacy.section10_li3")}</li>
              <li>{t("app_privacy.section10_li4")}</li>
              <li>{t("app_privacy.section10_li5")}</li>
              <li>{t("app_privacy.section10_li6")}</li>
              <li>{t("app_privacy.section10_li7")}</li>
            </ul>
            <p>{t("app_privacy.section10_outro")}</p>
          </Section>

          {/* 11 */}
          <Section id="droits" label={t("app_privacy.section11_label")}>
            <p>{t("app_privacy.section11_intro")}</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li>{t("app_privacy.section11_li1")}</li>
              <li>{t("app_privacy.section11_li2")}</li>
              <li>{t("app_privacy.section11_li3")}</li>
              <li>{t("app_privacy.section11_li4")}</li>
              <li>{t("app_privacy.section11_li5")}</li>
              <li>{t("app_privacy.section11_li6")}</li>
              <li>{t("app_privacy.section11_li7")}</li>
              <li>{t("app_privacy.section11_li8")}</li>
            </ul>
            <p>{t("app_privacy.section11_outro")}</p>
            <p>{t("app_privacy.section11_authority")}</p>
          </Section>

          {/* 12 */}
          <Section id="suppression" label={t("app_privacy.section12_label")}>
            <div className="rounded-xl border border-black/[0.06] bg-black/[0.02] p-4">
              <h3 className="mb-2 font-medium text-naka-darkBlue">{t("app_privacy.section12_sub1_label")}</h3>
              <p>{t("app_privacy.section12_sub1_content")}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href="mailto:support@naka-africa.com?subject=Suppression%20de%20mon%20compte%20NAKA&body=Bonjour%2C%0A%0AJe%20demande%20la%20suppression%20de%20mon%20compte%20et%20des%20donn%C3%A9es%20associ%C3%A9es.%0A%0AApplication%20concern%C3%A9e%20%3A%20NAKA%20%2F%20NAKA%20Pilote%20%2F%20les%20deux%0ANum%C3%A9ro%20de%20t%C3%A9l%C3%A9phone%20ou%20email%20du%20compte%20%3A%0ANom%20%3A%0A%0AMerci." className="inline-block rounded-lg bg-naka-cyan px-4 py-2 text-sm font-medium text-naka-darkBlue no-underline transition-all duration-300 hover:scale-[1.02]">
                  {t("app_privacy.section12_sub1_btn_email")}
                </a>
                <a href="/confidentialite#suppression-compte" className="inline-block rounded-lg border border-black/[0.12] px-4 py-2 text-sm text-black/60 no-underline transition-all duration-300 hover:scale-[1.02]">
                  {t("app_privacy.section12_sub1_btn_permanent")}
                </a>
              </div>
            </div>

            <h3 className="mt-6 mb-2 font-medium text-naka-darkBlue">{t("app_privacy.section12_sub2_label")}</h3>
            <ul className="ml-5 list-disc space-y-1.5">
              <li><strong>{t("app_privacy.section12_sub2_li1")}</strong></li>
              <li><strong>{t("app_privacy.section12_sub2_li2")}</strong></li>
            </ul>

            <h3 className="mt-6 mb-2 font-medium text-naka-darkBlue">{t("app_privacy.section12_sub3_label")}</h3>
            <p>{t("app_privacy.section12_sub3_content")}</p>

            <h3 className="mt-6 mb-2 font-medium text-naka-darkBlue">{t("app_privacy.section12_sub4_label")}</h3>
            <ol className="ml-5 list-decimal space-y-1.5">
              <li>{t("app_privacy.section12_sub4_li1")}</li>
              <li>{t("app_privacy.section12_sub4_li2")}</li>
              <li>{t("app_privacy.section12_sub4_li3")}</li>
              <li>{t("app_privacy.section12_sub4_li4")}</li>
            </ol>
            <p>{t("app_privacy.section12_sub4_outro")}</p>

            <h3 className="mt-6 mb-2 font-medium text-naka-darkBlue">{t("app_privacy.section12_sub5_label")}</h3>
            <p>{t("app_privacy.section12_sub5_content")}</p>

            <h3 className="mt-6 mb-2 font-medium text-naka-darkBlue">{t("app_privacy.section12_sub6_label")}</h3>
            <p>{t("app_privacy.section12_sub6_content")}</p>

            <h3 className="mt-6 mb-2 font-medium text-naka-darkBlue">{t("app_privacy.section12_sub7_label")}</h3>
            <p>{t("app_privacy.section12_sub7_content")}</p>
          </Section>

          {/* 13 */}
          <Section id="mineurs" label={t("app_privacy.section13_label")}>
            <p>{t("app_privacy.section13_content")}</p>
          </Section>

          {/* 14 */}
          <Section id="cookies" label={t("app_privacy.section14_label")}>
            <p>{t("app_privacy.section14_content")}</p>
          </Section>

          {/* 15 */}
          <Section id="modifications" label={t("app_privacy.section15_label")}>
            <p>{t("app_privacy.section15_intro")}</p>
            <div className="rounded-xl border border-black/[0.06] bg-black/[0.02] p-4">
              <p className="font-medium text-naka-darkBlue">{t("app_privacy.section15_box_title")}</p>
              <p className="mt-1 text-black/50">{t("app_privacy.section15_box_address")}</p>
              <p className="text-black/50"><a href="mailto:support@naka-africa.com" className="text-naka-cyan">support@naka-africa.com</a></p>
              <p className="text-black/50"><a href="https://www.naka-africa.com/" rel="noopener noreferrer" className="text-naka-cyan">www.naka-africa.com</a></p>
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
}

function Section({ id, label, children }) {
  return (
    <section id={`app-${id}`}>
      <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">{label}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function SubSection({ label, children }) {
  return (
    <>
      <h3 className="mb-2 mt-5 font-medium text-naka-darkBlue">{label}</h3>
      <div className="space-y-3">{children}</div>
    </>
  );
}
