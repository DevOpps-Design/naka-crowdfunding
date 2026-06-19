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
          Politique de Confidentialite
        </h1>
        <p className="mb-12 text-sm text-black/40">
          Derniere mise a jour : 19 juin 2026
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-black/60">

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">1. Preambule</h2>
            <p>
              NAKA (ci-apres "la Societe", "nous", "notre") accorde une importance capitale a la protection
              des donnees personnelles de ses utilisateurs, partenaires, investisseurs et visiteurs de son
              site internet. La presente Politique de Confidentialite a pour objet d'informer toute personne
              physique ou morale sur la maniere dont nous collectons, utilisons, partageons et protegeons
              ses donnees a caractere personnel, conformement au Reglement General sur la Protection des
              Donnees (RGPD) de l'Union europeenne, a la Loi n° 2018-012 relative a la protection des
              donnees a caractere personnel en Republique du Togo, ainsi qu'aux principes directeurs de
              l'Union Africaine en matiere de cybersecurite et de protection des donnees.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">2. Identite du Responsable de Traitement</h2>
            <p className="mb-3">
              Le responsable du traitement des donnees est :
            </p>
            <div className="rounded-xl border border-black/[0.06] bg-black/[0.02] p-4 text-sm">
              <p className="font-medium text-naka-darkBlue">NAKA SARL</p>
              <p className="mt-1 text-black/50">Lome, Togo</p>
              <p className="text-black/50">Email : privacy@naka.africa</p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">3. Donnees Collectees</h2>
            <p className="mb-4">Nous collectons les categories de donnees suivantes :</p>

            <h3 className="mb-2 font-medium text-naka-darkBlue">3.1 Donnees fournies directement</h3>
            <ul className="ml-5 mb-4 list-disc space-y-1.5">
              <li>Donnees d'identification : nom, prenom, adresse email, numero de telephone</li>
              <li>Donnees de paiement : informations de transaction via notre prestataire Kkiapay (aucune donnee bancaire sensible n'est stockee par NAKA)</li>
              <li>Donnees de profil : structure professionnelle, secteur d'activite, interets</li>
              <li>Communications : messages echanges via notre formulaire de contact ou tout autre canal</li>
            </ul>

            <h3 className="mb-2 font-medium text-naka-darkBlue">3.2 Donnees collectees automatiquement</h3>
            <ul className="ml-5 mb-4 list-disc space-y-1.5">
              <li>Donnees de navigation : adresse IP, type de navigateur, systeme d'exploitation, pages visitees, duree de la session</li>
              <li>Donnees de localisation approximative (au niveau du pays uniquement)</li>
              <li>Cookies techniques et analytiques necessaires au fonctionnement du site</li>
              <li>Source de provenance (parametres URL, campagne marketing)</li>
            </ul>

            <h3 className="mb-2 font-medium text-naka-darkBlue">3.3 Donnees relatives a la campagne de crowdfunding</h3>
            <ul className="ml-5 list-disc space-y-1.5">
              <li>Montant et date de chaque contribution</li>
              <li>Palier choisi et contreparties selectionnees</li>
              <li>Mode de paiement utilise (via Kkiapay)</li>
              <li>Statut de la transaction et historique</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">4. Base Legale et Finalites du Traitement</h2>
            <p className="mb-4">Nous traitons vos donnees sur les bases legales suivantes :</p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-black/[0.06]">
                    <th className="pb-2 pr-4 font-medium text-naka-darkBlue">Finalite</th>
                    <th className="pb-2 font-medium text-naka-darkBlue">Base legale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.04]">
                  <tr>
                    <td className="py-2.5 pr-4 align-top">Execution du paiement et suivi de la contribution</td>
                    <td className="py-2.5 align-top">Execution du contrat</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 align-top">Communication et reponse aux demandes</td>
                    <td className="py-2.5 align-top">Interet legitime</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 align-top">Envoi de communications marketing (avec consentement)</td>
                    <td className="py-2.5 align-top">Consentement</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 align-top">Analyse d'audience et amelioration du site</td>
                    <td className="py-2.5 align-top">Interet legitime</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 align-top">Conformite legale et reglementaire</td>
                    <td className="py-2.5 align-top">Obligation legale</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 align-top">Prevention de la fraude et securite des transactions</td>
                    <td className="py-2.5 align-top">Interet legitime</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">5. Destinataires et Transferts des Donnees</h2>
            <p className="mb-4">Vos donnees sont accessibles uniquement aux personnels autorises de NAKA et a nos prestataires de services suivants :</p>
            <ul className="ml-5 mb-4 list-disc space-y-1.5">
              <li><strong>Kkiapay</strong> : prestataire de paiement (Togo/Benin) - pour le traitement des transactions</li>
              <li><strong>Firebase (Google)</strong> : hebergement et base de donnees (serveurs Europe)</li>
              <li><strong>Vercel / Netlify</strong> : hebergement du site web (serveurs Europe)</li>
            </ul>
            <p>
              Ces prestataires sont contractuellement tenus de respecter des normes de confidentialite
              strictes et conformes au RGPD. En cas de transfert de donnees hors de l'Union europeenne
              ou de l'Union Africaine, nous nous assurons que des garanties adequates sont en place
              (clauses contractuelles types, decisions d'adequation).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">6. Duree de Conservation</h2>
            <p className="mb-4">Nous conservons vos donnees personnelles pour la duree necessaire a la realisation des finalites pour lesquelles elles ont ete collectees, dans le respect des obligations legales :</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li>Donnees de compte et contributions : 5 ans apres la derniere activite (obligations comptables et fiscales)</li>
              <li>Donnees de navigation et cookies analytiques : 13 mois maximum</li>
              <li>Donnees de prospection marketing : 3 ans apres le dernier contact</li>
              <li>Donnees de transaction : 10 ans (obligation legale)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">7. Vos Droits</h2>
            <p className="mb-4">Conformement a la reglementation applicable, vous disposez des droits suivants :</p>

            <div className="mb-4 grid gap-3">
              {[
                ["Droit d'acces (art. 15 RGPD)", "Obtenir la confirmation que vos donnees sont traitees et en obtenir une copie"],
                ["Droit de rectification (art. 16 RGPD)", "Demander la correction de donnees inexactes ou incomplete"],
                ["Droit a l'effacement (art. 17 RGPD)", "Demander la suppression de vos donnees sous reserve des obligations legales"],
                ["Droit a la limitation (art. 18 RGPD)", "Restreindre temporairement le traitement de vos donnees"],
                ["Droit a la portabilite (art. 20 RGPD)", "Recevoir vos donnees dans un format structure et lisible"],
                ["Droit d'opposition (art. 21 RGPD)", "Vous opposer au traitement pour motifs legitimes ou a des fins de prospection"],
                ["Droit de retirer votre consentement", "A tout moment, sans affecter la licite du traitement anterieur"],
                ["Droit de definir des directives", "Relatives a la sort de vos donnees apres votre deces"],
              ].map(([right, desc]) => (
                <div key={right} className="rounded-lg border border-black/[0.04] bg-black/[0.02] p-3">
                  <p className="font-medium text-naka-darkBlue">{right}</p>
                  <p className="mt-0.5 text-xs text-black/50">{desc}</p>
                </div>
              ))}
            </div>

            <p>
              Pour exercer vos droits, contactez-nous a : <strong>privacy@naka.africa</strong>.
              Nous nous engageons a repondre sous 30 jours. En cas de reponse insatisfaisante,
              vous avez le droit de saisir l'autorite de controle competente (Commission de
              l'Informatique et des Libertes du Togo ou CNIL selon votre ressort).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">8. Cookies et Technologies Similaires</h2>
            <p className="mb-4">Notre site utilise des cookies strictement necessaires a son fonctionnement et des cookies analytiques pour mesurer l'audience. Lors de votre premiere visite, un bandeur vous informe et recueille votre consentement pour les cookies non essentiels.</p>
            <p className="mb-3">Types de cookies utilises :</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li><strong>Cookies fonctionnels</strong> : necessaires au fonctionnement du site (session, panier)</li>
              <li><strong>Cookies analytiques</strong> : mesures d'audience anonymisees (Google Analytics configure sans partage de donnees)</li>
              <li><strong>Cookies de campagne</strong> : tracking de provenance des visiteurs (?source=whatsapp, ?source=linkedin)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">9. Securite des Donnees</h2>
            <p>
              Nous mettons en oeuvre toutes les mesures techniques et organisationnelles appropriees
              pour garantir un niveau de securite adapte au risque, notamment : le chiffrement des
              transmissions via TLS 1.3, l'authentification multifacteur pour l'acces aux donnees,
              la pseudonymisation lorsque cela est possible, des sauvegardes regulieres, et des
              procedures de test et d'evaluation periodiques de l'efficacite des mesures de securite.
              En cas de violation de donnees, nous nous engageons a notifier l'autorite de controle
              competente dans les 72 heures et a informer les personnes concernees si le risque
              est eleve.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">10. Donnees des Mineurs</h2>
            <p>
              Nos services ne sont pas destines aux personnes agees de moins de 15 ans sans le
              consentement d'un titulaire de l'autorite parentale. Nous ne collectons pas
              sciemment des donnees de mineurs. Si vous estimez qu'un mineur nous a fourni
              des donnees sans consentement parental, veuillez nous contacter immediatement.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">11. Modifications de la Politique</h2>
            <p>
              Nous nous reservons le droit de modifier la presente politique a tout moment.
              Les modifications substantielles vous seront notifiees par email ou via un
              bandeau d'information sur notre site. Nous vous encourageons a consulter
              regulierement cette page pour prendre connaissance des eventuelles mises a jour.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">12. Contact et Reclamations</h2>
            <p className="mb-4">
              Pour toute question relative a la presente politique ou a l'exercice de vos droits,
              vous pouvez nous contacter :
            </p>
            <div className="rounded-xl border border-black/[0.06] bg-black/[0.02] p-4 text-sm">
              <p className="font-medium text-naka-darkBlue">NAKA SARL</p>
              <p className="mt-1 text-black/50">Email : privacy@naka.africa</p>
              <p className="text-black/50">Dpo : dpo@naka.africa</p>
            </div>
            <p className="mt-4">
              Si vous estimez que vos droits ne sont pas respectes, vous pouvez introduire une
              reclamation aupres de l'autorite de controle competente de votre pays de residence
              ou du Togo.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
