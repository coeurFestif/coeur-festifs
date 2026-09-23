import React, { useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  PiArrowLeftBold,
  PiArrowRightBold,
  PiCalendarBlankFill,
  PiCalendarPlusFill,
  PiCheckBold,
  PiMapPinFill,
  PiShareFatFill,
} from "react-icons/pi";
import { useEventData } from "../data/events";
import { Event } from "../schema/event";
import { parseLocal, mapsUrl } from "../utils/eventDates";
import { useEventMeta } from "../components/useEventMeta";
import { downloadIcs, eventUrl } from "../components/eventActions";
import { ButtonLink, Container, OutlineButton, StatusPill, TextLink } from "../components/ui";

const Page = styled(Container)`
  padding-top: var(--sp-8);
  padding-bottom: var(--section);
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 420px) 1fr;
  gap: var(--sp-16);
  align-items: start;
  margin-top: var(--sp-8);

  @media (max-width: 860px) { grid-template-columns: 1fr; gap: var(--sp-8); }
`;

const Poster = styled.div`
  position: sticky;
  top: calc(var(--nav-h) + var(--sp-6));
  aspect-ratio: 3 / 4;
  border-radius: var(--r-card);
  overflow: hidden;
  background: #f4f4f4;
  box-shadow: var(--sh-event);

  img { width: 100%; height: 100%; object-fit: cover; }

  @media (max-width: 860px) { position: static; max-width: 360px; }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--sp-6);
  min-width: 0;
`;

const TopLine = styled.div`
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  flex-wrap: wrap;

  p { font-family: var(--f-display); font-weight: 800; color: var(--c-primary); letter-spacing: -0.02em; }
`;

const Title = styled.h1`
  font-family: var(--f-display);
  font-weight: 800;
  font-size: clamp(2.25rem, 4.5vw, 3.5rem);
  line-height: 1;
  letter-spacing: -0.03em;
`;

const Rows = styled.ul`
  list-style: none;
  border-top: 1px solid var(--c-hair);
`;

const Row = styled.li`
  display: grid;
  grid-template-columns: 40px 1fr auto;
  gap: var(--sp-4);
  align-items: center;
  padding: var(--sp-4) 0;
  border-bottom: 1px solid var(--c-hair);

  .ico {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: var(--r-btn);
    background: rgba(0, 0, 0, 0.05);
    font-size: 1.15rem;
  }
  .txt { display: flex; flex-direction: column; min-width: 0; }
  .txt strong { font-weight: 700; letter-spacing: -0.02em; overflow-wrap: anywhere; }
  .txt span { font-size: 0.9rem; color: var(--c-slate); }

  @media (max-width: 520px) {
    grid-template-columns: 40px 1fr;
    & > :last-child:not(.txt) { grid-column: 2; justify-self: start; }
  }
`;

const SmallAction = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--c-ink);
  text-decoration: none;
  white-space: nowrap;
  border-bottom: 1px solid currentColor;

  &:hover { opacity: 0.7; }
`;

const SmallButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  border: none;
  border-bottom: 1px solid currentColor;
  background: none;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--c-ink);
  white-space: nowrap;

  &:hover { opacity: 0.7; }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--c-graphite);
  white-space: pre-line;
  max-width: 38em;
`;

const Orgs = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);

  h2 { font-size: 0.95rem; font-weight: 700; color: var(--c-slate); }
  ul { display: flex; flex-wrap: wrap; gap: var(--sp-2); list-style: none; }
  li {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px 6px 6px;
    border-radius: var(--r-pill);
    background: rgba(0, 0, 0, 0.05);
    font-size: 0.9rem;
    font-weight: 700;
  }
  li.noimg { padding-left: 12px; }
  img { width: 28px; height: 28px; border-radius: 50%; object-fit: contain; background: var(--c-white); }
`;

const Neighbors = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-4);
  margin-top: var(--section);
  padding-top: var(--sp-8);
  border-top: 1px solid var(--c-hair);

  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const NeighborCard = styled(Link)<{ $align: "left" | "right" }>`
  display: flex;
  flex-direction: ${(p) => (p.$align === "right" ? "row-reverse" : "row")};
  align-items: center;
  gap: var(--sp-4);
  padding: var(--sp-3);
  border-radius: var(--r-card);
  text-decoration: none;
  color: inherit;
  text-align: ${(p) => p.$align};
  transition: background 200ms ease;

  &:hover { background: rgba(0, 0, 0, 0.04); }
  img { width: 56px; aspect-ratio: 3 / 4; object-fit: cover; border-radius: 6px; box-shadow: var(--sh-card); }
  small { display: flex; align-items: center; gap: 6px; justify-content: ${(p) => (p.$align === "right" ? "flex-end" : "flex-start")}; font-size: 0.8rem; color: var(--c-ash); }
  strong { display: block; font-weight: 700; letter-spacing: -0.02em; }
