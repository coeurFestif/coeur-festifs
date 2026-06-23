import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.png";
import backgroundVideo from "../assets/backgroundVideo.mp4";
import { useEventData } from "../data/events";
import carrefour from "../assets/CJE.jpg";
import repit from "../assets/repitProvidence.png";
import promis from "../assets/promis.png";
import maisonCulture from "../assets/maisonCulture.png";
import fondationDrJulien from "../assets/fondationDrJulien.png";
import mountainSights from "../assets/mountainSights.png";
import garageMusique from "../assets/garageMusique.png";
import minimolars from "../assets/minimolars.png";

/* ── Animations ────────────────────────────────────────────── */

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(.94); }
  to   { opacity: 1; transform: scale(1); }
`;

/* ── Utility ───────────────────────────────────────────────── */

const Section = styled.section`
  width: 100%;
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--sp-12);

  @media (max-width: 768px) {
    padding: 0 var(--sp-6);
  }
`;

/* ═══════════════════════════════════════════════════════
   1 · HERO
═══════════════════════════════════════════════════════ */

const HeroSection = styled(Section)`
  position: relative;
  height: 100dvh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  padding-top: 68px;
  box-sizing: border-box;
  background: linear-gradient(to top, rgba(180,18,28,.9) 0%, rgba(20,10,10,.6) 100%);
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
    rgba(40, 10, 10, 0.55) 45%,
    rgba(0, 0, 0, 0.18) 100%
  );
`;

const HeroContent = styled(Inner)`
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: var(--sp-8);
  min-height: 0;
  width: 100%;

  @media (max-width: 768px) {
    padding-bottom: var(--sp-6);
  }
`;

const HeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: var(--c-white);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: var(--r-full);
  margin-bottom: var(--sp-5);
  animation: ${fadeUp} 0.6s var(--ease-out) 0.1s both;
  width: fit-content;
`;

const HeroTitle = styled.h1`
  font-family: var(--f-display);
  font-size: clamp(2.6rem, 6vw, 4.4rem);
  font-weight: 700;
  color: var(--c-white);
  line-height: 1.1;
  margin-bottom: var(--sp-5);
  max-width: 720px;
  animation: ${fadeUp} 0.7s var(--ease-out) 0.2s both;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.3);
`;


const HeroCTAs = styled.div`
  display: flex;
  gap: var(--sp-3);
  flex-wrap: wrap;
  animation: ${fadeUp} 0.7s var(--ease-out) 0.42s both;
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
  transition:
    transform 200ms var(--ease-spring),
    box-shadow 200ms ease;

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: var(--sh-lg);
  }
  &:active {
    transform: scale(0.98);
  }
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
  transition:
    background 150ms ease,
    border-color 150ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.8);
  }
`;

/* Stats bar */
const StatsBar = styled.div`
  flex-shrink: 0;
  z-index: 2;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  width: 100%;
  overflow: hidden;
`;

const StatsInner = styled(Inner)`
  display: flex;
  padding-top: var(--sp-5);
  padding-bottom: var(--sp-5);
  gap: 0;
  box-sizing: border-box;

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Stat = styled.div`
  flex: 1;
  text-align: center;
  color: var(--c-white);
  padding: var(--sp-3) var(--sp-2);
  border-right: 1px solid rgba(255, 255, 255, 0.2);

  &:last-child { border-right: none; }

  @media (max-width: 480px) {
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    &:nth-child(2) { border-right: none; }
    &:nth-child(3) { border-bottom: none; }
    &:nth-child(4) { border-right: none; border-bottom: none; }
  }
