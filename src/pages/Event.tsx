import React from "react";
import styled, { keyframes } from "styled-components";
import { useEventData } from "../data/events";
import { groupPastEventsByYear } from "../utils/eventGrouping";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useTranslation } from "react-i18next";
import { FeaturedEvent } from "../components/FeaturedEvent";
import { EventCard } from "../components/EventCard";
import {
  FaInstagram,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const cellIn = keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

/* ── Page shell ────────────────────────────────────────────── */

const Page = styled.div`
  min-height: 100dvh;
  background: var(--c-cream);
  display: flex;
  flex-direction: column;
  padding-top: 78px;
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--sp-12);
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) { padding: 0 var(--sp-6); }
`;

const Header = styled.header`
  padding: var(--sp-12) 0 var(--sp-8);
`;

const Eyebrow = styled.p`
  font-family: var(--f-body);
  font-weight: 800;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-primary);
  margin: 0 0 var(--sp-2);
`;

const Title = styled.h1`
  font-family: var(--f-display);
  font-weight: 700;
  font-size: clamp(1.9rem, 4vw, 2.4rem);
  line-height: 1.1;
  color: var(--c-n900);
  margin: 0 0 var(--sp-3);
  max-width: 640px;
`;

const Subtitle = styled.p`
  font-family: var(--f-body);
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--c-n600);
  max-width: 560px;
  margin: 0;
`;

/* ── Featured (next upcoming) section ─────────────────────────── */

const FeaturedBlock = styled.section`
  padding: 0 0 var(--sp-16);
`;

const FeaturedLabel = styled.h2`
  font-family: var(--f-display);
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--c-n900);
  margin: 0 0 var(--sp-4);
`;

const AlsoUpcomingGrid = styled.div`
  margin-top: var(--sp-6);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-6);

  @media (max-width: 960px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;

const AlsoUpcomingLabel = styled.p`
  font-family: var(--f-body);
  font-weight: 800;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-n600);
  margin: var(--sp-8) 0 0;
`;

/* ── Past catalogue (photo cards, grouped by year) ────────────── */

const CatalogueSection = styled.section`
  padding: var(--sp-4) 0 var(--sp-16);
`;

const YearLabel = styled.h3`
  font-family: var(--f-display);
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--c-n900);
  margin: var(--sp-8) 0 var(--sp-4);

  &:first-child { margin-top: 0; }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-6);

  @media (max-width: 960px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;

const EmptyState = styled.div`
  padding: var(--sp-12) var(--sp-8);
  text-align: center;
  background: var(--c-white);
  border: 1.5px dashed var(--c-n200);
  border-radius: var(--r-lg);
  font-family: var(--f-body);
  font-weight: 700;
  color: var(--c-n600);
`;

/* ── Trust grid (partners & sponsors, animated) ───────────────── */

const TrustSection = styled.section`
  padding: var(--sp-12) 0;
  background: var(--c-n50);
`;

const TrustGrid = styled.div`
  margin-top: var(--sp-4);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--sp-3);

  @media (max-width: 900px) { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 560px) { grid-template-columns: repeat(2, 1fr); }
`;

const TrustCell = styled.div<{ visible: boolean; delay: number }>`
  background: var(--c-white);
  border: 1.5px solid var(--c-n200);
  border-radius: var(--r-md);
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 0.8rem;
  color: var(--c-n800);
  text-align: center;
  padding: 0 var(--sp-2);
  opacity: ${(p) => (p.visible ? 1 : 0)};
  animation: ${(p) => (p.visible ? cellIn : "none")} 450ms var(--ease-spring) ${(p) => p.delay}ms both;
  transition: transform 220ms var(--ease-spring), box-shadow 220ms ease, border-color 220ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(230, 57, 70, 0.12);
    border-color: var(--c-primary);
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

/* ── Connect band ──────────────────────────────────────────── */

const ConnectSection = styled.section`
  background: var(--c-neutral-bg);
  padding: var(--sp-16) var(--sp-12);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--sp-5);

  @media (max-width: 768px) { padding: var(--sp-12) var(--sp-6); }
`;

const ConnectTitle = styled.h2`
  font-family: var(--f-display);
  font-size: clamp(1.5rem, 3.5vw, 1.9rem);
  font-weight: 700;
  color: var(--c-n900);
  margin: 0;
`;

const ConnectText = styled.p`
  font-family: var(--f-body);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--c-n900);
  max-width: 520px;
  margin: 0;
  line-height: 1.6;