`;

const Missing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--sp-5);
  padding: var(--sp-20) 0;

  p { color: var(--c-slate); font-size: 1.1rem; }
`;

const OrgList: React.FC<{ title: string; names?: string[]; imgs?: string[] }> = ({ title, names, imgs }) => {
  const list = (names ?? []).map((name, i) => ({ name, img: imgs?.[i] }));
  if (!list.length) return null;
  return (
    <Orgs>
      <h2>{title}</h2>
      <ul>
        {list.map((o) => (
          <li key={o.name} className={o.img ? undefined : "noimg"}>
            {o.img && <img src={o.img} alt="" loading="lazy" />}
            {o.name}
          </li>
        ))}
      </ul>
    </Orgs>
  );
};

function neighbors(events: Event[], current: Event) {
  const dated = events
    .filter((e) => e.startsAt)
    .sort((a, b) => parseLocal(a.startsAt!).getTime() - parseLocal(b.startsAt!).getTime());
  const i = dated.findIndex((e) => e.id === current.id);
  if (i < 0) return { prev: undefined, next: undefined };
  return { prev: dated[i - 1], next: dated[i + 1] };
}

const Detail: React.FC<{ event: Event; events: Event[] }> = ({ event, events }) => {
  const { t } = useTranslation();
  const meta = useEventMeta(event);
  const [copied, setCopied] = useState(false);
  const { prev, next } = neighbors(events, event);

  const share = async () => {
    const url = eventUrl(event);
    if (navigator.share) {
      try { await navigator.share({ title: event.title, url }); } catch { /* dismissed */ }
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Page>
      <TextLink to="/coeur-festifs/events">
        <PiArrowLeftBold aria-hidden="true" /> {t("ui.events.back")}
      </TextLink>

      <Layout>
        <Poster>
          <img src={event.image} alt={t("ui.events.posterAlt", { title: event.title })} />
        </Poster>

        <Info>
          <TopLine>
            <StatusPill status={meta.status} label={meta.statusLabel} />
            {meta.relative && <p>{meta.relative}</p>}
          </TopLine>
          <Title>{event.title}</Title>

          <Rows>
            <Row>
              <span className="ico"><PiCalendarBlankFill aria-hidden="true" /></span>
              <span className="txt">
                <strong>{meta.dateText}</strong>
                {meta.timeText && <span>{meta.timeText}</span>}
              </span>
              {meta.status === "upcoming" && event.startsAt ? (
                <SmallButton type="button" onClick={() => downloadIcs(event)}>
                  <PiCalendarPlusFill aria-hidden="true" /> {t("ui.events.addToCalendar")}
                </SmallButton>
              ) : <span />}
            </Row>
            {event.location && (
              <Row>
                <span className="ico"><PiMapPinFill aria-hidden="true" /></span>
                <span className="txt"><strong>{event.location}</strong></span>
                <SmallAction href={mapsUrl(event.location)} target="_blank" rel="noopener noreferrer">
                  {t("ui.events.directions")} <PiArrowRightBold aria-hidden="true" />
                </SmallAction>
              </Row>
            )}
          </Rows>

          <div>
            <OutlineButton type="button" onClick={share} aria-live="polite">
              {copied ? <PiCheckBold aria-hidden="true" /> : <PiShareFatFill aria-hidden="true" />}
              {copied ? t("events.copied") : t("events.share")}
            </OutlineButton>
          </div>

          {event.description && <Description>{event.description}</Description>}

          <OrgList title={t("events.partner")} names={event.partner} imgs={event.partnerImg} />
          <OrgList title={t("events.sponsor")} names={event.Sponsor} imgs={event.SponsorImg} />
        </Info>
      </Layout>

      {(prev || next) && (
        <Neighbors aria-label={t("events.title")}>
          <div>
            {prev && (
              <NeighborCard to={`/coeur-festifs/event/${prev.id}`} $align="left">
                <img src={prev.image} alt="" />
                <span>
                  <small><PiArrowLeftBold aria-hidden="true" /> {t("ui.events.prev")}</small>
                  <strong>{prev.title}</strong>
                </span>
              </NeighborCard>
            )}
          </div>
          <div>
            {next && (
              <NeighborCard to={`/coeur-festifs/event/${next.id}`} $align="right">
                <img src={next.image} alt="" />
                <span>
                  <small>{t("ui.events.next")} <PiArrowRightBold aria-hidden="true" /></small>
                  <strong>{next.title}</strong>
                </span>
              </NeighborCard>
            )}
          </div>
        </Neighbors>
      )}
    </Page>
  );
};

export const EventDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const events = useEventData();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <Page>
        <Missing>
          <Title>{t("events.notFound")}</Title>
          <p>{t("events.notFoundDesc")}</p>
          <ButtonLink to="/coeur-festifs/events">
            <PiArrowLeftBold aria-hidden="true" /> {t("ui.events.back")}
          </ButtonLink>
        </Missing>
      </Page>
    );
  }

  return <Detail event={event} events={events} />;
};
