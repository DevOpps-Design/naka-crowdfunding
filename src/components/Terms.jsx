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
          Conditions Générales d&apos;Utilisation et de Participation
        </h1>
        <p className="mb-12 text-sm text-black/40">
          Dernière mise à jour : 19 juin 2026
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-black/60">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">1. Objet et Acceptation des Conditions</h2>
            <p className="mb-3">
               Les présentes Conditions Générales (ci-après les "CGU/CGV") régissent l'accès et l'utilisation
               du site internet accessible à l'adresse <strong>naka.africa</strong> (ci-après le "Site"),
ainsi que les modalités de participation à la campagne de financement participatif (crowdfunding)
               organisée par NAKA SARL.
            </p>
            <p className="mb-3">
En accédant au Site, en naviguant sur celui-ci, ou en effectuant une contribution financière,
               vous reconnaissez avoir pris connaissance des présentes conditions et les accepter
               intégralement et sans réserve. Si vous n'acceptez pas ces conditions, veuillez ne pas
               utiliser le Site ni participer à la campagne.
            </p>
            <p>
NAKA se réserve le droit de modifier les présentes conditions à tout moment. Les modifications
               prennent effet dès leur publication sur le Site. Il vous appartient de consulter
               régulièrement les CGU/CGV.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">2. Definitions</h2>
            <p className="mb-3">Dans les présentes conditions :</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li><strong>"Campagne"</strong> : désigne la période de collecte de fonds du 25 juin 2026 à la date de clôture annoncée sur le Site</li>
              <li><strong>"Contributeur"</strong> : toute personne physique ou morale ayant effectué un versement dans le cadre de la Campagne</li>
              <li><strong>"Contribution"</strong> : le montant versé par le Contributeur, hors frais de transaction</li>
              <li><strong>"Contrepartie"</strong> : le bien ou service proposé par NAKA en reconnaissance d'une Contribution, selon le palier choisi</li>
              <li><strong>"Plateforme"</strong> : l'infrastructure technique et logicielle de NAKA</li>
              <li><strong>"Kkiapay"</strong> : le prestataire de services de paiement tiers utilisé pour le traitement des transactions</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">3. Description de la Campagne</h2>
            <p className="mb-3">
               NAKA organise une campagne de crowdfunding visant à collecter des fonds pour le développement
               et le déploiement de son infrastructure logicielle dédiée à la logistique urbaine décarbonée
               et à l'inclusion des jeunes au Togo. L'objectif de collecte est fixé à <strong>3 000 000 FCFA</strong>
              (environ 5 000 USD).
            </p>
            <p className="mb-3">La Campagne propose les paliers de contribution suivants :</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li><strong>5 000 FCFA</strong> – Badge "Early Supporter" + suivi exclusif</li>
              <li><strong>25 000 FCFA</strong> – Badge "Early Supporter" + accès privilégié à la plateforme</li>
              <li><strong>50 000 FCFA</strong> – Badge "Early Supporter" + accès privilégié + pack branding</li>
              <li><strong>100 000 FCFA</strong> – Badge "Early Supporter" + Co-founder token + accès API + rapport carbone</li>
              <li><em>Paliers B2B disponibles sur demande via le formulaire de contact</em></li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">4. Modalités de Paiement</h2>
            <p className="mb-3">
               Les Contributions sont effectuées exclusivement via le prestataire de paiement Kkiapay,
               accessible depuis le Site. Les moyens de paiement acceptés sont :
            </p>
            <ul className="ml-5 mb-4 list-disc space-y-1.5">
              <li>Mobile Money (Togo, Bénin, Côte d'Ivoire, Sénégal, Burkina Faso, Mali, Niger)</li>
              <li>Cartes bancaires internationales (Visa, Mastercard)</li>
            </ul>
            <p className="mb-3">
               Le Contributeur garantit qu'il est le titulaire légitime du moyen de paiement utilisé
               et que les fonds sont disponibles. Toute transaction frauduleuse ou non autorisée
               entraînera l'annulation de la Contribution et pourra donner lieu à des poursuites
               judiciaires.
            </p>
            <p>
               Les frais de transaction appliqués par Kkiapay sont à la charge de NAKA pour les
               paiements Mobile Money et à la charge du Contributeur pour les paiements par carte
               bancaire internationale.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">5. Conditions de la Contribution</h2>
            <p className="mb-3">En effectuant une Contribution, le Contributeur reconnaît et accepte expressément que :</p>
            <ol className="ml-5 list-decimal space-y-1.5">
              <li>Sa Contribution est volontaire et constitue un soutien financier à la mission de NAKA</li>
              <li>Les Contreparties décrites sur le Site constituent une promesse unilatérale de NAKA et non une obligation de résultat</li>
              <li>NAKA s'engage à déployer tous les moyens raisonnables pour honorer les Contreparties dans les délais annoncés</li>
              <li>En cas d'échec de la Campagne (objectif non atteint), les Contributions seront entièrement remboursées sous 30 jours ouvrés, déduction faite des frais de transaction non récupérables</li>
              <li>En cas de succès de la Campagne mais d'impossibilité de livrer les Contreparties pour un cas de force majeure, NAKA proposera une Contrepartie alternative de valeur équivalente</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">6. Droit de Rétractation et Remboursement</h2>
            <p className="mb-3">
Conformément à la réglementation applicable en matière de vente à distance et aux
               dispositions de l'Acte Uniforme OHADA portant sur le droit commercial général,
               le Contributeur dispose d'un délai de rétractation de quatorze (14) jours calendaires
               à compter de la date de sa Contribution pour demander le remboursement intégral de
               celle-ci, sans motif et sans pénalité.
            </p>
            <p className="mb-3">Pour exercer ce droit, le Contributeur doit :</p>
            <ol className="ml-5 mb-4 list-decimal space-y-1.5">
              <li>Envoyer une demande écrite à l'adresse email : support@naka.africa</li>
              <li>Préciser son nom, prénom, adresse email de contribution, montant et date de la transaction</li>
              <li>Fournir la référence de transaction Kkiapay</li>
            </ol>
            <p>
Le remboursement sera effectué sous 14 jours ouvrés sur le même moyen de paiement
               utilisé lors de la Contribution. À l'issue du délai de rétractation, aucune demande
               de remboursement ne sera acceptée, sauf en cas de non-livraison de la Contrepartie
               dans un délai de 90 jours après la date de livraison initialement annoncée.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">7. Propriété Intellectuelle</h2>
            <p className="mb-3">
L'ensemble des contenus du Site (textes, graphismes, logos, icônes, images, vidéos,
               code source, base de données) est la propriété exclusive de NAKA SARL ou de ses
               partenaires et est protégé par le droit d'auteur, le droit des marques et les
               dispositions de l'Acte Uniforme OHADA relatif au droit de la propriété intellectuelle.
            </p>
            <p className="mb-3">Toute reproduction, représentation, modification, exploitation ou distribution de tout ou partie du Site sans l'autorisation écrite et préalable de NAKA est interdite et constituerait une contrefaçon susceptible d'engager la responsabilité civile et pénale de son auteur.</p>
            <p>
