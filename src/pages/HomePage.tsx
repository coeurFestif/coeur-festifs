import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import backgroundVideo from "../assets/backgroundVideo.mp4";
import { useTranslation } from "react-i18next";

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
  pointer-events: none; /* Ensures it doesn't block interactions */
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
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  height: 800px;
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

  /* Small phones (portrait) */
  @media (max-width: 480px) {
    font-size: 2rem; /* Smaller font size for phones */
  }

  /* Phones and small tablets (landscape and portrait) */
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 2.5rem;
  }

  /* Tablets and larger screens */
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 2.6rem;
  }
`;

// Button with improved styling
const Button = styled.button`
  padding: 15px 30px;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  color: #fff;
  border: none;
  border-radius: 30px;
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

// HomePage Component
export const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Container>
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
    </Container>
  );
};
