import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const MentionsLegales = () => {
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
          Mentions Légales
        </h1>

        <div className="space-y-8 text-[#1A1A1A]/80 leading-relaxed">
          {/* Éditeur du site */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              1. Éditeur du site
            </h2>
            <p className="mb-2">
              Le site <strong>trentedeux.fr</strong> est édité par :
            </p>
            <ul className="list-none space-y-1 ml-4">
              <li><strong>Raison sociale :</strong> Trente Deux</li>
              <li><strong>Forme juridique :</strong> [À compléter - SARL/SAS/etc.]</li>
              <li><strong>Capital social :</strong> [À compléter]</li>
              <li><strong>Siège social :</strong> [Adresse à compléter]</li>
              <li><strong>SIRET :</strong> [À compléter]</li>
              <li><strong>RCS :</strong> [Ville et numéro à compléter]</li>
              <li><strong>Email :</strong> contact@trentedeux.fr</li>
              <li><strong>Téléphone :</strong> +33 (0)1 XX XX XX XX</li>
            </ul>
          </section>

          {/* Directeur de publication */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              2. Directeur de la publication
            </h2>
            <p>
              Le directeur de la publication du site est <strong>[Nom du directeur]</strong>, en qualité de [Fonction].
            </p>
          </section>

          {/* Hébergeur */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              3. Hébergement
            </h2>
            <p className="mb-2">
              Le site est hébergé par :
            </p>
            <ul className="list-none space-y-1 ml-4">
              <li><strong>Vercel Inc.</strong></li>
              <li>340 Pine Street, Suite 701, San Francisco, CA 94104, USA</li>
              <li>Contact : <a href="https://vercel.com/support" className="text-[#006618] hover:underline">vercel.com/support</a></li>
            </ul>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              4. Propriété intellectuelle
            </h2>
            <p className="mb-4">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, mise en page, etc.) est la propriété exclusive de Trente Deux, sauf mentions particulières.
            </p>
            <p className="mb-4">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Trente Deux.
            </p>
            <p>
              Toute exploitation non autorisée du site ou de l'un des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              5. Protection des données personnelles
            </h2>
            <p className="mb-4">
              Conformément à la loi n°78-17 du 6 janvier 1978 modifiée relative à l'informatique, aux fichiers et aux libertés, et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
            </p>
            <p className="mb-4">
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse : <a href="mailto:contact@trentedeux.fr" className="text-[#006618] hover:underline">contact@trentedeux.fr</a>
            </p>
            <p>
              Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-[#006618] hover:underline">Politique de confidentialité</a>.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              6. Cookies
            </h2>
            <p className="mb-4">
              Le site peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.
            </p>
            <p>
              Vous pouvez désactiver l'usage de cookies en sélectionnant les paramètres appropriés de votre navigateur.
            </p>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              7. Limitation de responsabilité
            </h2>
            <p className="mb-4">
              Trente Deux s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Trente Deux ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
            </p>
            <p>
              En conséquence, Trente Deux décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
            </p>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-2xl font-playfair text-[#1A1A1A] mb-4">
              8. Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
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
