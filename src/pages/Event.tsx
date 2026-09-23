import React from "react";
import styled from "styled-components";
import { useEventData } from "../data/events";
import { groupPastEventsByYear } from "../utils/eventGrouping";
import { useTranslation } from "react-i18next";
import { FeaturedEvent } from "../components/FeaturedEvent";
import { EventCard } from "../components/EventCard";
import { PartnersMarquee } from "../components/PartnersMarquee";
import { GradientWord } from "../components/GradientWord";
import {
  FaInstagram,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
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

/* ── Page shell ────────────────────────────────────────────── */

const Page = styled.div`
  min-height: 100dvh;
  background: var(--c-cream);
  display: flex;
  flex-direction: column;
  padding-top: var(--nav-space);
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

/* ── Trust (partners & sponsors, one scrolling marquee) ───────── */

const TrustSection = styled.section`
  padding: var(--sp-12) 0;
  background: var(--c-n50);
`;

const TrustInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--sp-12) var(--sp-5);

  @media (max-width: 768px) { padding: 0 var(--sp-6) var(--sp-5); }
`;

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
          <Title>
            {(() => {
              const [rest, last] = splitLastWord(t("events.title"));
              return rest ? <>{rest} <GradientWord>{last}</GradientWord></> : <GradientWord>{last}</GradientWord>;
            })()}
          </Title>
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
        <TrustInner>
          <Eyebrow id="events-trust-heading">{t("events.partner")}</Eyebrow>
        </TrustInner>
        <PartnersMarquee logos={[...PARTNERS, ...SPONSORS]} />
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
