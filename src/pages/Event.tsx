import React from "react";
import styled, { keyframes } from "styled-components";
import { useEventData } from "../data/events";
import { Event } from "../schema/event";
import { groupPastEventsByYear } from "../utils/eventGrouping";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaMapMarkerAlt,
  FaInstagram,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const rowIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
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
  padding: var(--sp-12) 0 var(--sp-6);
`;

const Eyebrow = styled.p`
  font-family: var(--f-body);
  font-weight: 800;
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--c-n900);
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
  color: var(--c-n900);
  max-width: 560px;
  margin: 0;
`;

/* ── Segmented filter (no JS state — radio + CSS Grid overlap) ── */

const FilterWrap = styled.div`
  padding: var(--sp-3) 0 var(--sp-12);

  /* CSS-only crossfade: :has() reaches the checked radio regardless of how
     deeply it's nested (inside Segmented), and toggles the panel by class
     regardless of how deeply *that* is nested (inside PanelSwap). No JS. */
  &:has(#filter-past:checked) .panel-upcoming-slot {
    opacity: 0;
    transform: translateY(-6px);
    visibility: hidden;
    pointer-events: none;
    transition: opacity 250ms ease, transform 250ms ease, visibility 0s linear 250ms;
  }

  &:has(#filter-past:checked) .panel-past-slot {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
    pointer-events: auto;
    transition: opacity 250ms ease, transform 250ms ease, visibility 0s linear 0s;
  }

  /* Fallback when :has() is unsupported: the default Panel state below
     (opacity: 0; pointer-events: none) would otherwise win permanently and
     hide the entire catalogue with no way to reveal it. Show both panels
     stacked instead, with no toggle. */
  @supports not selector(:has(*)) {
    .panel-upcoming-slot,
    .panel-past-slot {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      position: static;
      grid-area: auto;
    }
  }
`;

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--sp-6);
  flex-wrap: wrap;
  gap: var(--sp-3);
`;

const Segmented = styled.div`
  display: inline-flex;
  background: var(--c-neutral-bg);
  border-radius: var(--r-full);
  padding: 4px;
  gap: 4px;
`;

const SegRadio = styled.input`
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;

  &:focus-visible + label {
    outline: 2px solid var(--c-primary);
    outline-offset: 2px;
  }
`;

const SegLabel = styled.label`
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--c-n600);
  border-radius: var(--r-full);
  padding: 9px 22px;
  cursor: pointer;
  user-select: none;
  transition: background 150ms ease, color 150ms ease;

  input:checked + & {
    background: var(--c-n900);
    color: var(--c-cream);
  }
`;

const PanelSwap = styled.div`
  display: grid;
`;

const Panel = styled.div`
  grid-area: 1 / 1;
  opacity: 0;
  transform: translateY(6px);
  visibility: hidden;
  pointer-events: none;
  transition: opacity 250ms ease, transform 250ms ease, visibility 0s linear 250ms;

  /* "À venir" is checked by default (defaultChecked on its radio), so its
     panel starts visible; FilterWrap's :has() rules above override both
     panels' state once "Passés" is checked. */
  &.panel-upcoming-slot {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
    pointer-events: auto;
    transition: opacity 250ms ease, transform 250ms ease, visibility 0s linear 0s;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 1ms linear, transform 1ms linear, visibility 0s linear 0s;
  }
`;

/* ── Registry rows (shared by upcoming + past) ────────────────── */

const RegistryRow = styled.div<{ visible: boolean; delay: number; emphasized?: boolean }>`
  display: flex;
  align-items: center;
  gap: var(--sp-6);
  padding: 20px 0;
  border-top: ${p => p.emphasized ? "1px solid var(--c-border)" : "none"};
  border-bottom: 1px solid var(--c-border);
  opacity: ${p => p.visible ? 1 : 0};
  animation: ${p => p.visible ? rowIn : "none"} 360ms ease-out ${p => p.delay}ms both;
  transition: padding-left 150ms ease;

  &:hover { padding-left: 8px; }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;

const RowDate = styled.div`
  width: 80px;
  flex-shrink: 0;

  .day { font-family: var(--f-display); font-weight: 700; font-size: 2rem; line-height: 1; color: var(--c-n900); }
  .rest { font-family: var(--f-body); font-weight: 700; font-size: 0.68rem; letter-spacing: 0.05em; text-transform: uppercase; color: var(--c-n900); }
`;

const RowBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

const RowTitle = styled.span`
  font-family: var(--f-display);
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--c-n900);
`;

const RowMeta = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--f-body);
  font-weight: 500;
  font-size: 0.82rem;
  color: var(--c-n900);

  svg { color: var(--c-n400); flex-shrink: 0; }
`;

const StatusLabel = styled.span<{ upcoming?: boolean }>`
  font-family: var(--f-body);
  font-weight: 800;
  font-size: 0.68rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${p => p.upcoming ? "var(--c-n900)" : "var(--c-n400)"};
  border-bottom: ${p => p.upcoming ? "1.5px solid var(--c-n900)" : "none"};
  padding-bottom: 2px;
  white-space: nowrap;
`;

const RegisterLink = styled(Link)`
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--c-n900);
  border-bottom: 1.5px solid var(--c-n900);
  padding-bottom: 2px;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
`;

