import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import { useEventData } from "../data/events";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { FeaturedEvent } from "../components/FeaturedEvent";
import { EventCard } from "../components/EventCard";
import backgroundVideo from "../assets/backgroundVideo.mp4";
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

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ═══════════════════════════════════════════════════════
   1 · HERO — featured next event, or a video hero fallback
═══════════════════════════════════════════════════════ */

const FeaturedHeroSection = styled.section`
  padding: 108px var(--sp-12) var(--sp-12);
  background: var(--c-cream);

  @media (max-width: 768px) { padding: 96px var(--sp-6) var(--sp-8); }
`;

const VideoHero = styled.section`
  position: relative;
  height: 88dvh;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  padding-top: 78px;
  box-sizing: border-box;
`;

const HeroBg = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  pointer-events: none;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to top,
    rgba(180, 18, 28, 0.85) 0%,
    rgba(40, 10, 10, 0.5) 45%,
    rgba(0, 0, 0, 0.15) 100%
  );
`;

const HeroContent = styled(Inner)`
  position: relative;
  z-index: 2;
  padding-bottom: var(--sp-10);
  width: 100%;
  box-sizing: border-box;
`;

const VideoHeroTitle = styled.h1`
  font-family: var(--f-display);
  font-size: clamp(2.4rem, 6vw, 4rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  margin: 0 0 var(--sp-4);
  max-width: 680px;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.3);
  animation: ${fadeUp} 0.7s var(--ease-out) both;
`;

const VideoHeroText = styled.p`
  font-family: var(--f-body);
  font-weight: 500;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 480px;
  margin: 0 0 var(--sp-6);
  line-height: 1.6;
  animation: ${fadeUp} 0.7s var(--ease-out) 0.1s both;
`;

const VideoHeroCTAs = styled.div`
  display: flex;
  gap: var(--sp-3);
  flex-wrap: wrap;
  animation: ${fadeUp} 0.7s var(--ease-out) 0.2s both;
`;

const BtnPrimary = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  background: var(--c-white);
  color: var(--c-primary);
  border: none;
  font-family: var(--f-body);
  font-size: 0.95rem;
  font-weight: 800;
  padding: 13px 28px;
  border-radius: var(--r-full);
  cursor: pointer;
  min-height: 48px;
  box-shadow: var(--sh-md);
  transition: transform 200ms var(--ease-spring), box-shadow 200ms ease;

  &:hover { transform: translateY(-2px) scale(1.02); box-shadow: var(--sh-lg); }
  &:active { transform: scale(0.98); }
`;

const BtnGhost = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  background: transparent;
  color: var(--c-white);
  border: 2px solid rgba(255, 255, 255, 0.55);
  font-family: var(--f-body);
  font-size: 0.95rem;
  font-weight: 700;
  padding: 11px 26px;
  border-radius: var(--r-full);
  cursor: pointer;
  min-height: 48px;
  transition: background 150ms ease, border-color 150ms ease;

  &:hover { background: rgba(255, 255, 255, 0.12); border-color: rgba(255, 255, 255, 0.8); }
`;

/* ═══════════════════════════════════════════════════════
   2 · INTRO (two columns)
═══════════════════════════════════════════════════════ */

const IntroSection = styled.section`
  border-top: 1px solid var(--c-border);
  padding: var(--sp-16) 0;
  background: var(--c-white);
`;

const IntroInner = styled(Inner)`
  display: flex;
  gap: var(--sp-6);

  @media (max-width: 768px) { flex-direction: column; }
`;

const IntroLeft = styled.div`
  width: 260px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
`;

const IntroLabel = styled.span`
  font-family: var(--f-body);
  font-weight: 800;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-primary);
`;

const IntroGhostLink = styled.button`
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
   3 · TRUST GRID (animated)
═══════════════════════════════════════════════════════ */

const TrustSection = styled.section`
  padding: var(--sp-16) 0;
  background: var(--c-n50);
`;

const SectionHeader = styled.div`
  margin-bottom: var(--sp-6);
`;

const SectionTitle = styled.h2`
  font-family: var(--f-display);
  font-size: clamp(1.6rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--c-n900);
  margin: var(--sp-1) 0 0;
`;

const TrustGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--sp-4);

  @media (max-width: 900px) { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 560px) { grid-template-columns: repeat(2, 1fr); gap: var(--sp-3); }
