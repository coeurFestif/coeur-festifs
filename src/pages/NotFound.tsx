import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Wrap = styled.div`
  min-height: 80dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--sp-12) var(--sp-6);
  gap: var(--sp-4);
  background: var(--c-cream);
`;

const Code = styled.h1`
  font-family: var(--f-display);
  font-size: clamp(5rem, 18vw, 9rem);
  font-weight: 700;
  color: var(--c-primary);
  line-height: 1;
  margin: 0;
`;

const Title = styled.p`
  font-family: var(--f-display);
  font-size: clamp(1.4rem, 4vw, 2rem);
  font-weight: 700;
  color: var(--c-n900);
  margin: 0;
`;

const Sub = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: var(--c-n600);
  max-width: 380px;
  line-height: 1.7;
  margin: 0;
`;

const HomeBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  background: var(--c-primary);
  color: var(--c-white);
  border: none;
  font-family: var(--f-body);
  font-size: 0.95rem;
  font-weight: 700;
  padding: 12px 28px;
  border-radius: var(--r-full);
  cursor: pointer;
  margin-top: var(--sp-2);
  box-shadow: 0 4px 18px rgba(230, 57, 70, 0.28);
  transition: transform 150ms var(--ease-spring), box-shadow 150ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(230, 57, 70, 0.35);
  }
  &:active { transform: translateY(0); }
`;

export const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Wrap>
      <span style={{ fontSize: "3.5rem" }} aria-hidden="true">🎈</span>
      <Code>{t("notFound.title")}</Code>
      <Title>{t("notFound.subtitle")}</Title>
      <Sub>{t("notFound.desc")}</Sub>
      <HomeBtn onClick={() => navigate("/coeur-festifs")}>
        ← {t("notFound.backHome")}
      </HomeBtn>
    </Wrap>
  );
};
