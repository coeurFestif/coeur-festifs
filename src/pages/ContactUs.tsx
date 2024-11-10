import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import backgroundImage from "../assets/contactPicture.jpg";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

// Fade-in animation for the content
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Main container with background image and overlay
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;
  width: 90%;
  padding: 40px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 30px;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`;

const FloatingLabel = styled.label`
  position: absolute;
  top: 20px;
  left: 14px;
  font-size: 1rem;
  color: #444;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0 6px;
  border-radius: 4px;
  pointer-events: none;
  transition: 0.2s ease all;

  ${InputWrapper}:focus-within &,
  ${InputWrapper} input:not(:placeholder-shown) + &,
  ${InputWrapper} textarea:not(:placeholder-shown) + & {
    top: -12px;
    left: 10px;
    font-size: 1rem;
    color: #4682b4;
    background-color: rgba(255, 255, 255, 0.75);
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4682b4;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4682b4;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #f65555;
  color: white;
  border: 2px solid transparent;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: #f65555;
    border-color: #f65555;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.03);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(246, 85, 85, 0.4);
  }
`;

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_essbee7",
          "template_fgkhm0x",
          form.current,
          "-k6vrk17y-fe5vp8v"
        )
        .then(
          () => {
            alert("Message sent successfully!");
          },
          (error: any) => {
            console.error("Failed to send message:", error.text);
          }
        );
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <Title>
          {t("contactUs.title")}
        </Title>
        <Subtitle>
          {t("contactUs.subtitle")}
        </Subtitle>
        <form ref={form} onSubmit={sendEmail}>
          <InputWrapper>
            <InputField type="text" name="from_name" placeholder=" " required />
            <FloatingLabel>
              {t("contactUs.form.name")}
            </FloatingLabel>
          </InputWrapper>
          <InputWrapper>
            <InputField
              type="email"
              name="from_email"
              placeholder=" "
              required
            />
            <FloatingLabel>
              {t("contactUs.form.email")}
            </FloatingLabel>
          </InputWrapper>
          <InputWrapper>
            <TextArea name="message" placeholder=" " required />
            <FloatingLabel>
              {t("contactUs.form.message")}
            </FloatingLabel>
          </InputWrapper>
          <SubmitButton type="submit">
            {t("contactUs.form.submit")}
          </SubmitButton>
        </form>
      </ContentWrapper>
    </Container>
  );
};
