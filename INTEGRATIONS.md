# INTEGRATIONS.md — Procédures de configuration

Ce fichier documente les étapes pour activer les intégrations tierces du site Trente Deux.

---

## 1. Resend — Formulaire de contact

Resend gère l'envoi des emails provenant du formulaire de contact.

### Architecture

```
Navigateur (Contact.jsx)
    → POST /api/contact
        → api/contact.js (serverless function Vercel)
            → Resend API
                → Email reçu sur contact@trentedeux.fr
```

### Pré-requis
- Un compte [Resend](https://resend.com) (gratuit jusqu'à 3 000 emails/mois)
- Le domaine `trentedeux.fr` vérifié dans Resend (enregistrements DNS à ajouter)

### Étape 1 — Créer un compte Resend

1. Aller sur [resend.com](https://resend.com) et créer un compte
2. Dans le dashboard, aller dans **Domains** → **Add domain**
3. Entrer `trentedeux.fr`
4. Resend fournit des enregistrements DNS (SPF, DKIM, DMARC) à ajouter chez votre registrar
5. Attendre la vérification (peut prendre quelques minutes à 48h)

### Étape 2 — Créer une clé API

1. Dans le dashboard Resend, aller dans **API Keys** → **Create API Key**
2. Nom : `trentedeux-production`
3. Permission : **Sending access**
4. Copier la clé (commence par `re_`)

### Étape 3 — Configurer les variables d'environnement

#### En local (développement)

Créer le fichier `.env.local` à la racine du projet :

```env
RESEND_API_KEY=re_votre_cle_ici
RESEND_FROM_EMAIL=Trente Deux <no-reply@trentedeux.fr>
RESEND_TO_EMAIL=contact@trentedeux.fr
```

#### En production (Vercel)

1. Aller dans le dashboard Vercel → votre projet → **Settings** → **Environment Variables**
2. Ajouter les 3 variables ci-dessus avec leurs valeurs
3. Sélectionner l'environnement **Production** (et optionnellement Preview)
4. Redéployer le projet

### Étape 4 — Installer la dépendance Resend

```bash
cd /dossier/du/projet
yarn add resend
# ou
npm install resend
```

> Note : `resend` doit être installé à la racine du projet (pas dans `frontend/`), car `api/contact.js` est une serverless function Vercel qui tourne en Node.js indépendamment du frontend React.

### Étape 5 — Déployer sur Vercel

Vercel détecte automatiquement les fichiers dans le dossier `api/` à la racine et les expose comme des endpoints serverless.

Structure attendue :
```
TRENTEDEUX-emergent/
├── api/
│   └── contact.js        ← Vercel crée automatiquement /api/contact
├── frontend/             ← Le frontend React
└── vercel.json           ← (optionnel, voir ci-dessous)
```

Si Vercel ne détecte pas automatiquement le dossier `frontend/` comme root du frontend, créer un `vercel.json` à la racine :

```json
{
  "buildCommand": "cd frontend && yarn build",
  "outputDirectory": "frontend/build",
  "framework": "create-react-app",
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

La règle `/(.*) → /index.html` règle aussi le problème des routes SPA (rechargement direct sur `/mentions-legales` etc.).

### Test de l'intégration

1. Lancer le projet en local avec `vercel dev` (Vercel CLI) pour simuler les fonctions serverless
2. Remplir le formulaire sur `http://localhost:3000`
3. Vérifier que l'email arrive sur `contact@trentedeux.fr`
4. Vérifier les logs dans le dashboard Resend → **Logs**

### En cas d'erreur

| Erreur | Cause probable | Solution |
|--------|---------------|----------|
| `403 Forbidden` | Domaine non vérifié | Vérifier les DNS dans Resend |
| `422 Unprocessable` | Adresse `from` invalide | Utiliser une adresse du domaine vérifié |
| `500` en prod | Variables d'env manquantes | Vérifier les env vars dans Vercel |
| Formulaire bloque (timeout) | `REACT_APP_API_URL` incorrecte | Laisser vide en production Vercel |

---

## 2. Calendly — Prise de rendez-vous en ligne

Calendly permet aux prospects de réserver directement un créneau de consultation.

### Pré-requis
- Un compte [Calendly](https://calendly.com) (gratuit ou payant selon les besoins)
- Un type d'événement créé (ex: "Consultation stratégique — 45 min")

### Étape 1 — Créer un type d'événement Calendly

1. Se connecter sur [calendly.com](https://calendly.com)
2. Aller dans **Event Types** → **+ New Event Type**
3. Configurer :
   - Nom : "Consultation stratégique"
   - Durée : 45 ou 60 minutes
   - Disponibilités : selon votre agenda
   - Questions à poser : "Nom du cabinet", "Votre besoin principal"
4. Copier l'URL de l'événement (format : `https://calendly.com/votre-compte/consultation-strategique`)

### Étape 2 — Configurer la variable d'environnement

#### En local

Dans `.env.local` à la racine du projet :

```env
REACT_APP_CALENDLY_URL=https://calendly.com/votre-compte/consultation-strategique
```

#### En production (Vercel)

1. Aller dans Vercel → **Settings** → **Environment Variables**
2. Ajouter `REACT_APP_CALENDLY_URL` avec l'URL Calendly
3. **Important** : préfixer avec `REACT_APP_` est obligatoire pour que React CRA expose la variable au navigateur
4. Redéployer

### Résultat attendu

Une fois la variable configurée, le bloc "Réservez votre créneau" dans la section Contact affiche automatiquement l'iframe Calendly à la place du placeholder.

### Personnalisation de l'embed (optionnel)

Pour pré-remplir le nom et l'email depuis le formulaire, vous pouvez ajouter des paramètres UTM à l'URL Calendly :

```
https://calendly.com/votre-compte/consultation?name=Dr.+Nom&email=contact@cabinet.fr
```

Cette personnalisation peut être implémentée dans `Contact.jsx` en enrichissant `CALENDLY_URL` avec les données du formulaire.

### Intégration avancée — React Calendly (optionnel)

Pour un contrôle plus fin (popup, inline avec callbacks), installer le package officiel :

```bash
cd frontend
yarn add react-calendly
```

Puis remplacer l'iframe dans `Contact.jsx` par :

```jsx
import { InlineWidget } from 'react-calendly';

// Dans le JSX :
<InlineWidget
  url={CALENDLY_URL}
  styles={{ height: '500px' }}
  pageSettings={{
    backgroundColor: 'F5F1E9',
    hideEventTypeDetails: false,
    primaryColor: '006618',
    textColor: '1A1A1A',
  }}
/>
```

---

## Checklist de mise en production

- [ ] Domaine `trentedeux.fr` vérifié dans Resend (DNS SPF + DKIM + DMARC)
- [ ] Clé API Resend ajoutée dans les env vars Vercel
- [ ] `RESEND_FROM_EMAIL` et `RESEND_TO_EMAIL` configurés dans Vercel
- [ ] Test d'envoi du formulaire de contact validé
- [ ] Compte Calendly créé et type d'événement configuré
- [ ] `REACT_APP_CALENDLY_URL` ajoutée dans les env vars Vercel
- [ ] Numéro de téléphone réel renseigné dans `Contact.jsx` (remplacer le placeholder)
- [ ] `vercel.json` créé si le déploiement ne détecte pas automatiquement le frontend
