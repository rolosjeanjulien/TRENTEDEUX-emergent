import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CGV = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F1E9] py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#006618] hover:text-[#004d12] mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Retour à l'accueil
        </button>

        <h1 className="text-4xl font-playfair text-[#1A1A1A] mb-8">
          Conditions Générales de Vente
        </h1>

        <div className="space-y-8 text-[#1A1A1A]/80 leading-relaxed">
          {/* Article 1 */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              Article 1 - Objet et champ d'application
            </h2>
            <p className="mb-4">
              Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent les relations contractuelles entre Trente Deux (ci-après « le Prestataire ») et tout professionnel ou entrepreneur individuel (ci-après « le Client ») souhaitant bénéficier des services de conseil stratégique et de structuration proposés par le Prestataire.
            </p>
            <p>
              Toute commande de prestation implique l'acceptation sans réserve par le Client des présentes CGV.
            </p>
          </section>

          {/* Article 2 */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              Article 2 - Services proposés
            </h2>
            <p className="mb-4">
              Le Prestataire propose les services suivants, destinés exclusivement aux chirurgiens-dentistes et orthodontistes :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Analyse stratégique :</strong> diagnostic de la situation professionnelle et patrimoniale du Client</li>
              <li><strong>Structuration sociétaire :</strong> conception de l'architecture adaptée (SEL, SPFPL, etc.)</li>
              <li><strong>Organisation de holdings :</strong> conseil et structuration de holdings professionnelles</li>
              <li><strong>Gouvernance et pactes d'associés :</strong> conseil sur les accords et l'organisation entre associés</li>
              <li><strong>Préparation stratégique de transmission :</strong> accompagnement dans la préparation et l'organisation de la cession ou de l'entrée d'associés</li>
            </ul>
          </section>

          {/* Article 3 */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              Article 3 - Devis et commande
            </h2>
            <p className="mb-4">
              <strong>3.1. Devis :</strong> Tout projet de prestation fait l'objet d'un devis détaillé et personnalisé, établi gratuitement après un entretien de diagnostic. Le devis est valable 30 jours à compter de sa date d'émission.
            </p>
            <p className="mb-4">
              <strong>3.2. Commande :</strong> La commande est réputée ferme et définitive après signature du devis par le Client et réception de l'acompte prévu à l'article 4.
            </p>
            <p>
              <strong>3.3. Modification :</strong> Toute modification demandée par le Client après validation du devis fera l'objet d'un devis complémentaire.
            </p>
          </section>

          {/* Article 4 */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              Article 4 - Tarifs et modalités de paiement
            </h2>
            <p className="mb-4">
              <strong>4.1. Tarifs :</strong> Les prix sont indiqués en euros hors taxes (HT). La TVA applicable est celle en vigueur au jour de la facturation.
            </p>
            <p className="mb-4">
              <strong>4.2. Modalités de paiement :</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Acompte de 30% à la commande</li>
              <li>Solde à la livraison des documents finaux ou à la fin de la mission</li>
              <li>Moyens de paiement acceptés : virement bancaire, chèque, carte bancaire (via Stripe)</li>
            </ul>
            <p className="mb-4">
              <strong>4.3. Retard de paiement :</strong> En cas de retard de paiement, des pénalités de retard égales à trois fois le taux d'intérêt légal seront automatiquement appliquées, ainsi qu'une indemnité forfaitaire de 40€ pour frais de recouvrement.
            </p>
          </section>

          {/* Article 5 */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              Article 5 - Délais d'exécution
            </h2>
            <p className="mb-4">
              Les délais d'exécution sont indiqués à titre indicatif dans le devis. Ils courent à compter de la réception de l'acompte et de l'ensemble des documents nécessaires fournis par le Client.
            </p>
            <p>
              En cas de retard imputable au Prestataire, et après mise en demeure restée sans effet pendant 15 jours, le Client pourra demander la résolution du contrat. Aucune pénalité ne sera due en cas de retard résultant d'un cas de force majeure ou d'un manquement du Client à ses obligations.
            </p>
          </section>

          {/* Article 6 */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              Article 6 - Obligations du Client
            </h2>
            <p className="mb-4">
              Le Client s'engage à :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fournir tous les documents et informations nécessaires à la bonne exécution de la prestation</li>
              <li>Informer le Prestataire de tout changement de situation pouvant impacter la mission</li>
              <li>Répondre aux sollicitations du Prestataire dans des délais raisonnables</li>
              <li>Respecter les échéances de paiement</li>
            </ul>
          </section>

          {/* Article 7 */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              Article 7 - Obligations du Prestataire
            </h2>
            <p className="mb-4">
              Le Prestataire s'engage à :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Exécuter la prestation avec le soin et la diligence professionnelle requis</li>
              <li>Respecter la confidentialité des informations communiquées</li>
              <li>Informer le Client de l'avancement de la mission</li>
              <li>Coordonner les interventions nécessaires à la bonne exécution de la mission</li>
            </ul>
          </section>

          {/* Article 8 */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              Article 8 - Responsabilité et garanties
            </h2>
            <p className="mb-4">
              <strong>8.1. Responsabilité :</strong> Le Prestataire est soumis à une obligation de moyens. Sa responsabilité ne pourra être engagée qu'en cas de faute prouvée et sera limitée au montant des honoraires perçus pour la prestation concernée.
            </p>
            <p className="mb-4">
              <strong>8.2. Assurance :</strong> Le Prestataire est couvert par une assurance responsabilité civile professionnelle souscrite auprès de [Nom de l'assureur - À compléter].
            </p>
            <p>
              <strong>8.3. Limitation :</strong> La responsabilité du Prestataire ne saurait être engagée en cas d'inexécution ou de mauvaise exécution résultant d'informations erronées ou incomplètes fournies par le Client.
            </p>
          </section>

          {/* Article 9 */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              Article 9 - Confidentialité
            </h2>
            <p className="mb-4">
              Le Prestataire s'engage à garder confidentielles toutes les informations et documents qui lui seront communiqués par le Client dans le cadre de l'exécution de la prestation.
            </p>
            <p>
              Cette obligation de confidentialité s'applique également au Client concernant les méthodes de travail et les documents de travail du Prestataire.
            </p>
          </section>

          {/* Article 10 */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              Article 10 - Propriété intellectuelle
            </h2>
            <p className="mb-4">
              Les documents produits dans le cadre de la prestation (statuts, pactes, analyses, etc.) sont la propriété du Client après complet paiement des honoraires.
            </p>
            <p>
              Toutefois, le Prestataire conserve la propriété intellectuelle de ses méthodes de travail, modèles et outils.
            </p>
          </section>

          {/* Article 11 */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              Article 11 - Droit de rétractation
            </h2>
            <p className="mb-4">
              Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux contrats de prestation de services pleinement exécutés avant la fin du délai de rétractation et dont l'exécution a commencé avec l'accord préalable exprès du Client.
            </p>
            <p>
              En signant le devis, le Client demande expressément au Prestataire de commencer l'exécution de la prestation avant l'expiration du délai de rétractation de 14 jours et renonce de ce fait à son droit de rétractation.
            </p>
          </section>

          {/* Article 12 */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              Article 12 - Résiliation
            </h2>
            <p className="mb-4">
              <strong>12.1. Résiliation par le Client :</strong> Le Client peut résilier le contrat à tout moment moyennant un préavis de 15 jours. Les sommes déjà versées resteront acquises au Prestataire au prorata des prestations déjà effectuées.
            </p>
            <p>
              <strong>12.2. Résiliation par le Prestataire :</strong> Le Prestataire peut résilier le contrat en cas de manquement du Client à ses obligations, après mise en demeure restée sans effet pendant 15 jours.
            </p>
          </section>

          {/* Article 13 */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              Article 13 - Force majeure
            </h2>
            <p>
              Aucune des parties ne sera tenue responsable de la non-exécution totale ou partielle de ses obligations si celle-ci est empêchée ou retardée en raison d'un cas de force majeure tel que défini par la jurisprudence française.
            </p>
          </section>

          {/* Article 14 */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              Article 14 - Protection des données personnelles
            </h2>
            <p>
              Les données personnelles collectées dans le cadre de la relation commerciale font l'objet d'un traitement informatique conforme au RGPD. Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-[#006618] hover:underline">Politique de confidentialité</a>.
            </p>
          </section>

          {/* Article 15 */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              Article 15 - Règlement des litiges
            </h2>
            <p className="mb-4">
              <strong>15.1. Médiation :</strong> En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire.
            </p>
            <p className="mb-4">
              <strong>15.2. Médiation de la consommation :</strong> Conformément à l'article L.612-1 du Code de la consommation, le Client peut recourir gratuitement au service de médiation : [Nom du médiateur - À compléter].
            </p>
            <p>
              <strong>15.3. Juridiction compétente :</strong> À défaut de règlement amiable, tout litige relèvera de la compétence exclusive des tribunaux français, selon les règles de droit commun.
            </p>
          </section>

          {/* Article 16 */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              Article 16 - Droit applicable
            </h2>
            <p>
              Les présentes CGV sont soumises au droit français.
            </p>
          </section>

          {/* Article 17 */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              Article 17 - Modifications des CGV
            </h2>
            <p>
              Le Prestataire se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur à la date de la commande.
            </p>
          </section>

          {/* Article 18 */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              Article 18 - Acceptation des CGV
            </h2>
            <p>
              La signature du devis vaut acceptation sans réserve des présentes Conditions Générales de Vente.
            </p>
          </section>

          {/* Informations légales */}
          <section className="mt-12 pt-8 border-t border-[#D9C2A7]/30">
            <h3 className="text-xl font-playfair text-[#1A1A1A] mb-4">
              Informations légales
            </h3>
            <ul className="list-none space-y-1">
              <li><strong>Raison sociale :</strong> Trente Deux</li>
              <li><strong>Siège social :</strong> [Adresse à compléter]</li>
              <li><strong>SIRET :</strong> [À compléter]</li>
              <li><strong>Email :</strong> contact@trentedeux.fr</li>
              <li><strong>Téléphone :</strong> +33 (0)1 XX XX XX XX</li>
            </ul>
          </section>

          {/* Date de mise à jour */}
          <section className="mt-8 pt-8 border-t border-[#D9C2A7]/30">
            <p className="text-sm text-[#1A1A1A]/60">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
