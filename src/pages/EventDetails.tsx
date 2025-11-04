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

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Conteneur principal avec un fond en dégradé
const Container = styled.div`
  padding: 40px 20px;
  background: linear-gradient(135deg, rgb(255, 224, 250), rgb(159, 181, 242));
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Wrapper intérieur pour centrer le contenu avec une largeur maximale
const InnerWrapper = styled.div`
  max-width: 1000px;
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  margin-top: 40px;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
    gap: 30px;
  }
`;

// Section des détails de l'événement avec une animation à gauche
const EventDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${fadeInLeft} 0.8s ease-out;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

// Titre stylisé avec effet de gradient
const Title = styled.h1`
  font-size: 2.8rem;
  background: linear-gradient(135deg, rgb(225, 123, 132), rgb(159, 181, 242));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: bold;
  margin: 0 0 15px 0;
  line-height: 1.2;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    text-align: center;
  }
`;

// Sous-titre avec une animation
const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin: 0 0 30px 0;
  line-height: 1.7;
  max-width: 450px;
  text-align: left;
  animation: ${fadeInLeft} 1s ease-out 0.3s both;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

// Informations sur l'événement avec design amélioré
const EventInfo = styled.div`
  font-size: 1rem;
  color: #444;
  margin-top: 30px;
  text-align: left;
  width: 100%;
  // background: rgba(255, 255, 255, 0.6);
  padding: 20px;
  border-radius: 12px;
  border-left: 4px solid rgb(225, 123, 132);
  animation: ${fadeInScale} 0.8s ease-out 0.6s both;

  p {
    margin: 12px 0;
    font-weight: 600;
    display: flex;
    align-items: center;

    strong {
      color: rgb(225, 123, 132);
      min-width: 90px;
      margin-right: 10px;
    }

    span {
      font-weight: normal;
      color: #666;
      flex: 1;
    }
  }

  @media (max-width: 768px) {
    text-align: center;

    p {
      flex-direction: column;
      gap: 5px;

      strong {
        min-width: auto;
        margin-right: 0;
      }
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
    max-width: 400px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    transition: all 0.4s ease-in-out;
    border: 3px solid rgba(255, 255, 255, 0.8);

    &:hover {
      transform: scale(1.03) rotate(1deg);
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 768px) {
    margin-top: 0;

    img {
      max-width: 400px;
    }
  }
`;

// Section pour les partenaires et sponsors améliorée
const PartnerSection = styled.div`
  margin: 20px 0;
  width: 100%;

  .section-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: rgb(225, 123, 132);
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    text-align: start;
    padding-bottom: 8px;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30px;
      height: 2px;
      border-radius: 1px;
    }

    @media (max-width: 768px) {
      text-align: center;

      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .items-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 768px) {
      justify-content: center;
    }

    li {
      background: linear-gradient(
        135deg,
        rgba(225, 123, 132, 0.1),
        rgba(159, 181, 242, 0.1)
      );
      color: rgb(225, 123, 132);
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
      border: 2px solid rgba(225, 123, 132, 0.3);
      transition: all 0.3s ease;
      cursor: default;

      &:hover {
        background: linear-gradient(
          135deg,
          rgba(225, 123, 132, 0.2),
          rgba(159, 181, 242, 0.2)
        );
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(225, 123, 132, 0.3);
        border-color: rgb(225, 123, 132);
      }
    }
  }
`;

// Section pour les images des partenaires
const PartnerImagesSection = styled.div`
  margin: 5px 0;
  width: 100%;
  .images-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    flex-wrap: wrap;
    gap: 25px;
    padding: 0;
    margin: 0;

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 20px;
    }
  }

  .partner-image {
    width: 100px;
    height: 80px;
    object-fit: contain;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    margin-right:10px;
    padding: 10px;
    border: 2px solid rgba(159, 181, 242, 0.2);
    transition: all 0.3s ease;
    animation: ${fadeInScale} 0.6s ease-out;

    &:hover {
      transform: scale(1.05);
      border-color: rgb(159, 181, 242);
      box-shadow: 0 8px 20px rgba(159, 181, 242, 0.3);
      background: rgba(255, 255, 255, 1);
    }
  }
`;

// Message d'erreur stylisé
const ErrorMessage = styled.div`
  text-align: center;
  padding: 60px 20px;

  h1 {
    font-size: 2rem;
    color: rgb(225, 123, 132);
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    margin: 0;
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
        <ErrorMessage>
          <h1>{t("events.notFound") || "Event not found"}</h1>
          <p>
            {t("events.notFoundDescription") ||
              "The event you're looking for doesn't exist or has been removed."}
          </p>
        </ErrorMessage>
      </Container>
    );
  }

  const renderPartnersList = (
    items: string[] | undefined,
    titleKey: string
  ) => {
    if (!items || items.length === 0) return null;

    return (
      <PartnerSection>
        <div className="section-title">{t(titleKey)}</div>
        <ul className="items-list" role="list">
          {items.map((item: string, index: number) => (
            <li key={`${titleKey}-${index}`} role="listitem">
              {item}
            </li>
          ))}
        </ul>
      </PartnerSection>
    );
  };

  const renderPartnerImages = (
    images: string[] | undefined,
    titleKey: string
  ) => {
    if (!images || images.length === 0) return null;

    return (
      <PartnerImagesSection>
        <div>
          {images.map((img: string, index: number) => (
            <img
              key={`${titleKey}-img-${index}`}
              src={img}
              alt={`${titleKey} ${index + 1}`}
              className="partner-image"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          ))}
        </div>
      </PartnerImagesSection>
    );
  };

  return (
    <Container>
      <InnerWrapper>
        <EventDetails>
          <Title>{event.title}</Title>
          <Subtitle>{event.description}</Subtitle>

          {/* Render partners list */}
          {renderPartnersList(event.partner, "events.partner")}

          {/* Render sponsors list */}
          {renderPartnersList(event.Sponsor, "events.sponsor")}
          {/* Render images */}
          <div>
            {renderPartnerImages(event.partnerImg, "events.partnerImages")}
            {renderPartnerImages(event.SponsorImg, "events.sponsorImages")}
          </div>

         {event.date && event.location && (
           <EventInfo>
             <p>
               <strong>{t("date") || "Date"}:</strong>
               <span>{event.date}</span>
             </p>
             <p>
              <strong>{t("location") || "Location"}:</strong>
              <span>{event.location}</span>
            </p>
          </EventInfo>
          )}
        </EventDetails>

        <ImageSection>
          <img
            style={{ width: "100%", height: "100%" }}
            src={event.image}
            alt={event.title}
          />
        </ImageSection>
      </InnerWrapper>
    </Container>
  );
};
