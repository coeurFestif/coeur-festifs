import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Event } from "../schema/event";
import { useEventMeta } from "./useEventMeta";
import { StatusPill } from "./ui";

// Partiful "invitation tile": portrait 3:4 poster, no text laid over it
// (the posters carry their own), title + date underneath.

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-decoration: none;
  color: inherit;
  border-radius: var(--r-card);
`;

const Frame = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;
  border-radius: var(--r-card);
  overflow: hidden;
  background: #f4f4f4;
  box-shadow: var(--sh-card);
  transition: transform 350ms var(--ease-out), box-shadow 350ms var(--ease-out);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 600ms var(--ease-out);
  }

  ${Card}:hover & {
    transform: translateY(-4px);
    box-shadow: var(--sh-float);
  }
  ${Card}:hover & img { transform: scale(1.03); }
`;

const PillSpot = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;

  span { background: rgba(255,255,255,.94); }
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0 2px;
`;

const DateLine = styled.p`
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--c-slate);
`;

const Title = styled.h3`
  font-family: var(--f-body);
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: var(--c-ink);
`;

export const PosterCard: React.FC<{ event: Event; showStatus?: boolean }> = ({ event, showStatus }) => {
  const { t } = useTranslation();
  const meta = useEventMeta(event);

  return (
    <Card to={`/coeur-festifs/event/${event.id}`}>
      <Frame>
        <img src={event.image} alt={t("ui.events.posterAlt", { title: event.title })} loading="lazy" />
        {showStatus && (
          <PillSpot>
            <StatusPill status={meta.status} label={meta.statusLabel} />
          </PillSpot>
        )}
      </Frame>
      <Meta>
        <DateLine>{meta.relative ?? meta.dateText}</DateLine>
        <Title>{event.title}</Title>
      </Meta>
    </Card>
  );
};
