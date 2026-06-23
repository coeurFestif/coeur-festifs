import React from "react";
import styled, { keyframes } from "styled-components";
import { useEventData } from "../data/events";
import { Event } from "../schema/event";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaMapMarkerAlt,
  FaInstagram,
  FaEnvelope,
  FaArrowRight,
  FaFacebook,
  FaLinkedin,
  FaCheckCircle,
} from "react-icons/fa";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.94); }
  to   { opacity: 1; transform: scale(1); }
`;

/* ── Page shell ────────────────────────────────────────────── */

const Page = styled.div`
  min-height: 100dvh;
  background: var(--c-cream);
  display: flex;
  flex-direction: column;
  padding-top: 68px;
`;

const PageHeader = styled.header`
  padding: var(--sp-12) var(--sp-12) var(--sp-10);
  background: var(--c-white);
  border-bottom: 1.5px solid var(--c-n100);
  text-align: center;
  animation: ${fadeUp} 0.6s var(--ease-out) both;

  @media (max-width: 768px) {
    padding: var(--sp-8) var(--sp-6) var(--sp-6);
  }
`;

const Eyebrow = styled.p`
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--c-primary);
  margin: 0 0 var(--sp-2);
`;

const PageTitle = styled.h1`
  font-family: var(--f-display);
  font-size: clamp(2.4rem, 5vw, 3rem);
  font-weight: 700;
  color: var(--c-n900);
  margin: 0 0 var(--sp-2);
  line-height: 1.1;
`;

const PageSubtitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: var(--c-n600);
  margin: 0 auto;
  max-width: 520px;
  line-height: 1.65;
`;

/* ── Section wrappers ──────────────────────────────────────── */

const GridSection = styled.section<{ muted?: boolean }>`
  padding: var(--sp-12) var(--sp-12) var(--sp-16);
  max-width: 1280px;
  width: 100%;
  margin-inline: auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: var(--sp-8) var(--sp-6) var(--sp-12);
  }
`;

const PastSection = styled.section`
  background: var(--c-n100);
  border-top: 1.5px solid var(--c-n200);
  padding: var(--sp-12) var(--sp-12) var(--sp-16);

  @media (max-width: 768px) {
    padding: var(--sp-8) var(--sp-6) var(--sp-12);
  }
`;

const PastInner = styled.div`
  max-width: 1280px;
  margin-inline: auto;
`;

const SectionBlock = styled.div`
  margin-bottom: var(--sp-8);

  @media (max-width: 768px) { margin-bottom: var(--sp-6); }
`;

const SectionEyebrow = styled.p<{ muted?: boolean }>`
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${p => p.muted ? "var(--c-n400)" : "var(--c-primary)"};
  margin: 0 0 var(--sp-2);
`;

const SectionHeading = styled.h2<{ muted?: boolean }>`
  font-family: var(--f-display);
  font-size: clamp(1.7rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: ${p => p.muted ? "var(--c-n600)" : "var(--c-n900)"};
  margin: 0;
  line-height: 1.15;
`;

/* ── Grid ──────────────────────────────────────────────────── */

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-6);

  @media (max-width: 960px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px) { grid-template-columns: 1fr; gap: var(--sp-4); }
`;

/* ── Card ──────────────────────────────────────────────────── */

interface CardProps { accent: string; delay: number; past?: boolean; }

const Card = styled.article<CardProps>`
  background: var(--c-white);
  border-radius: var(--r-2xl);
  border-top: 4px solid ${p => p.past ? "var(--c-n400)" : p.accent};
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: var(--sh-sm);
  opacity: ${p => p.past ? 0.82 : 1};
  animation: ${scaleIn} 0.45s var(--ease-out) ${p => p.delay}s both;
  transition: transform 220ms var(--ease-spring), box-shadow 220ms ease, opacity 220ms ease;

  &:focus-visible {
    outline: 3px solid ${p => p.accent};
    outline-offset: 2px;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--sh-md);
    opacity: 1;
  }

  .img-wrap {
    position: relative;
    height: 190px;
    overflow: hidden;
    background: var(--c-n100);
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.4s ease;
      ${p => p.past ? "filter: saturate(0.75);" : ""}
    }
  }

  &:hover .img-wrap img {
    transform: scale(1.05);
    filter: none;
  }

  .body {
    padding: var(--sp-5);
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: var(--sp-3);
  }

  h2 {
    font-family: var(--f-display);
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--c-n900);
    margin: 0;
    line-height: 1.25;
  }
