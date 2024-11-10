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
`;

// Light overlay for text readability
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  backdrop-filter: blur(4px);
  z-index: -1;
`;

// Main container for content
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  padding: 0 20px;
  color: #333;
  text-align: center;
`;

// Hero section content
const HeroContent = styled.div`
  max-width: 800px;
  padding: 20px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;


// Logo styling with larger size, glow effect, and animation
const Logo = styled.img`
  width: 50%;
  height: 50%;
  margin-bottom: 25px;
  margin-top: 50px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.5);
  @media (min-width: 768px) {
    width: 300px;
  }
`;

// Title styling with modern shadow
const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: bold;
  margin: 15px 0;
  color: #ff6347;
  text-shadow: 1px 2px 3px rgba(255, 165, 122, 0.4);

  @media (min-width: 768px) {
    font-size: 3.4rem;
  }
`;

// Subtitle with clean, professional spacing
const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 20px;
  line-height: 1.6;
  color: #555;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

// Button with sleeker style and soft shadow
const Button = styled.button`
  padding: 12px 28px;
  background: linear-gradient(90deg, #ff9a9e, #fad0c4);
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 10px rgba(255, 145, 145, 0.3);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 15px rgba(255, 145, 145, 0.4);
  }

  &:focus {
    outline: none;
  }
`;

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
        <Logo src={logo} alt="event logo" />
        <Title>
        {t("homepage.title")}
        </Title>
        <Subtitle>
          {t("homepage.subtitle")}
        </Subtitle>
        <Button onClick={() => navigate("/events")}>Explore</Button>
      </HeroContent>
    </Container>
  );
};
