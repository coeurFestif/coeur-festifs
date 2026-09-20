# Cœurs Festifs — Référence de style
> Un halo de fête sur papier chaud — une seule sphère qui porte toute la couleur, une typographie XXL qui porte toute la joie.

**Thème :** clair uniquement (pas de mode sombre)

**Changement de direction (2026-09-19) :** cette version remplace le système à deux registres "carte douce / carte trust" par une seule langue visuelle, restreinte partout — traits fins, aucune ombre, aucun remplissage coloré par défaut — où la confiance vient de la retenue et la joie vient de **deux gestes uniques et signés** : une sphère à dégradé irisé dans le hero (l'unique événement chromatique de la page) et une typographie Fredoka monumentale à interligne serré. C'est une résolution plus élégante de la tension "chaleureux pour l'enfant / crédible pour le partenaire" que d'avoir deux styles de carte : ici, tout est sobre, et la personnalité vient d'un seul éclat maîtrisé plutôt que de décorations dispersées.

**Deux écarts assumés par rapport à la référence source, documentés pour ne pas être perdus :** (1) on garde Fredoka + Nunito comme paire, pas une police unique — un public mixte enfants/parents/partenaires a besoin qu'un titre chunky-arrondi et un corps de texte lisible restent distincts ; (2) on garde **un seul** bouton à remplissage plein (le CTA "Faire un don" / "Je m'inscris") — tout le reste est fantôme/contour — parce qu'un organisme de bienfaisance a besoin qu'au moins une action convertisse visiblement, et le restreindre à un seul renforce plutôt qu'il n'affaiblit la discipline chromatique.

## Tokens — Couleurs

| Nom | Valeur | Token | Rôle |
|---|---|---|---|
| Toile papier | `#fff8f5` | `--c-cream` *(existant)* | Fond de page exclusif — jamais remplacé par du blanc pur ni du gris |
| Encre | `#1a1a1a` | `--c-n900` *(existant)* | Texte principal, traits de titre, bordures de liens |
| Blanc | `#ffffff` | `--c-white` *(existant)* | Surfaces élevées uniquement (cellules logo, cartes de contenu) |
| **Cendre** | `#efe2dc` | `--c-border` *(déjà proposé, confirmé ici)* | Hairlines structurelles — dividers, bordures de carte, grille de logos. Jamais de couleur sur une ligne structurelle |
| **Pierre** | `#f1eae4` | `--c-neutral-bg` *(déjà proposé, confirmé ici)* | Surface secondaire discrète entre papier et blanc (bandeau partenaires, placeholders photo) |
| **Sphère de marque** | `linear-gradient(255deg, #e63946 0%, #ff9a9e 30%, #9fb5f2 65%, #ffffff 100%)` | `--gradient-orb` **(nouveau)** | L'unique événement chromatique de chaque page — rouge → corail → bleu de la marque, se dissolvant en blanc. N'apparaît qu'une fois, dans le hero. Jamais comme fond de bouton, de carte ou de bande |
| Rouge Cœurs Festifs | `#e63946` | `--c-primary` *(existant)* | Réservé à l'unique CTA plein et à la sphère — pas de remplissage rouge ailleurs |
| Rouge foncé | `#c62828` | `--c-primary-dark` *(existant)* | Survol du CTA plein |

**Règle d'or :** si un écran a besoin de plus que papier/encre/blanc/cendre/pierre + la sphère de marque, c'est qu'il faut repenser l'écran avant d'ajouter une couleur.

## Tokens — Typographie

### Fredoka — Titres et marque uniquement · `--f-display`
- **Rôle :** la seule voix expressive du système. Poids 700 aux tailles d'affichage (48-88px) avec interligne serré (0.9-1.0) pour empiler les lignes en un seul bloc typographique dense — c'est ce serrage qui fait "crier" doucement le titre sans lever la voix en couleur.
- **Poids :** 600, 700
- **Tailles :** 24, 32, 48, 64, 88px

### Nunito — Tout le texte courant · `--f-body`
- **Rôle :** corps de texte, labels, liens, navigation. Poids 400/600 pour le corps, 700/800 réservé aux petits labels de section en majuscules traquées.
- **Poids :** 400, 600, 700, 800
- **Tailles :** 11, 13, 14, 16 (base), 18px

### Échelle de type

| Rôle | Taille | Interligne | Traque | Police |
|---|---|---|---|---|
| label de section | 11px | 1.4 | 0.05em | Nunito 800, majuscules |
| caption | 13px | 1.4 | 0.02em | Nunito 700 |
| body | 16px | 1.55 | normal | Nunito 400/600 |
| subheading | 24px | 1.2 | normal | Fredoka 600 |
| heading-sm | 32px | 1.1 | normal | Fredoka 700 |
| heading | 48px | 1.0 | normal | Fredoka 700 |
| heading-lg | 64px | 0.95 | normal | Fredoka 700 |
| display | 88px | 0.9 | -0.01em | Fredoka 700 |

## Tokens — Espacement & Formes

**Unité de base :** 4px · **Densité :** spacieuse (rythme éditorial, jamais dense)

### Espacement (existant `--sp-*`, usage étendu)

| Nom | Valeur | Token |
|---|---|---|
| élément | 8-16px | `--sp-2` à `--sp-4` |
| carte (padding) | 24-32px | `--sp-6` à `--sp-8` |
| section (écart) | 64-120px | `--sp-16` à au-delà de `--sp-24` |

### Rayons — révisés (écart volontaire par rapport à l'ancien système "pilule partout")

| Élément | Valeur | Note |
|---|---|---|
| cartes, cellules logo | 0-8px (`--r-sm` max) | net, façon papier découpé — jamais 20-28px |
| liens fantômes, filtres | `--r-full` (pilule) | seul endroit où la pilule reste — signature "accueillant" gardée volontairement |
| l'unique bouton plein | `--r-full` (pilule) | cohérent avec les liens fantômes |

### Mise en page

- **Largeur max de page :** 1280px
- **Écart entre sections :** 64-120px — plus généreux que l'ancien système, c'est ce qui donne le sentiment éditorial
- **Padding des cartes :** 24-32px
- **Écart entre éléments :** 8-16px

## Composants

### Sphère de marque (hero)
**Rôle :** signature visuelle — l'unique élément chromatique de la page
Cercle large (~45-55% de la hauteur du hero), rempli du `--gradient-orb`, positionné légèrement décentré derrière/à côté du titre. Aucune bordure, aucune ombre, aucune interaction. Un seul par page, toujours dans le hero — jamais répété plus bas.

### Titre d'affichage
**Rôle :** l'énoncé typographique principal de la page
Fredoka 700, 48-88px, interligne 0.9-1.0, encre sur papier. Peut chevaucher partiellement la sphère de marque. Aucune ombre de texte, aucun dégradé sur le texte lui-même — c'est le poids du slab qui porte l'impact, pas la couleur.

### Lien fantôme
**Rôle :** action secondaire — remplace la plupart des boutons
Nunito 700 14px, encre, aucun remplissage, bordure 1.5px encre en pilule OU simple soulignement avec flèche (→). Padding 10px/20px si pilule. Survol : le remplissage devient encre, le texte devient papier (inversion, pas de couleur de marque).

### Bouton CTA plein (unique)
**Rôle :** la seule action à conversion réelle du site (don, inscription)
Fond `--c-primary`, texte blanc, pilule, Nunito 800 15px, padding 15px/30px. C'est le seul endroit du système avec un remplissage coloré plein — sa rareté est ce qui le rend visible. Survol : `--c-primary-dark`. Un seul par vue, jamais deux. La nav étant `position: fixed` (toujours visible), son bouton "Faire un don" EST cette unique pilule pleine du site — toute autre action de conversion (inscription à un événement, etc.) reste un lien fantôme, sans exception.

### Label de section
**Rôle :** micro-typographie d'identification, façon signalétique de musée
Nunito 800 11px, majuscules, traque 0.05em, encre. Aligné à gauche, espace généreux avant le contenu (32-48px).

### Cellule logo partenaire
**Rôle :** unité de la grille "Ils nous font confiance"
Blanc pur, 0px de rayon, sans ombre, logo centré à ~60% de la largeur de la cellule. Grille stricte (5 colonnes sur desktop), hairlines 1px `--c-border` entre les cellules — la grille elle-même est le design, les cellules restent austères.

### Ligne registre (événements, partenaires)
**Rôle :** entrée de liste — registre d'événements, liste de commanditaires
Fond blanc, hairline 1px `--c-border` en séparateur (pas de carte encadrée), 0px de rayon, padding 20px vertical. Bloc date en Fredoka 700 (grand, aligné à gauche), titre Nunito 700, méta en Nunito 400 gris. Un seul repère visuel de statut est permis par liste : un simple label texte "à venir" en encre + soulignement, jamais un fond coloré plein.

### Ornement de cercles concentriques
**Rôle :** géométrie décorative discrète, continuité spatiale entre sections
Traits fins `--c-border` ou encre à 15-20% d'opacité, 1-2 anneaux concentriques ancrés à un point focal (la sphère, un titre). Jamais remplis, jamais animés au-delà d'une dérive très lente en boucle (voir Mouvement).

### Bloc intro à deux colonnes
**Rôle :** section "à propos" ou mission, sur la page d'accueil
Colonne gauche : label de section + lien fantôme "À propos →". Colonne droite : corps de texte 16-18px, interligne 1.55. Écart de colonne 16-24px, padding vertical 64-96px.

## À faire / À éviter

### À faire
- N'utiliser la sphère de marque qu'une fois par page, toujours dans le hero.
- Garder le rayon des cartes à 0-8px ; réserver la pilule aux liens/boutons uniquement.
- Séparer les sections par 64-120px et des hairlines `--c-border` — jamais de ligne colorée comme séparateur.
- Écrire les labels de section en majuscules traquées (0.05em), toujours en Nunito 800 11px.
- Garder Fredoka réservé aux titres ≥24px — jamais en dessous, jamais pour du corps de texte.
- N'autoriser qu'un seul bouton à remplissage plein par vue ; tout le reste en lien fantôme.

### À éviter
- Deuxième couleur de remplissage plein sur un bouton, une carte ou une bande de section.
- Ombre portée ou élévation — la discipline est plate, la structure vient des hairlines.
- Répéter le dégradé de la sphère ailleurs (accent, bouton, fond de section).
- Chip ou badge à fond coloré rempli — préférer un label texte simple + soulignement.
- Rayon de carte au-delà de 8px, ou pilule sur autre chose qu'un lien/bouton.
- Grayscale forcé sur les logos partenaires (déjà en vigueur, inchangé).
- Photo avec gros plan visage d'enfant identifiable sans consentement confirmé (déjà en vigueur, inchangé).

## Surfaces

| Niveau | Nom | Valeur | Usage |
|---|---|---|---|
| 0 | Toile papier | `--c-cream` `#fff8f5` | Fond de page, exclusif |
| 1 | Blanc | `#ffffff` | Cartes, cellules logo — surfaces élevées uniquement par contraste de couleur, jamais par ombre |
| 2 | Pierre | `--c-neutral-bg` `#f1eae4` | Panneau secondaire discret (bandeau partenaires, placeholders) |

## Élévation

**Le système est volontairement sans ombre.** La profondeur passe par le contraste de surface (papier → blanc → pierre) et par la superposition du titre sur la sphère de marque — jamais par `box-shadow`. Une ombre romprait la métaphore "papier + encre" et diluerait l'impact de la sphère comme seul élément qui "flotte".

## Imagerie

- La sphère de marque remplace la photo décorative dans le hero — ce n'est ni une photo ni une illustration, un pur dégradé CSS.
- Sous le pli, les vraies photos d'événements restent nécessaires (registre, cartes de récap) : tons chauds légèrement désaturés, jamais de gros plan visage d'enfant identifiable sans consentement confirmé, aucun dégradé comme substitut de photo manquante — un placeholder `--c-neutral-bg` + légende suffit.
- Logos partenaires : vrais logos en production, dans leur propre couleur de marque, grille austère sans grayscale forcé.
- Icônes : trait fin uniquement, jamais d'émoji fonctionnel.

## Mouvement

- **Sphère de marque :** une dérive très lente et continue (translation ≤6px, rotation ≤3deg, 8-12s ease-in-out infinite) — à peine perceptible, comme un objet qui respire plutôt qu'un élément "animé". Désactivée sous `prefers-reduced-motion`.
- **Lien fantôme :** inversion fond/texte en 150ms au survol.
- **Bouton CTA plein :** `--c-primary-dark` au survol (150ms) ; le geste "cœur qui bat" reste réservé à la confirmation d'action réussie (`scale(1)→1.12→1`, 600ms, spring).
- **Aucune animation décorative dispersée** (ballons, confettis, guirlandes) — c'était juste avant, ce n'est plus la direction : la personnalité vient maintenant de la sphère et de la typographie, pas de multiples petits éléments flottants.
- **Entrée en cascade des listes** (registre d'événements, groupes par année) : chaque ligne apparaît avec un léger décalage vertical (6-10px) + fondu, 300-380ms, délai de 30-50ms par ligne. Sur le site réel (React), déclenché par un `IntersectionObserver` au premier passage dans le viewport — jamais rejoué à chaque scroll, jamais sur un simple hover.
- **Transition de filtre (À venir / Passés) :** fondu croisé, pas un `display: none` instantané. Les deux panneaux occupent la même cellule de grille CSS (`grid-template-columns: 1fr` + `grid-area/grid-column/grid-row` partagés), transition `opacity` + `translateY(6px)` 250ms — le conteneur garde la hauteur du panneau le plus grand, donc aucun saut de mise en page pendant la transition.
- `@media (prefers-reduced-motion: reduce)` désactive systématiquement toute animation ci-dessus (les listes apparaissent directement, sans décalage).

## Mise en page

- Hero plein viewport, titre aligné à gauche chevauchant partiellement la sphère positionnée à droite du centre.
- Rythme : hero → bloc intro deux colonnes → bandeau de confiance (grille logos) → registre/aperçu d'événements → pied de page institutionnel.
- Mobile-first en implémentation, points de rupture 375/768/1024/1280px ; la sphère se réduit et se recentre sous 768px plutôt que de disparaître.
- Toujours pas de mode sombre.

## Architecture des événements

Reste volontairement simple — dérive du seul champ `isPast` déjà présent dans `src/schema/event.tsx`, pas de nouveau modèle de données.

- **Section "À venir"** : affiche 0 à N événements à venir (jamais un nombre figé). Chaque événement à venir est une ligne registre pleine largeur avec le CTA plein ("Je m'inscris"). **État vide** : un message simple et chaleureux ("Aucun événement à venir pour le moment — revenez bientôt !") — jamais une section masquée ou un tableau vide sans explication (motif déjà en place dans `Event.tsx`, à conserver).
- **Section "Passés" (catalogue)** : regroupée **par année** (label d'année en Fredoka 700 24px, style "label de section" au-dessus de chaque groupe), du plus récent au plus ancien. Chaque événement reste une ligne registre.
- **Pas de pagination pour l'instant** — YAGNI assumé : avec ~9-15 événements passés, une seule page groupée par année se lit bien. Si le registre dépasse ~30-40 lignes dans quelques années, ajouter un simple "Afficher plus" qui révèle le groupe d'année suivant (pas de vraie pagination avec numéros de page, pas d'appel serveur supplémentaire).
- **Bascule À venir/Passés** : reste optionnelle (pratique une fois le registre long) mais les deux sections peuvent aussi être simplement empilées sur une seule page (à venir en haut, catalogue en dessous) — c'est la structure la plus proche de la demande initiale ("mettre en vedette les événements à venir, cataloguer les passés") et ce que la page d'accueil (aperçu) fait déjà en miniature.
- **Aucune donnée dupliquée** : la page d'accueil montre un aperçu (1 à venir + 3 dernières passées, tel quel dans `H`), la page Événements montre le registre complet — les deux lisent le même tableau `Event[]`, juste filtré/tronqué différemment.

## Guide de prompts pour agents

### Référence couleur rapide
- texte : `--c-n900` `#1a1a1a`
- fond de page : `--c-cream` `#fff8f5`
- surface élevée : `#ffffff`
- bordure : `--c-border` `#efe2dc`
- accent unique : `--gradient-orb` (rouge → corail → bleu de marque → blanc), hero seulement
- action principale : un seul bouton plein rouge, pilule, tout le reste en lien fantôme

### Exemples de prompts de composants

1. **Sphère de marque** : cercle de 480-560px, `background: linear-gradient(255deg, #e63946 0%, #ff9a9e 30%, #9fb5f2 65%, #ffffff 100%)`, positionné à droite du centre du hero, derrière le titre, dérive lente `floatOrb` 10s ease-in-out infinite (translation 6px, rotation 3deg), désactivée sous `prefers-reduced-motion`.

2. **Titre d'affichage** : Fredoka 700, 64-88px, `line-height: 0.9`, encre sur papier, chevauche légèrement la sphère.

3. **Lien fantôme** : Nunito 700 14px, encre, `border: 1.5px solid #1a1a1a`, `border-radius: 9999px`, padding 10px/20px, flèche → optionnelle. Survol : fond encre, texte papier.

4. **Bouton CTA plein (unique par vue)** : `background: var(--c-primary)`, texte blanc, `border-radius: 9999px`, padding 15px/30px, Nunito 800. Survol `var(--c-primary-dark)`.

5. **Cellule logo** : blanc pur, `border-radius: 0`, logo centré, grille 5 colonnes avec hairlines 1px `var(--c-border)` entre cellules.

## Marques similaires

- **Charity: Water** — même discipline d'un accent unique et fort (leur jaune) sur un fond très sobre, plutôt qu'une palette dispersée ; la couleur devient un symbole, pas une décoration.
- **Basecamp (site marketing)** — même confiance typographique : gros titres, très peu de chrome, aucune ombre, la hiérarchie vient de l'échelle plutôt que de l'effet.
- **UNICEF Canada** *(déjà noté, toujours pertinent)* — même exigence de sobriété pour les pages institutionnelles (partenaires, gouvernance) à côté d'un ton chaleureux ailleurs.

## Démarrage rapide

### Variables CSS (ajouts sur `src/index.css`)

```css
:root {
  /* Existant — inchangé */
  --c-primary: #e63946;
  --c-primary-dark: #c62828;
  --c-cream: #fff8f5;
  --c-n900: #1a1a1a;
  --f-display: 'Fredoka', sans-serif;
  --f-body: 'Nunito', sans-serif;

  /* Déjà proposés précédemment, confirmés dans cette direction */
  --c-border: #efe2dc;
  --c-neutral-bg: #f1eae4;

  /* Nouveau pour cette direction */
  --gradient-orb: linear-gradient(255deg, #e63946 0%, #ff9a9e 30%, #9fb5f2 65%, #ffffff 100%);
  --r-flat: 0px;   /* cartes, cellules logo */
  --r-flat-sm: 8px; /* variante douce si 0px est visuellement trop dur sur une grande carte */
}
```

**Note :** `--c-accent-blue`, `--c-accent-coral`, `--c-accent-orange` (existants) ne disparaissent pas du fichier CSS mais changent de rôle — ils ne servent plus qu'à composer `--gradient-orb`, plus comme accents de carte cycliques indépendants (l'ancien "cycle catégoriel" est abandonné dans cette direction).