`;

const PastBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: rgba(0, 0, 0, 0.58);
  backdrop-filter: blur(4px);
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 9px;
  border-radius: var(--r-full);

  svg { font-size: 0.65rem; }
`;

const DateBadge = styled.div<{ accent: string }>`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.74rem;
  font-weight: 700;
  color: ${p => p.accent};
  background: ${p => p.accent}14;
  border: 1px solid ${p => p.accent}28;
  border-radius: var(--r-full);
  padding: 4px 10px;
  align-self: flex-start;
`;

const LocationRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--c-n600);
  line-height: 1.4;

  svg {
    color: var(--c-primary);
    font-size: 0.78rem;
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-1);
  margin-top: auto;
`;

const Chip = styled.span<{ accent: string }>`
  font-size: 0.7rem;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: var(--r-full);
  background: ${p => p.accent}12;
  color: ${p => p.accent};
  border: 1px solid ${p => p.accent}28;
`;

const CardLink = styled.div<{ accent: string; muted?: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.82rem;
  font-weight: 700;
  color: ${p => p.muted ? "var(--c-n400)" : p.accent};
  transition: gap 150ms ease;

  article:hover & { gap: 9px; }
`;

/* ── Empty state ───────────────────────────────────────────── */

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--sp-3);
  padding: var(--sp-16) var(--sp-8);
  background: var(--c-white);
  border-radius: var(--r-2xl);
  border: 1.5px dashed var(--c-n200);
  max-width: 420px;

  p {
    font-size: 1rem;
    font-weight: 700;
    color: var(--c-n600);
    margin: 0;
    text-align: center;
  }
`;

/* ── Connect section ────────────────────────────────────────── */

const ConnectSection = styled.section`
  background: var(--c-primary);
  padding: var(--sp-16) var(--sp-12);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--sp-6);

  @media (max-width: 768px) { padding: var(--sp-12) var(--sp-6); }
`;

const ConnectTitle = styled.h2`
  font-family: var(--f-display);
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 700;
  color: var(--c-white);
  margin: 0;
`;

const ConnectText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  max-width: 560px;
  margin: 0;
  line-height: 1.7;
`;

const SocialRow = styled.div`
  display: flex;
  gap: var(--sp-3);
  flex-wrap: wrap;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    border-radius: var(--r-md);
    background: rgba(255, 255, 255, 0.15);
    border: 1.5px solid rgba(255, 255, 255, 0.25);
    color: var(--c-white);
    font-size: 1.15rem;
    text-decoration: none;
    transition:
      background 150ms ease,
      border-color 150ms ease,
      transform 150ms var(--ease-spring);

    &:hover {
      background: rgba(255, 255, 255, 0.28);
      border-color: rgba(255, 255, 255, 0.55);
      transform: translateY(-2px);
    }
    &:focus-visible {
      outline: 2px solid var(--c-white);
      outline-offset: 2px;
    }
  }
`;

const ContactBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  font-family: var(--f-body);
  font-size: 0.95rem;
  font-weight: 700;
  padding: 13px var(--sp-8);
  border-radius: var(--r-full);
  background: var(--c-white);
  color: var(--c-primary);
  text-decoration: none;
  min-height: 48px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: transform 150ms var(--ease-spring), box-shadow 150ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.2);
  }
  &:active { transform: translateY(0); }
