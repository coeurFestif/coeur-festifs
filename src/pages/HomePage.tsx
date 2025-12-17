import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import backgroundVideo from "../assets/backgroundVideo.mp4";
import { useTranslation } from "react-i18next";
import carrefour from "../assets/CJE.jpg";
import repit from "../assets/repitProvidence.png";
import promis from "../assets/promis.png";
import maisonCulture from "../assets/maisonCulture.png";
import fondationDrJulien from "../assets/fondationDrJulien.png";
import mountainSights from "../assets/mountainSights.png";
import garageMusique from "../assets/garageMusique.png";
import minimolars from "../assets/minimolars.png";

// Animations
const fadeIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const slideUp = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(40px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

// Full-screen video background
const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
  opacity: 0.85;
  pointer-events: none;
`;

// Light overlay for text readability
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  backdrop-filter: blur(5px);
  z-index: -1;
`;

// Main container for content with section delimitations
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

// Hero Container
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  height: 800px;
  width: 100%;
`;

// Hero section content
const HeroContent = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 20px;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

// Logo styling with larger size and soft shadow
const Logo = styled.img`
  width: 180px;
  height: 180px;
  margin-bottom: 20px;
  position: relative;
  border-radius: 50%;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

// Title with responsive design
const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  margin: 15px 0;
  color: #ff6347;
  text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  padding-bottom: 30px;

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 2.6rem;
  }
`;

// Button with improved styling
const Button = styled.button`
  padding: 15px 30px;
  background: linear-gradient(135deg, #ff9a9e, #fad4c4);
  color: #fff;
  border: none;
  border-radius: 15px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 8px 15px rgba(255, 145, 145, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 20px rgba(255, 145, 145, 0.4);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 165, 165, 0.4);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Partnership Section Styles
const PartnershipSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 40px;
  background: white;
  color: white;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
        circle at 20% 30%,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 60%
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(59, 130, 246, 0.08) 0%,
        transparent 60%
      );
    animation: rotate 30s linear infinite;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const PartnershipTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.95);
  margin-bottom: 50px;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  position: relative;
  animation: ${fadeIn} 1.2s ease-out 0.2s both;

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(0, 0, 0, 0.6) 50%,
      transparent 100%
    );
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const PartnerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    max-width: 600px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 25px;
    max-width: 300px;
  }
`;

const PartnerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(247, 126, 126, 0.64);
  padding: 50px 30px;
  border: 1px solid rgba(218, 149, 149, 0);
  backdrop-filter: blur(20px);
  height: 220px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  animation: ${slideUp} 1s ease-out both;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgb(255, 255, 255) 50%,
      transparent 100%
    );
    transition: left 0.8s ease;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      rgba(139, 92, 246, 0.6) 0%,
      rgba(59, 130, 246, 0.6) 50%,
      rgba(236, 72, 153, 0.6) 100%
    );
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-12px);
    border-color: rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.04);

    &::before {
      left: 100%;
    }

    &::after {
      transform: scaleX(1);
    }
  }

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
  }
  &:nth-child(6) {
    animation-delay: 0.6s;
  }
`;

const PartnerIcon = styled.div`
  width: 120px;
  height: 120px;
  background: rgb(255, 255, 255);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  transition: all 0.4s ease;
  font-size: 3rem;
  animation: ${float} 4s ease-in-out infinite;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      rgba(139, 92, 246, 0.1) 90deg,
      transparent 180deg
    );
    animation: rotate 6s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${PartnerCard}:hover & {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.15);
    transform: scale(1.1);

    &::before {
      opacity: 1;
    }
  }
`;

const PartnerName = styled.h4`
  font-size: 0.95rem;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  line-height: 1.4;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0;
  transition: color 0.3s ease;

  ${PartnerCard}:hover & {
    color: rgb(0, 0, 0);
  }
`;

// HomePage Component
export const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Container>
      {/* Hero Section */}
      <HeroContainer>
        {/* Background video */}
        <VideoBackground autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
        </VideoBackground>

        {/* Light overlay */}
        <Overlay />

        {/* Hero content */}
        <HeroContent>
          <Logo src={logo} alt="Event Logo" />
          <Title>{t("homepage.title")}</Title>
          <Button onClick={() => navigate("/coeur-festifs/events")}>
            {t("homepage.explore")}
          </Button>
        </HeroContent>
      </HeroContainer>

      {/* Partnership Section */}
      <PartnershipSection>
        <PartnershipTitle>
          {t("homepage.partnershipTitle") || "Our Partners"}
        </PartnershipTitle>
        <PartnerGrid>
          <PartnerCard>
            <PartnerIcon>
              <img
                src={carrefour}
                style={{ width: "100%", height: "100%" }}
                alt="Carrefour Jeunesse Emploi Côte-des-Neiges"
              />
            </PartnerIcon>
            <PartnerName>
              Carrefour Jeunesse Emploi Côte-des-Neiges, Outremont et Ville
              Mont-Royal
            </PartnerName>
          </PartnerCard>
          <PartnerCard>
            <PartnerIcon>
              <img
                src={repit}
                style={{ width: "100%", height: "70%" }}
                alt="Répit Providence"
              />
            </PartnerIcon>
            <PartnerName>Répit Providence</PartnerName>
          </PartnerCard>
          <PartnerCard>
            <PartnerIcon>
              <img
                src={mountainSights}
                style={{ width: "100%", height: "100%" }}
                alt="Centre communautaire Mountain Sights"
              />
            </PartnerIcon>
            <PartnerName>Centre communautaire Mountain Sights</PartnerName>
          </PartnerCard>
          <PartnerCard>
            <PartnerIcon>
              <img
                src={promis}
                style={{ width: "100%", height: "50%" }}
                alt="PROMIS"
              />
            </PartnerIcon>
            <PartnerName>PROMIS</PartnerName>
          </PartnerCard>
          <PartnerCard>
            <PartnerIcon>
              <img
                src={maisonCulture}
                style={{ width: "100%", height: "60%" }}
                alt="Maison de la culture de Côte-des-Neiges"
              />
            </PartnerIcon>
            <PartnerName>Maison de la culture de Côte-des-Neiges</PartnerName>
          </PartnerCard>
          <PartnerCard>
            <PartnerIcon>
              <img
                src={fondationDrJulien}
                style={{ width: "100%", height: "40%" }}
                alt="Fondation du Dr Julien"
              />
            </PartnerIcon>
            <PartnerName>Fondation du Dr Julien</PartnerName>
          </PartnerCard>
          <PartnerCard>
            <PartnerIcon>
              <img
                src={garageMusique}
                style={{ width: "100%", height: "90%" }}
                alt="Garage à Musique"
              />
            </PartnerIcon>
            <PartnerName>Garage à Musique</PartnerName>
          </PartnerCard>
          <PartnerCard>
            <PartnerIcon>
              <img
                src={minimolars}
                style={{ width: "80%", height: "80%" }}
                alt="Minimolars"
              />
            </PartnerIcon>
            <PartnerName>Mini Molars Club</PartnerName>
          </PartnerCard>
        </PartnerGrid>
      </PartnershipSection>
    </Container>
  );
};