`;

const StatNum = styled.div`
  font-family: var(--f-display);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  line-height: 1;
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: clamp(0.7rem, 2vw, 1rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.7;
`;

/* ═══════════════════════════════════════════════════════
   2 · MISSION QUOTE
═══════════════════════════════════════════════════════ */

const MissionSection = styled(Section)`
  padding: var(--sp-20) 0;
  background: var(--c-white);
`;

const MissionInner = styled(Inner)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--sp-5);
`;

const QuoteMark = styled.div`
  font-family: var(--f-display);
  font-size: 5rem;
  line-height: 0.6;
  color: var(--c-primary);
  opacity: 0.2;
  user-select: none;
`;

const MissionQuote = styled.blockquote`
  font-family: var(--f-display);
  font-size: clamp(1.6rem, 3.5vw, 2.6rem);
  font-weight: 700;
  color: var(--c-n900);
  line-height: 1.25;
  max-width: 860px;
  border: none;
  padding: 0;
`;

const MissionSub = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: var(--c-n600);
  max-width: 600px;
  line-height: 1.7;
`;

/* ═══════════════════════════════════════════════════════
   3 · EVENTS PREVIEW
═══════════════════════════════════════════════════════ */

const EventsSection = styled(Section)`
  padding: var(--sp-20) 0;
  background: var(--c-n50);
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: var(--sp-8);
  gap: var(--sp-4);
  flex-wrap: wrap;
`;

const SectionEyebrow = styled.p`
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--c-primary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: var(--sp-2);
`;

const SectionTitle = styled.h2`
  font-family: var(--f-display);
  font-size: clamp(1.8rem, 3.5vw, 2.4rem);
  font-weight: 700;
  color: var(--c-n900);
  line-height: 1.15;
`;

const SeeAllBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  font-family: var(--f-body);
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--c-primary);
  cursor: pointer;
  padding: 0;
  white-space: nowrap;
  transition: gap 150ms ease;

  &:hover {
    gap: 10px;
  }
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-6);

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const CARD_ACCENTS = ["#e63946", "#4361ee", "#f97316"];

interface ECardProps {
  accent: string;
}

const EventCard = styled.article<ECardProps>`
  background: var(--c-white);
  border-radius: var(--r-lg);
  border: 1.5px solid var(--c-n200);
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 220ms var(--ease-spring),
    box-shadow 220ms ease,
    border-color 200ms ease;
  animation: ${scaleIn} 0.5s var(--ease-out) both;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--sh-lg);
    border-color: ${(p) => p.accent}44;
  }

  &:nth-child(1) {
    animation-delay: 0.05s;
  }
  &:nth-child(2) {
    animation-delay: 0.12s;
  }
  &:nth-child(3) {
    animation-delay: 0.19s;
  }

  .img-wrap {
    position: relative;
    height: 190px;
    overflow: hidden;
    background: var(--c-n100);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.4s ease;
    }
  }

  &:hover .img-wrap img {
    transform: scale(1.05);
  }

  .date-pill {
    position: absolute;
    bottom: 10px;
    left: 12px;
    background: var(--c-white);
    border-radius: var(--r-sm);
    padding: 5px 10px;
    font-size: 0.72rem;
    font-weight: 800;
    color: ${(p) => p.accent};
    box-shadow: var(--sh-sm);
    max-width: calc(100% - 24px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .body {
    padding: var(--sp-5) var(--sp-5) var(--sp-6);
    display: flex;
    flex-direction: column;
    gap: var(--sp-3);
  }

  h3 {
    font-family: var(--f-display);
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--c-n900);
    line-height: 1.25;
    margin: 0;
  }
`;

const EventMeta = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--c-n600);

  svg {
    color: var(--c-primary);
    flex-shrink: 0;
    margin-top: 2px;
    font-size: 0.8rem;
  }
`;

const CardLink = styled.div<{ accent: string }>`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.82rem;
  font-weight: 700;
  color: ${(p) => p.accent};
  margin-top: var(--sp-1);
  transition: gap 150ms ease;

  article:hover & {
    gap: 9px;
  }
`;

/* ═══════════════════════════════════════════════════════
   4 · PARTNERS
═══════════════════════════════════════════════════════ */

const PartnersSection = styled(Section)`
  padding: var(--sp-20) 0;
  background: var(--c-white);
`;

const PartnerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--sp-4);

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--sp-3);
  }
`;

const PartnerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--sp-3);
  padding: var(--sp-6) var(--sp-5);
  background: var(--c-n50);
  border: 1.5px solid var(--c-n200);
  border-radius: var(--r-lg);
  transition:
    border-color 200ms ease,
    box-shadow 200ms ease,
    transform 200ms var(--ease-spring);

  &:hover {
    border-color: var(--c-primary);
    box-shadow: 0 4px 20px rgba(230, 57, 70, 0.12);
    transform: translateY(-3px);
  }
`;

const PartnerLogo = styled.div`
  width: 72px;
  height: 72px;
  border-radius: var(--r-full);
  background: var(--c-white);
  border: 1.5px solid var(--c-n200);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;

const PartnerName = styled.p`
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--c-n800);
  text-align: center;
  line-height: 1.35;
  margin: 0;
