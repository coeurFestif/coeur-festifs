import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { Event } from "../schema/event";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Shell = styled.div`
  display: flex;
  align-items: stretch;
  gap: var(--sp-8);
  background: var(--c-white);
  border-radius: var(--r-lg);
  box-shadow: var(--sh-md);
  overflow: hidden;
  animation: ${fadeUp} 0.5s var(--ease-out) both;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const PosterFrame = styled.div`
  flex: 0 0 320px;
  background: var(--c-neutral-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--sp-4);

  img {
    width: 100%;
    height: auto;
    max-height: 420px;
    object-fit: contain;
    border-radius: var(--r-sm);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    flex: none;
    padding: var(--sp-6) var(--sp-6) 0;
  }
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--sp-3);
  padding: var(--sp-8) var(--sp-8) var(--sp-8) 0;

  @media (max-width: 768px) {
    padding: var(--sp-6);
  }
`;

const Eyebrow = styled.span`
  font-family: var(--f-body);
  font-weight: 800;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-primary);
`;

const DateRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--sp-2);
`;

const Day = styled.span`
  font-family: var(--f-display);
  font-weight: 700;
  font-size: 2.6rem;
  line-height: 1;
  color: var(--c-n900);
`;

const MonthYear = styled.span`
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 1rem;
  color: var(--c-n600);
  text-transform: capitalize;
`;

const Title = styled.h2`
  font-family: var(--f-display);
  font-weight: 700;
  font-size: clamp(1.5rem, 3vw, 2rem);
  line-height: 1.15;
  color: var(--c-n900);
  margin: 0;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--f-body);
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--c-n600);

  svg { color: var(--c-primary); flex-shrink: 0; }
`;

const RegisterBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  align-self: flex-start;
  margin-top: var(--sp-2);
  background: var(--c-primary);
  color: var(--c-white);
  font-family: var(--f-body);
  font-weight: 800;
  font-size: 0.95rem;
  padding: 13px 28px;
  border-radius: var(--r-full);
  text-decoration: none;
  transition: background 150ms ease, transform 150ms var(--ease-spring);

  &:hover { background: var(--c-primary-dark); transform: translateY(-1px); }
  &:active { animation: heartBeat 600ms cubic-bezier(0.34, 1.56, 0.64, 1); }

  @keyframes heartBeat {
    0% { transform: scale(1); }
    40% { transform: scale(1.12); }
    100% { transform: scale(1); }
  }

  @media (prefers-reduced-motion: reduce) {
    &:active { animation: none; }
  }
`;

function splitDate(dateStr: string): { day: string; rest: string } {
  const dayMatch = dateStr.match(/\d{1,2}/);
  const day = dayMatch?.[0] ?? "—";
  const rest = dateStr.replace(day, "").replace(/^[\s,]+|[\s,]+$/g, "").trim() || "—";
  return { day, rest };
}

interface FeaturedEventProps {
  event: Event;
}

export const FeaturedEvent: React.FC<FeaturedEventProps> = ({ event }) => {
  const { t } = useTranslation();
  const { day, rest } = splitDate(event.date);

  return (
    <Shell>
      <PosterFrame>
        <img src={event.image} alt={event.title} loading="eager" />
      </PosterFrame>
      <Info>
        <Eyebrow>{t("events.filterUpcoming")}</Eyebrow>
        {event.date && (
          <DateRow>
            <Day>{day}</Day>
            <MonthYear>{rest}</MonthYear>
          </DateRow>
        )}
        <Title>{event.title}</Title>
        {event.location && (
          <Meta>
            <FaMapMarkerAlt aria-hidden="true" />
            <span>{event.location}</span>
          </Meta>
        )}
        <RegisterBtn to={`/coeur-festifs/event/${event.id}`}>
          {t("events.registerCta")} <FaArrowRight aria-hidden="true" />
        </RegisterBtn>
      </Info>
    </Shell>
  );
};
