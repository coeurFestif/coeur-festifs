import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PiArrowRightBold, PiArrowLeftBold } from "react-icons/pi";
import { useEventData } from "../data/events";
import { PARTNERS, SPONSORS, VOLUNTEER_COUNT } from "../data/partners";
import { getStatus } from "../utils/eventDates";
import { NextEvent } from "../components/NextEvent";
import { PosterCard } from "../components/PosterCard";
import { OrgGrid } from "../components/OrgGrid";
import { Figures, Founders } from "../components/Showcase";
import {
  ButtonLink,
  Container,
  Display,
  Lead,
  Reveal,
  Section,
  SectionTitle,
  TextLink,
} from "../components/ui";
import { useEventMeta } from "../components/useEventMeta";
import { Event } from "../schema/event";
import commonPic from "../assets/commonPic.jpg";
import logo from "../assets/logo.png";

/* ═══════════════ 1 · Hero ═══════════════ */

const Hero = styled.section`
  padding: var(--sp-12) 0 var(--section);
  overflow: hidden;
`;

const HeroGrid = styled(Container)`
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: var(--sp-12);
  align-items: center;

  @media (max-width: 900px) { grid-template-columns: 1fr; gap: var(--sp-10); }
`;

const HeroCopy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--sp-6);
`;

const HeroActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--sp-6);
  flex-wrap: wrap;
`;

const deal = keyframes`
  from { opacity: 0; transform: translate(var(--fx, 0), 24px) rotate(0deg) scale(.96); }
  to   { opacity: 1; transform: translate(0, 0) rotate(var(--rot)) scale(1); }
`;

const bob = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
`;

// Partiful's scattered invitation tiles: real posters tilted behind the one
// real team photo, fanning out a little more on hover.
const Stage = styled.div`
  position: relative;
  width: min(100%, 500px);
  aspect-ratio: 1 / 1.08;
  justify-self: center;

  @media (max-width: 900px) { width: min(100%, 400px); }
`;

const Tile = styled.div<{ $rot: number; $x: string; $y: string; $w: string; $delay: number }>`
  --rot: ${(p) => p.$rot}deg;
  position: absolute;
  left: ${(p) => p.$x};
  top: ${(p) => p.$y};
  width: ${(p) => p.$w};
  aspect-ratio: 3 / 4;
  border-radius: var(--r-card);
  overflow: hidden;
  background: #f4f4f4;
  box-shadow: var(--sh-card);
  transform: rotate(var(--rot));
  animation: ${deal} 700ms var(--ease-out) ${(p) => p.$delay}ms both;
  transition: transform 500ms var(--ease-out);

  img { width: 100%; height: 100%; object-fit: cover; }

  ${Stage}:hover & { transform: rotate(calc(var(--rot) * 1.4)) translateX(calc(var(--rot) * 1.2px)); }
`;

const Photo = styled.div`
  position: absolute;
  left: 20%;
  top: 6%;
  width: 60%;
  aspect-ratio: 4 / 5;
  border-radius: var(--r-card);
  overflow: hidden;
  box-shadow: var(--sh-float);
  animation: ${deal} 700ms var(--ease-out) 260ms both;
  --rot: 0deg;

  img { width: 100%; height: 100%; object-fit: cover; }
