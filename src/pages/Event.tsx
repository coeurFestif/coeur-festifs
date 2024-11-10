import React from "react";
import styled, { keyframes } from "styled-components";
import { useEventData } from "../data/events";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaCalendarAlt, FaMapMarkerAlt, FaInstagram, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.png";


// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Events Container with animated color-changing background
const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 40px;
  margin-top: 10px;
  color: #333;
  min-height: 100vh;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  background: linear-gradient(135deg, #a6c0fe, #f68084);
  animation: ${fadeIn} 1s ease-out both;
  background-size: 200% 200%;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

// Title and Subtitle Styling
const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  color: #4b0082;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1.2s ease-out both;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.6rem;
  color: #555;
  margin-bottom: 30px;
  max-width: 700px;
  line-height: 1.6;
  animation: ${fadeIn} 1.4s ease-out both;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 30px;
  }
`;

// Scrollable container for event cards
const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px;
  gap: 30px;
  scroll-snap-type: x mandatory;
  max-width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Card styling
const Card = styled.div<{ index: number }>`
  min-width: 320px;
  max-width: 340px;
  min-height: 480px;
  max-height: 600px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  scroll-snap-align: center;
  animation-delay: ${(props) => props.index * 0.1}s;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-bottom: 4px solid #4b0082;
    position: relative;
  }

  .info {
    padding: 20px;
    text-align: left;
  }

  h2 {
    font-size: 1.6rem;
    color: #4b0082;
    margin-bottom: 10px;
  }

  .date,
  .location {
    font-size: 1rem;
    display: flex;
    align-items: center;
    color: #888;
    margin-bottom: 8px;

    svg {
      margin-right: 8px;
      color: #4b0082;
    }
  }

  .description {
    font-size: 1rem;
    color: #555;
    line-height: 1.4;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    min-width: 90%;
    margin-bottom: 20px;
  }
`;

// No Events Message Styling
const NoEventsMessage = styled.p`
  font-size: 1.5rem;
  color: #888;
  margin-top: 50px;
`;

// Footer Section
const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #89f7fe, #66a6ff);
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

const FooterText = styled.p`
  font-size: 1.3rem;
  color: #333;
  line-height: 1.8;
  margin-bottom: 40px;
  max-width: 700px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 40px;

  a {
    color: #4b0082;
    font-size: 2.5rem;
    transition: transform 0.3s ease, color 0.3s ease;
    filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));

    &:hover {
      transform: scale(1.2);
      color: #5d00a3;
    }
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #4b0082;
  color: white;
  font-size: 1.2rem;
  padding: 14px 28px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  gap: 10px;

  &:hover {
    background-color: #5d00a3;
    transform: translateY(-5px);
  }

  svg {
    font-size: 1.5rem;
  }
`;

// Main Events Component
export const Events = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const events = useEventData();

  // Filter out unavailable events
  const availableEvents = events.filter(event => event.isAvailable);

  const handleCardClick = (eventId: string | number) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <>
      <EventsContainer>
        <Title>{t("events.title")}</Title>
        <Subtitle>{t("events.subtitle")}</Subtitle>

        {availableEvents.length > 0 ? (
          <ScrollContainer>
            {availableEvents.map((event, index) => (
              <Card key={event.id} index={index} onClick={() => handleCardClick(event.id)}>
                <img src={logo} alt={event.title} />
                <div className="info">
                  <h2>{event.title}</h2>
                  <div className="date">
                    <FaCalendarAlt /> {event.date}
                  </div>
                  <div className="location">
                    <FaMapMarkerAlt /> {event.location}
                  </div>
                  <p className="description">{event.description}</p>
                </div>
              </Card>
            ))}
          </ScrollContainer>
        ) : (
          <NoEventsMessage>{t("events.noEventsMessage")}</NoEventsMessage>
        )}
      </EventsContainer>

      <FooterContainer>
        <FooterText>{t("events.Footer.desc")}</FooterText>
        <SocialIcons>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="mailto:Cœurs.festifs@gmail.com">
            <FaEnvelope />
          </a>
        </SocialIcons>
        <Button>{t("events.Footer.contact")}</Button>
      </FooterContainer>
    </>
  );
};
