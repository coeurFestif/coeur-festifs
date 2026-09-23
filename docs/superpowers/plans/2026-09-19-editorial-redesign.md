# Cœurs Festifs — Editorial Redesign (Direction H) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current dark-hero/card-grid homepage and card-grid events page with the "H" editorial direction from `docs/DESIGN.md` — a warm-parchment canvas, one signature brand gradient sphere, monumental Fredoka headlines, hairline-only structure (no shadows, no colored fills except one CTA), plus a properly architected events registry (featured "upcoming" section with empty state, past catalogue grouped by year, animated segmented filter).

**Architecture:** Pure visual/structural refactor of existing React components — no new routes, no new data fields. Two small pure-logic units (year-grouping, scroll-reveal) get extracted so they're independently testable; everything else is styled-components restyling of existing pages driven by CSS custom properties already defined (or newly added) in `src/index.css`.

**Tech Stack:** React 18 + TypeScript, styled-components v6, react-i18next, react-router-dom v6, react-icons, CRA (`react-scripts`) test runner (Jest + React Testing Library).

**Spec:** `docs/DESIGN.md` (Cœurs Festifs — Référence de style). Read it in full before starting — this plan implements it, it does not restate every rule.

## Global Constraints

- Canvas is always `--c-cream` (`#fff8f5`) — never pure white or gray at the page level.
- No `box-shadow` anywhere in the new UI. Depth comes from surface color (`--c-cream` → `#fff` → `--c-neutral-bg`) only.
- Card/logo-cell radius: 0-8px (`--r-sm` max). Pills (links, buttons, filter) stay `--r-full`.
- **Exactly one solid-fill colored button may be visible in the viewport at a time.** The site nav is `position: fixed` (always on screen), so its "Faire un don" button occupies that one slot **permanently** — every other action on every page (including "Je m'inscris" on an event) must be a ghost link/button, no exceptions. (This is a refinement caught during planning, not yet written into `docs/DESIGN.md` — Task 4 updates the doc to say so explicitly.)
- The brand gradient sphere (`--gradient-orb`) appears exactly once per page, in the hero only. Never repeated as a smaller accent.
- Fredoka: headings/logo only, never below 18px, never body text. Nunito: everything else.
- `@media (prefers-reduced-motion: reduce)` must disable every animation/transition introduced by this plan.
- Data model is unchanged: derive everything from the existing `isPast?: boolean` field on `Event` (`src/schema/event.tsx`). Do not add new fields to `Event` or `useEventData()`.
- French is the default language (`fr`); every new user-facing string needs both `en` and `fr` entries in `src/services/i18n.js`.
- All interactive elements stay real semantic HTML (`<button>`, `<a href>`, `<input>`+`<label>`) — this codebase already does this correctly; preserve it.

---

### Task 1: Design tokens for the editorial direction

**Files:**
- Modify: `src/index.css:6-56`

**Interfaces:**
- Produces: CSS custom properties `--c-border`, `--c-neutral-bg`, `--gradient-orb`, consumed by Tasks 4-7.

- [ ] **Step 1: Add the missing tokens**

Open `src/index.css`. Inside the existing `:root { ... }` block, right after the `--c-accent-pink: #fad4c4;` line, add:

```css
  --c-border:      #efe2dc;
  --c-neutral-bg:  #f1eae4;
  --gradient-orb: linear-gradient(255deg, #e63946 0%, #ff9a9e 30%, #9fb5f2 65%, #ffffff 100%);
```

- [ ] **Step 2: Verify the app still builds**

Run: `npm run build`
Expected: build succeeds with no CSS/type errors (this is a pure additive change).

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat(design): add trust/border/gradient-orb tokens for editorial direction"
```

---

### Task 2: Event year-grouping utility (pure logic, TDD)

Real event dates in `src/services/i18n.js` are free-text French/English strings (e.g. `"Samedi 13 décembre 2025"`), not `Date` objects, and one event (`id: 5`, "Levée de Fonds") has an **empty** date string. Grouping by year must tolerate both.

**Files:**
- Create: `src/utils/eventGrouping.ts`
- Test: `src/utils/eventGrouping.test.ts`

**Interfaces:**
- Produces: `getEventYear(dateStr: string): string | null`, `groupPastEventsByYear(events: Event[]): EventYearGroup[]`, `interface EventYearGroup { year: string; events: Event[] }` — consumed by Task 7.
- Consumes: `Event` type from `../schema/event`.

- [ ] **Step 1: Write the failing tests**

Create `src/utils/eventGrouping.test.ts`:

```typescript
import { getEventYear, groupPastEventsByYear } from "./eventGrouping";
import { Event } from "../schema/event";

const makeEvent = (overrides: Partial<Event>): Event => ({
  id: "1",
  title: "Test",
  date: "",
  location: "",
  description: "",
  image: "",
  ...overrides,
});

describe("getEventYear", () => {
  it("extracts a 4-digit year from a French date string", () => {
    expect(getEventYear("Samedi 13 décembre 2025")).toBe("2025");
  });

  it("extracts a year from an English date string", () => {
    expect(getEventYear("Friday, October 31, 2025")).toBe("2025");
  });

  it("returns null when no year is present", () => {
    expect(getEventYear("Samedi 6 septembre de 14h00 à 19h00")).toBeNull();
  });

  it("returns null for an empty string", () => {
    expect(getEventYear("")).toBeNull();
  });
});

