# PRD - Trente Deux - Site Vitrine Premium

## Vue d'ensemble
Site vitrine one-page pour Trente Deux, maison de structuration stratégique pour chirurgiens-dentistes et orthodontistes. Design inspiré du luxe discret Rolex, typographie élégante, palette raffinée.

## Date de création
Décembre 2025

## Problème Statement Original
Créer un branding complet et un site vitrine premium pour Trente Deux incluant :
- Logo typographique pur texturé
- Palette couleurs Rolex : Vert #006618, Blanc cassé #F5F1E9, Beige #D9C2A7, Noir mat #1A1A1A
- CTA bouton vert foncé #122D18 avec bords arrondis
- Site one-page avec sections fluides
- Positionnement : structuration stratégique (PAS cabinet d'avocats)
- Intégration Calendly pour prise de RDV (en attente du lien utilisateur)

## Positionnement de marque
**Trente Deux est une maison de structuration stratégique et de coordination.**
- Ton : fluide, premium, naturel et confiant — jamais défensif juridiquement.
- Une seule mention juridique discrète en pied de page.
- Mots/formulations interdits sur le site : contentieux, défense, droit social, rédaction d'actes juridiques, secret professionnel, avocat partenaire, professionnels habilités partenaires indépendants, cabinet d'avocats, cabinet d'expertise comptable.

## Architecture Technique

### Frontend
- **Framework** : React 19.0.0
- **Styling** : Tailwind CSS + CSS personnalisé
- **Composants** : Shadcn UI
- **Animations** : Framer Motion
- **Typographies** : Playfair Display (titres), Helvetica Neue (corps)

### Backend
- **Statut** : Pas de backend développé
- **Future** : FastAPI + MongoDB pour formulaire de contact

## Sections du site

### Hero
- TRENTE DEUX (animation lettre par lettre)
- "Maison de structuration stratégique pour chirurgiens-dentistes et orthodontistes"
- "Votre cabinet mérite une architecture juridique à la hauteur de votre exigence."

### Mission (anciennement Parcours)
- Texte de mission sur la conception et l'organisation de structure professionnelle
- Phase I — Installation
- Phase II — Développement
- Phase III — Transmission

### Domaines d'intervention (anciennement Services)
- Structuration de SEL et SPFPL
- Organisation de holdings professionnelles
- Gouvernance et pactes d'associés
- Réorganisation capitalistique
- Préparation stratégique de transmission

### Pourquoi Trente Deux
- 4 raisons : Expertise dentaire, Vision stratégique, Interlocuteur unique, Discrétion
- 3 témoignages : Dr. A.L., Dr. S.D., Dr. M.B.

### Contact
- Formulaire de contact (MOCKED — toast uniquement)
- Placeholder Calendly

### Footer
- Navigation, liens légaux
- Disclaimer légal obligatoire

## Ce qui a été implémenté

### Février 2026 — Repositionnement textes
- Tous les textes remplacés selon le repositionnement stratégique
- Mentions interdites supprimées partout (composants, SEO, pages légales)
- Disclaimer légal ajouté au footer
- Navigation mise à jour (Mission, Interventions, Pourquoi nous, Contact)
- Tests : 100% réussite (iteration_2)

### Février 2026 — Animations avancées & bouton CTA
- Bouton CTA vert foncé #122D18 avec bords arrondis sur Hero, Header et Contact
- Animations framer-motion sur toutes les sections
- Tests : 100% réussite (iteration_1)

### Décembre 2025 — Fondation
- Site vitrine frontend one-page avec design premium
- Scroll-snap, header opaque, pages légales statiques, SEO basique

## Backlog Priorisé

### P0 - Terminé
1. ~~Site vitrine frontend~~ FAIT
2. ~~Animations scroll-triggered~~ FAIT
3. ~~Bouton CTA vert foncé arrondi~~ FAIT
4. ~~Repositionnement textes (structuration stratégique)~~ FAIT

### P1 - Important
1. Correction routing SPA (react-router-dom v6) pour pages légales en composants React
2. Intégration Calendly (en attente du lien utilisateur)
3. Intégration Stripe pour monétisation RDV
4. Backend API pour formulaire de contact

### P2 - Nice to have
1. Système d'envoi d'email
2. Analytics
3. Blog / Actualités
4. Multi-langue
