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