describe("groupPastEventsByYear", () => {
  it("groups events by year, most recent first", () => {
    const events = [
      makeEvent({ id: "1", title: "A", date: "Samedi 11 janvier 2025" }),
      makeEvent({ id: "2", title: "B", date: "Samedi 6 septembre 2024" }),
      makeEvent({ id: "3", title: "C", date: "Vendredi 31 octobre 2025" }),
    ];

    const groups = groupPastEventsByYear(events);

    expect(groups.map((g) => g.year)).toEqual(["2025", "2024"]);
    expect(groups[0].events.map((e) => e.id)).toEqual(["1", "3"]);
    expect(groups[1].events.map((e) => e.id)).toEqual(["2"]);
  });

  it("puts events with no parseable year in a trailing group", () => {
    const events = [
      makeEvent({ id: "1", title: "A", date: "Samedi 11 janvier 2025" }),
      makeEvent({ id: "2", title: "B", date: "" }),
      makeEvent({ id: "3", title: "C", date: "Samedi 6 septembre de 14h00 à 19h00" }),
    ];

    const groups = groupPastEventsByYear(events);

    expect(groups[groups.length - 1].year).toBe("Sans date précisée");
    expect(groups[groups.length - 1].events.map((e) => e.id)).toEqual(["2", "3"]);
  });

  it("returns an empty array for an empty input", () => {
    expect(groupPastEventsByYear([])).toEqual([]);
  });
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `CI=true npx react-scripts test src/utils/eventGrouping.test.ts --watchAll=false`
Expected: FAIL — `Cannot find module './eventGrouping'`

- [ ] **Step 3: Implement the utility**

Create `src/utils/eventGrouping.ts`:

```typescript
import { Event } from "../schema/event";

export interface EventYearGroup {
  year: string;
  events: Event[];
}

const YEAR_PATTERN = /\b(20\d{2})\b/;
const NO_DATE_LABEL = "Sans date précisée";

export function getEventYear(dateStr: string): string | null {
  const match = dateStr.match(YEAR_PATTERN);
  return match ? match[1] : null;
}

export function groupPastEventsByYear(events: Event[]): EventYearGroup[] {
  const byYear = new Map<string, Event[]>();
  const undated: Event[] = [];

  for (const event of events) {
    const year = getEventYear(event.date);
    if (year) {
      const bucket = byYear.get(year) ?? [];
      bucket.push(event);
      byYear.set(year, bucket);
    } else {
      undated.push(event);
    }
  }

  const groups: EventYearGroup[] = Array.from(byYear.entries())
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, yearEvents]) => ({ year, events: yearEvents }));

  if (undated.length > 0) {
    groups.push({ year: NO_DATE_LABEL, events: undated });
  }

  return groups;
}
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `CI=true npx react-scripts test src/utils/eventGrouping.test.ts --watchAll=false`
Expected: PASS (7 tests)

- [ ] **Step 5: Commit**

```bash
git add src/utils/eventGrouping.ts src/utils/eventGrouping.test.ts
git commit -m "feat(events): add pure year-grouping utility for past events catalogue"
```

---

### Task 3: Scroll-reveal hook (IntersectionObserver, TDD)

Implements the "entrée en cascade" rule from `docs/DESIGN.md`'s Mouvement section: rows animate in once, the first time they enter the viewport — not on every scroll, not on page load regardless of position.

**Files:**
- Create: `src/hooks/useRevealOnScroll.ts`
- Test: `src/hooks/useRevealOnScroll.test.tsx`

**Interfaces:**
- Produces: `useRevealOnScroll<T extends HTMLElement>(): [React.RefObject<T>, boolean]` — consumed by Task 7 (and optionally Task 6).

- [ ] **Step 1: Write the failing test**

Create `src/hooks/useRevealOnScroll.test.tsx`:

```tsx
import React from "react";
import { render, screen, act } from "@testing-library/react";
import { useRevealOnScroll } from "./useRevealOnScroll";

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = [];
  callback: IntersectionObserverCallback;
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    MockIntersectionObserver.instances.push(this);
  }

  trigger(isIntersecting: boolean) {
    this.callback(
      [{ isIntersecting } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver
    );
  }
}

const RevealTestComponent = () => {
  const [ref, visible] = useRevealOnScroll<HTMLDivElement>();
  return <div ref={ref}>{visible ? "visible" : "hidden"}</div>;
};

describe("useRevealOnScroll", () => {
  beforeEach(() => {
    MockIntersectionObserver.instances = [];
    (global as any).IntersectionObserver = MockIntersectionObserver;
  });

  it("starts hidden", () => {
    render(<RevealTestComponent />);
    expect(screen.getByText("hidden")).toBeInTheDocument();
  });

  it("becomes visible once the observed element intersects", () => {
    render(<RevealTestComponent />);
    const observer = MockIntersectionObserver.instances[0];

    act(() => {
      observer.trigger(true);
    });

    expect(screen.getByText("visible")).toBeInTheDocument();
  });

  it("disconnects the observer after becoming visible", () => {
    render(<RevealTestComponent />);
    const observer = MockIntersectionObserver.instances[0];

    act(() => {
      observer.trigger(true);
    });

    expect(observer.disconnect).toHaveBeenCalledTimes(1);
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `CI=true npx react-scripts test src/hooks/useRevealOnScroll.test.tsx --watchAll=false`
Expected: FAIL — `Cannot find module './useRevealOnScroll'`

- [ ] **Step 3: Implement the hook**

Create `src/hooks/useRevealOnScroll.ts`:

```typescript
import { useEffect, useRef, useState, RefObject } from "react";

export function useRevealOnScroll<T extends HTMLElement>(): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `CI=true npx react-scripts test src/hooks/useRevealOnScroll.test.tsx --watchAll=false`
Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add src/hooks/useRevealOnScroll.ts src/hooks/useRevealOnScroll.test.tsx
git commit -m "feat(ui): add useRevealOnScroll hook for once-only scroll-triggered reveals"
```

---

### Task 4: NavBar — ghost links + the site's one filled CTA

**Files:**
- Modify: `src/components/navBar.tsx` (full replace of the styled-components + JSX below the imports)
- Modify: `src/services/i18n.js:176-181` (en `navBar` block) and `:359-364` (fr `navBar` block)
- Modify: `docs/DESIGN.md` (add the fixed-nav clarification to the "Bouton CTA plein" component)

**Interfaces:**
- Consumes: tokens from Task 1 (`--c-border`).
- Produces: no new exports — `NavBar` keeps its existing default export shape used by `App.tsx`.

- [ ] **Step 1: Add the `donate` translation key**

In `src/services/i18n.js`, inside the **English** `navBar` block (currently `home/about/contact/events`), add:

```javascript
      navBar: {
        home: "Home",
        about: "About",
        contact: "Contact",
        events: "Events",
        donate: "Donate",
      },
```

In the **French** `navBar` block, add:

```javascript
      navBar: {
        home: "Accueil",
        about: "À propos",
        contact: "Contact",
        events: "Événements",
        donate: "Faire un don",
      },
```

- [ ] **Step 2: Replace `NavShell` and remove the colored `EventsCTA`**

In `src/components/navBar.tsx`, replace the `NavShell` definition (lines 12-27) with:

```typescript
const NavShell = styled.nav<NavShellProps>`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  background: var(--c-cream);
  border-bottom: 1px solid var(--c-border);
  transition: background 200ms ease;

  @media (max-width: 768px) { padding: 0 20px; }
`;
```

- [ ] **Step 3: Restyle `NavLink` as a ghost text link (no background pill)**

Replace the `NavLink` definition (lines 70-97) with:

```typescript
const NavLink = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  font-family: var(--f-body);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--c-n900);
  padding: 8px 14px;
  cursor: pointer;
  border-bottom: 1.5px solid ${p => p.active ? "var(--c-n900)" : "transparent"};
  transition: border-color 150ms ease;

  &:hover { border-color: var(--c-n900); }
`;
```

- [ ] **Step 4: Replace `EventsCTA` with a real donate button and remove its old red-pill styling**

Replace the `EventsCTA` definition (lines 124-146) with:

```typescript
const DonateBtn = styled.a`
  display: inline-flex;
  align-items: center;
  background: var(--c-primary);
  color: var(--c-white);
  font-family: var(--f-body);
  font-size: 0.88rem;
  font-weight: 800;
  padding: 10px 22px;
  border-radius: var(--r-full);
  margin-left: 12px;
  min-height: 40px;
  text-decoration: none;
  transition: background 150ms ease;

  &:hover { background: var(--c-primary-dark); }
  &:active { animation: navHeartBeat 600ms cubic-bezier(0.34, 1.56, 0.64, 1); }

  @keyframes navHeartBeat {
    0% { transform: scale(1); }
    40% { transform: scale(1.12); }
    100% { transform: scale(1); }
  }

  @media (prefers-reduced-motion: reduce) {
    &:active { animation: none; }
  }
`;
```

- [ ] **Step 5: Update the desktop nav JSX** — replace the `<DesktopNav>...</DesktopNav>` block (lines 309-328) with:

```tsx
        <DesktopNav>
          <NavLink active={active("/coeur-festifs")} onClick={() => go("/coeur-festifs")}>
            {t("navBar.home")}
          </NavLink>
          <NavLink active={active("/coeur-festifs/about")} onClick={() => go("/coeur-festifs/about")}>
            {t("navBar.about")}
          </NavLink>
          <NavLink active={active("/coeur-festifs/events")} onClick={() => go("/coeur-festifs/events")}>
            {t("navBar.events")}
          </NavLink>

          <LangToggle aria-label="Langue">
            <LangBtn active={lang === "fr"} onClick={() => setLang("fr")}>FR</LangBtn>
            <LangBtn active={lang === "en"} onClick={() => setLang("en")}>EN</LangBtn>
          </LangToggle>

          <DonateBtn href="mailto:coeurs.festifs@gmail.com?subject=Faire%20un%20don">
            {t("navBar.donate")}
          </DonateBtn>
        </DesktopNav>
```

Leave `LangToggle`/`LangBtn`/`MobileRight`/`HamburgerBtn`/`Backdrop`/`Drawer`/`DrawerHeader`/`DrawerBody`/`DrawerLink`/`DrawerDivider`/`DrawerLangRow`/`DrawerLangBtn` and the mobile drawer JSX untouched — they already match the hairline/ghost aesthetic closely enough and are out of scope for this task. In the drawer body, replace the events `DrawerLink` row's sibling (after `DrawerDivider`) by adding a donate row: after the `</DrawerLangRow>` closing tag, add:

```tsx
          <DrawerDivider />
          <a
            href="mailto:coeurs.festifs@gmail.com?subject=Faire%20un%20don"
            style={{
              display: "block",
              textAlign: "center",
              background: "var(--c-primary)",
              color: "var(--c-white)",
              fontFamily: "var(--f-body)",
              fontWeight: 800,
              padding: "13px",
              borderRadius: "var(--r-full)",
              margin: "8px 12px 0",
              textDecoration: "none",
            }}
          >
            {t("navBar.donate")}
          </a>
```

- [ ] **Step 6: Update `docs/DESIGN.md`'s CTA component note**

In `docs/DESIGN.md`, find the "### Bouton CTA plein (unique)" section and add this sentence to the end of its paragraph:

```
La nav étant `position: fixed` (toujours visible), son bouton "Faire un don" EST cette unique pilule pleine du site — toute autre action de conversion (inscription à un événement, etc.) reste un lien fantôme, sans exception.
```

- [ ] **Step 7: Manual check**

Run: `npm start`
Visit `http://localhost:3000/coeur-festifs` — confirm: nav background is cream (not white with heavy border), nav links have no background pill and only an underline on the active/hovered one, exactly one red filled button ("Faire un don") appears in the nav, and clicking it opens a mail client draft addressed to `coeurs.festifs@gmail.com`.

- [ ] **Step 8: Commit**

```bash
git add src/components/navBar.tsx src/services/i18n.js docs/DESIGN.md
git commit -m "refactor(nav): ghost links + single donate CTA per editorial direction"
```

---

### Task 5: Footer — light institutional footer

**Files:**
- Modify: `src/components/footer.tsx` (full replace of the styled-components block; JSX structure stays, only classes/props change where noted)

**Interfaces:**
- Consumes: tokens from Task 1.

- [ ] **Step 1: Replace the dark shell with the paper/pierre surfaces**

Replace `Shell` (lines 8-11) with:

```typescript
const Shell = styled.footer`
  background: var(--c-neutral-bg);
  border-top: 1px solid var(--c-border);
  color: var(--c-n900);
`;
```

- [ ] **Step 2: Update text colors that assumed a dark background**

Replace `BrandName` (lines 54-59):

```typescript
const BrandName = styled.span`
  font-family: var(--f-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--c-n900);
`;
```

Replace `FooterDesc` (lines 61-67):

```typescript
const FooterDesc = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.7;
  color: var(--c-n600);
  max-width: 300px;
`;
```

Replace `SocialBtn` (lines 75-94) — drop the background pill, go ghost:

```typescript
const SocialBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: var(--c-n600);
  font-size: 0.95rem;
  text-decoration: none;
  border: 1px solid var(--c-border);
  transition: background 150ms ease, color 150ms ease, border-color 150ms ease;

  &:hover {
    background: var(--c-n900);
    color: var(--c-cream);
    border-color: var(--c-n900);
  }
`;
```

Replace `ColTitle` (lines 96-104):

```typescript
const ColTitle = styled.h4`
  font-family: var(--f-body);
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .05em;
  color: var(--c-n900);
  margin-bottom: var(--sp-2);
`;
```

Replace `NavItem` (lines 106-120):

```typescript
const NavItem = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-family: var(--f-body);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--c-n600);
  cursor: pointer;
  text-align: left;
  transition: color 150ms ease;
  line-height: 1.8;

  &:hover { color: var(--c-n900); }
`;
```

Replace `ContactLine` (lines 122-136):

```typescript
const ContactLine = styled.a`
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--c-n600);
  text-decoration: none;
  transition: color 150ms ease;
  line-height: 1.8;

  svg { font-size: 0.8rem; flex-shrink: 0; color: var(--c-primary); }

  &:hover { color: var(--c-n900); }
`;
```

Replace `Bottom` (lines 138-153) — hairline instead of translucent white border:

```typescript
const Bottom = styled.div`
  border-top: 1px solid var(--c-border);
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--sp-5) var(--sp-12);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-4);

  @media (max-width: 560px) {
    flex-direction: column;
    padding: var(--sp-5) var(--sp-6);
    text-align: center;
  }
`;
```

Replace `Copyright` and `MadeWith` (lines 155-165):

```typescript
const Copyright = styled.p`
  font-size: 0.8rem;
  color: var(--c-n400);
`;

const MadeWith = styled.p`
  font-size: 0.8rem;
  color: var(--c-n400);

  span { color: var(--c-primary); }
`;
```

`BrandImg` (lines 46-52) stays as-is (logo image, unaffected by theme).

- [ ] **Step 2: Manual check**

Run: `npm start`, scroll to the footer on any page. Confirm: light cream/pierre background, dark text, hairline top borders (no translucent white lines), social icons ghost-style with hover inversion.

- [ ] **Step 3: Commit**

```bash
git add src/components/footer.tsx
git commit -m "refactor(footer): light institutional theme per editorial direction"
```

---

### Task 6: HomePage — gradient-sphere hero, intro block, trust grid, registry preview

This removes the video-background hero and the card-grid events/partners sections. This is intentional — the whole point of Direction H is replacing decoration with the sphere + typography + hairline registry. `backgroundVideo.mp4` stops being imported here (leave the asset file in place; nothing else imports it).

**Files:**
- Modify: `src/pages/HomePage.tsx` (full file replace)
- Modify: `src/services/i18n.js` — add `homepage.introLabel`, `homepage.introText`, `homepage.introCta`, `homepage.trustLabel`, `homepage.registryLabel`, `homepage.registryTitle`, `homepage.viewAll` (en + fr blocks)

**Interfaces:**
- Consumes: `useEventData()` from `../data/events` (unchanged), `--gradient-orb`/`--c-border`/`--c-neutral-bg` from Task 1.

- [ ] **Step 1: Add the new homepage translation keys**

In `src/services/i18n.js`, English `homepage` block, add after `partnershipTitle`:

```javascript
        introLabel: "Who we are",
        introText: "Since 2019, Cœurs Festifs has organized festive events for vulnerable children in Montréal, in partnership with recognized community organizations. Every event is designed to create a memory, not just an outing.",
        introCta: "About us",
        trustLabel: "They trust us",
        registryLabel: "Events registry",
        registryTitle: "Upcoming and latest events",
        viewAll: "View the full registry",
```

French `homepage` block, add after `partnershipTitle`:

```javascript
        introLabel: "Qui nous sommes",
        introText: "Depuis 2019, Cœurs Festifs organise des fêtes et des activités pour les enfants vulnérables de Montréal, en partenariat avec des organismes communautaires reconnus. Chaque événement est pensé pour créer un souvenir, pas seulement une sortie.",
        introCta: "À propos",
        trustLabel: "Ils nous font confiance",
        registryLabel: "Registre des événements",
        registryTitle: "Prochain et derniers événements",
        viewAll: "Voir tout le registre",
```

- [ ] **Step 2: Replace `src/pages/HomePage.tsx` in full**

```tsx
import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { useEventData } from "../data/events";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import carrefour from "../assets/CJE.jpg";
import repit from "../assets/repitProvidence.png";
import promis from "../assets/promis.png";
import maisonCulture from "../assets/maisonCulture.png";
import fondationDrJulien from "../assets/fondationDrJulien.png";
import mountainSights from "../assets/mountainSights.png";
import garageMusique from "../assets/garageMusique.png";
import minimolars from "../assets/minimolars.png";

/* ── Utility ───────────────────────────────────────────────── */

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--sp-12);

  @media (max-width: 768px) { padding: 0 var(--sp-6); }
`;

const rowIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const floatOrb = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50%      { transform: translate(-5px, -6px) rotate(3deg); }
`;

/* ═══════════════════════════════════════════════════════
   1 · HERO
═══════════════════════════════════════════════════════ */

const HeroSection = styled.section`
  position: relative;
  padding: 128px var(--sp-12) 96px;
  min-height: 480px;
  box-sizing: border-box;

  @media (max-width: 768px) { padding: 108px var(--sp-6) 64px; }
`;

const OrbWrap = styled.div`
  position: absolute;
  right: 40px;
  top: 20px;
  width: 560px;
  height: 560px;
  pointer-events: none;

  @media (max-width: 1100px) { width: 380px; height: 380px; right: 0; }
  @media (max-width: 768px) {
    position: static;
    width: 260px;
    height: 260px;
    margin: 0 auto var(--sp-6);
  }
`;

const RingOuter = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  border: 1px solid var(--c-border);
  border-radius: 50%;
`;

const RingInner = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 82%;
  height: 82%;
  border: 1px solid var(--c-border);
  border-radius: 50%;
`;

const Orb = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 64%;
  height: 64%;
  border-radius: 50%;
  background: var(--gradient-orb);
  animation: ${floatOrb} 10s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const HeroInner = styled(Inner)`
  position: relative;
  z-index: 2;
  max-width: 760px;

  @media (max-width: 768px) { text-align: center; max-width: none; }
`;

const HeroEyebrow = styled.p`
  font-family: var(--f-body);
  font-weight: 800;
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--c-n900);
  margin: 0 0 var(--sp-4);
`;

const HeroTitle = styled.h1`
  font-family: var(--f-display);
  font-weight: 700;
  font-size: clamp(2.6rem, 6vw, 4.75rem);
  line-height: 0.94;
  color: var(--c-n900);
  margin: 0 0 var(--sp-6);
  max-width: 680px;

  @media (max-width: 768px) { max-width: none; }
`;

const HeroText = styled.p`
  font-family: var(--f-body);
  font-weight: 500;
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--c-n900);
  max-width: 420px;
  margin: 0 0 var(--sp-8);

  @media (max-width: 768px) { max-width: none; margin-left: auto; margin-right: auto; }
`;

const HeroCTAs = styled.div`
  display: flex;
  gap: var(--sp-3);
  flex-wrap: wrap;

  @media (max-width: 768px) { justify-content: center; }
`;

const GhostLink = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--c-n900);
  border: 1.5px solid var(--c-n900);
  border-radius: var(--r-full);
  padding: 10px 20px;
  cursor: pointer;
  transition: background 150ms ease, color 150ms ease;

  &:hover { background: var(--c-n900); color: var(--c-cream); }
`;

/* ═══════════════════════════════════════════════════════
   2 · INTRO (two columns)
═══════════════════════════════════════════════════════ */

const IntroSection = styled.section`
  border-top: 1px solid var(--c-border);
  padding: var(--sp-20) 0;
`;

const IntroInner = styled(Inner)`
  display: flex;
  gap: var(--sp-6);

  @media (max-width: 768px) { flex-direction: column; }
`;

const IntroLeft = styled.div`
  width: 280px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: var(--sp-4);
`;

const IntroLabel = styled.span`
  font-family: var(--f-body);
  font-weight: 800;
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--c-n900);
`;

const IntroGhostLink = styled.button`
  display: inline-block;
  width: fit-content;
  background: none;
  border: none;
  border-bottom: 1.5px solid var(--c-n900);
  border-radius: 0;
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--c-n900);
  padding: 0 0 2px;
  cursor: pointer;
`;

const IntroBody = styled.p`
  flex: 1;
  max-width: 640px;
  margin: 0;
  font-family: var(--f-body);
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.55;
  color: var(--c-n900);
`;

/* ═══════════════════════════════════════════════════════
   3 · TRUST GRID
═══════════════════════════════════════════════════════ */

const TrustSection = styled.section`
  border-top: 1px solid var(--c-border);
  padding: var(--sp-16) 0;
`;

const TrustGrid = styled.div`
  margin-top: var(--sp-6);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-top: 1px solid var(--c-border);
  border-left: 1px solid var(--c-border);

  @media (max-width: 900px) { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 560px) { grid-template-columns: repeat(2, 1fr); }
`;

const TrustCell = styled.div`
  background: var(--c-white);
  border-right: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--sp-3);

  img {
    max-width: 70%;
    max-height: 60%;
    object-fit: contain;
  }
