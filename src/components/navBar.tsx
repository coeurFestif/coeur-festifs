import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

/* ── Shell ─────────────────────────────────────────────────── */

interface NavShellProps { scrolled: boolean; }

const NavShell = styled.nav<NavShellProps>`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  background: var(--c-white);
  border-bottom: 1.5px solid ${p => p.scrolled ? "var(--c-n200)" : "transparent"};
  box-shadow: ${p => p.scrolled ? "var(--sh-sm)" : "none"};
  transition: border-color 200ms ease, box-shadow 200ms ease;

  @media (max-width: 768px) { padding: 0 20px; }
`;

/* ── Brand ─────────────────────────────────────────────────── */

const Brand = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;
`;

const BrandImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: var(--r-full);
  object-fit: cover;
  border: 2px solid var(--c-primary-surface);
`;

const BrandName = styled.span`
  font-family: var(--f-display);
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--c-primary);
  white-space: nowrap;

  @media (max-width: 480px) { font-size: 1.2rem; }
`;

/* ── Desktop nav ───────────────────────────────────────────── */

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) { display: none; }
`;

const NavLink = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  font-family: var(--f-body);
  font-size: 0.9rem;
  font-weight: 700;
  color: ${p => p.active ? "var(--c-primary)" : "var(--c-n600)"};
  padding: 8px 14px;
  border-radius: var(--r-sm);
  cursor: pointer;
  transition: color 150ms ease, background 150ms ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 4px; left: 14px; right: 14px;
    height: 2px;
    border-radius: 2px;
    background: var(--c-primary);
    transform: scaleX(${p => p.active ? 1 : 0});
    transform-origin: left;
    transition: transform 200ms var(--ease-out);
  }

  &:hover { color: var(--c-primary); }
  &:hover::after { transform: scaleX(1); }
`;

const LangToggle = styled.div`
  display: flex;
  align-items: center;
  background: var(--c-n100);
  border-radius: var(--r-full);
  padding: 3px;
  margin-left: 8px;
`;

const LangBtn = styled.button<{ active: boolean }>`
  background: ${p => p.active ? "var(--c-primary)" : "transparent"};
  color: ${p => p.active ? "var(--c-white)" : "var(--c-n600)"};
  border: none;
  font-family: var(--f-body);
  font-size: 0.78rem;
  font-weight: 800;
  padding: 5px 11px;
  border-radius: var(--r-full);
  cursor: pointer;
  transition: background 150ms ease, color 150ms ease;
  min-height: 30px;

  &:hover { color: ${p => p.active ? "var(--c-white)" : "var(--c-primary)"}; }
`;

const EventsCTA = styled.button`
  background: var(--c-primary);
  color: var(--c-white);
  border: none;
  font-family: var(--f-body);
  font-size: 0.88rem;
  font-weight: 700;
  padding: 9px 22px;
  border-radius: var(--r-full);
  cursor: pointer;
  margin-left: 12px;
  min-height: 38px;
  box-shadow: 0 2px 10px rgba(230,57,70,.28);
  transition: filter 150ms ease, transform 150ms ease, box-shadow 150ms ease;
  white-space: nowrap;

  &:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
    box-shadow: 0 4px 18px rgba(230,57,70,.35);
  }
  &:active { transform: translateY(0); filter: brightness(.96); }
`;

/* ── Mobile controls ───────────────────────────────────────── */

const MobileRight = styled.div`
  display: none;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) { display: flex; }
`;

const HamburgerBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--c-n100);
  border: none;
  border-radius: var(--r-md);
  color: var(--c-n800);
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 150ms ease;

  &:hover { background: var(--c-primary-surface); color: var(--c-primary); }
`;

/* ── Mobile drawer ─────────────────────────────────────────── */

const Backdrop = styled.div<{ open: boolean }>`
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.45);
  z-index: 999;
  opacity: ${p => p.open ? 1 : 0};
  pointer-events: ${p => p.open ? "auto" : "none"};
  transition: opacity 250ms ease;

  @media (max-width: 768px) { display: block; }
`;

const Drawer = styled.div<{ open: boolean }>`
  display: none;
  position: fixed;
  top: 0; right: 0;
  width: min(320px, 88vw);
  height: 100dvh;
  background: var(--c-white);
  z-index: 1001;
  padding: 0;
  transform: translateX(${p => p.open ? "0" : "100%"});
  transition: transform 300ms var(--ease-out);
  overflow-y: auto;
  flex-direction: column;

  @media (max-width: 768px) { display: flex; }
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1.5px solid var(--c-n100);
`;

const DrawerBody = styled.div`
  padding: 12px 12px 32px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const DrawerLink = styled.button<{ active?: boolean }>`
  background: ${p => p.active ? "var(--c-primary-surface)" : "none"};
  border: none;
  width: 100%;
  text-align: left;
  font-family: var(--f-body);
  font-size: 1rem;
  font-weight: 700;
  color: ${p => p.active ? "var(--c-primary)" : "var(--c-n800)"};
  padding: 13px 16px;
  border-radius: var(--r-md);
  cursor: pointer;
  transition: background 150ms ease, color 150ms ease;

  &:hover { background: var(--c-n100); color: var(--c-primary); }
`;

