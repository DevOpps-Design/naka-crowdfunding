import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/[0.04] bg-white/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-naka-darkBlue transition-colors duration-300 hover:text-naka-cyan">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Retour
          </Link>
          <img src="/icon-logo.png" alt="NAKA" className="h-6 w-auto brightness-0" />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pt-28 pb-24 md:px-8 md:pt-32">
        <h1 className="mb-2 text-3xl font-semibold tracking-tight text-naka-darkBlue md:text-4xl">
Politique de Confidentialité
        </h1>
        <p className="mb-12 text-sm text-black/40">
          Dernière mise à jour : 19 juin 2026
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-black/60">

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">1. Préambule</h2>
            <p>
NAKA (ci-après "la Société", "nous", "notre") accorde une importance capitale à la protection
               des données personnelles de ses utilisateurs, partenaires, investisseurs et visiteurs de son
               site internet. La présente Politique de Confidentialité a pour objet d'informer toute personne
               physique ou morale sur la manière dont nous collectons, utilisons, partageons et protégeons
               ses données à caractère personnel, conformément au Règlement Général sur la Protection des
               Données (RGPD) de l'Union européenne, à la Loi n° 2018-012 relative à la protection des
               données à caractère personnel en République du Togo, ainsi qu'aux principes directeurs de
               l'Union Africaine en matière de cybersécurité et de protection des données.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">2. Identité du Responsable de Traitement</h2>
            <p className="mb-3">
              Le responsable du traitement des données est :
            </p>
            <div className="rounded-xl border border-black/[0.06] bg-black/[0.02] p-4 text-sm">
              <p className="font-medium text-naka-darkBlue">NAKA SARL</p>
              <p className="mt-1 text-black/50">Lomé, Togo</p>
              <p className="text-black/50">Email : privacy@naka.africa</p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">3. Données Collectées</h2>
            <p className="mb-4">Nous collectons les catégories de données suivantes :</p>

            <h3 className="mb-2 font-medium text-naka-darkBlue">3.1 Données fournies directement</h3>
            <ul className="ml-5 mb-4 list-disc space-y-1.5">
              <li>Données d'identification : nom, prénom, adresse email, numéro de téléphone</li>
              <li>Données de paiement : informations de transaction via notre prestataire Kkiapay (aucune donnée bancaire sensible n'est stockée par NAKA)</li>
              <li>Données de profil : structure professionnelle, secteur d'activité, intérêts</li>
              <li>Communications : messages échangés via notre formulaire de contact ou tout autre canal</li>
            </ul>

            <h3 className="mb-2 font-medium text-naka-darkBlue">3.2 Données collectées automatiquement</h3>
            <ul className="ml-5 mb-4 list-disc space-y-1.5">
              <li>Données de navigation : adresse IP, type de navigateur, système d'exploitation, pages visitées, durée de la session</li>
              <li>Données de localisation approximative (au niveau du pays uniquement)</li>
              <li>Cookies techniques et analytiques nécessaires au fonctionnement du site</li>
              <li>Source de provenance (paramètres URL, campagne marketing)</li>
            </ul>

            <h3 className="mb-2 font-medium text-naka-darkBlue">3.3 Données relatives à la campagne de crowdfunding</h3>
            <ul className="ml-5 list-disc space-y-1.5">
              <li>Montant et date de chaque contribution</li>
              <li>Palier choisi et contreparties sélectionnées</li>
              <li>Mode de paiement utilisé (via Kkiapay)</li>
              <li>Statut de la transaction et historique</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">4. Base Légale et Finalités du Traitement</h2>
            <p className="mb-4">Nous traitons vos données sur les bases légales suivantes :</p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-black/[0.06]">
                    <th className="pb-2 pr-4 font-medium text-naka-darkBlue">Finalité</th>
                    <th className="pb-2 font-medium text-naka-darkBlue">Base légale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.04]">
                  <tr>
                    <td className="py-2.5 pr-4 align-top">Exécution du paiement et suivi de la contribution</td>
                    <td className="py-2.5 align-top">Execution du contrat</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 align-top">Communication et réponse aux demandes</td>
                    <td className="py-2.5 align-top">Intérêt légitime</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 align-top">Envoi de communications marketing (avec consentement)</td>
                    <td className="py-2.5 align-top">Consentement</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 align-top">Analyse d'audience et amélioration du site</td>
                    <td className="py-2.5 align-top">Intérêt légitime</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 align-top">Conformité légale et réglementaire</td>
                    <td className="py-2.5 align-top">Obligation légale</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 align-top">Prévention de la fraude et sécurité des transactions</td>
                    <td className="py-2.5 align-top">Intérêt légitime</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">5. Destinataires et Transferts des Données</h2>
            <p className="mb-4">Vos données sont accessibles uniquement aux personnels autorisés de NAKA et à nos prestataires de services suivants :</p>
            <ul className="ml-5 mb-4 list-disc space-y-1.5">
              <li><strong>Kkiapay</strong> : prestataire de paiement (Togo/Benin) - pour le traitement des transactions</li>
              <li><strong>Firebase (Google)</strong> : hébergement et base de données (serveurs Europe)</li>
              <li><strong>Vercel / Netlify</strong> : hebergement du site web (serveurs Europe)</li>
            </ul>
            <p>