`;

/* ═══════════════════════════════════════════════════════
   4 · REGISTRY PREVIEW
═══════════════════════════════════════════════════════ */

const RegistrySection = styled.section`
  border-top: 1px solid var(--c-border);
  padding: var(--sp-16) 0 var(--sp-20);
`;

const RegistryHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--sp-4);
  margin-bottom: var(--sp-2);
  flex-wrap: wrap;
`;

const RegistryTitle = styled.h2`
  font-family: var(--f-display);
  font-weight: 700;
  font-size: clamp(1.6rem, 3vw, 2rem);
  color: var(--c-n900);
  margin: var(--sp-1) 0 var(--sp-6);
`;

const RegistryList = styled.div`
  border-top: 1px solid var(--c-border);
`;

const RegistryRow = styled.div<{ visible: boolean; delay: number }>`
  display: flex;
  align-items: center;
  gap: var(--sp-6);
  padding: 22px 0;
  border-bottom: 1px solid var(--c-border);
  cursor: pointer;
  opacity: ${p => p.visible ? 1 : 0};
  animation: ${p => p.visible ? rowIn : "none"} 360ms ease-out ${p => p.delay}ms both;
  transition: padding-left 150ms ease;

  &:hover { padding-left: 8px; }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;

const RegistryDate = styled.div`
  width: 80px;
  flex-shrink: 0;

  .day { font-family: var(--f-display); font-weight: 700; font-size: 2rem; line-height: 1; color: var(--c-n900); }
  .rest { font-family: var(--f-body); font-weight: 700; font-size: 0.7rem; letter-spacing: 0.05em; text-transform: uppercase; color: var(--c-n900); }
