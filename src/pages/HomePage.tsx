import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import { useEventData } from "../data/events";
import { FeaturedEvent } from "../components/FeaturedEvent";
import { EventCard } from "../components/EventCard";
import { PartnersMarquee } from "../components/PartnersMarquee";
import { GradientWord } from "../components/GradientWord";
import commonPic from "../assets/commonPic.jpg";
import carrefour from "../assets/CJE.jpg";
import repit from "../assets/repitProvidence.png";
import promis from "../assets/promis.png";
import maisonCulture from "../assets/maisonCulture.png";
import fondationDrJulien from "../assets/fondationDrJulien.png";
import mountainSights from "../assets/mountainSights.png";
import garageMusique from "../assets/garageMusique.png";
import minimolars from "../assets/minimolars.png";
import scholastic from "../assets/Scholastic.png";
import gallimard from "../assets/Gallimard.jpg";
import debrouillard from "../assets/debrouillard.png";
import renojouets from "../assets/renojouets.jpeg";

/* ── Utility ───────────────────────────────────────────────── */

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--sp-12);

  @media (max-width: 768px) { padding: 0 var(--sp-6); }
`;

const floaty = keyframes`
  0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)); }
  50%      { transform: translateY(-10px) rotate(var(--r, 0deg)); }
`;

/* ═══════════════════════════════════════════════════════
   1 · HERO — scrapbook photo wall
═══════════════════════════════════════════════════════ */

const HeroSection = styled.section`
  position: relative;
  padding: var(--nav-space) var(--sp-12) var(--sp-16);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) { padding: var(--nav-space) var(--sp-6) var(--sp-10); }
`;

const ScatterWrap = styled.div`
  display: none;

  @media (min-width: 901px) {
    display: block;
  }
`;

// Clean floating photo — no frame, no tilt, just a rounded rect with a soft
// shadow that bobs gently. Matches the "floating photo gallery" reference.
const FloatingPhoto = styled.div`
  position: absolute;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: var(--sh-card);
  animation: ${floaty} 5.5s ease-in-out infinite;

  img { width: 100%; height: 100%; object-fit: cover; display: block; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const MobileScatterRow = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--sp-3);
  margin-bottom: var(--sp-6);

  @media (min-width: 901px) { display: none; }
`;

const MobileFloatingPhoto = styled.div`
  border-radius: 14px;
  overflow: hidden;
  box-shadow: var(--sh-card);
  box-sizing: border-box;
  width: 88px;
  height: 108px;
  flex-shrink: 0;

  img { width: 100%; height: 100%; object-fit: cover; border-radius: 2px; display: block; }
`;

const Eyebrow = styled.span`
  font-weight: 800;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--c-caption);
  margin-bottom: var(--sp-4);
`;

const HeroTitle = styled.h1`
  font-family: var(--f-display);
  font-weight: 700;
  font-size: clamp(2.2rem, 5.5vw, 3.6rem);
  line-height: 1.1;
  color: var(--c-n900);
  margin: 0;
  max-width: 720px;
  position: relative;
  z-index: 2;
`;

const HeroText = styled.p`
  font-family: var(--f-body);
  font-weight: 500;
  font-size: 1.05rem;
  color: var(--c-n600);
  max-width: 480px;
  margin: var(--sp-5) 0 0;
  line-height: 1.6;
`;

const HeroCTAs = styled.div`
  display: flex;
  gap: var(--sp-3);
  flex-wrap: wrap;
  justify-content: center;
  margin-top: var(--sp-7);
`;

const BtnOutline = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--c-white);
  color: var(--c-n900);
  border: 1.5px solid var(--c-n900);
  font-family: var(--f-body);
  font-weight: 800;
  font-size: 0.95rem;
  padding: 14px 28px;
  border-radius: var(--r-full);
  cursor: pointer;
  transition: background 150ms ease, color 150ms ease, transform 150ms var(--ease-spring);

  &:hover { background: var(--c-n900); color: var(--c-cream); transform: translateY(-1px); }
`;

const BtnGhost = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: none;
  color: var(--c-n600);
  border: none;
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 0.95rem;
  padding: 14px 10px;
  cursor: pointer;

  &:hover { color: var(--c-n900); }