`;

/* ═══════════════════════════════════════════════════════
   Component
═══════════════════════════════════════════════════════ */

const PARTNERS = [
  { img: carrefour, name: "Carrefour Jeunesse Emploi CDN–Outremont–VMR" },
  { img: repit, name: "Répit Providence" },
  { img: mountainSights, name: "Centre communautaire Mountain Sights" },
  { img: promis, name: "PROMIS" },
  { img: maisonCulture, name: "Maison de la culture CDN" },
  { img: fondationDrJulien, name: "Fondation du Dr Julien" },
  { img: garageMusique, name: "Garage à Musique" },
  { img: minimolars, name: "Mini Molars Club" },
];

export const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const events = useEventData();
  const preview = events.filter((e) => e.isAvailable).slice(0, 3);

  return (
    <>
      {/* ── 1 · Hero ── */}
      <HeroSection aria-labelledby="hero-heading">
        <HeroBg autoPlay loop muted playsInline aria-hidden="true">
          <source src={backgroundVideo} type="video/mp4" />
        </HeroBg>
        <HeroOverlay aria-hidden="true" />

        <HeroContent>
          <HeroBadge>
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            Coeurs Festifs
          </HeroBadge>
          <HeroTitle id="hero-heading">{t("homepage.title")}</HeroTitle>
          <HeroCTAs>
            <BtnPrimary onClick={() => navigate("/coeur-festifs/events")}>
              {t("homepage.explore")} <FaArrowRight aria-hidden="true" />
            </BtnPrimary>
            <BtnGhost onClick={() => navigate("/coeur-festifs/about")}>
              {t("navBar.about")}
            </BtnGhost>
          </HeroCTAs>
        </HeroContent>

        <StatsBar aria-label="Chiffres clés">
          <StatsInner>
            <Stat>
              <StatNum>36</StatNum>
              <StatLabel>{t("homepage.stats.volunteers")}</StatLabel>
            </Stat>
            <Stat>
              <StatNum>9+</StatNum>
              <StatLabel>{t("homepage.stats.events")}</StatLabel>
            </Stat>
            <Stat>
              <StatNum>8+</StatNum>
              <StatLabel>{t("homepage.stats.partners")}</StatLabel>
            </Stat>
            <Stat>
              <StatNum>2</StatNum>
              <StatLabel>{t("homepage.stats.founders")}</StatLabel>
            </Stat>
          </StatsInner>
        </StatsBar>
      </HeroSection>

      {/* ── 2 · Mission ── */}
      <MissionSection aria-labelledby="mission-heading">
        <MissionInner>
          <QuoteMark aria-hidden="true">"</QuoteMark>
          <MissionQuote id="mission-heading">
            {t("aboutUs.missionTitle")}
          </MissionQuote>
          <MissionSub>{t("aboutUs.benevoleText")}</MissionSub>
        </MissionInner>
      </MissionSection>

      {/* ── 3 · Events preview ── */}
      {preview.length > 0 && (
        <EventsSection aria-labelledby="events-heading">
          <Inner>
            <SectionHeader>
              <div>
                <SectionEyebrow>Coeurs Festifs</SectionEyebrow>
                <SectionTitle id="events-heading">
                  {t("events.title")}
                </SectionTitle>
              </div>
              <SeeAllBtn onClick={() => navigate("/coeur-festifs/events")}>
                {t("events.viewDetails") ? t("navBar.events") : "Voir tout"}{" "}
                <FaArrowRight aria-hidden="true" />
              </SeeAllBtn>
            </SectionHeader>

            <EventsGrid>
              {preview.map((ev, i) => {
                const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
                return (
                  <EventCard
                    key={ev.id}
                    accent={accent}
                    onClick={() => navigate(`/coeur-festifs/event/${ev.id}`)}
                    role="article"
                    tabIndex={0}
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      navigate(`/coeur-festifs/event/${ev.id}`)
                    }
                  >
                    <div className="img-wrap">
                      <img src={ev.image} alt={ev.title} loading="lazy" />
                      {ev.date && <div className="date-pill">📅 {ev.date}</div>}
                    </div>
                    <div className="body">
                      <h3>{ev.title}</h3>
                      {ev.location && (
                        <EventMeta>
                          <FaMapMarkerAlt aria-hidden="true" />
                          <span>{ev.location}</span>
                        </EventMeta>
                      )}
                      <CardLink accent={accent}>
                        Voir les détails <FaArrowRight aria-hidden="true" />
                      </CardLink>
                    </div>
                  </EventCard>
                );
              })}
            </EventsGrid>
          </Inner>
        </EventsSection>
      )}

      {/* ── 4 · Partners ── */}
      <PartnersSection aria-labelledby="partners-heading">
        <Inner>
          <SectionHeader>
            <div>
              <SectionEyebrow>Ensemble</SectionEyebrow>
              <SectionTitle id="partners-heading">
                {t("homepage.partnershipTitle") || "Nos Partenaires"}
              </SectionTitle>
            </div>
          </SectionHeader>
          <PartnerGrid>
            {PARTNERS.map((p, i) => (
              <PartnerCard key={i}>
                <PartnerLogo>
                  <img src={p.img} alt={p.name} loading="lazy" />
                </PartnerLogo>
                <PartnerName>{p.name}</PartnerName>
              </PartnerCard>
            ))}
          </PartnerGrid>
        </Inner>
      </PartnersSection>
    </>
  );
};
