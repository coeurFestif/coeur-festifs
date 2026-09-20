import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

/* ── Shell ─────────────────────────────────────────────────── */

const NavShell = styled.nav`
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
  color: var(--c-n900);
  padding: 8px 14px;
  cursor: pointer;
  border-bottom: 1.5px solid ${p => p.active ? "var(--c-n900)" : "transparent"};
  transition: border-color 150ms ease;

  &:hover { border-color: var(--c-n900); }
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
  background: ${p => p.active ? "var(--c-n900)" : "transparent"};
  color: ${p => p.active ? "var(--c-cream)" : "var(--c-n600)"};
  border: none;
  font-family: var(--f-body);
  font-size: 0.78rem;
  font-weight: 800;
  padding: 5px 11px;
  border-radius: var(--r-full);
  cursor: pointer;
  transition: background 150ms ease, color 150ms ease;
  min-height: 30px;

  &:hover { color: ${p => p.active ? "var(--c-cream)" : "var(--c-primary)"}; }
`;

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
  background: ${p => p.active ? "var(--c-n900)" : "var(--c-n100)"};
  color: ${p => p.active ? "var(--c-cream)" : "var(--c-n600)"};
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
  const lang = i18n.language;
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef   = useRef(false);

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
      <NavShell role="navigation" aria-label="Navigation principale">
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
        </DrawerBody>
      </Drawer>
    </>
  );
};
