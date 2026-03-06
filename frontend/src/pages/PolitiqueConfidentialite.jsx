import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PolitiqueConfidentialite = () => {
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
          Politique de Confidentialité
        </h1>

        <div className="space-y-8 text-[#1A1A1A]/80 leading-relaxed">
          {/* Introduction */}
          <section>
            <p className="mb-4">
              Trente Deux accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons, partageons et protégeons vos données personnelles dans le cadre de l'utilisation de notre site internet.
            </p>
            <p>
              Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </section>

          {/* Responsable du traitement */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              1. Responsable du traitement
            </h2>
            <p className="mb-2">
              Le responsable du traitement des données personnelles est :
            </p>
            <ul className="list-none space-y-1 ml-4">
              <li><strong>Trente Deux</strong></li>
              <li>Siège social : [Adresse à compléter]</li>
              <li>Email : contact@trentedeux.fr</li>
              <li>Téléphone : +33 (0)1 XX XX XX XX</li>
            </ul>
          </section>

          {/* Données collectées */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              2. Données personnelles collectées
            </h2>
            <p className="mb-4">
              Nous collectons les données personnelles suivantes :
            </p>
            
            <h3 className="text-xl font-playfair text-[#1A1A1A] mb-3">
              2.1. Données collectées via le formulaire de contact
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Nom et prénom</li>
              <li>Nom du cabinet</li>
              <li>Adresse email professionnelle</li>
              <li>Description de votre besoin</li>
            </ul>

            <h3 className="text-xl font-playfair text-[#1A1A1A] mb-3">
              2.2. Données collectées via Calendly
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (optionnel)</li>
              <li>Créneau horaire sélectionné</li>
            </ul>

            <h3 className="text-xl font-playfair text-[#1A1A1A] mb-3">
              2.3. Données de navigation
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Adresse IP</li>
              <li>Type de navigateur</li>
              <li>Pages visitées et durée de consultation</li>
              <li>Données de cookies (voir section 5)</li>
            </ul>
          </section>

          {/* Finalités */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              3. Finalités du traitement
            </h2>
            <p className="mb-4">
              Vos données personnelles sont collectées et traitées pour les finalités suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Répondre à vos demandes de contact et de renseignements</li>
              <li>Gérer les prises de rendez-vous</li>
              <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
              <li>Améliorer notre site internet et nos services</li>
              <li>Réaliser des statistiques de visite</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>
          </section>

          {/* Base légale */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              4. Base légale du traitement
            </h2>
            <p className="mb-4">
              Le traitement de vos données personnelles repose sur les bases légales suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Votre consentement :</strong> pour l'envoi de communications marketing</li>
              <li><strong>L'exécution d'un contrat :</strong> pour la gestion de vos demandes de services</li>
              <li><strong>Notre intérêt légitime :</strong> pour l'amélioration de nos services et la sécurité de notre site</li>
              <li><strong>Obligations légales :</strong> pour la conservation de certaines données à des fins comptables et fiscales</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              5. Cookies et technologies similaires
            </h2>
            <p className="mb-4">
              Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser l'utilisation du site.
            </p>
            
            <h3 className="text-xl font-playfair text-[#1A1A1A] mb-3">
              5.1. Types de cookies utilisés
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
              <li><strong>Cookies analytiques :</strong> pour comprendre comment les visiteurs utilisent le site</li>
              <li><strong>Cookies de préférence :</strong> pour mémoriser vos choix</li>
            </ul>

            <h3 className="text-xl font-playfair text-[#1A1A1A] mb-3">
              5.2. Gestion des cookies
            </h3>
            <p>
              Vous pouvez à tout moment désactiver les cookies depuis les paramètres de votre navigateur. Notez que cela peut affecter certaines fonctionnalités du site.
            </p>
          </section>

          {/* Destinataires */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              6. Destinataires des données
            </h2>
            <p className="mb-4">
              Vos données personnelles peuvent être transmises aux destinataires suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Personnel autorisé de Trente Deux</li>
              <li>Nos partenaires (uniquement pour les données nécessaires à la prestation)</li>
              <li>Prestataires techniques (hébergement, emailing, CRM)</li>
              <li>Calendly (pour la gestion des rendez-vous)</li>
              <li>Stripe (pour les paiements, le cas échéant)</li>
            </ul>
          </section>

          {/* Durée de conservation */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              7. Durée de conservation
            </h2>
            <p className="mb-4">
              Vos données personnelles sont conservées pendant les durées suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Demandes de contact :</strong> 3 ans à compter du dernier contact</li>
              <li><strong>Clients :</strong> 10 ans après la fin de la relation contractuelle (obligations comptables)</li>
              <li><strong>Prospects :</strong> 3 ans à compter du dernier contact</li>
              <li><strong>Données de navigation :</strong> 13 mois maximum</li>
            </ul>
          </section>

          {/* Droits */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              8. Vos droits
            </h2>
            <p className="mb-4">
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
              <li><strong>Droit à l'effacement :</strong> supprimer vos données dans certaines conditions</li>
              <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
            </ul>

            <h3 className="text-xl font-playfair text-[#1A1A1A] mb-3">
              8.1. Exercer vos droits
            </h3>
            <p className="mb-4">
              Pour exercer vos droits, vous pouvez nous contacter :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Par email : <a href="mailto:contact@trentedeux.fr" className="text-[#006618] hover:underline">contact@trentedeux.fr</a></li>
              <li>Par courrier : Trente Deux, [Adresse à compléter]</li>
            </ul>
            <p>
              Vous pouvez également introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#006618] hover:underline">www.cnil.fr</a>
            </p>
          </section>

          {/* Sécurité */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              9. Sécurité des données
            </h2>
            <p className="mb-4">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction.
            </p>
            <p>
              Ces mesures incluent notamment : le chiffrement SSL, l'authentification sécurisée, la limitation des accès aux données, et des sauvegardes régulières.
            </p>
          </section>

          {/* Transferts internationaux */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              10. Transferts de données hors UE
            </h2>
            <p className="mb-4">
              Certains de nos prestataires peuvent être situés en dehors de l'Union Européenne (notamment Calendly et Stripe).
            </p>
            <p>
              Dans ce cas, nous nous assurons que ces transferts sont effectués conformément au RGPD, notamment par le biais de clauses contractuelles types approuvées par la Commission Européenne ou de certifications telles que le Privacy Shield (États-Unis).
            </p>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              11. Modifications de la politique
            </h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. La version en vigueur est celle accessible sur cette page. Nous vous informerons de toute modification substantielle par email ou via un avis sur notre site.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              12. Contact
            </h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, vous pouvez nous contacter à : <a href="mailto:contact@trentedeux.fr" className="text-[#006618] hover:underline">contact@trentedeux.fr</a>
            </p>
          </section>

          {/* Date de mise à jour */}
          <section className="mt-12 pt-8 border-t border-[#D9C2A7]/30">
            <p className="text-sm text-[#1A1A1A]/60">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
