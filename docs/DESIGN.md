# Cœurs Festifs — Référence de style
> Une page calme et blanche où le contenu fait la fête : de vraies affiches, de vraies photos, une seule couleur d'action (l'encre).

**Thème :** clair uniquement.

**Direction actuelle (2026-09-23) : « Invitation ».** Ancrée sur la structure réelle du design system **Partiful** (styles.refero.design), une app d'invitations à des fêtes : système d'action noir/blanc, tuiles d'invitation en portrait, badges de statut sémantiques, gros chiffres d'affichage. Adaptée à nos contenus : les affiches d'événements jouent le rôle des tuiles d'invitation. Remplace toutes les directions précédentes (voir Historique).

## Règles (valeur exacte + ce qu'elle remplace)

1. **Typo.** Titres en **Cabinet Grotesk 800**, interlettrage -0.03em (40 à 72px). Tout le reste en **Satoshi** (-0.02em sur l'interface). *Pas* Fredoka/Nunito, dont les formes arrondies faisaient « gabarit pour enfants ». Chargées via Fontshare dans `public/index.html`.
2. **Action = encre.** Bouton principal fond `#141414`, texte blanc, rayon 8px. Secondaire : contour 1px encre. *Jamais* de bouton rouge ni en dégradé.
3. **Rouge `#e63946` = sémantique seulement** : cœur du logo, badge « À venir », compte à rebours. Jamais décoratif.
4. **Affiches = tuiles d'invitation.** Ratio 3:4, rayon 12px, aucun texte superposé (les affiches ont déjà le leur). Inclinées ±10–12° seulement dans la composition du hero.
5. **Rayons par type** : cartes/images 12px, boutons/champs 8px, modales et carte « prochain événement » 16px, badges/onglets 960px (pilule).
6. **Profondeur.** Une seule ombre de carte `0 0 6px rgba(0,0,0,.1)` ; la carte « prochain événement » utilise l'ombre en couches `--sh-event`. *Jamais* d'ombre sur une section pleine largeur.
7. **Surfaces.** Fond blanc. Sections alternées avec un lavis corail très léger `#fff1ee → #fff` (`--wash-coral`). *Pas* de papier crème partout.
8. **Mise en page.** Largeur max 1200px, 80px entre sections, texte aligné à gauche. *Pas* de titre centré avec sur-titre en capitales.
9. **Gros chiffres.** Chiffres réels uniquement (bénévoles, nombre d'événements calculé, nombre de partenaires), Cabinet Grotesk 800 jusqu'à 112px.
10. **Mouvement** *(déduit, la spec ne le définit pas)* : apparition au défilement (8px, 400ms, décalage en cascade), affiches « distribuées » dans le hero, fondu natif (View Transitions) au changement d'onglet. Tout est coupé sous `prefers-reduced-motion`.

## Gestion des événements

- Chaque événement a une date ISO `startsAt` (et `endsAt` optionnel) dans `src/data/events.tsx`, en heure locale de Montréal. **Le statut passé/à venir est calculé** (`src/utils/eventDates.ts`) : un événement passe dans « Passés » tout seul le lendemain. `isPast` ne sert plus que pour un événement sans date.
- Pour ajouter un événement : ajouter ses textes dans `src/services/i18n.js` (FR + EN), puis une entrée dans `events.tsx` avec `startsAt`. Rien d'autre à maintenir.
- **Aucun événement à venir** → état vide conçu (« La prochaine fête se prépare. ») avec Instagram + proposition de partenariat, jamais un bloc vide.
- **Événement sans date** → « Date à confirmer », regroupé sous « Sans date ».
- Page détail : statut, compte à rebours, date/heure formatées selon la langue, **Ajouter au calendrier** (.ics généré côté client, seulement si à venir), **Itinéraire** (Google Maps), Partager, précédent/suivant chronologiques.
- Page Événements : onglets « À venir / Passés » avec compteurs, onglet mémorisé dans l'URL (`?tab=`), passés groupés par année.

## Composants (src/components)

- `ui.tsx` : Container, Section (`$wash`), Display, SectionTitle, Lead, boutons (encre / contour / lien texte), StatusPill, Reveal, `withViewTransition`.
- `PosterCard` : tuile d'affiche + date relative/absolue + titre.
- `NextEvent` / `NextEventEmpty` : carte « prochain événement » et son état vide.
- `OrgGrid` : logos partenaires/commanditaires (gris, couleur au survol). Partenaires et commanditaires restent deux listes distinctes (`src/data/partners.ts`).
- `Showcase` : `Figures` (gros chiffres) et `Founders`.

## À éviter
- Dégradé sur un bouton ou dans un texte.
- Photos de banque d'images (ballons, confettis) : uniquement nos vraies affiches et photos.
- Inventer une fonctionnalité (inscription, billetterie) ou un chiffre.
- Tirets cadratins dans les nouveaux textes d'interface.

## Historique des directions précédentes
1. **A-E** (2026-09-19) : pistes exploratoires, jamais implémentées.
2. **F/H** (2026-09-19) : sphère de dégradé + typo XXL, abandonnée (« trop de texte, pas assez d'images »).
3. **Cinéma/billetterie** (2026-09-20) : affiche à côté des infos. Idée conservée dans la carte « prochain événement ».
4. **Carnet-photo** (2026-09-20) : habillage « Portrait » (mur de photos flottantes, mot en dégradé). Remplacée le 2026-09-23 : les photos flottantes, le mot en dégradé et la nav en pilule faisaient « généré par IA ».
