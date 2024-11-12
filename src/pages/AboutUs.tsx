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
  color: black;
  margin-bottom: 20px;
  /* Small phones (portrait) */
  @media (max-width: 480px) {
    font-size: 2rem; /* Smaller font size for phones */
  }

  /* Phones and small tablets (landscape and portrait) */
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const AboutUsContainer = styled.div`
  /* Small phones (portrait) */
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
  }

  /* Phones and small tablets (landscape and portrait) */
  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: white;
  margin-bottom: 30px;
  /* Small phones (portrait) */
  @media (max-width: 480px) {
    font-size: 1.7rem; /* Smaller font size for phones */
  }

  /* Phones and small tablets (landscape and portrait) */
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 1.9rem;
  }
`;

const Header2 = styled.h2`
  font-size: 2rem;
  color: black;
  margin-bottom: 30px;
  /* Small phones (portrait) */
  @media (max-width: 480px) {
    font-size: 1.7rem; /* Smaller font size for phones */
  }

  /* Phones and small tablets (landscape and portrait) */
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 1.9rem;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  max-width: 800px;
  margin-bottom: 20px;

  /* Small phones (portrait) */
  @media (max-width: 480px) {
    font-size: 1rem; /* Smaller font size for phones */
  }

  /* Phones and small tablets (landscape and portrait) */
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const PresidentsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

const PresidentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 200px;
  backdrop-filter: blur(8px);
  height: 300px;

  &:hover {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }
  /* Small phones (portrait) */
  @media (max-width: 480px) {
    width: 40%;
  }

  /* Phones and small tablets (landscape and portrait) */
  @media (min-width: 481px) and (max-width: 768px) {
    width: 60%;
  }
`;

const PresidentName = styled.h3`
  font-size: 1.5rem;
  color: #000;
  margin-top: 15px;
`;

const PlaceholderImage = styled.div`
  width: 120px;
  height: 120px;
  background-color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 20px;
`;

const MissionValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 30px;
  width: 70%;

  /* Small phones (portrait) */
  @media (max-width: 480px) {
    width: 50%;
    font-size: 1rem; /* Smaller font size for phones */
  }

  /* Phones and small tablets (landscape and portrait) */
  @media (min-width: 481px) and (max-width: 768px) {
    width: 60%;
    font-size: 1.2rem;
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
          {" "}
          <AboutUsContainer>
            <Title>{t("aboutUs.title")}</Title>
            <Text>{t("aboutUs.desc")}</Text>
          </AboutUsContainer>
        </Section>

        {/* Presidents Section */}
        <Section
          id="presidents"
          bgColor="linear-gradient(135deg, #000, #fff)"
        >
          {" "}
          {/* Soft Peach */}
          <Subtitle>{t("aboutUs.presidentsTitle")}</Subtitle>
          <PresidentsContainer>
            <PresidentCard>
              <PlaceholderImage></PlaceholderImage>
              <PresidentName>Ariane Manekeng Guimfack</PresidentName>
            </PresidentCard>
            <PresidentCard>
              <PlaceholderImage></PlaceholderImage>
              <PresidentName>Clara Maria Bridi</PresidentName>
            </PresidentCard>
          </PresidentsContainer>
        </Section>

        {/* Mission Section */}
        <Section id="mission"  bgColor="linear-gradient(165deg, #fff, #fff)">
          {" "}
          {/* Pastel Yellow */}
          <MissionValueContainer>
            <Header2>{t("aboutUs.missionTitle")}</Header2>
            <Text>{t("aboutUs.missionText")}</Text>
          </MissionValueContainer>
          <MissionValueContainer>
            <Header2>{t("aboutUs.valuesTitle")}</Header2>
            <Text>{t("aboutUs.valuesText")}</Text>
          </MissionValueContainer>
        </Section>

        {/* Values Section */}
        {/* <Section
          id="values"
          bgColor="linear-gradient(135deg, #ffffff, #f0f0f0)"
        >
        
        </Section> */}
      </Container>
    </>
  );
};
