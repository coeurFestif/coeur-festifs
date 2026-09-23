# Cœurs Festifs — Référence de style
> Un mur de souvenirs sur papier chaud — de vraies photos, une seule signature en dégradé, et assez de mouvement pour que la page se sente vivante.

**Thème :** clair uniquement (pas de mode sombre)

**Direction finale (2026-09-20) — "Carnet-photo".** Après plusieurs itérations (voir Historique en bas de fichier), cette version est la référence à jour pour tout le site. Elle remplace tout ce qui précède. Inspirée de la structure réelle du design system "Portrait" (styles.refero.design) — mur de photos façon scrapbook, geste de marque unique et rare, quasi aucune ombre lourde — adaptée à nos vraies couleurs (rouge `#e63946`), nos vraies polices (Fredoka/Nunito) et nos vrais visuels (affiches d'événements, photos de bénévoles).

## Principes

1. **De vraies photos, pas de décoration abstraite.** Le hero, les cartes d'événements et les pages À propos utilisent les vraies images du site (affiches d'événements, photos d'équipe) — jamais un dégradé ou une forme géométrique comme substitut.
2. **Un seul geste de marque, utilisé rarement.** Un dégradé signature (rouge → corail → ambre, `--gradient-brand`) apparaît à trois endroits maximum par page : un mot du titre, le contour du bouton de don dans la nav, et nulle part ailleurs. Le répéter sur chaque carte ou chaque bouton le banalise — c'est sa rareté qui le rend spécial.
3. **Presque aucune ombre lourde.** Les cartes flottent grâce à une bordure fine (1px, `--c-border`) et une ombre à peine perceptible, jamais un `box-shadow` sombre. Seule la nav flottante et le module "événement à venir" ont une ombre douce plus marquée, pour se détacher du reste.
4. **Mouvement partout, mais discret.** Photos qui flottent doucement dans le hero, cartes qui apparaissent en cascade au défilement, léger zoom au survol des images, halo respirant sur le CTA. Jamais d'animation sans raison, toujours désactivable via `prefers-reduced-motion`.
5. **Mobile-first.** Le mur de photos scattered du hero devient une rangée simple sur mobile (jamais de positionnement absolu qui déborde ou se chevauche sous 768px).
6. **Rien n'est inventé.** Aucun texte ne prétend à une fonctionnalité qui n'existe pas (pas de "inscription", le site n'en a pas — voir Composants). Toute copie réutilise les traductions déjà existantes plutôt que d'en inventer de nouvelles.

## Tokens — Couleurs

| Nom | Valeur | Token | Rôle |
|---|---|---|---|
| Toile papier | `#fff8f5` | `--c-cream` *(existant)* | Fond de page exclusif |
| Encre | `#1a1a1a` | `--c-n900` *(existant)* | Texte principal |
| Blanc | `#ffffff` | `--c-white` *(existant)* | Cartes, nav flottante |
| Cendre | `#efe2dc` | `--c-border` | Bordures fines, hairlines |
| Rouge Cœurs Festifs | `#e63946` | `--c-primary` *(existant)* | CTA de don (nav), touches d'accent ponctuelles |
| Rouge foncé | `#c62828` | `--c-primary-dark` *(existant)* | Survol du CTA |
| **Dégradé signature** | `linear-gradient(90deg, #e63946, #ff9a9e 50%, #ffb347)` | `--gradient-brand` **(nouveau)** | Le geste de marque unique — un mot de titre, le contour du CTA de don. Jamais ailleurs. |
| Gris texte | `#4a4a4a` / `#8a7b6f` | `--c-n600` / *(nouveau, ton chaud)* | Texte secondaire, légendes de photos |

## Tokens — Typographie

- **Fredoka** (600/700) : titres, marque. Jamais en dessous de 18px.
- **Nunito** (400 à 800) : tout le reste.
- Échelle : `12 / 13 / 14 / 16(base) / 17 / 20 / 24 / 28 / 34 / 44 / 58` px.

## Tokens — Espacement, rayons, ombres

- Espacement 4/8pt existant (`--sp-*`), inchangé.
- Rayons : cartes/photos 6-20px (net mais pas carré), boutons et pilules `--r-full`.
- **Ombres** (nouvelle règle, remplace le tout-plat de la direction précédente) : `--sh-card: 0 2px 10px rgba(0,0,0,0.06)` pour les cartes/photos, `--sh-float: 0 16px 32px rgba(0,0,0,0.08)` réservée à la nav flottante et au module événement à venir.

## Composants

### Nav flottante (pilule)
Barre blanche en pilule (`border-radius: 9999px`), centrée en haut avec une marge, `--sh-float`, logo + liens + bouton de don à contour dégradé (`--gradient-brand` en bordure 1.5px, fond transparent, remplissage blanc au clic). Sur mobile : se réduit à logo + bouton hamburger, le tiroir garde le même geste dégradé sur son bouton de don.

### Photo-souvenir (carte photo)
Remplace la "carte douce" et la "ligne registre" des directions précédentes, utilisée pour le catalogue d'événements passés ET pour l'équipe (À propos). Cadre blanc, bordure fine `--c-border`, `--sh-card`, légère rotation aléatoire (±2 à 6°) qui se redresse à l'entrée dans le viewport, jamais d'accent de couleur en haut de carte (l'accent, c'est la photo elle-même). Légende sous l'image : date/rôle en petit gris chaud, titre en Fredoka.

### Module "événement à venir"
Photo/affiche de l'événement en grand (jamais de texte superposé — les affiches ont déjà leur propre texte), à côté des informations (date, titre, lieu) et d'un lien fantôme "Voir les détails" à contour encre (pas de dégradé ici — le dégradé reste réservé au CTA de don). `--sh-float`. C'est l'élément le plus visible de la page d'accueil et de la page Événements — inspiré des sites de cinéma/billetterie où l'affiche est montrée à côté des horaires.

### Mot en dégradé
Un seul mot par grand titre (jamais plus) peut être rempli du `--gradient-brand` via `background-clip: text`. Réservé aux titres H1 de chaque page.

### Liste déroulante des commanditaires
**Nouveau.** Section "Nos commanditaires" (sponsors — distincts des partenaires communautaires, qui restent en grille visible) présentée comme une liste repliée par défaut, avec un bouton qui l'ouvre/ferme. Anime la hauteur et l'opacité (250ms), jamais un `<details>` natif brut (pas d'animation) ni un composant à état complexe — un simple `useState` booléen suffit. Logos réels des commanditaires (Scholastic, Librairie Gallimard, Les Débrouillards, Fondation Réno-Jouets) en grille une fois ouverte.

### Grille de partenaires (animée)
Logos des partenaires communautaires (visible par défaut, jamais repliée — ce sont des collaborateurs actifs, pas des commanditaires ponctuels). Chaque logo apparaît en cascade au défilement, désaturé par défaut, couleur + léger agrandissement au survol.

## À faire / À éviter

### À faire
- Utiliser de vraies photos partout où c'est possible ; un placeholder n'est acceptable que si aucune photo n'existe encore pour ce contenu précis.
- Garder le dégradé signature à trois usages maximum par page.
- Faire flotter/apparaître les éléments en douceur (translation ≤10px, durée 300-500ms), jamais de mouvement brusque.
- Respecter `prefers-reduced-motion` sur chaque animation ajoutée.
- Empiler le mur de photos du hero en rangée simple sous 768px — jamais de positionnement absolu qui déborde sur mobile.

### À éviter
- Répéter le dégradé signature sur plus de 3 éléments par page — ça dilue son impact.
- Inventer une fonctionnalité qui n'existe pas (inscription, réservation) — le site permet de consulter les événements, pas de s'y inscrire.
- Un `box-shadow` sombre ou lourd sur une carte — rester sur `--sh-card`.
- Confondre partenaires (grille visible) et commanditaires (liste déroulante) — ce sont deux listes différentes dans les données (`event.partner` vs `event.Sponsor`).

## Historique des directions précédentes

1. **A-E** (2026-09-19) : cinq pistes exploratoires (ludique à institutionnel), jamais implémentées dans le code réel — gardées sur le canvas de comparaison pour référence.
2. **F/H** (2026-09-19) : direction "sphère de dégradé + typographie XXL", implémentée brièvement dans le code, puis abandonnée après retour utilisateur en conditions réelles ("trop de texte, pas assez d'images ni de mouvement").
3. **Cinéma/billetterie** (2026-09-20, matin) : premher retour à l'image via un module d'événement à l'affiche + catalogue en cartes photo — la structure (affiche à côté des infos) est **conservée** dans la direction finale ci-dessus, seul l'habillage visuel change.
4. **Carnet-photo** (2026-09-20, ce document) : direction finale, adopte l'habillage "Portrait" (mur de photos, dégradé signature rare, ombres quasi absentes) sur la structure cinéma déjà validée.