`;

/* ── Palette ────────────────────────────────────────────────── */

const ACCENTS = ["#e63946", "#9fb5f2", "#ff9a9e", "#ffb347"];

/* ── Shared card renderer ───────────────────────────────────── */

interface CardRendererProps {
  event: Event;
  idx: number;
  isPast: boolean;
  pastLabel: string;
  viewDetailsLabel: string;
  onNavigate: (id: string | number) => void;
}

const EventCard = ({
  event,
  idx,
  isPast,
  pastLabel,
  viewDetailsLabel,
  onNavigate,
}: CardRendererProps) => {
  const accent = isPast ? "#9ca3af" : ACCENTS[idx % ACCENTS.length];
  const allPartners = [...(event.partner || []), ...(event.Sponsor || [])];

  return (
    <Card
      accent={accent}
      delay={Math.min(idx * 0.06, 0.42)}
      past={isPast}
      onClick={() => onNavigate(event.id)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onNavigate(event.id)}
    >
      <div className="img-wrap">
        <img src={event.image} alt={event.title} loading="lazy" />
        {isPast && (
          <PastBadge>
            <FaCheckCircle aria-hidden="true" />
            {pastLabel}
          </PastBadge>
        )}
      </div>

      <div className="body">
        {event.date && (
          <DateBadge accent={accent}>📅 {event.date}</DateBadge>
        )}
        <h2>{event.title}</h2>
        {event.location && (
          <LocationRow>
            <FaMapMarkerAlt aria-hidden="true" />
            <span>{event.location}</span>
          </LocationRow>
        )}
        {allPartners.length > 0 && (
          <TagRow>
            {allPartners.slice(0, 2).map((p, i) => (
              <Chip key={i} accent={accent}>
                {p}
              </Chip>
            ))}
            {allPartners.length > 2 && (
              <Chip accent={accent}>+{allPartners.length - 2}</Chip>
            )}
          </TagRow>
        )}
        <CardLink accent={accent} muted={isPast}>
          {viewDetailsLabel} <FaArrowRight aria-hidden="true" />
        </CardLink>
      </div>
    </Card>
  );
};

/* ── Component ─────────────────────────────────────────────── */

export const Events = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const events = useEventData();

  const available = events.filter((e) => e.isAvailable);
  const upcoming  = available.filter((e) => !e.isPast);
  const past      = available.filter((e) => e.isPast);

  const go = (id: string | number) => navigate(`/coeur-festifs/event/${id}`);
  const viewDetailsLabel = t("events.viewDetails") || "En savoir plus";
  const pastLabel = t("events.pastBadge") || "Passé";

  return (
    <Page>
      {/* ── Header ── */}
      <PageHeader>
        <Eyebrow>Coeurs Festifs</Eyebrow>
        <PageTitle>{t("events.title")}</PageTitle>
        <PageSubtitle>{t("events.subtitle")}</PageSubtitle>
      </PageHeader>

      {/* ── Upcoming events ── */}
      <GridSection aria-labelledby="upcoming-heading">
        <SectionBlock>
          <SectionEyebrow>Coeurs Festifs</SectionEyebrow>
          <SectionHeading id="upcoming-heading">
            {t("events.upcomingTitle")}
          </SectionHeading>
        </SectionBlock>

        {upcoming.length > 0 ? (
          <Grid>
            {upcoming.map((event, idx) => (
              <EventCard
                key={event.id}
                event={event}
                idx={idx}
                isPast={false}
                pastLabel={pastLabel}
                viewDetailsLabel={viewDetailsLabel}
                onNavigate={go}
              />
            ))}
          </Grid>
        ) : (
          <EmptyState role="status" aria-live="polite">
            <span style={{ fontSize: "2.2rem" }}>📅</span>
            <p>{t("events.noUpcomingMessage")}</p>
          </EmptyState>
        )}
      </GridSection>

      {/* ── Past events ── */}
      {past.length > 0 && (
        <PastSection aria-labelledby="past-heading">
          <PastInner>
            <SectionBlock>
              <SectionEyebrow muted>Coeurs Festifs</SectionEyebrow>
              <SectionHeading id="past-heading" muted>
                {t("events.pastTitle")}
              </SectionHeading>
            </SectionBlock>

            <Grid>
              {past.map((event, idx) => (
                <EventCard
                  key={event.id}
                  event={event}
                  idx={idx}
                  isPast={true}
                  pastLabel={pastLabel}
                  viewDetailsLabel={viewDetailsLabel}
                  onNavigate={go}
                />
              ))}
            </Grid>
          </PastInner>
        </PastSection>
      )}

      {/* ── Connect ── */}
      <ConnectSection>
        <ConnectTitle>{t("events.Footer.title")}</ConnectTitle>
        <ConnectText>{t("events.Footer.desc")}</ConnectText>
        <SocialRow aria-label="Réseaux sociaux">
          <a
            href="https://www.instagram.com/coeurs.festifs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram aria-hidden="true" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61571443886637"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/c%C5%93urs-festifs-39b901360/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
          <a href="mailto:coeurs.festifs@gmail.com" aria-label="Courriel">
            <FaEnvelope aria-hidden="true" />
          </a>
        </SocialRow>
        <ContactBtn href="mailto:coeurs.festifs@gmail.com">
          <FaEnvelope aria-hidden="true" />
          <span>{t("events.Footer.contact")}</span>
        </ContactBtn>
      </ConnectSection>
    </Page>
  );
};
