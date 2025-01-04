import React from "react";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useEventData } from "../data/events";
import { useTranslation } from "react-i18next";
import repitProvidence from "../assets/repitProvidence.png";
import choco from "../assets/choco.jpg";




// Animation d'apparition pour les détails de l'événement
const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Conteneur principal avec un fond en dégradé
const Container = styled.div`
  padding: 40px 20px;
  background: linear-gradient(135deg,rgb(255, 224, 250),rgb(159, 181, 242));
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Wrapper intérieur pour centrer le contenu avec une largeur maximale
const InnerWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
`;

// Section des détails de l'événement avec une animation à gauche
const EventDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${fadeInLeft} 0.8s ease-out;

  .collaborator {
    height: 100px;
    width: 150px;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

// Ligne de séparation
const Divider = styled.div`
  width: 50px;
  height: 4px;
  background-color:rgb(225, 123, 132);
  margin-bottom: 20px;
  border-radius: 2px;
`;

// Titre stylisé
const Title = styled.h1`
  font-size: 2.5rem;
  color:rgb(0, 0, 0);
  font-weight: bold;
  margin: 0;
  line-height: 1.2;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Sous-titre avec une animation
const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 10px 0 20px;
  line-height: 1.6;
  max-width: 400px;
  text-align: left;
  animation: ${fadeInLeft} 1s ease-out 0.5s both;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// Informations sur l'événement
const EventInfo = styled.div`
  font-size: 1rem;
  color: #555;
  margin-top: 20px;
  text-align: left;
  p {
    margin: 8px 0;
    font-weight: 500;

    span {
      font-weight: normal;
      color: #666;
    }
  }
`;

// Section d'image avec une animation vers le haut
const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInUp} 0.8s ease-out;

  img {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const EventDetail = () => {
  const { id } = useParams();
  const events = useEventData();
  const event = events.find((event) => event.id === id);
  const { t } = useTranslation();

  if (!event) {
    return (
      <Container>
        <h1>Event not found</h1>
      </Container>
    );
  }

  return (
    <Container>
      <InnerWrapper>
        <EventDetails>
          <Divider />
          <Title>{event.title}</Title>
          <Subtitle>{event.description}</Subtitle>
          <Subtitle> {t("events.collaboration")}</Subtitle>
          <img
            className="collaborator"
            src={repitProvidence}
            alt="répit providence"
          />
          <EventInfo>
            <p>
              <strong>Date:</strong> <span>{event.date}</span>
            </p>
            <p>
              <strong>Location:</strong> <span>{event.location}</span>
            </p>
          </EventInfo>
        </EventDetails>
        <ImageSection>
          <img src={choco} alt={event.title} />
        </ImageSection>
      </InnerWrapper>
    </Container>
  );
};