`;

const RegistryBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

const RegistryEventTitle = styled.span`
  font-family: var(--f-display);
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--c-n900);
`;

const RegistryMeta = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--f-body);
  font-weight: 500;
  font-size: 0.85rem;
  color: var(--c-n900);

  svg { color: var(--c-n400); flex-shrink: 0; }
`;

/* ═══════════════════════════════════════════════════════
   Component
═══════════════════════════════════════════════════════ */

const PARTNERS = [
  { img: fondationDrJulien, name: "Fondation du Dr Julien" },
  { img: repit, name: "Répit Providence" },
  { img: mountainSights, name: "Centre communautaire Mountain Sights" },
  { img: promis, name: "PROMIS" },
  { img: maisonCulture, name: "Maison de la culture CDN" },
  { img: carrefour, name: "Carrefour Jeunesse Emploi CDN–Outremont–VMR" },
  { img: garageMusique, name: "Garage à Musique" },
  { img: minimolars, name: "Mini Molars Club" },
];

const RevealRow: React.FC<{ delay: number; onClick: () => void; children: React.ReactNode }> = ({ delay, onClick, children }) => {
  const [ref, visible] = useRevealOnScroll<HTMLDivElement>();
  return (
    <RegistryRow
      ref={ref}
      visible={visible}
      delay={delay}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      {children}
    </RegistryRow>
  );
};

