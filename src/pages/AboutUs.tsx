import React from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import Clara   from "../assets/Clara.jpg";
import Ariane  from "../assets/Ariane.jpeg";
import commonPic from "../assets/commonPic.jpg";

/* ── Animations ────────────────────────────────────────────── */

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(.94); }
  to   { opacity: 1; transform: scale(1); }
`;

/* ── Shared layout ─────────────────────────────────────────── */

const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 68px; /* navbar height */
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--sp-12);

  @media (max-width: 768px) { padding: 0 var(--sp-6); }
`;

/* ═══════════════════════════════════════════════════════
   1 · PAGE HEADER
═══════════════════════════════════════════════════════ */

const HeaderSection = styled.section`
  padding: var(--sp-20) 0 var(--sp-16);
  background: var(--c-white);
  border-bottom: 1.5px solid var(--c-n100);

  @media (max-width: 768px) { padding: var(--sp-10) 0 var(--sp-8); }
`;

const HeaderInner = styled(Inner)`
  display: flex;
  flex-direction: column;
  gap: var(--sp-4);
  max-width: 760px;
`;

const Eyebrow = styled.p`
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--c-primary);
  text-transform: uppercase;
  letter-spacing: .12em;
  animation: ${fadeUp} .5s var(--ease-out) both;
`;

const PageTitle = styled.h1`
  font-family: var(--f-display);
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  font-weight: 700;
  color: var(--c-n900);
  line-height: 1.1;
  animation: ${fadeUp} .6s var(--ease-out) .08s both;
`;

const PageDesc = styled.p`
  font-size: clamp(.95rem, 2vw, 1.05rem);
  font-weight: 500;
  color: var(--c-n600);
  line-height: 1.8;
  animation: ${fadeUp} .6s var(--ease-out) .16s both;
`;

/* ═══════════════════════════════════════════════════════
   2 · IMPACT STATS
═══════════════════════════════════════════════════════ */

const StatsSection = styled.section`
  padding: var(--sp-16) 0;
  background: var(--c-primary);
`;

const StatsGrid = styled(Inner)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--sp-8) var(--sp-6);
  animation: ${scaleIn} .5s var(--ease-out) both;

  &:nth-child(1) { animation-delay: .05s; }
  &:nth-child(2) { animation-delay: .12s; }
  &:nth-child(3) { animation-delay: .19s; }

  @media (max-width: 560px) { padding: var(--sp-6) var(--sp-2); }
`;

const StatNum = styled.div`
  font-family: var(--f-display);
  font-size: clamp(2.4rem, 6vw, 4rem);
  font-weight: 700;
  color: var(--c-white);
  line-height: 1;
  margin-bottom: var(--sp-2);

  @media (max-width: 560px) { font-size: 1.9rem; }
`;

const StatLabel = styled.div`
  font-size: .8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: rgba(255,255,255,.65);

  @media (max-width: 560px) {
    font-size: 0.65rem;
    letter-spacing: 0.04em;
  }
`;

/* ═══════════════════════════════════════════════════════
   3 · TEAM
═══════════════════════════════════════════════════════ */

const TeamSection = styled.section`
  padding: var(--sp-20) 0;
  background: var(--c-n50);

  @media (max-width: 768px) { padding: var(--sp-12) 0; }
`;

const TeamInner = styled(Inner)`
  display: flex;
  flex-direction: column;
  gap: var(--sp-12);

  @media (max-width: 768px) { gap: var(--sp-8); }
`;

const SectionLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--c-primary);
  text-transform: uppercase;
  letter-spacing: .12em;
  margin-bottom: var(--sp-2);
`;

const SectionHeading = styled.h2`
  font-family: var(--f-display);
  font-size: clamp(1.8rem, 3.5vw, 2.4rem);
  font-weight: 700;
  color: var(--c-n900);
  line-height: 1.15;
  margin-bottom: var(--sp-8);
`;

const GroupPhoto = styled.div`
  width: 100%;
  border-radius: var(--r-xl);
  overflow: hidden;
  box-shadow: var(--sh-lg);
  border: 2px solid var(--c-white);

  img {
    width: 100%;
    height: 800px;
    object-fit: cover;
    object-position: top center;
    display: block;
    transition: transform .4s ease;
  }

  &:hover img { transform: scale(1.03); }

  @media (max-width: 768px) { img { height: 260px; } }
`;

const PresidentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--sp-6);

  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;

