import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { PiArrowLeftBold } from "react-icons/pi";
import { ButtonLink, Container, Lead, TextLink } from "../components/ui";

const Wrap = styled(Container)`
  min-height: 70dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--sp-5);
  padding-top: var(--sp-16);
  padding-bottom: var(--sp-16);
`;

const Code = styled.p`
  font-family: var(--f-display);
  font-weight: 800;
  font-size: clamp(6rem, 18vw, 11rem);
  line-height: 0.8;
  letter-spacing: -0.04em;
`;

const Title = styled.h1`
  font-family: var(--f-display);
  font-weight: 800;
  font-size: clamp(1.75rem, 3.4vw, 2.5rem);
  letter-spacing: -0.03em;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--sp-6);
  flex-wrap: wrap;
  margin-top: var(--sp-3);
`;

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Wrap>
      <Code aria-hidden="true">404</Code>
      <Title>{t("notFound.subtitle")}</Title>
      <Lead>{t("notFound.desc")}</Lead>
      <Actions>
        <ButtonLink to="/coeur-festifs">
          <PiArrowLeftBold aria-hidden="true" /> {t("notFound.backHome")}
        </ButtonLink>
        <TextLink to="/coeur-festifs/events">{t("navBar.events")}</TextLink>
      </Actions>
    </Wrap>
  );
};
