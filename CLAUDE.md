# CLAUDE.md — Trente Deux

Ce fichier donne le contexte essentiel à Claude Code pour travailler efficacement sur ce projet.

---

## Présentation du projet

**Trente Deux** est un site vitrine one-page premium pour une maison de structuration stratégique dédiée aux chirurgiens-dentistes et orthodontistes. Le design s'inspire du luxe discret (référence Rolex) : sobre, élégant, confiant.

> Ce n'est PAS un cabinet d'avocats. C'est une maison de structuration stratégique et de coordination.

---

## Positionnement de marque — CRITIQUE

### Ton
- Fluide, premium, naturel, confiant
- Jamais défensif, jamais juridique, jamais technique-légal

### Mots et formulations INTERDITS sur le site
Ne jamais utiliser ces termes dans les textes du site, le SEO ou les pages légales :
- contentieux
- défense
- droit social
- rédaction d'actes juridiques
- secret professionnel
- avocat partenaire
- cabinet d'avocats
- cabinet d'expertise comptable
- professionnels habilités partenaires indépendants

### Disclaimer légal obligatoire
Doit apparaître en footer uniquement :
> "Trente Deux exerce une activité de conseil stratégique et de coordination. Les prestations juridiques réglementées sont réalisées par des professionnels habilités."

---

## Architecture technique

```
TRENTEDEUX-emergent/
├── CLAUDE.md                    # Ce fichier
├── README.md
├── memory/
│   └── PRD.md                   # Product Requirements Document complet
└── frontend/                    # Application React
    ├── package.json
    ├── tailwind.config.js
    ├── craco.config.js           # Alias @ → src/
    ├── public/
    └── src/
        ├── index.js
        ├── index.css             # Tailwind base + thème CSS
        ├── App.js
        ├── App.css               # Scroll-snap, animations globales
        ├── pages/
        │   ├── HomePage.jsx      # Page principale (landing page)
        │   ├── MentionsLegales.jsx
        │   ├── PolitiqueConfidentialite.jsx
        │   └── CGV.jsx
        ├── components/
        │   ├── Header.jsx        # Navigation fixe avec logo
        │   ├── Hero.jsx          # Section plein écran avec animation
        │   ├── Journey.jsx       # Mission & 3 phases
        │   ├── Services.jsx      # 5 domaines d'intervention
        │   ├── WhyUs.jsx         # Différenciation + témoignages
        │   ├── Contact.jsx       # Formulaire + Calendly placeholder
        │   ├── Footer.jsx        # Footer + liens légaux
        │   ├── SEO.jsx           # Meta tags + Schema.org
        │   ├── CircularLogo.jsx  # Logo SVG animé rotatif
        │   ├── CircularLogo.css
        │   └── ui/               # Composants Shadcn UI
        ├── hooks/
        │   ├── useInView.js      # Intersection Observer (animations scroll)
        │   └── use-toast.js
        └── lib/
            └── utils.js          # cn() utilitaire
```

---

## Stack technique

| Couche | Technologie | Version |
|--------|------------|---------|
| Framework | React | 19.0.0 |
| Build | Create React App + Craco | — |
| Styling | Tailwind CSS | 3.4.17 |
| Composants UI | Shadcn UI + Radix UI | — |
| Animations | Framer Motion | 12.34.3 |
| Routing | React Router DOM | 6.22.3 |
| Formulaires | React Hook Form + Zod | 7.x / 3.x |
| Icônes | Lucide React | 0.507.0 |
| SEO | React Helmet Async | 2.0.5 |

**Gestionnaire de paquets : Yarn**

---

## Design system

### Palette de couleurs

| Nom | Hex | Usage |
|-----|-----|-------|
| Dark Navy | `#1A1A1A` | Texte principal, fonds sombres |
| Forest Green | `#006618` | Accent, icônes, hover |
| Dark Green CTA | `#122D18` | Boutons CTA principaux |
| Off-White | `#F5F1E9` | Fonds clairs, texte sur sombre |
| Warm Beige | `#D9C2A7` | Texte secondaire, séparateurs |

### Typographie

- **Playfair Display** (serif) — Titres, logo, headings de section
- **Helvetica Neue** (sans-serif) — Corps de texte, formulaires

---

## Sections de la landing page

1. **Header** — Navigation fixe, logo circulaire rotatif, CTA "Prendre rendez-vous"
2. **Hero** — Plein écran, animation lettre-par-lettre "TRENTE DEUX", image de fond Unsplash
3. **Journey (Mission)** — 3 phases : Installation, Développement, Transmission
4. **Services** — 5 domaines d'intervention en grille responsive
5. **WhyUs** — 4 différenciateurs + 3 témoignages (Dr. A.L., Dr. S.D., Dr. M.B.)
6. **Contact** — Formulaire + placeholder Calendly (lien à intégrer)
7. **Footer** — Navigation, liens légaux, disclaimer obligatoire

---

## Commandes de développement

```bash
# Depuis le dossier frontend/
cd frontend

# Démarrer le serveur de développement
yarn start

# Build de production
yarn build

# Lancer les tests
yarn test
```

**Alias disponible** : `@` → `src/` (configuré dans craco.config.js)

---

## État actuel du backlog

### P0 — Terminé
- [x] Site vitrine frontend one-page
- [x] Animations scroll-triggered (Framer Motion + useInView)
- [x] Bouton CTA vert foncé `#122D18` arrondi (Hero, Header, Contact)
- [x] Repositionnement textes (structuration stratégique, sans mentions interdites)
- [x] SEO basique (meta tags, Open Graph, Schema.org)
- [x] Pages légales statiques (Mentions légales, CGV, Politique de confidentialité)

### P1 — À faire (important)
- [ ] Routing SPA fonctionnel pour les pages légales (react-router-dom v6)
- [ ] Intégration Calendly (en attente du lien client)
- [ ] Backend pour le formulaire de contact (FastAPI + MongoDB prévu)
- [ ] Envoi d'email depuis le formulaire

### P2 — Nice to have
- [ ] Analytics (Google Analytics ou Plausible)
- [ ] Intégration Stripe pour paiement en ligne
- [ ] Blog / Actualités
- [ ] Multi-langue (FR/EN)

---

## Points d'attention pour les modifications

1. **Scroll-snap** activé sur les sections principales dans `App.css` — ne pas supprimer sans vérifier l'impact sur l'UX
2. **Logo circulaire SVG** avec rotation CSS dans `CircularLogo.css` — modifier avec précaution
3. **Formulaire de contact** est actuellement mocké (toast uniquement) — ne pas connecter de vrai backend sans configuration
4. **Image hero** provient d'Unsplash via URL externe — à remplacer par un asset local pour la production
5. **Téléphone de contact** est un placeholder (`+33 (0)1 XX XX XX XX`) — à remplacer par le vrai numéro
6. **Calendly** est un placeholder — attendre le lien du client avant d'intégrer

---

## Contact projet

- Email : contact@trentedeux.fr
- Créé en décembre 2025
- Version actuelle : 0.1.0
