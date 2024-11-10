import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import backgroundImage from "../assets/contactPicture.jpg";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

// Fade-in animation for the content
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  height: 800px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;
  width: 90%;
  padding: 40px;
  background: rgba(255, 255, 255, 0.7);
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
  background-color: rgba(255, 255, 255, 0.9);
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
  background-color: rgba(255, 255, 255, 0.9);
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
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff6666;
  }

  &:focus {
    outline: none;
  }
`;

const FeedbackMessage = styled.div<{ success: boolean }>`
  margin-top: 20px;
  padding: 14px;
  border-radius: 8px;
  color: ${(props) => (props.success ? "#4caf50" : "#f44336")};
  background-color: ${(props) => (props.success ? "#e8f5e9" : "#ffebee")};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();
  const [feedback, setFeedback] = useState<{
    message: string;
    success: boolean;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);
      const email = formData.get("from_email")?.toString() || "";

      if (!validateEmail(email)) {
        setFeedback({ message: t("contactUs.invalidEmail"), success: false });
        return;
      }

      setIsLoading(true);

      try {
        await emailjs.sendForm(
          "service_p4pz1wk",
          "template_fgkhm0x",
          form.current,
          "-k6vrk17y-fe5vp8v"
        );
        setFeedback({ message: t("contactUs.successMessage"), success: true });
        form.current.reset();
      } catch (error) {
        setFeedback({ message: t("contactUs.errorMessage"), success: false });
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Automatically dismiss feedback messages after 5 seconds
  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  return (
    <Container>
      <ContentWrapper>
        <Title>{t("contactUs.title")}</Title>
        <Subtitle>{t("contactUs.subtitle")}</Subtitle>
        <form ref={form} onSubmit={sendEmail}>
          <InputWrapper>
            <InputField type="text" name="from_name" placeholder=" " required />
            <FloatingLabel>{t("contactUs.form.name")}</FloatingLabel>
          </InputWrapper>
          <InputWrapper>
            <InputField
              type="email"
              name="from_email"
              placeholder=" "
              required
            />
            <FloatingLabel>{t("contactUs.form.email")}</FloatingLabel>
          </InputWrapper>
          <InputWrapper>
            <TextArea name="message" placeholder=" " required />
            <FloatingLabel>{t("contactUs.form.message")}</FloatingLabel>
          </InputWrapper>
          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading
              ? t("contactUs.form.sending")
              : t("contactUs.form.submit")}
          </SubmitButton>
        </form>
        {feedback && (
          <FeedbackMessage success={feedback.success}>
            {feedback.success ? "✅" : "❌"} {feedback.message}
          </FeedbackMessage>
        )}
      </ContentWrapper>
    </Container>
  );
};