const DrawerDivider = styled.div`
  height: 1.5px;
  background: var(--c-n100);
  margin: 8px 4px;
`;

const DrawerLangRow = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 16px;
`;

const DrawerLangBtn = styled.button<{ active: boolean }>`
  flex: 1;
  background: ${p => p.active ? "var(--c-primary)" : "var(--c-n100)"};
  color: ${p => p.active ? "var(--c-white)" : "var(--c-n600)"};
  border: none;
  font-family: var(--f-body);
  font-size: 0.88rem;
  font-weight: 700;
  padding: 10px;
  border-radius: var(--r-md);
  cursor: pointer;
  min-height: 44px;
  transition: background 150ms ease, color 150ms ease;
`;

/* ── Component ─────────────────────────────────────────────── */

export const NavBar = () => {
  const navigate   = useNavigate();
  const location   = useLocation();
  const { t, i18n } = useTranslation();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lang = i18n.language;
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef   = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (wasOpenRef.current && !open) {
      hamburgerRef.current?.focus();
    }
    wasOpenRef.current = open;
  }, [open]);

  const go = (path: string) => { navigate(path); setOpen(false); };
  const active = (path: string) => location.pathname === path;
  const setLang = (l: string) => {
    i18n.changeLanguage(l);
    document.documentElement.lang = l;
  };

  return (
    <>
      <NavShell scrolled={scrolled} role="navigation" aria-label="Navigation principale">
        {/* Brand */}
        <Brand onClick={() => go("/coeur-festifs")} aria-label="Coeurs Festifs — Accueil">
          <BrandImg src={logo} alt="" aria-hidden="true" />
          <BrandName>Coeurs Festifs</BrandName>
        </Brand>

        {/* Desktop */}
        <DesktopNav>
          <NavLink active={active("/coeur-festifs")} onClick={() => go("/coeur-festifs")}>
            {t("navBar.home")}
          </NavLink>
          <NavLink active={active("/coeur-festifs/about")} onClick={() => go("/coeur-festifs/about")}>
            {t("navBar.about")}
          </NavLink>

          <LangToggle aria-label="Langue">
            <LangBtn active={lang === "fr"} onClick={() => setLang("fr")}>FR</LangBtn>
            <LangBtn active={lang === "en"} onClick={() => setLang("en")}>EN</LangBtn>
          </LangToggle>

          <EventsCTA
            onClick={() => go("/coeur-festifs/events")}
            aria-current={active("/coeur-festifs/events") ? "page" : undefined}
          >
            {t("navBar.events")} →
          </EventsCTA>
        </DesktopNav>

        {/* Mobile toggle */}
        <MobileRight>
          <LangToggle aria-label="Langue">
            <LangBtn active={lang === "fr"} onClick={() => setLang("fr")}>FR</LangBtn>
            <LangBtn active={lang === "en"} onClick={() => setLang("en")}>EN</LangBtn>
          </LangToggle>
          <HamburgerBtn
            ref={hamburgerRef}
            onClick={() => setOpen(v => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
          >
            {open ? <FaTimes /> : <FaBars />}
          </HamburgerBtn>
        </MobileRight>
      </NavShell>

      {/* Mobile drawer */}
      <Backdrop open={open} onClick={() => setOpen(false)} aria-hidden="true" />
      <Drawer open={open} id="mobile-drawer" role="dialog" aria-label="Menu" aria-modal="true">
        <DrawerHeader>
          <Brand onClick={() => go("/coeur-festifs")} style={{ gap: 8 }}>
            <BrandImg src={logo} alt="" aria-hidden="true" />
            <BrandName>Coeurs Festifs</BrandName>
          </Brand>
          <HamburgerBtn onClick={() => setOpen(false)} aria-label="Fermer">
            <FaTimes />
          </HamburgerBtn>
        </DrawerHeader>
        <DrawerBody>
          <DrawerLink active={active("/coeur-festifs")} onClick={() => go("/coeur-festifs")}>
            {t("navBar.home")}
          </DrawerLink>
          <DrawerLink active={active("/coeur-festifs/about")} onClick={() => go("/coeur-festifs/about")}>
            {t("navBar.about")}
          </DrawerLink>
          <DrawerLink active={active("/coeur-festifs/events")} onClick={() => go("/coeur-festifs/events")}>
            {t("navBar.events")}
          </DrawerLink>
          <DrawerDivider />
          <DrawerLangRow>
            <DrawerLangBtn active={lang === "fr"} onClick={() => setLang("fr")}>Français</DrawerLangBtn>
            <DrawerLangBtn active={lang === "en"} onClick={() => setLang("en")}>English</DrawerLangBtn>
          </DrawerLangRow>
        </DrawerBody>
      </Drawer>
    </>
  );
};