`;

/* ═══════════════════════════════════════════════════════
   2 · FEATURED EVENT
═══════════════════════════════════════════════════════ */

const FeaturedSection = styled.section`
  padding: 0 var(--sp-12) var(--sp-16);
  box-sizing: border-box;

  @media (max-width: 768px) { padding: 0 var(--sp-6) var(--sp-10); }
`;

const FeaturedHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  margin-bottom: var(--sp-5);
`;

const FeaturedTag = styled.span`
  font-family: var(--f-display);
  font-weight: 700;
  font-size: 0.8rem;
  padding: 6px 16px;
  background: var(--c-primary-surface);
  color: var(--c-primary);
  border-radius: var(--r-full);
`;

const FeaturedHeading = styled.h2`
  margin: 0;
  font-family: var(--f-display);
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--c-n900);
`;

/* ═══════════════════════════════════════════════════════
   3 · INTRO
═══════════════════════════════════════════════════════ */

const IntroSection = styled.section`
  padding: var(--sp-16) 0;
  background: var(--c-white);
  border-top: 1px solid var(--c-border);
`;

const IntroInner = styled(Inner)`
  display: flex;
  gap: var(--sp-6);

  @media (max-width: 768px) { flex-direction: column; }
`;

const IntroLeft = styled.div`
  width: 240px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
`;

const SectionLabel = styled.span`
  font-weight: 800;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-caption);
`;

const GhostTextBtn = styled.button`
  align-self: flex-start;
  background: none;
  border: none;
  border-bottom: 1.5px solid var(--c-n900);
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
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--c-n800);
`;

/* ═══════════════════════════════════════════════════════
   4 · TRUST — partenaires + commanditaires, une seule liste défilante
═══════════════════════════════════════════════════════ */

const TrustSection = styled.section`
  padding: var(--sp-16) 0;
  background: var(--c-n50);
`;

/* ═══════════════════════════════════════════════════════
   5 · PAST EVENTS PREVIEW
═══════════════════════════════════════════════════════ */

const CatalogueSection = styled.section`
  padding: var(--sp-16) 0 var(--sp-20);
  background: var(--c-white);
  border-top: 1px solid var(--c-border);
`;

const CatalogueHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--sp-4);
  margin-bottom: var(--sp-6);
  flex-wrap: wrap;
