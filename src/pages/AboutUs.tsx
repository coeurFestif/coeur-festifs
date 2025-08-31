import React from "react";
import styled, { keyframes } from "styled-components";
import Clara from "../assets/Clara.jpg";
import Ariane from "../assets/Ariane.jpeg";
import commonPic from "../assets/commonPic.jpg";
import purple from "../assets/purple.png";
import { useTranslation } from "react-i18next";

// Sophisticated animations
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

const morphIn = keyframes`
  from { 
    opacity: 0; 
    transform: scale(0.9) rotateX(10deg); 
    filter: blur(4px);
  }
  to { 
    opacity: 1; 
    transform: scale(1) rotateX(0deg); 
    filter: blur(0px);
  }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
  50% { box-shadow: 0 0 40px rgba(255, 255, 255, 0.2), 0 0 60px rgba(139, 92, 246, 0.1); }
`;

const textReveal = keyframes`
  from { 
    background-size: 0% 100%;
  }
  to { 
    background-size: 100% 100%;
  }
`;

// Main container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #0a0a0a;
  position: relative;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 40px;
  margin-top: 0;
  color: white;
  min-height: 100vh;
  width: 100%;
  text-align: center;
  position: relative;
  overflow: hidden;
  background-image: url(${purple});
  background-size: cover;
  // background: linear-gradient(
  //   135deg,
  //   rgba(252, 185, 243, 0.84) 0%,
  //   rgba(206, 153, 199, 0.84) 50%,
  //   rgba(252, 185, 243, 0.84) 100%
  // );

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 30% 20%,
        rgba(139, 92, 246, 0.15) 0%,
        transparent 60%
      ),
      radial-gradient(
        circle at 70% 80%,
        rgba(59, 130, 246, 0.1) 0%,
        transparent 60%
      );
    pointer-events: none;
  }

  animation: ${fadeIn} 1.5s ease-out both;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const Section = styled.section<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bgColor};
  color: #1a1a1a;
  width: 100%;
  min-height: 100vh;
  padding: 120px 40px;
  text-align: center;
  animation: ${fadeIn} 1.2s ease-out both;
  position: relative;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 100;
  color: #0a0a0a;
  margin-bottom: 40px;
  letter-spacing: -0.05em;
  line-height: 0.9;
  text-transform: uppercase;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      #8b5cf6 50%,
      transparent 100%
    );
    animation: ${textReveal} 1.5s ease-out 0.5s both;
  }

  @media (max-width: 480px) {
    font-size: 2.8rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const AboutUsContainer = styled.div`
  max-width: 900px;
  animation: ${morphIn} 1s ease-out 0.3s both;

  @media (max-width: 480px) {
    width: 95%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 90%;
  }
`;

const Subtitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 100;
  color: white;
  margin-bottom: 80px;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  position: relative;
  animation: ${morphIn} 1s ease-out 0.2s both;

  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      white 90%,
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

const Header2 = styled.h2`
  font-size: 2.8rem;
  font-weight: 200;
  color: #0a0a0a;
  margin-bottom: 30px;
  letter-spacing: -0.02em;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  max-width: 700px;
  margin-bottom: 20px;
  font-weight: 300;
  letter-spacing: 0.01em;

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const PresidentsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  margin-top: 40px;
  align-items: stretch;

  @media (max-width: 768px) {
    gap: 40px;
    flex-direction: column;
    align-items: center;
  }
`;

const PresidentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(70, 63, 63, 0.3);
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  width: 300px;
  height: 500px;
  backdrop-filter: blur(10px);
  position: relative;
  animation: ${morphIn} 1s ease-out both;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(139, 92, 246, 0.1) 0%,
      rgba(59, 130, 246, 0.05) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 255, 255, 0.2);
    animation: ${glow} 2s ease-in-out infinite;

    &::before {
      opacity: 1;
    }
  }

  &:nth-child(1) {
    animation-delay: 0.3s;
  }

  &:nth-child(2) {
    animation-delay: 0.5s;
  }

  @media (max-width: 480px) {
    width: 280px;
    height: 350px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 320px;
    height: 380px;
  }
`;

const GlobalPresidentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.4s ease;
  width: 100%;
  max-width: 700px;
  height: 350px;
  backdrop-filter: blur(15px);
  margin-bottom: 80px;
  position: relative;
  animation: ${morphIn} 1s ease-out 0.1s both;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    transition: left 0.6s ease;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.25);

    &::after {
      left: 100%;
    }
  }

  @media (max-width: 480px) {
    height: 250px;
    width: 95%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    height: 300px;
    width: 85%;
  }
`;

const PresidentName = styled.h3`
  font-size: 1.2rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  margin-top: auto;
  text-align: center;
  line-height: 1.4;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  position: relative;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 100%
    );
  }
`;

const PresidentImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: all 0.4s ease;
  filter: grayscale(30%) brightness(0.8);
  position: relative;

  &:hover {
    filter: grayscale(0%) brightness(1);
  }
`;

const GlobalViewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease;
  filter: brightness(0.7) contrast(1.1);

  &:hover {
    filter: brightness(0.9) contrast(1.2);
    transform: scale(1.02);
  }
`;

const MissionValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 80px 60px;
  border: none;
  text-align: left;
  margin-bottom: 0;
  width: 100%;
  max-width: 900px;
  position: relative;
  animation: ${fadeIn} 1s ease-out both;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #8b5cf6 0%, #3b82f6 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:nth-child(1) {
    animation-delay: 0.2s;
    margin-bottom: 60px;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 80px;
  }

  &:nth-child(2) {
    animation-delay: 0.4s;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 50px 30px;
    text-align: center;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    padding: 60px 40px;
    text-align: center;
  }
`;

// About Us Component
export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        {/* About Us Section */}
        <Section id="about" bgColor="white">
          <AboutUsContainer>
            <Title>{t("aboutUs.title")}</Title>
            <Text>{t("aboutUs.desc")}</Text>
          </AboutUsContainer>
        </Section>

        {/* Presidents Section */}
        <AboutContainer>
          <Section id="presidents" bgColor="none">
            <Subtitle>{t("aboutUs.presidentsTitle")}</Subtitle>
            <GlobalPresidentCard>
              <GlobalViewImage src={commonPic} />
            </GlobalPresidentCard>
            <PresidentsContainer>
              <PresidentCard>
                <PresidentImage src={Ariane} />
                <PresidentName>
                  Ariane Manekeng Guimfack
                  <Text style={{ fontSize: "1rem", color: "white" }}>
                    {t("aboutUs.presidentsText")}
                  </Text>
                </PresidentName>
              </PresidentCard>
              <PresidentCard>
                <PresidentImage src={Clara} />
                <PresidentName>
                  Clara Maria Bridi
                  <Text style={{ fontSize: "1rem", color: "white" }}>
                    {t("aboutUs.presidentsText")}
                  </Text>
                </PresidentName>
              </PresidentCard>
            </PresidentsContainer>
          </Section>
        </AboutContainer>

        {/* Mission Section */}
        <Section id="mission" bgColor="linear-gradient(165deg, #fff, #fff)">
          <MissionValueContainer>
            <Header2>{t("aboutUs.missionTitle")}</Header2>
            <Text>{t("aboutUs.missionText")}</Text>
          </MissionValueContainer>
          <MissionValueContainer>
            <Header2>{t("aboutUs.valuesTitle")}</Header2>
            <Text>{t("aboutUs.valuesText")}</Text>
          </MissionValueContainer>
        </Section>
      </Container>
    </>
  );
};
