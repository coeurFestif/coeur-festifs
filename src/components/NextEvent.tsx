import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PiCalendarPlusFill, PiMapPinFill, PiInstagramLogoFill, PiArrowRightBold } from "react-icons/pi";
import { Event } from "../schema/event";
import { useEventMeta } from "./useEventMeta";
import { ButtonLink, OutlineA, OutlineButton, StatusPill } from "./ui";
import { downloadIcs, EMAIL, INSTAGRAM_URL } from "./eventActions";
import { mapsUrl } from "../utils/eventDates";

// Partiful "event preview card": the most elevated surface on the page.

const Card = styled.article`
  display: grid;
  grid-template-columns: minmax(200px, 300px) 1fr;
  gap: var(--sp-8);
  padding: var(--sp-5);
  background: var(--c-white);
  border-radius: var(--r-modal);
  box-shadow: var(--sh-event);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: var(--sp-5);
  }
`;

const Poster = styled(Link)`
  display: block;
  aspect-ratio: 3 / 4;
  border-radius: var(--r-card);
  overflow: hidden;
  background: #f4f4f4;

  img { width: 100%; height: 100%; object-fit: cover; transition: transform 600ms var(--ease-out); }
  &:hover img { transform: scale(1.03); }

  @media (max-width: 720px) { max-width: 320px; }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--sp-4);
  padding: var(--sp-3) var(--sp-2) var(--sp-2) 0;
`;

const Countdown = styled.p`
  font-family: var(--f-display);
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: -0.02em;
  color: var(--c-primary);
`;

const Title = styled.h3`
  font-family: var(--f-display);
  font-weight: 800;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
`;

const Facts = styled.dl`
  display: grid;
  gap: var(--sp-3);
  margin: var(--sp-2) 0;

  div { display: flex; gap: var(--sp-3); align-items: baseline; }
  dt { width: 48px; flex-shrink: 0; font-size: 0.85rem; color: var(--c-ash); }
  dd { font-size: 1.05rem; color: var(--c-graphite); }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-3);
  margin-top: auto;
`;

/* ── Empty state: designed, never a blank box ── */

const Empty = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--sp-6);
  align-items: center;
  padding: var(--sp-8);
  border-radius: var(--r-modal);
  background: var(--c-white);
  box-shadow: var(--sh-event);

  @media (max-width: 720px) { grid-template-columns: 1fr; padding: var(--sp-6); }
`;

const EmptyStack = styled.div`
  position: relative;
  width: 132px;
  height: 150px;

  span {
    position: absolute;
    inset: 0;
    border-radius: var(--r-card);
    border: 1.5px dashed var(--c-silver);
    background: #fafafa;
  }
  span:nth-child(1) { transform: rotate(-9deg) translateX(-10px); }
  span:nth-child(2) { transform: rotate(6deg) translateX(10px); }
  span:nth-child(3) {
    display: grid;
    place-items: center;
    background: var(--c-white);
    border-style: solid;
    border-color: var(--c-hair);
    box-shadow: var(--sh-card);
    font-family: var(--f-display);
    font-weight: 800;
    font-size: 2.5rem;
    color: var(--c-primary);
  }
`;

const EmptyText = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);

  h3 {
    font-family: var(--f-display);
    font-weight: 800;
    font-size: 1.6rem;
    letter-spacing: -0.03em;
    line-height: 1.1;
  }
  p { color: var(--c-slate); max-width: 36em; }
`;

export const NextEventEmpty: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Empty>
      <EmptyStack aria-hidden="true">
        <span />
        <span />
        <span>?</span>
      </EmptyStack>
      <EmptyText>
        <h3>{t("ui.events.emptyTitle")}</h3>
        <p>{t("ui.events.emptyText")}</p>
        <Actions>
          <OutlineA href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <PiInstagramLogoFill aria-hidden="true" /> {t("ui.events.followInstagram")}
          </OutlineA>
          <OutlineA href={`mailto:${EMAIL}?subject=Partenariat`}>{t("ui.events.proposePartnership")}</OutlineA>
        </Actions>
      </EmptyText>
    </Empty>
  );
};

export const NextEvent: React.FC<{ event?: Event }> = ({ event }) =>
  event ? <NextEventCard event={event} /> : <NextEventEmpty />;

const NextEventCard: React.FC<{ event: Event }> = ({ event }) => {
  const { t } = useTranslation();
  const meta = useEventMeta(event);
  const to = `/coeur-festifs/event/${event.id}`;

  return (
    <Card>
      <Poster to={to} tabIndex={-1} aria-hidden="true">
        <img src={event.image} alt="" />
      </Poster>
      <Body>
        <StatusPill status={meta.status} label={meta.statusLabel} />
        {meta.relative && <Countdown>{meta.relative}</Countdown>}
        <Title>{event.title}</Title>
        <Facts>
          <div>
            <dt>{t("ui.events.when")}</dt>
            <dd>{meta.dateText}{meta.timeText ? `, ${meta.timeText}` : ""}</dd>
          </div>
          {event.location && (
            <div>
              <dt>{t("ui.events.where")}</dt>
              <dd>{event.location}</dd>
            </div>
          )}
        </Facts>
        <Actions>
          <ButtonLink to={to}>
            {t("events.viewDetails")} <PiArrowRightBold aria-hidden="true" />
          </ButtonLink>
          {event.startsAt && (
            <OutlineButton type="button" onClick={() => downloadIcs(event)}>
              <PiCalendarPlusFill aria-hidden="true" /> {t("ui.events.addToCalendar")}
            </OutlineButton>
          )}
          {event.location && (
            <OutlineA
              href={mapsUrl(event.location)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiMapPinFill aria-hidden="true" /> {t("ui.events.directions")}
            </OutlineA>
          )}
        </Actions>
      </Body>
    </Card>
  );
};
