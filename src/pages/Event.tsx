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
} from "react-icons/fa";
import logo from "../assets/logo.png";
import eventsPicture from "../assets/events.jpg";

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
  justify-content: center;
  padding: 80px 40px;
  margin-top: 30px;
  color: #4a4a4a; /* Updated to a soft gray for better readability on light backgrounds */
  min-height: 100vh;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  background-image: url(${eventsPicture});
  background-size: cover;
  background-position: center;
  animation: ${fadeIn} 1.2s ease-out both;
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

// Title and Subtitle Styling
const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  margin-top: 2rem;
  color: #000;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1.2s ease-out both;

  /* Small phones (portrait) */
  @media (max-width: 480px) {
    font-size: 2.2rem; /* Smaller font size for phones */
  }

  /* Phones and small tablets (landscape and portrait) */
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 3rem;
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
  max-width: 360px;
  min-height: 500px;
  background-color: #fff; /* Light blue background */
  color: #2d3a4b; /* Dark blue-gray text for better contrast */
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding-bottom: 20px;

  /* Hover effect */
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .info {
    padding: 20px;
    text-align: center;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
    color: #000;
  }

  .date,
  .location {
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #636e72;
    margin-bottom: 8px;

    svg {
      margin-right: 8px;
      color: #db2f2f;
    }
  }

  .description {
    font-size: 1rem;
    color: #444;
    line-height: 1.6;
    margin-top: 15px;
  }

  @media (max-width: 768px) {
    min-width: 90%;
    margin-bottom: 20px;
  }

  /* Small phones (portrait) */
  @media (max-width: 480px) {
    width: 45%;
    height: 500px;
  }

  /* Phones and small tablets (landscape and portrait) */
  @media (min-width: 481px) and (max-width: 768px) {
    width: 60%;
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
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
`;

const FooterText = styled.p`
  color: #000;
  line-height: 1.8;
  margin-bottom: 40px;
  max-width: 700px;
  font-size: 1.2rem;
  /* Small phones (portrait) */
  @media (max-width: 480px) {
    font-size: 1rem; /* Smaller font size for phones */
    width: 90%;
  }

  /* Phones and small tablets (landscape and portrait) */
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 1.9rem;
    width: 90%;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 40px;

  a {
    color: #db2f2f;
    font-size: 2.5rem;
    transition: transform 0.3s ease, color 0.3s ease;
    filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));

    &:hover {
      transform: scale(1.2);
      color: #db2f2f;
    }
  }
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #db2f2f; /* Red background */
  color: #fff;
  font-size: 1.2rem;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  margin-top: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e63946; /* Lighter red on hover */
    transform: translateY(-5px);
  }

  svg {
    margin-left: 8px;
    font-size: 1.5rem;
  }
`;

// Main Events Component
export const Events = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const events = useEventData();

  // Filter out unavailable events
  const availableEvents = events.filter((event) => event.isAvailable);

  const handleCardClick = (eventId: string | number) => {
    navigate(`/coeur-festifs/event/${eventId}`);
  };

  return (
    <>
      <EventsContainer>
        <Title>{t("events.title")}</Title>
        {availableEvents.length > 0 ? (
          <ScrollContainer>
            {availableEvents.map((event, index) => (
              <Card
                key={event.id}
                index={index}
                onClick={() => handleCardClick(event.id)}
              >
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
                <Button onClick={() => handleCardClick(event.id)}>
                  {t("events.viewDetails")}
                </Button>
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
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a href="mailto:cœurs.festifs@gmail.com">
            <FaEnvelope />
          </a>
        </SocialIcons>
        <Button href="mailto:cœurs.festifs@gmail.com">
          {t("events.Footer.contact")}
        </Button>
      </FooterContainer>
    </>
  );
};
