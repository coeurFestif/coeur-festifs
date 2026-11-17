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
  background: var(--c-paper);
  border-bottom: 2px solid ${(p) => (p.$scrolled ? "var(--c-ink)" : "transparent")};
  transition: border-color 200ms ease;
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

  .lm {
    width: 46px;
    height: 46px;
    flex: none;
    border-radius: 50%;
    overflow: hidden;
    background: var(--c-blush);
    border: 2px solid var(--c-ink);
    rotate: -6deg;
    transition: rotate 300ms var(--ease-out);
  }
  .lm img { width: 200%; max-width: none; margin: -44% 0 0 -54%; }
  &:hover .lm { rotate: 6deg; }
  span {
    font-family: var(--f-display);
    font-weight: 800;
    font-size: 1.25rem;
    letter-spacing: -0.02em;
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
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--c-slate);
  text-decoration: none;
  border-radius: 4px;
  transition: color 150ms ease;

  &:hover { color: var(--c-ink); }
  &[aria-current="page"] { color: var(--c-ink); font-weight: 700; }
  &::after {
    content: "";
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: -1px;
    height: 9px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 9' preserveAspectRatio='none'%3E%3Cpath d='M2 6C25 2 55 8 98 3' fill='none' stroke='%23f86668' stroke-width='3.4' stroke-linecap='round'/%3E%3C/svg%3E") center / 100% 100% no-repeat;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 300ms var(--ease-out);
  }
  &:hover::after, &[aria-current="page"]::after { transform: scaleX(1); }
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
  background: var(--c-blush);

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
  box-shadow: ${(p) => (p.$on ? "0 0 0 1.5px var(--c-ink)" : "none")};
  transition: background 150ms ease, color 150ms ease;
`;

const Donate = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 40px;
  padding: 8px 18px;
  border-radius: var(--r-btn);
  background: var(--c-cherry);
  color: var(--c-white);
  border: 2px solid var(--c-ink);
  box-shadow: 3px 3px 0 var(--c-ink);
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: -0.01em;
  text-decoration: none;
  transition: transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out), background 150ms ease;

  svg { color: var(--c-gold); }
  &:hover { transform: translate(-2px, -2px); box-shadow: 5px 5px 0 var(--c-ink); background: #a8141f; }
  &:active { transform: translate(2px, 2px); box-shadow: 1px 1px 0 var(--c-ink); }

  @media (max-width: 480px) { span { display: none; } padding: 8px 12px; }
`;

const Burger = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--c-ink);
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
  background: rgba(43, 26, 36, 0.4);
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
  background: var(--c-paper);
  border-bottom: 2px solid var(--c-ink);
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
            <span className="lm"><img src={logo} alt="" /></span>
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
            <span className="lm"><img src={logo} alt="" /></span>
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