Les marques, noms commerciaux et logos de NAKA (notamment "NAKA", "Carbon Engine",
               "Carbon Converter") sont des marques déposées et protégées. Toute utilisation sans
               autorisation expresse est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">8. Responsabilité</h2>
            <p className="mb-3">
NAKA s'engage à mettre en œuvre tous les moyens raisonnables pour assurer la
               disponibilité et la sécurité du Site. Toutefois, NAKA ne saurait être tenue
               responsable :
            </p>
            <ul className="ml-5 mb-4 list-disc space-y-1.5">
              <li>Des interruptions temporaires du Site pour des opérations de maintenance</li>
              <li>Des dommages indirects, pertes d'exploitation, pertes de données ou de clientèle</li>
              <li>Des conséquences d'un cas de force majeure tel que défini par la jurisprudence de la Cour Commune de Justice et d'Arbitrage (CCJA) de l'OHADA</li>
              <li>Des actes de piratage informatique ou d'intrusion malveillante malgré la mise en œuvre de mesures de sécurité conformes à l'état de l'art</li>
              <li>Du contenu accessible via des liens hypertextes pointant vers des sites tiers</li>
            </ul>
            <p>
La responsabilité de NAKA est, en toute hypothèse, strictement limitée au montant
               de la Contribution versée par le Contributeur concerné. Aucune action ne pourra
               être engagée contre NAKA plus d'un (1) an après le fait générateur du litige.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">9. Garanties du Contributeur</h2>
            <p className="mb-3">Le Contributeur déclare et garantit :</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li>Être âgé d'au moins 18 ans ou disposer de l'autorisation d'un représentant légal</li>
              <li>Disposer de la capacité juridique nécessaire pour contracter</li>
              <li>Fournir des informations exactes, complètes et à jour lors de sa Contribution</li>
              <li>Ne pas utiliser le Site à des fins frauduleuses ou illicites</li>
              <li>Ne pas participer à des activités de blanchiment d'argent ou de financement du terrorisme</li>
              <li>Ne pas tenter de contourner les mesures de sécurité du Site ou de la Plateforme</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">10. Données Personnelles</h2>
            <p>
              Le traitement des données personnelles des Contributeurs et des visiteurs du Site
              est régi par notre Politique de Confidentialité, disponible à l'adresse
              <Link to="/confidentialite" className="mx-1 text-naka-cyan underline underline-offset-2 transition-colors duration-300 hover:text-naka-darkBlue">
                naka.africa/confidentialite
              </Link>
              et faisant partie intégrante des présentes conditions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">11. Droit Applicable et Juridiction</h2>
            <p className="mb-3">
