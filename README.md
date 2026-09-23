# Coeurs Festifs

Site web de l'organisme **Coeurs Festifs**, une association à but non lucratif basée à Montréal qui organise des événements festifs pour les enfants dans le besoin.

## À propos

Coeurs Festifs a été fondé par **Ariane Manekeng Guimfack** et **Clara Maria Bridi**. L'organisation mobilise plus de 36 bénévoles pour créer des moments de joie et d'inclusion pour les enfants, en partenariat avec des organismes communautaires montréalais.

**Valeurs :** Compassion · Communauté · Inclusion

## Pages

| Route | Description |
|-------|-------------|
| `/coeur-festifs` | Accueil — hero vidéo, mission, aperçu événements, partenaires |
| `/coeur-festifs/events` | Catalogue de tous les événements |
| `/coeur-festifs/event/:id` | Détail d'un événement |
| `/coeur-festifs/about` | À propos — équipe, valeurs, mission |

## Stack technique

- **React 18** + **TypeScript**
- **styled-components** — design system via variables CSS (`--c-primary`, `--f-display`, etc.)
- **React Router v6** — navigation SPA avec HashRouter
- **i18next / react-i18next** — internationalisation (FR/EN)
- **EmailJS** — formulaire de contact sans backend
- **Swiper / react-slick** — carrousels
- **GitHub Pages** — déploiement via `gh-pages`

## Démarrage local

```bash
npm install
npm start
```

L'application sera disponible sur [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm start` | Serveur de développement |
| `npm run build` | Build de production |
| `npm test` | Tests unitaires |
| `npm run deploy` | Build + déploiement sur GitHub Pages |

## Déploiement

Le site est déployé automatiquement sur GitHub Pages via la commande `npm run deploy`. L'URL de production est configurée dans `package.json` via le champ `homepage`.

## Partenaires

- Carrefour Jeunesse Emploi CDN–Outremont–VMR
- Répit Providence
- Centre communautaire Mountain Sights
- PROMIS
- Maison de la culture CDN
- Fondation du Dr Julien
- Garage à Musique
- Mini Molars Club
