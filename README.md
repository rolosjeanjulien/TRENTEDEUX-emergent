# Trente Deux — Site vitrine

Site vitrine premium pour une maison de structuration stratégique dédiée aux chirurgiens-dentistes et orthodontistes.

## Déploiement

Ce projet est déployé sur **Vercel**. La configuration est dans `vercel.json` à la racine.

### Prérequis

- Compte [Vercel](https://vercel.com)
- Compte [Resend](https://resend.com) avec domaine `trentedeux.fr` vérifié
- Compte [Calendly](https://calendly.com)

### Lancer en local

```bash
cd frontend
yarn install
yarn start
```

Pour tester les serverless functions (formulaire de contact) en local :

```bash
# Installer la Vercel CLI
npm i -g vercel

# À la racine du projet
cp .env.example .env.local
# Renseigner les valeurs dans .env.local
vercel dev
```

### Variables d'environnement

Copier `.env.example` en `.env.local` et renseigner :

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Clé API Resend |
| `RESEND_FROM_EMAIL` | Adresse expéditrice |
| `RESEND_TO_EMAIL` | Adresse destinataire |
| `REACT_APP_CALENDLY_URL` | URL de votre événement Calendly |

En production, ces variables sont configurées dans **Vercel Dashboard → Settings → Environment Variables**.

### Déploiement sur Vercel

1. Connecter le repo GitHub à Vercel
2. Vercel détecte automatiquement `vercel.json` — aucune configuration manuelle nécessaire
3. Ajouter les variables d'environnement dans le dashboard
4. Tout push sur `main` déclenche un déploiement automatique

## Documentation

- `CLAUDE.md` — contexte complet du projet pour Claude Code
- `INTEGRATIONS.md` — procédures de configuration Resend et Calendly
- `memory/PRD.md` — Product Requirements Document