`;

const CatalogueTitle = styled.h2`
  margin: var(--sp-1) 0 0;
  font-family: var(--f-display);
  font-weight: 700;
  font-size: clamp(1.5rem, 3vw, 1.9rem);
  color: var(--c-n900);
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-6);

  @media (max-width: 960px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
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

const SPONSORS = [
  { img: scholastic, name: "Scholastic" },
  { img: gallimard, name: "Librairie Gallimard" },
  { img: debrouillard, name: "Les Débrouillards" },
  { img: renojouets, name: "Fondation Réno-Jouets" },
];

// Highlights the last word of a translated title in the brand gradient —
// the one signature gesture (docs/DESIGN.md), never more than once per page.
function splitLastWord(text: string): [string, string] {
  const parts = text.trim().split(" ");
  const last = parts.pop() ?? "";
  return [parts.join(" "), last];
}

export const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const events = useEventData();
  const available = events.filter((e) => e.isAvailable);
  const upcoming = available.filter((e) => !e.isPast);
  const past = available.filter((e) => e.isPast).slice(0, 3);
  const nextEvent = upcoming[0];

  const scatterPhotos = [commonPic, ...available.map((e) => e.image)].slice(0, 6);
  // Corner-hugging positions only (left/right within ~2–14%) so photos never
  // cross into the centered title/text column — matches the reference image,
  // where the gallery frames the headline instead of covering it.
  const scatterLayout = [
    { left: "2%", top: "4%", width: 140, height: 170, delay: "0s" },
    { left: "6%", top: "64%", width: 110, height: 130, delay: "0.4s" },
    { right: "2%", top: "2%", width: 150, height: 120, delay: "0.8s" },
    { right: "3%", top: "40%", width: 160, height: 200, delay: "1.2s" },
    { left: "14%", top: "84%", width: 100, height: 100, delay: "1.6s" },
    { right: "13%", top: "80%", width: 110, height: 140, delay: "2s" },
  ];

  return (
    <>
      {/* ── 1 · Hero ── */}
      <HeroSection aria-labelledby="hero-heading">
        <ScatterWrap aria-hidden="true">
          {scatterPhotos.map((src, i) => {
            const pos = scatterLayout[i];
            if (!pos) return null;
            return (
              <FloatingPhoto
                key={i}
                style={{
                  left: pos.left,
                  right: pos.right,
                  top: pos.top,
                  width: pos.width,
                  height: pos.height,
                  animationDelay: pos.delay,
                }}
              >
                <img src={src} alt="" />
              </FloatingPhoto>
            );
          })}
        </ScatterWrap>

        <MobileScatterRow aria-hidden="true">
          {scatterPhotos.slice(0, 3).map((src, i) => (
            <MobileFloatingPhoto key={i}>
              <img src={src} alt="" />
            </MobileFloatingPhoto>
          ))}
        </MobileScatterRow>

        <Eyebrow>Cœurs Festifs · Montréal</Eyebrow>
        <HeroTitle id="hero-heading">
          {(() => {
            const [rest, last] = splitLastWord(t("homepage.title"));
            return (
              <>
                {rest} <GradientWord>{last}</GradientWord>
              </>
            );
          })()}
        </HeroTitle>
        <HeroText>{t("footer.desc")}</HeroText>
        <HeroCTAs>
          <BtnOutline onClick={() => navigate("/coeur-festifs/events")}>
            {t("homepage.explore")} <FaArrowRight aria-hidden="true" />
          </BtnOutline>
          <BtnGhost onClick={() => navigate("/coeur-festifs/about")}>
            {t("navBar.about")} →
          </BtnGhost>
        </HeroCTAs>
      </HeroSection>

      {/* ── 2 · Featured event ── */}
      {nextEvent && (
        <FeaturedSection aria-labelledby="featured-heading">
          <Inner>
            <FeaturedHeader>
              <FeaturedTag>{t("events.filterUpcoming")}</FeaturedTag>
              <FeaturedHeading id="featured-heading">{t("events.title")}</FeaturedHeading>
            </FeaturedHeader>
            <FeaturedEvent event={nextEvent} />
          </Inner>
        </FeaturedSection>
      )}

      {/* ── 3 · Intro ── */}
      <IntroSection aria-labelledby="intro-heading">
        <IntroInner>
          <IntroLeft>
            <SectionLabel id="intro-heading">{t("aboutUs.title")}</SectionLabel>
            <GhostTextBtn onClick={() => navigate("/coeur-festifs/about")}>
              {t("navBar.about")} →
            </GhostTextBtn>
          </IntroLeft>
          <IntroBody>{t("aboutUs.desc")}</IntroBody>
        </IntroInner>
      </IntroSection>

      {/* ── 4 · Trust ── */}
      <TrustSection aria-labelledby="trust-heading">
        <Inner>
          <SectionLabel id="trust-heading" style={{ display: "block", marginBottom: "var(--sp-5)" }}>
            {t("events.partner")}
          </SectionLabel>
        </Inner>
        <PartnersMarquee logos={[...PARTNERS, ...SPONSORS]} />
      </TrustSection>

      {/* ── 5 · Past events preview ── */}
      {past.length > 0 && (
        <CatalogueSection aria-labelledby="catalogue-heading">
          <Inner>
            <CatalogueHeader>
              <div>
                <SectionLabel>{t("events.title")}</SectionLabel>
                <CatalogueTitle id="catalogue-heading">{t("events.subtitle")}</CatalogueTitle>
              </div>
              <GhostTextBtn onClick={() => navigate("/coeur-festifs/events")}>
                {t("navBar.events")} →
              </GhostTextBtn>
            </CatalogueHeader>
            <CardsGrid>
              {past.map((ev, i) => (
                <EventCard key={ev.id} event={ev} index={i} />
              ))}
            </CardsGrid>
          </Inner>
        </CatalogueSection>
      )}
    </>
  );
};
