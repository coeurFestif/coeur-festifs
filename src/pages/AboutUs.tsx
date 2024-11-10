import React from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";

// Fade-in animation for sections
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Main container for full-width sections
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Section = styled.section<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bgColor};
  color: #333;
  width: 100%;
  min-height: 100vh;
  padding: 80px 20px;
  text-align: center;
  animation: ${fadeIn} 1.2s ease-out both;
  position: relative;

  @media (max-width: 768px) {
    padding: 60px 10px;
  }
`;
const Title = styled.h1`
  font-size: 3rem;
  color: #4b0082;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #4b0082;
  margin-bottom: 30px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  max-width: 800px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PresidentsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 20px;
`;

const PresidentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 250px;
  backdrop-filter: blur(8px);

  &:hover {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }
`;

const PresidentName = styled.h3`
  font-size: 1.5rem;
  color: #4b0082;
  margin-top: 15px;
`;

const PlaceholderImage = styled.div`
  width: 120px;
  height: 120px;
  background-color: #d4c3e8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 20px;
`;

// About Us Component
export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
  {/* About Us Section */}
  <Section id="about" bgColor="linear-gradient(135deg, #f3e8ff, #e8f0fe)"> {/* Light Lavender */}
    <Title>{t("aboutUs.title")}</Title>
    <Text>{t("aboutUs.desc")}</Text>
  </Section>

  {/* Presidents Section */}
  <Section id="presidents" bgColor="linear-gradient(135deg, #ffffff, #ffffff)"> {/* Soft Peach */}
    <Subtitle>{t("aboutUs.presidentsTitle")}</Subtitle>
    <PresidentsContainer>
      <PresidentCard>
        <PlaceholderImage>👤</PlaceholderImage>
        <PresidentName>Ariane Manekeng Guimfack</PresidentName>
      </PresidentCard>
      <PresidentCard>
        <PlaceholderImage>👤</PlaceholderImage>
        <PresidentName>Clara Maria Bridi</PresidentName>
      </PresidentCard>
    </PresidentsContainer>
  </Section>

  {/* Mission Section */}
  <Section id="mission" bgColor="#f3e8ff"> {/* Pastel Yellow */}
    <Subtitle>{t("aboutUs.missionTitle")}</Subtitle>
    <Text>{t("aboutUs.missionText")}</Text>
  </Section>

  {/* Values Section */}
  <Section id="values" bgColor="linear-gradient(135deg, #ffffff, #f0f0f0)"> {/* Gentle Mint Green */}
    <Subtitle>{t("aboutUs.valuesTitle")}</Subtitle>
    <Text>{t("aboutUs.valuesText")}</Text>
  </Section>
</Container>

    </>
  );
};
