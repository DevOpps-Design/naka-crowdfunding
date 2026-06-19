import { Link } from "react-router-dom";

export default function Terms() {
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
          Conditions Generales d&apos;Utilisation et de Participation
        </h1>
        <p className="mb-12 text-sm text-black/40">
          Derniere mise a jour : 19 juin 2026
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-black/60">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">1. Objet et Acceptation des Conditions</h2>
            <p className="mb-3">
              Les presentes Conditions Generales (ci-apres les "CGU/CGV") regissent l'acces et l'utilisation
              du site internet accessible a l'adresse <strong>naka.africa</strong> (ci-apres le "Site"),
              ainsi que les modalites de participation a la campagne de financement participatif (crowdfunding)
              organisee par NAKA SARL.
            </p>
            <p className="mb-3">
              En accedant au Site, en naviguant sur celui-ci, ou en effectuant une contribution financiere,
              vous reconnaissez avoir pris connaissance des presentes conditions et les accepter
              integralement et sans reserve. Si vous n'acceptez pas ces conditions, veuillez ne pas
              utiliser le Site ni participer a la campagne.
            </p>
            <p>
              NAKA se reserve le droit de modifier les presentes conditions a tout moment. Les modifications
              prennent effet des leur publication sur le Site. Il vous appartient de consulter
              regulierement les CGU/CGV.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">2. Definitions</h2>
            <p className="mb-3">Dans les presentes conditions :</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li><strong>"Campagne"</strong> : designe la periode de collecte de fonds du 25 juin 2026 a la date de cloture annoncee sur le Site</li>
              <li><strong>"Contributeur"</strong> : toute personne physique ou morale ayant effectue un versement dans le cadre de la Campagne</li>
              <li><strong>"Contribution"</strong> : le montant verse par le Contributeur, hors frais de transaction</li>
              <li><strong>"Contrepartie"</strong> : le bien ou service propose par NAKA en reconnaissance d'une Contribution, selon le palier choisi</li>
              <li><strong>"Plateforme"</strong> : l'infrastructure technique et logicielle de NAKA</li>
              <li><strong>"Kkiapay"</strong> : le prestataire de services de paiement tiers utilise pour le traitement des transactions</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">3. Description de la Campagne</h2>
            <p className="mb-3">
              NAKA organise une campagne de crowdfunding visant a collecter des fonds pour le developpement
              et le deploiement de son infrastructure logicielle dediee a la logistique urbaine decarbonee
              et a l'inclusion des jeunes au Togo. L'objectif de collecte est fixe a <strong>3 000 000 FCFA</strong>
              (environ 5 000 USD).
            </p>
            <p className="mb-3">La Campagne propose les paliers de contribution suivants :</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li><strong>5 000 FCFA</strong> – Badge "Early Supporter" + suivi exclusif</li>
              <li><strong>25 000 FCFA</strong> – Badge "Early Supporter" + acces privilegie a la plateforme</li>
              <li><strong>50 000 FCFA</strong> – Badge "Early Supporter" + acces privilegie + pack branding</li>
              <li><strong>100 000 FCFA</strong> – Badge "Early Supporter" + Co-founder token + acces API + rapport carbone</li>
              <li><em>Paliers B2B disponibles sur demande via le formulaire de contact</em></li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">4. Modalites de Paiement</h2>
            <p className="mb-3">
              Les Contributions sont effectuees exclusivement via le prestataire de paiement Kkiapay,
              accessible depuis le Site. Les moyens de paiement acceptes sont :
            </p>
            <ul className="ml-5 mb-4 list-disc space-y-1.5">
              <li>Mobile Money (Togo, Benin, Cote d'Ivoire, Senegal, Burkina Faso, Mali, Niger)</li>
              <li>Cartes bancaires internationales (Visa, Mastercard)</li>
            </ul>
            <p className="mb-3">
              Le Contributeur garantit qu'il est le titulaire legitime du moyen de paiement utilise
              et que les fonds sont disponibles. Toute transaction frauduleuse ou non autorisee
              entrainera l'annulation de la Contribution et pourra donner lieu a des poursuites
              judiciaires.
            </p>
            <p>
              Les frais de transaction appliques par Kkiapay sont a la charge de NAKA pour les
              paiements Mobile Money et a la charge du Contributeur pour les paiements par carte
              bancaire internationale.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">5. Conditions de la Contribution</h2>
            <p className="mb-3">En effectuant une Contribution, le Contributeur reconnait et accepte expressement que :</p>
            <ol className="ml-5 list-decimal space-y-1.5">
              <li>Sa Contribution est volontaire et constitue un soutien financier a la mission de NAKA</li>
              <li>Les Contreparties decrites sur le Site constituent une promesse unilaterale de NAKA et non une obligation de resultat</li>
              <li>NAKA s'engage a deployer tous les moyens raisonnables pour honorer les Contreparties dans les delais annonces</li>
              <li>En cas d'echec de la Campagne (objectif non atteint), les Contributions seront entierement remboursees sous 30 jours ouvrés, deduction faite des frais de transaction non recuperables</li>
              <li>En cas de succes de la Campagne mais d'impossibilite de livrer les Contreparties pour un cas de force majeure, NAKA proposera une Contrepartie alternative de valeur equivalente</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">6. Droit de Retractation et Remboursement</h2>
            <p className="mb-3">
              Conformement a la reglementation applicable en matiere de vente a distance et aux
              dispositions de l'Acte Uniforme OHADA portant sur le droit commercial general,
              le Contributeur dispose d'un delai de retractation de quatorze (14) jours calendaires
              a compter de la date de sa Contribution pour demander le remboursement integral de
              celle-ci, sans motif et sans penalite.
            </p>
            <p className="mb-3">Pour exercer ce droit, le Contributeur doit :</p>
            <ol className="ml-5 mb-4 list-decimal space-y-1.5">
              <li>Envoyer une demande ecrite a l'adresse email : support@naka.africa</li>
              <li>Preciser son nom, prenom, adresse email de contribution, montant et date de la transaction</li>
              <li>Fournir la reference de transaction Kkiapay</li>
            </ol>
            <p>
              Le remboursement sera effectue sous 14 jours ouvrés sur le meme moyen de paiement
              utilise lors de la Contribution. A l'issue du delai de retractation, aucune demande
              de remboursement ne sera acceptee, sauf en cas de non-livraison de la Contrepartie
              dans un delai de 90 jours apres la date de livraison initialement annoncee.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">7. Propriete Intellectuelle</h2>
            <p className="mb-3">
              L'ensemble des contenus du Site (textes, graphismes, logos, icones, images, videos,
              code source, base de donnees) est la propriete exclusive de NAKA SARL ou de ses
              partenaires et est protege par le droit d'auteur, le droit des marques et les
              dispositions de l'Acte Uniforme OHADA relatif au droit de la propriete intellectuelle.
            </p>
            <p className="mb-3">Toute reproduction, representation, modification, exploitation ou distribution de tout ou partie du Site sans l'autorisation ecrite et prealable de NAKA est interdite et constituerait une contrefacon susceptible d'engager la responsabilite civile et penale de son auteur.</p>
            <p>
              Les marques, noms commerciaux et logos de NAKA (notamment "NAKA", "Carbon Engine",
              "Carbon Converter") sont des marques deposees et protegees. Toute utilisation sans
              autorisation expresse est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">8. Responsabilite</h2>
            <p className="mb-3">
              NAKA s'engage a mettre en oeuvre tous les moyens raisonnables pour assurer la
              disponibilite et la securite du Site. Toutefois, NAKA ne saurait etre tenue
              responsable :
            </p>
            <ul className="ml-5 mb-4 list-disc space-y-1.5">
              <li>Des interruptions temporaires du Site pour des operations de maintenance</li>
              <li>Des dommages indirects, pertes d'exploitation, pertes de donnees ou de clientele</li>
              <li>Des consequences d'un cas de force majeure tel que defini par la jurisprudence de la Cour Commune de Justice et d'Arbitrage (CCJA) de l'OHADA</li>
              <li>Des actes de piratage informatique ou d'intrusion malveillante malgre la mise en oeuvre de mesures de securite conformes a l'etat de l'art</li>
              <li>Du contenu accessible via des liens hypertextes pointant vers des sites tiers</li>
            </ul>
            <p>
              La responsabilite de NAKA est, en toute hypothese, strictement limitee au montant
              de la Contribution versee par le Contributeur concerne. Aucune action ne pourra
              etre engagee contre NAKA plus d'un (1) an apres le fait generateur du litige.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">9. Garanties du Contributeur</h2>
            <p className="mb-3">Le Contributeur declare et garantit :</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li>Etre age d'au moins 18 ans ou disposer de l'autorisation d'un representant legal</li>
              <li>Disposer de la capacite juridique necessaire pour contracter</li>
              <li>Fournir des informations exactes, completes et a jour lors de sa Contribution</li>
              <li>Ne pas utiliser le Site a des fins frauduleuses ou illicites</li>
              <li>Ne pas participer a des activites de blanchiment d'argent ou de financement du terrorisme</li>
              <li>Ne pas tenter de contourner les mesures de securite du Site ou de la Plateforme</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">10. Donnees Personnelles</h2>
            <p>
              Le traitement des donnees personnelles des Contributeurs et des visiteurs du Site
              est regie par notre Politique de Confidentialite, disponible a l'adresse
              <Link to="/confidentialite" className="mx-1 text-naka-cyan underline underline-offset-2 transition-colors duration-300 hover:text-naka-darkBlue">
                naka.africa/confidentialite
              </Link>
              et faisant partie integrante des presentes conditions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">11. Droit Applicable et Juridiction</h2>
            <p className="mb-3">
              Les presentes conditions sont regies par le droit togolais, conformement aux
              dispositions de l'Acte Uniforme OHADA portant sur le droit commercial general
              et a la loi n° 2018-012 relative a la protection des donnees a caractere personnel.
            </p>
            <p className="mb-3">
              Pour les Contributeurs ressortissants de l'Union europeenne, les dispositions
              imperatives du droit de leur pays de residence peuvent s'appliquer si elles
              offrent un niveau de protection plus eleve.
            </p>
            <p className="mb-3">
              Tout litige relatif a l'interpretation, l'execution ou la validite des presentes
              conditions sera soumis, a defaut de solution amiable dans un delai de trente (30)
              jours, a la competence exclusive :
            </p>
            <ol className="ml-5 mb-4 list-decimal space-y-1.5">
              <li>Du Tribunal de Commerce de Lome (Togo) pour les litiges de droit commercial</li>
              <li>De la Cour Commune de Justice et d'Arbitrage (CCJA) de l'OHADA pour les litiges impliquant des parties de differents Etats membres</li>
              <li>Du Centre d'Arbitrage et de Mediation du Togo (CAMeT) pour les litiges soumis a arbitrage</li>
            </ol>
            <p>
              Les parties s'engagent a rechercher une solution amiable avant toute action
              judiciaire. A cette fin, toute reclamation doit etre adressee par ecrit a
              NAKA, qui s'engage a y repondre sous quinze (15) jours ouvrés.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">12. Nullite et Renonciation</h2>
            <p>
              Si l'une quelconque des stipulations des presentes conditions etait declaree nulle
              ou inapplicable par une decision de justice, les autres stipulations demeureront
              en vigueur. Le fait pour NAKA de ne pas se prevaloir d'un manquement aux presentes
              conditions ne constitue pas une renonciation a s'en prevalir ulterieurement.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">13. Informations et Contact</h2>
            <p className="mb-4">
              Pour toute question relative aux presentes conditions, veuillez nous contacter :
            </p>
            <div className="rounded-xl border border-black/[0.06] bg-black/[0.02] p-4 text-sm">
              <p className="font-medium text-naka-darkBlue">NAKA SARL</p>
              <p className="mt-1 text-black/50">Email : legal@naka.africa</p>
              <p className="text-black/50">Support technique : support@naka.africa</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
