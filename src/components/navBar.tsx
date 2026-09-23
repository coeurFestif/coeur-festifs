import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PiListBold, PiXBold, PiHeartFill } from "react-icons/pi";
import logo from "../assets/logo.png";
import { EMAIL } from "./eventActions";

const LINKS = [
  { to: "/coeur-festifs", key: "navBar.home" },
  { to: "/coeur-festifs/events", key: "navBar.events" },
  { to: "/coeur-festifs/about", key: "navBar.about" },
];
const DONATE_HREF = `mailto:${EMAIL}?subject=Faire%20un%20don`;

/* ── Bar ───────────────────────────────────────────────────── */

const Bar = styled.header<{ $scrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: var(--z-nav);
  background: rgba(255, 255, 255, ${(p) => (p.$scrolled ? 0.92 : 1)});
  backdrop-filter: ${(p) => (p.$scrolled ? "saturate(1.4) blur(12px)" : "none")};
  border-bottom: 1px solid ${(p) => (p.$scrolled ? "var(--c-hair)" : "transparent")};
  transition: border-color 200ms ease, background 200ms ease;
`;

const Inner = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--sp-6);
  height: var(--nav-h);
  max-width: calc(var(--page-max) + 2 * var(--gutter));
  margin: 0 auto;
  padding: 0 var(--gutter);
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;

  img { width: 36px; height: 36px; border-radius: 10px; object-fit: cover; }
  span {
    font-family: var(--f-display);
    font-weight: 800;
    font-size: 1.2rem;
    letter-spacing: -0.03em;
    color: var(--c-ink);
  }
`;

const Links = styled.ul`
  display: flex;
  gap: 4px;
  list-style: none;

  @media (max-width: 820px) { display: none; }
`;

const NavItem = styled(Link)`
  position: relative;
  display: block;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--c-slate);
  text-decoration: none;
  border-radius: 4px;
  transition: color 150ms ease;

  &:hover { color: var(--c-ink); }
  &[aria-current="page"] { color: var(--c-ink); font-weight: 700; }
  &[aria-current="page"]::after {
    content: "";
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 2px;
    height: 2px;
    border-radius: 2px;
    background: var(--c-ink);
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  margin-left: auto;
`;

const Lang = styled.div`
  display: flex;
  padding: 3px;
  border-radius: var(--r-pill);
  background: rgba(0, 0, 0, 0.05);

  @media (max-width: 820px) { display: none; }
`;

const LangBtn = styled.button<{ $on: boolean }>`
  border: none;
  padding: 4px 10px;
  border-radius: var(--r-pill);
  font-size: 0.75rem;
  font-weight: 700;
  background: ${(p) => (p.$on ? "var(--c-white)" : "transparent")};
  color: ${(p) => (p.$on ? "var(--c-ink)" : "var(--c-slate)")};
  box-shadow: ${(p) => (p.$on ? "var(--sh-card)" : "none")};
  transition: background 150ms ease, color 150ms ease;
`;

const Donate = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 40px;
  padding: 8px 18px;
  border-radius: var(--r-btn);
  background: var(--c-ink);
  color: var(--c-white);
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: -0.02em;
  text-decoration: none;
  transition: opacity 150ms ease, transform 150ms var(--ease-out);

  svg { color: var(--c-primary); }
  &:hover { opacity: 0.85; }
  &:active { transform: translateY(1px) scale(0.98); }

  @media (max-width: 480px) { span { display: none; } padding: 8px 12px; }
`;

const Burger = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--c-hair);
  border-radius: var(--r-btn);
  background: var(--c-white);
  color: var(--c-ink);
  font-size: 1.2rem;

  @media (max-width: 820px) { display: inline-flex; }
`;

/* ── Mobile sheet ──────────────────────────────────────────── */

const Scrim = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: var(--z-drawer);
  background: rgba(20, 20, 20, 0.35);
  opacity: ${(p) => (p.$open ? 1 : 0)};
  pointer-events: ${(p) => (p.$open ? "auto" : "none")};
  transition: opacity 250ms ease;
`;

const Sheet = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: calc(var(--z-drawer) + 1);
  padding: var(--sp-4) var(--gutter) var(--sp-8);
  background: var(--c-white);
  border-radius: 0 0 var(--r-modal) var(--r-modal);
  box-shadow: var(--sh-float);
  transform: translateY(${(p) => (p.$open ? "0" : "-105%")});
  visibility: ${(p) => (p.$open ? "visible" : "hidden")};
  transition: transform 350ms var(--ease-out), visibility 350ms;
`;

const SheetHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--sp-6);
`;

const SheetLink = styled(Link)`
  display: block;
  padding: 10px 0;
  font-family: var(--f-display);
  font-weight: 800;
  font-size: 2rem;
  letter-spacing: -0.03em;
  color: var(--c-ash);
  text-decoration: none;

  &[aria-current="page"] { color: var(--c-ink); }
