import React from "react";
import styled, { keyframes } from "styled-components";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// Container for the entire section with gradient background
const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 30px;
  background: linear-gradient(135deg, #e0c3fc, #8ec5fc);
  border-radius: 25px;
  margin: 50px auto;
  max-width: 900px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

// Title Styling
const Title = styled.h2`
  font-size: 2.8rem;
  color: #4b0082;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

// Text Styling
const Description = styled.p`
  font-size: 1.3rem;
  color: #333;
  line-height: 1.8;
  margin-bottom: 40px;
  max-width: 700px;
`;

// Social Icons Container with hover animations
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

// Button with animation and icon
const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #4b0082;
  color: white;
  font-size: 1.2rem;
  padding: 14px 28px;
  border: none;
  border-radius: 15px;
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

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Adding animation to the section
const AnimatedContainer = styled(SectionContainer)`
  animation: ${fadeIn} 0.6s ease-out both;
`;

export const EventsFooter = () => {
  const { t } = useTranslation();
  return (
    <AnimatedContainer>
      <Title>{t("events.Footer.title")}</Title>
      <Description>{t("events.Footer.desc")}</Description>

      {/* Social Media Icons */}
      <SocialIcons>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="mailto:Cœurs.festifs@gmail.com">
          <FaEnvelope />
        </a>
      </SocialIcons>

      {/* Call-to-Action Button with Icon */}
      <Button
        onClick={() =>
          (window.location.href = "mailto:Cœurs.festifs@gmail.com")
        }
      >
        <FaEnvelope />
        {t("events.Footer.contact")}
      </Button>
    </AnimatedContainer>
  );
};