`;

// Partiful's floating "app notification" widget, fed by real event data.
const Notice = styled(Link)`
  position: absolute;
  left: 0;
  bottom: 4%;
  display: flex;
  align-items: center;
  gap: 10px;
  width: min(290px, 78%);
  padding: 10px 12px;
  border-radius: var(--r-modal);
  background: var(--c-white);
  box-shadow: var(--sh-float);
  text-decoration: none;
  color: inherit;
  animation: ${deal} 700ms var(--ease-out) 520ms both, ${bob} 5s ease-in-out 1.4s infinite;
  --rot: 0deg;

  img { width: 36px; height: 36px; border-radius: 8px; flex-shrink: 0; }
  div { display: flex; flex-direction: column; min-width: 0; }
  small { font-size: 0.72rem; font-weight: 700; color: var(--c-primary); }
  strong {
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  em {
    margin-left: auto;
    flex-shrink: 0;
    padding: 5px 12px;
    border-radius: 40px;
    background: var(--c-ink);
    color: var(--c-white);
    font-style: normal;
    font-size: 0.75rem;
    font-weight: 700;
  }
`;

const NoticeShell: React.FC<{ to: string; kicker: string; title: string }> = ({ to, kicker, title }) => {
  const { t } = useTranslation();
  return (
    <Notice to={to}>
      <img src={logo} alt="" />
      <div>
        <small>{kicker}</small>
        <strong>{title}</strong>
      </div>
      <em>{t("homepage.explore")}</em>
    </Notice>
  );
};

const NoticeFor: React.FC<{ event: Event }> = ({ event }) => {
  const { t } = useTranslation();
  const meta = useEventMeta(event);
  return (
    <NoticeShell
      to={`/coeur-festifs/event/${event.id}`}
      kicker={meta.relative ?? t("ui.home.nextLabel")}
      title={event.title}
    />
  );
};

const HeroNotice: React.FC<{ event?: Event }> = ({ event }) => {
  const { t } = useTranslation();
  return event ? (
    <NoticeFor event={event} />
  ) : (
    <NoticeShell to="/coeur-festifs/events" kicker={t("ui.home.nextLabel")} title={t("ui.events.emptyTitle")} />
  );
};

/* ═══════════════ 2 · Next event ═══════════════ */

const Head = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--sp-4);
  flex-wrap: wrap;
  margin-bottom: var(--sp-8);
`;

/* ═══════════════ 3 · Numbers ═══════════════ */

/* ═══════════════ 4 · Past events rail ═══════════════ */

const RailHead = styled(Head)`
  margin-bottom: var(--sp-6);
`;

const RailButtons = styled.div`
  display: flex;
  align-items: center;
  gap: var(--sp-2);

  button {
    width: 40px;
    height: 40px;
    display: inline-grid;
    place-items: center;
    border: 1px solid var(--c-silver);
    border-radius: var(--r-pill);
    background: var(--c-white);
    color: var(--c-ink);
    transition: border-color 150ms ease, background 150ms ease;
  }
  button:hover { border-color: var(--c-ink); }

  @media (max-width: 700px) { button { display: none; } }
`;

// Full-bleed horizontal row with visible overflow, aligned to the page grid.
const Rail = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: clamp(200px, 22vw, 250px);
  gap: var(--sp-5);
  list-style: none;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: max(var(--gutter), calc((100vw - var(--page-max)) / 2));
  padding: 8px max(var(--gutter), calc((100vw - var(--page-max)) / 2)) var(--sp-4);
  scrollbar-width: none;

  &::-webkit-scrollbar { display: none; }
  li { scroll-snap-align: start; }
`;

/* ═══════════════ 5 · About teaser ═══════════════ */

const Split = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-16);
  align-items: center;

  @media (max-width: 860px) { grid-template-columns: 1fr; gap: var(--sp-10); }
`;

const SplitCopy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--sp-5);
`;

/* ═══════════════ 6 · Partners ═══════════════ */

const GroupLabel = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--c-slate);
  margin: var(--sp-8) 0 var(--sp-4);

  &:first-of-type { margin-top: 0; }
`;

/* ═══════════════ Page ═══════════════ */