`;

const cellIn = keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const TrustCell = styled.div<{ visible: boolean; delay: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--sp-6) var(--sp-5);
  background: var(--c-white);
  border: 1.5px solid var(--c-n200);
  border-radius: var(--r-lg);
  opacity: ${(p) => (p.visible ? 1 : 0)};
  animation: ${(p) => (p.visible ? cellIn : "none")} 450ms var(--ease-spring) ${(p) => p.delay}ms both;
  transition: transform 220ms var(--ease-spring), box-shadow 220ms ease, border-color 220ms ease;

  img {
    max-width: 100%;
    max-height: 56px;
    object-fit: contain;
    filter: grayscale(1) opacity(0.65);
    transition: filter 250ms ease, transform 250ms ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 8px 24px rgba(230, 57, 70, 0.14);
    border-color: var(--c-primary);
  }

  &:hover img {
    filter: grayscale(0) opacity(1);
    transform: scale(1.06);
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;

const TrustCellRevealer: React.FC<{ delay: number; children: React.ReactNode }> = ({ delay, children }) => {
  const [ref, visible] = useRevealOnScroll<HTMLDivElement>();
  return (
    <TrustCell ref={ref} visible={visible} delay={delay}>
      {children}
    </TrustCell>
  );
};

/* ═══════════════════════════════════════════════════════
   4 · PAST EVENTS PREVIEW (photo cards)
═══════════════════════════════════════════════════════ */

const CatalogueSection = styled.section`
  padding: var(--sp-16) 0 var(--sp-20);
  background: var(--c-white);
`;

const CatalogueHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--sp-4);
  margin-bottom: var(--sp-6);
  flex-wrap: wrap;
`;

const ViewAllLink = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 0.88rem;
  color: var(--c-primary);
  cursor: pointer;
  padding: 0;
  transition: gap 150ms ease;

  &:hover { gap: 10px; }
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

export const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const events = useEventData();
  const available = events.filter((e) => e.isAvailable);
  const upcoming = available.filter((e) => !e.isPast);
  const past = available.filter((e) => e.isPast).slice(0, 3);
  const nextEvent = upcoming[0];

  return (
    <>
      {/* ── 1 · Hero ── */}
      {nextEvent ? (
        <FeaturedHeroSection aria-labelledby="hero-heading">
          <Inner>
            <SectionHeader>
              <IntroLabel>{t("homepage.title")}</IntroLabel>
              <SectionTitle id="hero-heading">{t("events.filterUpcoming")}</SectionTitle>
            </SectionHeader>
            <FeaturedEvent event={nextEvent} />
          </Inner>
        </FeaturedHeroSection>
      ) : (
        <VideoHero aria-labelledby="hero-heading">
          <HeroBg autoPlay loop muted playsInline aria-hidden="true">
            <source src={backgroundVideo} type="video/mp4" />
          </HeroBg>
          <HeroOverlay aria-hidden="true" />
          <HeroContent>
            <VideoHeroTitle id="hero-heading">{t("homepage.title")}</VideoHeroTitle>
            <VideoHeroText>{t("footer.desc")}</VideoHeroText>
            <VideoHeroCTAs>
              <BtnPrimary onClick={() => navigate("/coeur-festifs/events")}>
                {t("homepage.explore")} <FaArrowRight aria-hidden="true" />
              </BtnPrimary>
              <BtnGhost onClick={() => navigate("/coeur-festifs/about")}>
                {t("navBar.about")}
              </BtnGhost>
            </VideoHeroCTAs>
          </HeroContent>
        </VideoHero>
      )}

      {/* ── 2 · Intro ── */}
      <IntroSection aria-labelledby="intro-heading">
        <IntroInner>
          <IntroLeft>
            <IntroLabel id="intro-heading">{t("aboutUs.title")}</IntroLabel>
            <IntroGhostLink onClick={() => navigate("/coeur-festifs/about")}>
              {t("navBar.about")} →
            </IntroGhostLink>
          </IntroLeft>
          <IntroBody>{t("aboutUs.desc")}</IntroBody>
        </IntroInner>
      </IntroSection>

      {/* ── 3 · Trust grid ── */}
      <TrustSection aria-labelledby="trust-heading">
        <Inner>
          <SectionHeader>
            <IntroLabel>{t("aboutUs.valuesTitle")}</IntroLabel>
            <SectionTitle id="trust-heading">{t("homepage.partnershipTitle")}</SectionTitle>
          </SectionHeader>
          <TrustGrid>
            {PARTNERS.map((p, i) => (
              <TrustCellRevealer key={p.name} delay={i * 50}>
                <img src={p.img} alt={p.name} loading="lazy" />
              </TrustCellRevealer>
            ))}
          </TrustGrid>
        </Inner>
      </TrustSection>

      {/* ── 4 · Past events preview ── */}
      {past.length > 0 && (
        <CatalogueSection aria-labelledby="catalogue-heading">
          <Inner>
            <CatalogueHeader>
              <div>
                <IntroLabel>{t("events.title")}</IntroLabel>
                <SectionTitle id="catalogue-heading">{t("events.subtitle")}</SectionTitle>
              </div>
              <ViewAllLink onClick={() => navigate("/coeur-festifs/events")}>
                {t("navBar.events")} <FaArrowRight aria-hidden="true" />
              </ViewAllLink>
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