export const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const events = useEventData();
  const preview = events.filter((e) => e.isAvailable).slice(0, 4);

  return (
    <>
      {/* ── 1 · Hero ── */}
      <HeroSection aria-labelledby="hero-heading">
        <OrbWrap aria-hidden="true">
          <RingOuter />
          <RingInner />
          <Orb />
        </OrbWrap>
        <HeroInner>
          <HeroEyebrow>Fondation communautaire à Montréal</HeroEyebrow>
          <HeroTitle id="hero-heading">{t("homepage.title")}</HeroTitle>
          <HeroText>{t("homepage.introText")}</HeroText>
          <HeroCTAs>
            <GhostLink onClick={() => navigate("/coeur-festifs/events")}>
              {t("homepage.explore")} <FaArrowRight aria-hidden="true" />
            </GhostLink>
            <GhostLink onClick={() => navigate("/coeur-festifs/about")}>
              {t("navBar.about")} <FaArrowRight aria-hidden="true" />
            </GhostLink>
          </HeroCTAs>
        </HeroInner>
      </HeroSection>

      {/* ── 2 · Intro ── */}
      <IntroSection aria-labelledby="intro-heading">
        <IntroInner>
          <IntroLeft>
            <IntroLabel id="intro-heading">{t("homepage.introLabel")}</IntroLabel>
            <IntroGhostLink onClick={() => navigate("/coeur-festifs/about")}>
              {t("homepage.introCta")} →
            </IntroGhostLink>
          </IntroLeft>
          <IntroBody>{t("aboutUs.desc")}</IntroBody>
        </IntroInner>
      </IntroSection>

      {/* ── 3 · Trust grid ── */}
      <TrustSection aria-labelledby="trust-heading">
        <Inner>
          <IntroLabel id="trust-heading">{t("homepage.trustLabel")}</IntroLabel>
          <TrustGrid>
            {PARTNERS.map((p, i) => (
              <TrustCell key={i}>
                <img src={p.img} alt={p.name} loading="lazy" />
              </TrustCell>
            ))}
          </TrustGrid>
        </Inner>
      </TrustSection>

      {/* ── 4 · Registry preview ── */}
      <RegistrySection aria-labelledby="registry-heading">
        <Inner>
          <RegistryHeader>
            <IntroLabel>{t("homepage.registryLabel")}</IntroLabel>
            <IntroGhostLink onClick={() => navigate("/coeur-festifs/events")}>
              {t("homepage.viewAll")} →
            </IntroGhostLink>
          </RegistryHeader>
          <RegistryTitle id="registry-heading">{t("homepage.registryTitle")}</RegistryTitle>

          {preview.length > 0 ? (
            <RegistryList>
              {preview.map((ev, i) => (
                <RevealRow key={ev.id} delay={i * 40} onClick={() => navigate(`/coeur-festifs/event/${ev.id}`)}>
                  <RegistryDate>
                    <div className="day">{ev.date ? ev.date.match(/\d{1,2}/)?.[0] ?? "—" : "—"}</div>
                    <div className="rest">{ev.isPast ? t("events.pastBadge") : t("events.upcomingTitle")}</div>
                  </RegistryDate>
                  <RegistryBody>
                    <RegistryEventTitle>{ev.title}</RegistryEventTitle>
                    {ev.location && (
                      <RegistryMeta>
                        <FaMapMarkerAlt aria-hidden="true" />
                        <span>{ev.location}</span>
                      </RegistryMeta>
                    )}
                  </RegistryBody>
                </RevealRow>
              ))}
            </RegistryList>
          ) : (
            <p>{t("events.noEventsMessage")}</p>
          )}
        </Inner>
      </RegistrySection>
    </>
  );
};
```

- [ ] **Step 3: Manual check**

Run: `npm start`, visit `/coeur-festifs`. Confirm: no video plays, a single gradient sphere with two thin rings sits in the hero behind/beside the title, the title overlaps the sphere slightly, exactly zero filled buttons appear on this page (both hero CTAs are ghost pills — the only filled button on screen is the nav's donate button), the partner grid shows real logos in hairline cells, and the registry preview rows fade/slide in as you scroll to them (test by resizing the window short enough to need scrolling, or check via browser dev tools' "Emulate CSS prefers-reduced-motion: reduce" to confirm rows appear instantly with that setting on).

- [ ] **Step 4: Commit**

```bash
git add src/pages/HomePage.tsx src/services/i18n.js
git commit -m "refactor(home): editorial hero with brand gradient sphere, hairline registry preview"
```

---

### Task 7: Events page — registry architecture (upcoming + year-grouped past + animated filter)

**Files:**
- Modify: `src/pages/Event.tsx` (full file replace)
- Modify: `src/services/i18n.js` — add `events.filterUpcoming`, `events.filterPast`, `events.registerCta` (en + fr blocks)

**Interfaces:**
- Consumes: `useEventData()` (unchanged), `groupPastEventsByYear` from Task 2, `useRevealOnScroll` from Task 3, tokens from Task 1, and the `homepage.registryLabel` i18n key **added by Task 6** (do not add it again — the page header reuses it verbatim via `t("homepage.registryLabel")` rather than defining its own `events.registryLabel`, since both pages label the same concept and Task 6 must already have run first).

- [ ] **Step 1: Add the new events translation keys**

In `src/services/i18n.js`, English `events` block, add:

```javascript
        filterUpcoming: "Upcoming",
        filterPast: "Past",
        registerCta: "Register",