Les présentes conditions sont régies par le droit togolais, conformément aux
               dispositions de l'Acte Uniforme OHADA portant sur le droit commercial général
               et à la loi n° 2018-012 relative à la protection des données à caractère personnel.
            </p>
            <p className="mb-3">
Pour les Contributeurs ressortissants de l'Union européenne, les dispositions
               impératives du droit de leur pays de résidence peuvent s'appliquer si elles
               offrent un niveau de protection plus élevé.
            </p>
            <p className="mb-3">
Tout litige relatif à l'interprétation, l'exécution ou la validité des présentes
               conditions sera soumis, à défaut de solution amiable dans un délai de trente (30)
               jours, à la compétence exclusive :
            </p>
            <ol className="ml-5 mb-4 list-decimal space-y-1.5">
              <li>Du Tribunal de Commerce de Lomé (Togo) pour les litiges de droit commercial</li>
              <li>De la Cour Commune de Justice et d'Arbitrage (CCJA) de l'OHADA pour les litiges impliquant des parties de différents États membres</li>
              <li>Du Centre d'Arbitrage et de Médiation du Togo (CAMeT) pour les litiges soumis à arbitrage</li>
            </ol>
            <p>
Les parties s'engagent à rechercher une solution amiable avant toute action
               judiciaire. À cette fin, toute réclamation doit être adressée par écrit à
               NAKA, qui s'engage à y répondre sous quinze (15) jours ouvrés.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">12. Nullité et Renonciation</h2>
            <p>
Si l'une quelconque des stipulations des présentes conditions était déclarée nulle
               ou inapplicable par une décision de justice, les autres stipulations demeureront
               en vigueur. Le fait pour NAKA de ne pas se prévaloir d'un manquement aux présentes
               conditions ne constitue pas une renonciation à s'en prévaloir ultérieurement.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-naka-darkBlue">13. Informations et Contact</h2>
            <p className="mb-4">
              Pour toute question relative aux présentes conditions, veuillez nous contacter :
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
