import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PiInstagramLogoFill, PiFacebookLogoFill, PiLinkedinLogoFill } from "react-icons/pi";
import { EMAIL, FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL } from "./eventActions";

const Shell = styled.footer`
  margin-top: auto;
  border-top: 1px solid var(--c-hair);
  background: var(--c-white);
`;

const Inner = styled.div`
  max-width: calc(var(--page-max) + 2 * var(--gutter));
  margin: 0 auto;
  padding: var(--sp-16) var(--gutter) var(--sp-8);
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: var(--sp-12);
  align-items: end;

  @media (max-width: 760px) { grid-template-columns: 1fr; gap: var(--sp-8); }
`;

const Sign = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--sp-4);

  p.big {
    font-family: var(--f-display);
    font-weight: 800;
    font-size: clamp(1.75rem, 3.4vw, 2.5rem);
    line-height: 1.05;
    letter-spacing: -0.03em;
    max-width: 16em;
  }
`;

const Mail = styled.a`
  align-self: flex-start;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--c-ink);
  text-decoration: none;
  background: linear-gradient(currentColor, currentColor) 0 100% / 100% 1px no-repeat;
  padding-bottom: 2px;
  transition: opacity 150ms ease;

  &:hover { opacity: 0.7; }
`;

const Cols = styled.div`
  display: flex;
  gap: var(--sp-12);
  justify-content: flex-end;

  @media (max-width: 760px) { justify-content: flex-start; }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);

  h2 { font-size: 0.85rem; font-weight: 500; color: var(--c-ash); margin-bottom: var(--sp-1); }
  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    color: var(--c-graphite);
    text-decoration: none;
    transition: color 150ms ease;
  }
  a:hover { color: var(--c-ink); }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--sp-4);
  flex-wrap: wrap;
  margin-top: var(--sp-12);
  padding-top: var(--sp-6);
  border-top: 1px solid var(--c-hair);
  font-size: 0.85rem;
  color: var(--c-ash);
`;

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Shell>
      <Inner>
        <Top>
          <Sign>
            <p className="big">{t("footer.desc")}</p>
            <Mail href={`mailto:${EMAIL}`}>{EMAIL}</Mail>
          </Sign>
          <Cols>
            <Col>
              <h2>{t("footer.nav")}</h2>
              <Link to="/coeur-festifs">{t("navBar.home")}</Link>
              <Link to="/coeur-festifs/events">{t("navBar.events")}</Link>
              <Link to="/coeur-festifs/about">{t("navBar.about")}</Link>
            </Col>
            <Col>
              <h2>{t("ui.footer.follow")}</h2>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <PiInstagramLogoFill aria-hidden="true" /> Instagram
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                <PiFacebookLogoFill aria-hidden="true" /> Facebook
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <PiLinkedinLogoFill aria-hidden="true" /> LinkedIn
              </a>
            </Col>
          </Cols>
        </Top>
        <Bottom>
          <span>© {new Date().getFullYear()} Cœurs Festifs. {t("footer.rights")}</span>
          <span>Montréal, Québec</span>
        </Bottom>
      </Inner>
    </Shell>
  );
};
