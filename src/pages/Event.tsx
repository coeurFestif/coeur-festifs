import React from "react";
import styled, { keyframes } from "styled-components";
import { useEventData } from "../data/events";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import eventsPicture from "../assets/events.jpg";

// Enhanced animations
const fadeIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(-20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

// Main container with improved responsiveness
const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  margin-top: 30px;
  color: #4a4a4a;
  min-height: 100vh;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  background-image: url(${eventsPicture});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  animation: ${fadeIn} 1.2s ease-out both;

  /* Improved overlay for better text readability */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(2px);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
    background-attachment: scroll;
  }
`;

// Enhanced title with better responsive behavior
const Title = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  margin-top: 2rem;
  color: #000;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1.2s ease-out both;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

// Improved scrollable container
const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px 0;
  gap: 30px;
  scroll-snap-type: x mandatory;
  max-width: 100%;
  width: 100%;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #db2f2f;
    border-radius: 4px;

    &:hover {
      background: #c62828;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    overflow-x: visible;
    padding: 20px 10px;
  }
`;

// Enhanced card with better animations and layout
const Card = styled.div<{ index: number }>`
  min-width: 320px;
  max-width: 360px;
  min-height: 520px;
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  color: #2d3a4b;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${slideInFromLeft} ${(props) => 0.6 + props.index * 0.2}s ease-out
    both;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    animation: ${floatAnimation} 2s ease-in-out infinite;
  }

  .image-container {
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  .info {
    padding: 25px;
    text-align: center;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #1a1a1a;
    font-weight: 600;
    line-height: 1.3;
  }

  .date,
  .location {
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #636e72;
    margin-bottom: 12px;
    font-weight: 500;

    svg {
      margin-right: 10px;
      color: #db2f2f;
      font-size: 1.1rem;
    }
  }

  .description {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
    margin: 20px 0;
    flex-grow: 1;
  }

  @media (max-width: 768px) {
    min-width: 85%;
    max-width: 85%;
    margin-bottom: 25px;

    h2 {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 480px) {
    min-width: 90%;
    max-width: 90%;

    .info {
      padding: 20px;
    }
  }
`;

// Enhanced partner/sponsor sections
const PartnerSection = styled.div`
  margin: 15px 0 10px 0;

  .section-title {
    font-size: 1rem;
    font-weight: 600;
    color: #2d3a4b;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .items-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      background: rgba(219, 47, 47, 0.1);
      color: #db2f2f;
      padding: 6px 12px;
      border-radius: 15px;
      font-size: 0.9rem;
      font-weight: 500;
      border: 1px solid rgba(219, 47, 47, 0.2);
      transition: all 0.3s ease;

      &:hover {
        background: rgba(219, 47, 47, 0.2);
        transform: translateY(-2px);
      }
    }
  }
`;

// Enhanced button with better accessibility
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #db2f2f, #e63946);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 14px 28px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  margin: 20px auto 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 20px rgba(219, 47, 47, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #c62828, #d32f2f);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(219, 47, 47, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  svg {
    margin-left: 8px;
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

// Enhanced no events message
const NoEventsMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  p {
    font-size: 1.5rem;
    color: #666;
    margin-bottom: 20px;
    font-weight: 500;
  }

  .emoji {
    font-size: 3rem;
    margin-bottom: 15px;
  }
`;

// Enhanced footer with better styling
const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #89f7fe, #66a6ff);
  text-align: center;
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.05);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
  }
`;

const FooterText = styled.p`
  color: #1a1a1a;
  line-height: 1.8;
  margin-bottom: 40px;
  max-width: 700px;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 40px;

  a {
    color: #db2f2f;
    font-size: 2.5rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.1));
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 3px;
      background: #db2f2f;
      transition: width 0.3s ease;
    }

    &:hover {
      transform: translateY(-5px) scale(1.15);
      color: #c62828;

      &::after {
        width: 100%;
      }
    }

    &:focus {
      outline: 2px solid #db2f2f;
      outline-offset: 4px;
      border-radius: 4px;
    }
  }
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #db2f2f, #e63946);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(219, 47, 47, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #c62828, #d32f2f);
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(219, 47, 47, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:focus {
    outline: 2px solid #fff;
    outline-offset: 4px;
  }

  svg {
    margin-left: 10px;
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

// Loading skeleton for better UX
const CardSkeleton = styled.div`
  min-width: 320px;
  max-width: 360px;
  min-height: 520px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 20px;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