```

French `events` block, add:

```javascript
        filterUpcoming: "À venir",
        filterPast: "Passés",
        registerCta: "Je m'inscris",
```

- [ ] **Step 2: Replace `src/pages/Event.tsx` in full**

```tsx
import React from "react";
import styled, { keyframes } from "styled-components";
import { useEventData } from "../data/events";
import { Event } from "../schema/event";
import { groupPastEventsByYear } from "../utils/eventGrouping";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaMapMarkerAlt,
  FaInstagram,
  FaEnvelope,
  FaArrowRight,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const rowIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ── Page shell ────────────────────────────────────────────── */

const Page = styled.div`
  min-height: 100dvh;
  background: var(--c-cream);
  display: flex;
  flex-direction: column;
  padding-top: 78px;
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--sp-12);
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) { padding: 0 var(--sp-6); }
`;

const Header = styled.header`
  padding: var(--sp-12) 0 var(--sp-6);
`;

const Eyebrow = styled.p`
  font-family: var(--f-body);
  font-weight: 800;
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--c-n900);
  margin: 0 0 var(--sp-2);
`;

const Title = styled.h1`
  font-family: var(--f-display);
  font-weight: 700;
  font-size: clamp(1.9rem, 4vw, 2.4rem);
  line-height: 1.1;
  color: var(--c-n900);
  margin: 0 0 var(--sp-3);
  max-width: 640px;
`;

const Subtitle = styled.p`
  font-family: var(--f-body);
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--c-n900);
  max-width: 560px;
  margin: 0;
`;

/* ── Segmented filter (no JS state — radio + CSS Grid overlap) ── */

const FilterWrap = styled.div`
  padding: var(--sp-3) 0 var(--sp-12);

  /* CSS-only crossfade: :has() reaches the checked radio regardless of how
     deeply it's nested (inside Segmented), and toggles the panel by class
     regardless of how deeply *that* is nested (inside PanelSwap). No JS. */
  &:has(#filter-past:checked) .panel-upcoming-slot {
    opacity: 0;
    transform: translateY(-6px);
    pointer-events: none;
  }

  &:has(#filter-past:checked) .panel-past-slot {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--sp-6);
  flex-wrap: wrap;
  gap: var(--sp-3);
`;