`;

const SocialRow = styled.div`
  display: flex;
  gap: var(--sp-3);
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--c-n900);
  color: var(--c-n900);
  font-size: 1rem;
  text-decoration: none;
  transition: background 150ms ease, color 150ms ease;

  &:hover { background: var(--c-n900); color: var(--c-cream); }
`;

const ContactGhostBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--c-n900);
  border: 1.5px solid var(--c-n900);
  border-radius: var(--r-full);
  padding: 12px 26px;
  text-decoration: none;
  transition: background 150ms ease, color 150ms ease;

  &:hover { background: var(--c-n900); color: var(--c-cream); }
`;

/* ── Component ─────────────────────────────────────────────── */

export const Events = () => {
  const { t } = useTranslation();
  const events = useEventData();

  const available = events.filter((e) => e.isAvailable);
  const upcoming = available.filter((e) => !e.isPast);
  const past = available.filter((e) => e.isPast);
  const yearGroups = groupPastEventsByYear(past);
  const [nextEvent, ...restUpcoming] = upcoming;

  return (
    <Page>
      <Inner>
        <Header>
          <Eyebrow>{t("events.filterUpcoming")} · {t("events.filterPast")}</Eyebrow>
          <Title>{t("events.title")}</Title>
          <Subtitle>{t("events.subtitle")}</Subtitle>
        </Header>

        {nextEvent && (
          <FeaturedBlock aria-labelledby="featured-heading">
            <FeaturedLabel id="featured-heading">{t("events.filterUpcoming")}</FeaturedLabel>
            <FeaturedEvent event={nextEvent} />

            {restUpcoming.length > 0 && (
              <>
                <AlsoUpcomingLabel>{t("events.filterUpcoming")}</AlsoUpcomingLabel>
                <AlsoUpcomingGrid>
                  {restUpcoming.map((ev, i) => (
                    <EventCard key={ev.id} event={ev} index={i} />
                  ))}
                </AlsoUpcomingGrid>
              </>
            )}
          </FeaturedBlock>
        )}

        <CatalogueSection aria-labelledby="catalogue-heading">
          <FeaturedLabel id="catalogue-heading">{t("events.filterPast")}</FeaturedLabel>
          {yearGroups.length > 0 ? (
            yearGroups.map((group) => (
              <div key={group.year}>
                <YearLabel>{group.year}</YearLabel>
                <CardsGrid>
                  {group.events.map((ev, i) => (
                    <EventCard key={ev.id} event={ev} index={i} />
                  ))}
                </CardsGrid>
              </div>
            ))
          ) : (
            <EmptyState>{t("events.noEventsMessage")}</EmptyState>
          )}
        </CatalogueSection>
      </Inner>

      <TrustSection aria-labelledby="events-trust-heading">
        <Inner>
          <Eyebrow id="events-trust-heading">{t("homepage.partnershipTitle")}</Eyebrow>
          <TrustGrid>
            {["Fondation du Dr Julien", "Répit Providence", "Scholastic", "Librairie Gallimard", "Fondation Réno-Jouets"].map((name, i) => (
              <TrustCellRevealer key={name} delay={i * 50}>
                {name}
              </TrustCellRevealer>
            ))}
          </TrustGrid>
        </Inner>
      </TrustSection>

      <ConnectSection>
        <ConnectTitle>{t("events.Footer.title")}</ConnectTitle>
        <ConnectText>{t("events.Footer.desc")}</ConnectText>
        <SocialRow aria-label="Réseaux sociaux">
          <SocialLink
            href="https://www.instagram.com/coeurs.festifs"
            target="_blank" rel="noopener noreferrer" aria-label="Instagram"
          >
            <FaInstagram aria-hidden="true" />
          </SocialLink>
          <SocialLink
            href="https://www.facebook.com/profile.php?id=61571443886637"
            target="_blank" rel="noopener noreferrer" aria-label="Facebook"
          >
            <FaFacebook aria-hidden="true" />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/c%C5%93urs-festifs-39b901360/"
            target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
          >
            <FaLinkedin aria-hidden="true" />
          </SocialLink>
          <SocialLink href="mailto:coeurs.festifs@gmail.com" aria-label="Courriel">
            <FaEnvelope aria-hidden="true" />
          </SocialLink>
        </SocialRow>
        <ContactGhostBtn href="mailto:coeurs.festifs@gmail.com">
          <FaEnvelope aria-hidden="true" />
          <span>{t("events.Footer.contact")}</span>
        </ContactGhostBtn>
      </ConnectSection>
    </Page>
  );
};