// Main Events Component with improvements
export const Events = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const events = useEventData();

  // Filter out unavailable events
  const availableEvents = events.filter((event) => event.isAvailable);

  const handleCardClick = (eventId: string | number) => {
    navigate(`/coeur-festifs/event/${eventId}`);
  };

  const handleKeyPress = (
    event: React.KeyboardEvent,
    eventId: string | number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardClick(eventId);
    }
  };

  const renderPartnersList = (
    items: string[] | undefined,
    titleKey: string
  ) => {
    if (!items || items.length === 0) return null;

    return (
      <PartnerSection>
        <div className="section-title">{t(titleKey)}</div>
        <ul className="items-list" role="list">
          {items.map((item, index) => (
            <li key={`${titleKey}-${index}`} role="listitem">
              {item}
            </li>
          ))}
        </ul>
      </PartnerSection>
    );
  };

  return (
    <>
      <EventsContainer role="main">
        <Title>{t("events.title")}</Title>

        {availableEvents.length > 0 ? (
          <ScrollContainer role="region" aria-label={t("events.title")}>
            {availableEvents.map((event, index) => (
              <Card
                key={event.id}
                index={index}
                onClick={() => handleCardClick(event.id)}
                onKeyDown={(e) => handleKeyPress(e, event.id)}
                tabIndex={0}
                role="button"
                aria-label={`${t("events.viewDetails")} ${event.title}`}
              >
                <div className="image-container">
                  <img
                    src={event.image}
                    alt={`${event.title} - ${event.location}`}
                    loading="lazy"
                  />
                </div>

                <div className="info">
                  <div>
                    <h2>{event.title}</h2>

                    <div
                      className="date"
                      role="text"
                      aria-label={`Date: ${event.date}`}
                    >
                     {event.date && <FaCalendarAlt aria-hidden="true" />}
                      {event.date && <span>{event.date}</span>}
                    </div>

                    <div
                      className="location"
                      role="text"
                      aria-label={`Location: ${event.location}`}
                    >
                     {event.location && <FaMapMarkerAlt aria-hidden="true" />}
                      {event.location && <span>{event.location}</span>}
                    </div>

                    {event.description && <p className="description">{event.description}</p>}

                    {renderPartnersList(event.partner, "events.partner")}
                    {renderPartnersList(event.Sponsor, "events.sponsor")}
                  </div>

                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(event.id);
                    }}
                    aria-label={`${t("events.viewDetails")} ${event.title}`}
                  >
                    <span>{t("events.viewDetails")}</span>
                    <FaExternalLinkAlt aria-hidden="true" />
                  </Button>
                </div>
              </Card>
            ))}
          </ScrollContainer>
        ) : (
          <NoEventsMessage role="status" aria-live="polite">
            <div className="emoji" role="img" aria-label="Calendar">
              📅
            </div>
            <p>{t("events.noEventsMessage")}</p>
          </NoEventsMessage>
        )}
      </EventsContainer>

      <FooterContainer role="contentinfo">
        <FooterText>{t("events.Footer.desc")}</FooterText>

        <SocialIcons role="navigation" aria-label="Social media links">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
          >
            <FaInstagram aria-hidden="true" />
          </a>
          <a
            href="mailto:coeurs.festifs@gmail.com"
            aria-label="Send us an email"
          >
            <FaEnvelope aria-hidden="true" />
          </a>
        </SocialIcons>

        <ContactButton
          href="mailto:coeurs.festifs@gmail.com"
          aria-label="Contact us via email"
        >
          <span>{t("events.Footer.contact")}</span>
          <FaEnvelope aria-hidden="true" />
        </ContactButton>
      </FooterContainer>
    </>
  );
};