const Segmented = styled.div`
  display: inline-flex;
  background: var(--c-neutral-bg);
  border-radius: var(--r-full);
  padding: 4px;
  gap: 4px;
`;

const SegRadio = styled.input`
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;

  &:focus-visible + label {
    outline: 2px solid var(--c-primary);
    outline-offset: 2px;
  }
`;

const SegLabel = styled.label`
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--c-n600);
  border-radius: var(--r-full);
  padding: 9px 22px;
  cursor: pointer;
  user-select: none;
  transition: background 150ms ease, color 150ms ease;

  input:checked + & {
    background: var(--c-primary);
    color: var(--c-white);
  }
`;

const PanelSwap = styled.div`
  display: grid;
`;

const Panel = styled.div`
  grid-area: 1 / 1;
  opacity: 0;
  transform: translateY(6px);
  pointer-events: none;
  transition: opacity 250ms ease, transform 250ms ease;

  /* "À venir" is checked by default (defaultChecked on its radio), so its
     panel starts visible; FilterWrap's :has() rules above override both
     panels' state once "Passés" is checked. */
  &.panel-upcoming-slot {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 1ms linear;
  }
`;

/* ── Registry rows (shared by upcoming + past) ────────────────── */

const RegistryRow = styled.div<{ visible: boolean; delay: number; emphasized?: boolean }>`
  display: flex;
  align-items: center;
  gap: var(--sp-6);
  padding: 20px 0;
  border-top: ${p => p.emphasized ? "1px solid var(--c-border)" : "none"};
  border-bottom: 1px solid var(--c-border);
  opacity: ${p => p.visible ? 1 : 0};
  animation: ${p => p.visible ? rowIn : "none"} 360ms ease-out ${p => p.delay}ms both;
  transition: padding-left 150ms ease;

  &:hover { padding-left: 8px; }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;

const RowDate = styled.div`
  width: 80px;
  flex-shrink: 0;

  .day { font-family: var(--f-display); font-weight: 700; font-size: 2rem; line-height: 1; color: var(--c-n900); }
  .rest { font-family: var(--f-body); font-weight: 700; font-size: 0.68rem; letter-spacing: 0.05em; text-transform: uppercase; color: var(--c-n900); }
`;

const RowBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

const RowTitle = styled.span`
  font-family: var(--f-display);
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--c-n900);
`;

const RowMeta = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--f-body);
  font-weight: 500;
  font-size: 0.82rem;
  color: var(--c-n900);

  svg { color: var(--c-n400); flex-shrink: 0; }
`;

const StatusLabel = styled.span<{ upcoming?: boolean }>`
  font-family: var(--f-body);
  font-weight: 800;
  font-size: 0.68rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${p => p.upcoming ? "var(--c-n900)" : "var(--c-n400)"};
  border-bottom: ${p => p.upcoming ? "1.5px solid var(--c-n900)" : "none"};
  padding-bottom: 2px;
  white-space: nowrap;
`;

const RegisterLink = styled(Link)`
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--c-n900);
  border-bottom: 1.5px solid var(--c-n900);
  padding-bottom: 2px;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
`;

const YearLabel = styled.h3`
  font-family: var(--f-display);
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--c-n900);
  margin: var(--sp-6) 0 var(--sp-1);

  &:first-child { margin-top: 0; }
`;

const EmptyState = styled.div`
  padding: var(--sp-12) 0;
  text-align: center;
  font-family: var(--f-body);
  font-weight: 600;
  color: var(--c-n600);
  border-top: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
`;

/* ── Trust grid (partners & sponsors) ─────────────────────────── */

const TrustSection = styled.section`
  border-top: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  padding: var(--sp-8) 0;
`;

const TrustGrid = styled.div`
  margin-top: var(--sp-4);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-top: 1px solid var(--c-border);
  border-left: 1px solid var(--c-border);

  @media (max-width: 900px) { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 560px) { grid-template-columns: repeat(2, 1fr); }
`;

const TrustCell = styled.div`
  background: var(--c-white);
  border-right: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 0.8rem;
  color: var(--c-n900);
  text-align: center;
  padding: 0 var(--sp-2);
`;

/* ── Connect band ──────────────────────────────────────────── */

const ConnectSection = styled.section`
  background: var(--c-neutral-bg);
  padding: var(--sp-16) var(--sp-12);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--sp-5);

  @media (max-width: 768px) { padding: var(--sp-12) var(--sp-6); }
`;

const ConnectTitle = styled.h2`
  font-family: var(--f-display);
  font-size: clamp(1.5rem, 3.5vw, 1.9rem);
  font-weight: 700;
  color: var(--c-n900);
  margin: 0;
`;

const ConnectText = styled.p`
  font-family: var(--f-body);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--c-n900);
  max-width: 520px;
  margin: 0;
  line-height: 1.6;
`;

const SocialRow = styled.div`
  display: flex;
  gap: var(--sp-3);
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--c-n900);
  color: var(--c-n900);
  font-size: 1rem;
  text-decoration: none;
  transition: background 150ms ease, color 150ms ease;

  &:hover { background: var(--c-n900); color: var(--c-cream); }
`;

const ContactGhostBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--c-n900);
  border: 1.5px solid var(--c-n900);
  border-radius: var(--r-full);
  padding: 12px 26px;
  text-decoration: none;
  transition: background 150ms ease, color 150ms ease;

  &:hover { background: var(--c-n900); color: var(--c-cream); }