const YearLabel = styled.h3`
  font-family: var(--f-display);
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--c-n900);
  margin: var(--sp-6) 0 var(--sp-1);

  &:first-child { margin-top: 0; }
`;

const EmptyState = styled.div`
  padding: var(--sp-12) 0;
  text-align: center;
  font-family: var(--f-body);
  font-weight: 600;
  color: var(--c-n600);
  border-top: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
`;

/* ── Trust grid (partners & sponsors) ─────────────────────────── */

const TrustSection = styled.section`
  border-top: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  padding: var(--sp-8) 0;
`;

const TrustGrid = styled.div`
  margin-top: var(--sp-4);
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
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 0.8rem;
  color: var(--c-n900);
  text-align: center;
  padding: 0 var(--sp-2);
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

/* ── Shared row renderer with scroll reveal ───────────────────── */

const RevealRow: React.FC<{
  delay: number;
  emphasized?: boolean;
  event: Event;
  actionsSlot: React.ReactNode;
}> = ({ delay, emphasized, event, actionsSlot }) => {
  const [ref, visible] = useRevealOnScroll<HTMLDivElement>();
  const dayMatch = event.date.match(/\d{1,2}/);
  const day = dayMatch?.[0] ?? "—";
  const monthYear = event.date.replace(day, "").replace(/^[\s,]+|[\s,]+$/g, "").trim() || "—";

  return (
    <RegistryRow ref={ref} visible={visible} delay={delay} emphasized={emphasized}>
      <RowDate>
        <div className="day">{day}</div>
        <div className="rest">{monthYear}</div>
      </RowDate>
      <RowBody>
        <RowTitle>{event.title}</RowTitle>
        {event.location && (
          <RowMeta>
            <FaMapMarkerAlt aria-hidden="true" />
            <span>{event.location}</span>
          </RowMeta>
        )}
      </RowBody>
      {actionsSlot}
    </RegistryRow>
  );
};

/* ── Component ─────────────────────────────────────────────── */

export const Events = () => {
  const { t } = useTranslation();
  const events = useEventData();

  const available = events.filter((e) => e.isAvailable);
  const upcoming = available.filter((e) => !e.isPast);
  const past = available.filter((e) => e.isPast);
  const yearGroups = groupPastEventsByYear(past);

  const pastCatalogue = yearGroups.length > 0 ? (
    <div>
      {yearGroups.map((group) => (
        <div key={group.year}>
          <YearLabel>{group.year}</YearLabel>
          {group.events.map((ev, i) => (
            <RevealRow
              key={ev.id}
              delay={i * 40}
              event={ev}
              actionsSlot={
                <>
                  <StatusLabel>{t("events.pastBadge")}</StatusLabel>
                  <RegisterLink to={`/coeur-festifs/event/${ev.id}`}>
                    {t("events.viewDetails")} →
                  </RegisterLink>
                </>
              }
            />
          ))}
        </div>
      ))}
    </div>
  ) : (
    <EmptyState>{t("events.noEventsMessage")}</EmptyState>
  );

  return (
    <Page>
      <Inner>
        <Header>
          <Title>{t("events.title")}</Title>
          <Subtitle>{t("events.subtitle")}</Subtitle>
        </Header>

        {upcoming.length === 0 ? (
          pastCatalogue
        ) : (
          <FilterWrap>
            <FilterBar>
              <Segmented role="radiogroup" aria-label={t("events.title")}>
                <SegRadio type="radio" id="filter-upcoming" name="eventFilter" defaultChecked />
                <SegLabel htmlFor="filter-upcoming">
                  {t("events.filterUpcoming")} ({upcoming.length})
                </SegLabel>
                <SegRadio type="radio" id="filter-past" name="eventFilter" />
                <SegLabel htmlFor="filter-past">
                  {t("events.filterPast")} ({past.length})
                </SegLabel>
              </Segmented>
            </FilterBar>

            <PanelSwap>
              <Panel className="panel-upcoming-slot">
                <div>
                  {upcoming.map((ev, i) => (
                    <RevealRow
                      key={ev.id}
                      delay={i * 40}
                      emphasized
                      event={ev}
                      actionsSlot={
                        <>
                          <StatusLabel upcoming>{t("events.filterUpcoming")}</StatusLabel>
                          <RegisterLink to={`/coeur-festifs/event/${ev.id}`}>
                            {t("events.registerCta")} →
                          </RegisterLink>
                        </>
                      }
                    />
                  ))}
                </div>
              </Panel>

              <Panel className="panel-past-slot">
                {pastCatalogue}
              </Panel>
            </PanelSwap>
          </FilterWrap>
        )}
      </Inner>

      <TrustSection aria-labelledby="events-trust-heading">
        <Inner>
          <Eyebrow id="events-trust-heading">{t("homepage.partnershipTitle")}</Eyebrow>
          <TrustGrid>
            <TrustCell>Fondation du Dr Julien</TrustCell>
            <TrustCell>Répit Providence</TrustCell>
            <TrustCell>Scholastic</TrustCell>
            <TrustCell>Librairie Gallimard</TrustCell>
            <TrustCell>Fondation Réno-Jouets</TrustCell>
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
