import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = ({ 
  title = "Trente Deux - Structuration Stratégique pour Chirurgiens-Dentistes",
  description = "Maison de structuration stratégique pour chirurgiens-dentistes et orthodontistes. Organisation de holdings, gouvernance, pactes d'associés, transmission.",
  keywords = "structuration cabinet dentaire, holding dentaire, SELARL dentiste, SPFPL dentaire, pacte associés orthodontiste, transmission cabinet dentaire, structuration stratégique",
  ogImage = "https://trentedeux.fr/og-image.jpg",
  canonicalUrl,
  type = "website"
}) => {
  const siteUrl = "https://trentedeux.fr";
  const fullUrl = canonicalUrl || siteUrl;

  // Schema.org structured data pour les services juridiques
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Trente Deux",
    "description": description,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "image": ogImage,
    "priceRange": "€€€",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "serviceType": [
      "Structuration stratégique",
      "Organisation de holdings professionnelles",
      "Gouvernance et pactes d'associés",
      "Réorganisation capitalistique",
      "Préparation stratégique de transmission"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Chirurgiens-dentistes et orthodontistes"
    }
  };

  return (
    <Helmet>
      {/* Balises Meta de base */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Trente Deux" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Balises supplémentaires */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="author" content="Trente Deux" />

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};