`;

/* ── Shared row renderer with scroll reveal ───────────────────── */

const RevealRow: React.FC<{
  delay: number;
  emphasized?: boolean;
  event: Event;
  actionsSlot: React.ReactNode;
}> = ({ delay, emphasized, event, actionsSlot }) => {
  const [ref, visible] = useRevealOnScroll<HTMLDivElement>();
  const day = event.date.match(/\d{1,2}/)?.[0] ?? "—";
  const monthYear = event.date.replace(/^\D*\d{1,2}\D*/, "").trim() || "—";

  return (
    <RegistryRow ref={ref} visible={visible} delay={delay} emphasized={emphasized}>
      <RowDate>
        <div className="day">{day}</div>
        <div className="rest">{monthYear}</div>
      </RowDate>
      <RowBody>
        <RowTitle>{event.title}</RowTitle>
        {event.location && (
          <RowMeta>
            <FaMapMarkerAlt aria-hidden="true" />
            <span>{event.location}</span>
          </RowMeta>
        )}
      </RowBody>
      {actionsSlot}
    </RegistryRow>
  );
};

/* ── Component ─────────────────────────────────────────────── */

export const Events = () => {
  const { t } = useTranslation();
  const events = useEventData();

  const available = events.filter((e) => e.isAvailable);
  const upcoming = available.filter((e) => !e.isPast);
  const past = available.filter((e) => e.isPast);
  const yearGroups = groupPastEventsByYear(past);

  return (
    <Page>
      <Inner>
        <Header>
          <Eyebrow>{t("homepage.registryLabel")}</Eyebrow>
          <Title>{t("events.title")}</Title>
          <Subtitle>{t("events.subtitle")}</Subtitle>
        </Header>

        <FilterWrap>
          <FilterBar>
            <Segmented role="radiogroup" aria-label={t("events.title")}>
              <SegRadio type="radio" id="filter-upcoming" name="eventFilter" defaultChecked />
              <SegLabel htmlFor="filter-upcoming">
                {t("events.filterUpcoming")} ({upcoming.length})
              </SegLabel>
              <SegRadio type="radio" id="filter-past" name="eventFilter" />
              <SegLabel htmlFor="filter-past">
                {t("events.filterPast")} ({past.length})
              </SegLabel>
            </Segmented>
          </FilterBar>

          <PanelSwap>
            <Panel className="panel-upcoming-slot">
              {upcoming.length > 0 ? (
                <div>
                  {upcoming.map((ev, i) => (
                    <RevealRow
                      key={ev.id}
                      delay={i * 40}
                      emphasized
                      event={ev}
                      actionsSlot={
                        <>
                          <StatusLabel upcoming>{t("events.filterUpcoming")}</StatusLabel>
                          <RegisterLink to={`/coeur-festifs/event/${ev.id}`}>
                            {t("events.registerCta")} →
                          </RegisterLink>
                        </>
                      }
                    />
                  ))}
                </div>
              ) : (
                <EmptyState role="status" aria-live="polite">
                  {t("events.noUpcomingMessage")}
                </EmptyState>
              )}
            </Panel>

            <Panel className="panel-past-slot">
              {yearGroups.length > 0 ? (
                <div>
                  {yearGroups.map((group) => (
                    <div key={group.year}>
                      <YearLabel>{group.year}</YearLabel>
                      {group.events.map((ev, i) => (
                        <RevealRow
                          key={ev.id}
                          delay={i * 40}
                          event={ev}
                          actionsSlot={<StatusLabel>{t("events.pastBadge")}</StatusLabel>}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyState>{t("events.noEventsMessage")}</EmptyState>
              )}
            </Panel>
          </PanelSwap>
        </FilterWrap>
      </Inner>

      <TrustSection aria-labelledby="events-trust-heading">
        <Inner>
          <Eyebrow id="events-trust-heading">{t("homepage.trustLabel")}</Eyebrow>
          <TrustGrid>
            <TrustCell>Fondation du Dr Julien</TrustCell>
            <TrustCell>Répit Providence</TrustCell>
            <TrustCell>Scholastic</TrustCell>
            <TrustCell>Librairie Gallimard</TrustCell>
            <TrustCell>Fondation Réno-Jouets</TrustCell>
          </TrustGrid>
        </Inner>
      </TrustSection>

      <ConnectSection>
        <ConnectTitle>{t("events.Footer.title")}</ConnectTitle>
        <ConnectText>{t("events.Footer.desc")}</ConnectText>
        <SocialRow aria-label="Réseaux sociaux">
          <SocialLink
            href="https://www.instagram.com/coeurs.festifs"
            target="_blank" rel="noopener noreferrer" aria-label="Instagram"
          >
            <FaInstagram aria-hidden="true" />
          </SocialLink>
          <SocialLink
            href="https://www.facebook.com/profile.php?id=61571443886637"
            target="_blank" rel="noopener noreferrer" aria-label="Facebook"
          >
            <FaFacebook aria-hidden="true" />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/c%C5%93urs-festifs-39b901360/"
            target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
          >
            <FaLinkedin aria-hidden="true" />
          </SocialLink>
          <SocialLink href="mailto:coeurs.festifs@gmail.com" aria-label="Courriel">
            <FaEnvelope aria-hidden="true" />
          </SocialLink>
        </SocialRow>
        <ContactGhostBtn href="mailto:coeurs.festifs@gmail.com">
          <FaEnvelope aria-hidden="true" />
          <span>{t("events.Footer.contact")}</span>
        </ContactGhostBtn>
      </ConnectSection>
    </Page>
  );
};
```

- [ ] **Step 3: Manual check**

Run: `npm start`, visit `/coeur-festifs/events`. Confirm:
- With the real current data (all 9 events have `isPast: true`, none upcoming), the "À venir (0)" panel shows the empty-state message, not a blank area.
- Clicking "Passés" crossfades to the past list without a layout jump, grouped under year headings (should show at least a `2025` group given the real dates).
- Tab to the filter with keyboard only (no mouse) — focus ring appears on the active label, `Enter`/`Space` on the focused radio switches panels.
- Enable "prefers-reduced-motion: reduce" in devtools — rows appear immediately, no slide/fade.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Event.tsx src/services/i18n.js
git commit -m "refactor(events): registry architecture with year-grouped catalogue and animated filter"
```

---

### Task 8: Full regression pass

**Files:** none (verification only)

- [ ] **Step 1: Run the full test suite**

Run: `CI=true npx react-scripts test --watchAll=false`
Expected: all new tests pass (Tasks 2 & 3). `src/App.test.tsx` was already failing before this plan (it asserts stale CRA boilerplate text — "learn react" — unrelated to this app's content) and is out of scope; confirm it fails for that *same* pre-existing reason, not a new one introduced by this refactor.

- [ ] **Step 2: TypeScript check**

Run: `npx tsc --noEmit`
Expected: no new type errors.

- [ ] **Step 3: Manual walkthrough**

Run: `npm start` and click through, in order: Home → Events (toggle both filter states) → click into an event detail → About → back to Home. Confirm the nav's single donate button is the only filled-color button visible on every page, hairlines render consistently (no leftover heavy shadows from the old theme), and the language toggle (FR/EN) still works on every page.

- [ ] **Step 4: Commit the plan's completion marker (optional)**

```bash
git add -A
git commit -m "chore: complete editorial redesign refactor (docs/DESIGN.md direction H)" --allow-empty
```
