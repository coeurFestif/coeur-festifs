import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Event } from "../schema/event";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const cardIn = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const ACCENTS = ["#e63946", "#9fb5f2", "#ff9a9e", "#ffb347"];

const Card = styled.article<{ accent: string; visible: boolean; delay: number }>`
  background: var(--c-white);
  border-radius: var(--r-lg);
  border-top: 4px solid ${(p) => p.accent};
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: var(--sh-sm);
  opacity: ${(p) => (p.visible ? 1 : 0)};
  animation: ${(p) => (p.visible ? cardIn : "none")} 420ms var(--ease-out) ${(p) => p.delay}ms both;
  transition: transform 220ms var(--ease-spring), box-shadow 220ms ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--sh-lg);
  }

  &:focus-visible {
    outline: 2px solid ${(p) => p.accent};
    outline-offset: 2px;
  }

  .img-wrap {
    position: relative;
    height: 180px;
    overflow: hidden;
    background: var(--c-neutral-bg);
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 400ms ease;
    }
  }

  &:hover .img-wrap img {
    transform: scale(1.06);
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;

const PastBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-family: var(--f-body);
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 4px 9px;
  border-radius: var(--r-full);

  svg { font-size: 0.6rem; }
`;

const Body = styled.div`
  padding: var(--sp-5);
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
  flex: 1;
`;

const DateBadge = styled.span<{ accent: string }>`
  align-self: flex-start;
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 0.72rem;
  color: ${(p) => p.accent};
  background: ${(p) => p.accent}14;
  border: 1px solid ${(p) => p.accent}30;
  border-radius: var(--r-full);
  padding: 4px 10px;
`;

const CardTitle = styled.h3`
  font-family: var(--f-display);
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--c-n900);
  margin: 0;
  line-height: 1.25;
`;

const Meta = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-family: var(--f-body);
  font-weight: 600;
  font-size: 0.8rem;
  color: var(--c-n600);

  svg { color: var(--c-primary); flex-shrink: 0; margin-top: 2px; }
`;

const CardLink = styled.span<{ accent: string }>`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: auto;
  padding-top: var(--sp-1);
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 0.8rem;
  color: ${(p) => p.accent};
  transition: gap 150ms ease;

  article:hover & { gap: 9px; }
`;

interface EventCardProps {
  event: Event;
  index: number;
}

export const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [ref, visible] = useRevealOnScroll<HTMLElement>();
  const accent = ACCENTS[index % ACCENTS.length];
  const go = () => navigate(`/coeur-festifs/event/${event.id}`);

  return (
    <Card
      ref={ref}
      accent={accent}
      visible={visible}
      delay={Math.min(index * 60, 300)}
      onClick={go}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") go();
        if (e.key === " ") { e.preventDefault(); go(); }
      }}
    >
      <div className="img-wrap">
        <img src={event.image} alt={event.title} loading="lazy" />
        <PastBadge>
          <FaCheckCircle aria-hidden="true" />
          {t("events.pastBadge")}
        </PastBadge>
      </div>
      <Body>
        {event.date && <DateBadge accent={accent}>{event.date}</DateBadge>}
        <CardTitle>{event.title}</CardTitle>
        {event.location && (
          <Meta>
            <FaMapMarkerAlt aria-hidden="true" />
            <span>{event.location}</span>
          </Meta>
        )}
        <CardLink accent={accent}>
          {t("events.viewDetails")} <FaArrowRight aria-hidden="true" />
        </CardLink>
      </Body>
    </Card>
  );
};