export const HomePage = () => {
  const { t } = useTranslation();
  const events = useEventData();
  const upcoming = events.filter((e) => getStatus(e) === "upcoming");
  const past = events.filter((e) => getStatus(e) === "past");
  const next = upcoming[0];
  const railRef = useRef<HTMLUListElement>(null);

  // Portrait posters read best in the tilted stack (Halloween, PRISMART);
  // fall back to the latest past events if those are ever removed.
  const pick = ["6", "4"].map((id) => events.find((e) => e.id === id)).filter(Boolean) as Event[];
  const posters = (pick.length === 2 ? pick : past.slice(0, 2)).map((e) => e.image);
  const scrollRail = (dir: 1 | -1) =>
    railRef.current?.scrollBy({ left: dir * railRef.current.clientWidth * 0.8, behavior: "smooth" });

  return (
    <>
      {/* 1 · Hero */}
      <Hero aria-labelledby="hero-title">
        <HeroGrid>
          <HeroCopy>
            <Display id="hero-title">{t("ui.home.heroTitle")}</Display>
            <Lead>{t("ui.home.heroLead")}</Lead>
            <HeroActions>
              <ButtonLink to="/coeur-festifs/events">
                {t("ui.home.ctaEvents")} <PiArrowRightBold aria-hidden="true" />
              </ButtonLink>
              <TextLink to="/coeur-festifs/about">{t("ui.home.ctaAbout")}</TextLink>
            </HeroActions>
          </HeroCopy>

          <Stage aria-hidden="true">
            {posters[0] && (
              <Tile $rot={-12} $x="0%" $y="12%" $w="42%" $delay={0} style={{ ["--fx" as string]: "40%" }}>
                <img src={posters[0]} alt="" />
              </Tile>
            )}
            {posters[1] && (
              <Tile $rot={10} $x="58%" $y="30%" $w="42%" $delay={120} style={{ ["--fx" as string]: "-40%" }}>
                <img src={posters[1]} alt="" />
              </Tile>
            )}
            <Photo>
              <img src={commonPic} alt="" />
            </Photo>
            <HeroNotice event={next} />
          </Stage>
        </HeroGrid>
      </Hero>

      {/* 2 · Next event */}
      <Section $wash aria-labelledby="next-title">
        <Container>
          <Head>
            <SectionTitle id="next-title">{t("ui.home.nextLabel")}</SectionTitle>
            <TextLink to="/coeur-festifs/events">
              {t("ui.home.seeAll")} <PiArrowRightBold aria-hidden="true" />
            </TextLink>
          </Head>
          <Reveal>
            <NextEvent event={next} />
          </Reveal>
        </Container>
      </Section>

      {/* 3 · Numbers (real counts only) */}
      <Section>
        <Container>
          <Figures
            items={[
              { n: VOLUNTEER_COUNT, label: t("ui.home.statVolunteers") },
              { n: events.length, label: t("ui.home.statEvents") },
              { n: PARTNERS.length, label: t("ui.home.statPartners") },
            ]}
          />
        </Container>
      </Section>

      {/* 4 · Past events rail */}
      {past.length > 0 && (
        <Section $wash aria-labelledby="past-title" style={{ paddingInline: 0 }}>
          <Container>
            <RailHead>
              <SectionTitle id="past-title">{t("ui.home.pastTitle")}</SectionTitle>
              <RailButtons>
                <button type="button" onClick={() => scrollRail(-1)} aria-label={t("ui.events.prev")}>
                  <PiArrowLeftBold aria-hidden="true" />
                </button>
                <button type="button" onClick={() => scrollRail(1)} aria-label={t("ui.events.next")}>
                  <PiArrowRightBold aria-hidden="true" />
                </button>
                <TextLink to="/coeur-festifs/events" style={{ marginLeft: "var(--sp-3)" }}>
                  {t("ui.home.seeAll")}
                </TextLink>
              </RailButtons>
            </RailHead>
          </Container>
          <Rail ref={railRef}>
            {past.map((ev, i) => (
              <li key={ev.id}>
                <Reveal delay={Math.min(i, 5) * 70}>
                  <PosterCard event={ev} />
                </Reveal>
              </li>
            ))}
          </Rail>
        </Section>
      )}

      {/* 5 · About teaser */}
      <Section aria-labelledby="about-title">
        <Split>
          <SplitCopy>
            <SectionTitle id="about-title">{t("ui.home.aboutTitle")}</SectionTitle>
            <Lead>{t("ui.home.aboutText")}</Lead>
            <TextLink to="/coeur-festifs/about">
              {t("ui.home.ctaAbout")} <PiArrowRightBold aria-hidden="true" />
            </TextLink>
          </SplitCopy>
          <Founders />
        </Split>
      </Section>

      {/* 6 · Partners & sponsors */}
      <Section $wash aria-labelledby="orgs-title">
        <Container>
          <Head>
            <SectionTitle id="orgs-title">{t("ui.home.worksWith")}</SectionTitle>
          </Head>
          <GroupLabel>{t("events.partner")}</GroupLabel>
          <OrgGrid orgs={PARTNERS} />
          <GroupLabel>{t("events.sponsor")}</GroupLabel>
          <OrgGrid orgs={SPONSORS} />
        </Container>
      </Section>
    </>
  );
};