const PresidentCard = styled.div`
  background: var(--c-white);
  border-radius: var(--r-lg);
  overflow: hidden;
  border: 1.5px solid var(--c-n200);
  box-shadow: var(--sh-xs);
  transition: transform 220ms var(--ease-spring), box-shadow 220ms ease;
  animation: ${scaleIn} .5s var(--ease-out) both;

  &:nth-child(1) { animation-delay: .05s; }
  &:nth-child(2) { animation-delay: .14s; }

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--sh-md);
  }

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform .4s ease;
  }

  &:hover img { transform: scale(1.03); }

  @media (max-width: 560px) { img { height: 62vw; } }
`;

const PresidentInfo = styled.div`
  padding: var(--sp-4) var(--sp-5) var(--sp-5);
`;

const PresidentName = styled.h3`
  font-family: var(--f-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--c-n900);
  margin: 0 0 4px;
`;

const PresidentRole = styled.p`
  font-size: .78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .09em;
  color: var(--c-primary);
  margin: 0;
`;

const VolunteerBanner = styled.div`
  background: var(--c-primary-surface);
  border-left: 4px solid var(--c-primary);
  border-radius: var(--r-md);
  padding: var(--sp-6) var(--sp-8);

  p {
    font-size: 1rem;
    font-weight: 500;
    font-style: italic;
    color: var(--c-n800);
    line-height: 1.75;
    margin: 0;
  }

  @media (max-width: 768px) { padding: var(--sp-5) var(--sp-5); }
`;

/* ═══════════════════════════════════════════════════════
   4 · VALUES
═══════════════════════════════════════════════════════ */

const ValuesSection = styled.section`
  padding: var(--sp-20) 0;
  background: var(--c-white);

  @media (max-width: 768px) { padding: var(--sp-12) 0; }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-6);

  @media (max-width: 900px) { grid-template-columns: 1fr; gap: var(--sp-4); }
`;

interface VCardProps { accent: string; }

const ValueCard = styled.div<VCardProps>`
  padding: var(--sp-8) var(--sp-6);
  background: var(--c-n50);
  border-radius: var(--r-lg);
  border: 1.5px solid var(--c-n200);
  border-top: 4px solid ${p => p.accent};
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
  animation: ${fadeUp} .6s var(--ease-out) both;
  transition: box-shadow 200ms ease, transform 200ms var(--ease-spring);

  &:nth-child(1) { animation-delay: .05s; }
  &:nth-child(2) { animation-delay: .13s; }
  &:nth-child(3) { animation-delay: .21s; }

  &:hover {
    box-shadow: var(--sh-md);
    transform: translateY(-3px);
  }
`;

const ValueIcon = styled.div<{ accent: string }>`
  width: 48px;
  height: 48px;
  border-radius: var(--r-md);
  background: ${p => p.accent}18;
  color: ${p => p.accent};
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ValueTitle = styled.h3`
  font-family: var(--f-display);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--c-n900);
  margin: 0;
`;

const ValueText = styled.p`
  font-size: .9rem;
  font-weight: 500;
  color: var(--c-n600);
  line-height: 1.7;
  margin: 0;
`;

/* ═══════════════════════════════════════════════════════
   5 · MISSION & VALUES TEXT
═══════════════════════════════════════════════════════ */

const MissionSection = styled.section`
  padding: var(--sp-20) 0;
  background: var(--c-n50);
  border-top: 1.5px solid var(--c-n100);

  @media (max-width: 768px) { padding: var(--sp-12) 0; }
`;

const MissionGrid = styled(Inner)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--sp-6);

  @media (max-width: 768px) { grid-template-columns: 1fr; gap: var(--sp-4); }
`;

const MissionCard = styled.div`
  background: var(--c-white);
  border-radius: var(--r-lg);
  padding: var(--sp-8);
  border: 1.5px solid var(--c-n200);
  border-left: 4px solid var(--c-primary);
  display: flex;
  flex-direction: column;
  gap: var(--sp-4);
  animation: ${fadeUp} .6s var(--ease-out) both;

  &:nth-child(2) {
    border-left-color: var(--c-accent-blue);
    animation-delay: .12s;
  }

  @media (max-width: 768px) { padding: var(--sp-6); }
`;

const MissionTitle = styled.h2`
  font-family: var(--f-display);
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: 700;
  color: var(--c-n900);
  margin: 0;
`;