`;

const SheetFoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-4);
  margin-top: var(--sp-8);
  padding-top: var(--sp-6);
  border-top: 1px solid var(--c-hair);

  ${Lang} { display: flex; }
`;

/* ── Component ─────────────────────────────────────────────── */

export const NavBar = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const lang = i18n.language.startsWith("en") ? "en" : "fr";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const burger = burgerRef.current;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      burger?.focus();
    };
  }, [open]);

  const setLang = (l: string) => {
    i18n.changeLanguage(l);
    document.documentElement.lang = l;
  };

  const isActive = (to: string) =>
    to === "/coeur-festifs" ? pathname === to : pathname.startsWith(to) || (to.endsWith("events") && pathname.includes("/event/"));

  const langSwitch = (
    <Lang role="group" aria-label="Langue / Language">
      <LangBtn $on={lang === "fr"} aria-pressed={lang === "fr"} onClick={() => setLang("fr")}>FR</LangBtn>
      <LangBtn $on={lang === "en"} aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</LangBtn>
    </Lang>
  );

  return (
    <>
      <Bar $scrolled={scrolled}>
        <Inner aria-label="Navigation principale">
          <Brand to="/coeur-festifs" aria-label="Coeurs Festifs, accueil">
            <img src={logo} alt="" />
            <span>Cœurs Festifs</span>
          </Brand>

          <Links>
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavItem to={l.to} aria-current={isActive(l.to) ? "page" : undefined}>
                  {t(l.key)}
                </NavItem>
              </li>
            ))}
          </Links>

          <Right>
            {langSwitch}
            <Donate href={DONATE_HREF}>
              <PiHeartFill aria-hidden="true" />
              <span>{t("navBar.donate")}</span>
            </Donate>
            <Burger
              ref={burgerRef}
              onClick={() => setOpen(true)}
              aria-label={t("ui.nav.menu")}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <PiListBold aria-hidden="true" />
            </Burger>
          </Right>
        </Inner>
      </Bar>

      <Scrim $open={open} onClick={() => setOpen(false)} aria-hidden="true" />
      <Sheet $open={open} id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
        <SheetHead>
          <Brand to="/coeur-festifs">
            <img src={logo} alt="" />
            <span>Cœurs Festifs</span>
          </Brand>
          <Burger onClick={() => setOpen(false)} aria-label={t("ui.nav.close")} style={{ display: "inline-flex" }}>
            <PiXBold aria-hidden="true" />
          </Burger>
        </SheetHead>
        {LINKS.map((l) => (
          <SheetLink key={l.to} to={l.to} aria-current={isActive(l.to) ? "page" : undefined}>
            {t(l.key)}
          </SheetLink>
        ))}
        <SheetFoot>
          {langSwitch}
          <Donate href={DONATE_HREF}>
            <PiHeartFill aria-hidden="true" />
            {t("navBar.donate")}
          </Donate>
        </SheetFoot>
      </Sheet>
    </>
  );
};