Ces prestataires sont contractuellement tenus de respecter des normes de confidentialité
               strictes et conformes au RGPD. En cas de transfert de données hors de l'Union européenne
               ou de l'Union Africaine, nous nous assurons que des garanties adéquates sont en place
               (clauses contractuelles types, décisions d'adéquation).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">6. Durée de Conservation</h2>
            <p className="mb-4">Nous conservons vos données personnelles pour la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, dans le respect des obligations légales :</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li>Données de compte et contributions : 5 ans après la dernière activité (obligations comptables et fiscales)</li>
              <li>Données de navigation et cookies analytiques : 13 mois maximum</li>
              <li>Données de prospection marketing : 3 ans après le dernier contact</li>
              <li>Données de transaction : 10 ans (obligation légale)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">7. Vos Droits</h2>
            <p className="mb-4">Conformément à la réglementation applicable, vous disposez des droits suivants :</p>

            <div className="mb-4 grid gap-3">
              {[
                ["Droit d'accès (art. 15 RGPD)", "Obtenir la confirmation que vos données sont traitées et en obtenir une copie"],
                ["Droit de rectification (art. 16 RGPD)", "Demander la correction de données inexactes ou incomplète"],
                ["Droit à l'effacement (art. 17 RGPD)", "Demander la suppression de vos données sous réserve des obligations légales"],
                ["Droit à la limitation (art. 18 RGPD)", "Restreindre temporairement le traitement de vos données"],
                ["Droit à la portabilité (art. 20 RGPD)", "Recevoir vos données dans un format structuré et lisible"],
                ["Droit d'opposition (art. 21 RGPD)", "Vous opposer au traitement pour motifs légitimes ou à des fins de prospection"],
                ["Droit de retirer votre consentement", "À tout moment, sans affecter la licéité du traitement antérieur"],
                ["Droit de définir des directives", "Relatives au sort de vos données après votre décès"],
              ].map(([right, desc]) => (
                <div key={right} className="rounded-lg border border-black/[0.04] bg-black/[0.02] p-3">
                  <p className="font-medium text-naka-darkBlue">{right}</p>
                  <p className="mt-0.5 text-xs text-black/50">{desc}</p>
                </div>
              ))}
            </div>

            <p>
Pour exercer vos droits, contactez-nous à : <strong>privacy@naka.africa</strong>.
               Nous nous engageons à répondre sous 30 jours. En cas de réponse insatisfaisante,
               vous avez le droit de saisir l'autorité de contrôle compétente (Commission de
               l'Informatique et des Libertés du Togo ou CNIL selon votre ressort).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">8. Cookies et Technologies Similaires</h2>
            <p className="mb-4">Notre site utilise des cookies strictement nécessaires à son fonctionnement et des cookies analytiques pour mesurer l'audience. Lors de votre première visite, un bandeau vous informe et recueille votre consentement pour les cookies non essentiels.</p>
            <p className="mb-3">Types de cookies utilisés :</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li><strong>Cookies fonctionnels</strong> : nécessaires au fonctionnement du site (session, panier)</li>
              <li><strong>Cookies analytiques</strong> : mesures d'audience anonymisées (Google Analytics configuré sans partage de données)</li>
              <li><strong>Cookies de campagne</strong> : tracking de provenance des visiteurs (?source=whatsapp, ?source=linkedin)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">9. Sécurité des Données</h2>
            <p>
Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées
               pour garantir un niveau de sécurité adapté au risque, notamment : le chiffrement des
               transmissions via TLS 1.3, l'authentification multifacteur pour l'accès aux données,
               la pseudonymisation lorsque cela est possible, des sauvegardes régulières, et des
               procédures de test et d'évaluation périodiques de l'efficacité des mesures de sécurité.
               En cas de violation de données, nous nous engageons à notifier l'autorité de contrôle
               compétente dans les 72 heures et à informer les personnes concernées si le risque
               est élevé.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">10. Données des Mineurs</h2>
            <p>
Nos services ne sont pas destinés aux personnes âgées de moins de 15 ans sans le
               consentement d'un titulaire de l'autorité parentale. Nous ne collectons pas
               sciemment des données de mineurs. Si vous estimez qu'un mineur nous a fourni
               des données sans consentement parental, veuillez nous contacter immédiatement.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">11. Modifications de la Politique</h2>
            <p>
Nous nous réservons le droit de modifier la présente politique à tout moment.
               Les modifications substantielles vous seront notifiées par email ou via un
               bandeau d'information sur notre site. Nous vous encourageons à consulter
               régulièrement cette page pour prendre connaissance des éventuelles mises à jour.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">12. Contact et Réclamations</h2>
            <p className="mb-4">
Pour toute question relative à la présente politique ou à l'exercice de vos droits,
               vous pouvez nous contacter :
            </p>
            <div className="rounded-xl border border-black/[0.06] bg-black/[0.02] p-4 text-sm">
              <p className="font-medium text-naka-darkBlue">NAKA SARL</p>
              <p className="mt-1 text-black/50">Email : privacy@naka.africa</p>
              <p className="text-black/50">Dpo : dpo@naka.africa</p>
            </div>
            <p className="mt-4">
Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une
               réclamation auprès de l'autorité de contrôle compétente de votre pays de résidence
               ou du Togo.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