const MissionText = styled.p`
  font-size: .95rem;
  font-weight: 500;
  color: var(--c-n600);
  line-height: 1.8;
  margin: 0;
`;

/* ═══════════════════════════════════════════════════════
   Component
═══════════════════════════════════════════════════════ */

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {/* ── 1 · Header ── */}
      <HeaderSection id="about">
        <HeaderInner>
          <Eyebrow>Coeurs Festifs</Eyebrow>
          <PageTitle>{t("aboutUs.title")}</PageTitle>
          <PageDesc>{t("aboutUs.desc")}</PageDesc>
        </HeaderInner>
      </HeaderSection>

      {/* ── 2 · Stats ── */}
      <StatsSection aria-label="Chiffres clés">
        <StatsGrid>
          <StatItem>
            <StatNum>36</StatNum>
            <StatLabel>{t("homepage.stats.volunteers")}</StatLabel>
          </StatItem>
          <StatItem>
            <StatNum>9+</StatNum>
            <StatLabel>{t("homepage.stats.events")}</StatLabel>
          </StatItem>
          <StatItem>
            <StatNum>8+</StatNum>
            <StatLabel>{t("homepage.stats.partners")}</StatLabel>
          </StatItem>
        </StatsGrid>
      </StatsSection>

      {/* ── 3 · Team ── */}
      <TeamSection id="team">
        <TeamInner>
          <div>
            <SectionLabel>{t("aboutUs.teamLabel")}</SectionLabel>
            <SectionHeading>{t("aboutUs.presidentsTitle")}</SectionHeading>
          </div>

          <GroupPhoto>
            <img src={commonPic} alt="L'équipe Coeurs Festifs" />
          </GroupPhoto>

          <PresidentsGrid>
            <PresidentCard>
              <img src={Ariane} alt="Ariane Manekeng Guimfack" />
              <PresidentInfo>
                <PresidentName>Ariane Manekeng Guimfack</PresidentName>
                <PresidentRole>{t("aboutUs.presidentsText")}</PresidentRole>
              </PresidentInfo>
            </PresidentCard>

            <PresidentCard>
              <img src={Clara} alt="Clara Maria Bridi" />
              <PresidentInfo>
                <PresidentName>Clara Maria Bridi</PresidentName>
                <PresidentRole>{t("aboutUs.presidentsText")}</PresidentRole>
              </PresidentInfo>
            </PresidentCard>
          </PresidentsGrid>

          <VolunteerBanner>
            <p>{t("aboutUs.benevoleText")}</p>
          </VolunteerBanner>
        </TeamInner>
      </TeamSection>

      {/* ── 4 · Values ── */}
      <ValuesSection id="values">
        <Inner>
          <SectionLabel>Ce qui nous guide</SectionLabel>
          <SectionHeading>{t("aboutUs.valuesTitle")}</SectionHeading>
          <ValuesGrid>
            <ValueCard accent="#e63946">
              <ValueIcon accent="#e63946">❤️</ValueIcon>
              <ValueTitle>Compassion</ValueTitle>
              <ValueText>Nous plaçons le bien-être et les besoins des enfants au cœur de chacune de nos actions.</ValueText>
            </ValueCard>
            <ValueCard accent="#4361ee">
              <ValueIcon accent="#4361ee">🤝</ValueIcon>
              <ValueTitle>Communauté</ValueTitle>
              <ValueText>Nous croyons à la force du collectif pour créer des changements durables et positifs.</ValueText>
            </ValueCard>
            <ValueCard accent="#f97316">
              <ValueIcon accent="#f97316">✨</ValueIcon>
              <ValueTitle>Inclusion</ValueTitle>
              <ValueText>Chaque enfant mérite d'être pleinement inclus, célébré et soutenu sans exception.</ValueText>
            </ValueCard>
          </ValuesGrid>
        </Inner>
      </ValuesSection>

      {/* ── 5 · Mission text ── */}
      <MissionSection id="mission">
        <MissionGrid>
          <MissionCard>
            <MissionTitle>{t("aboutUs.missionTitle")}</MissionTitle>
            <MissionText>{t("aboutUs.missionText")}</MissionText>
          </MissionCard>
          <MissionCard>
            <MissionTitle>{t("aboutUs.valuesTitle")}</MissionTitle>
            <MissionText>{t("aboutUs.valuesText")}</MissionText>
          </MissionCard>
        </MissionGrid>
      </MissionSection>
    </Page>
  );
};
