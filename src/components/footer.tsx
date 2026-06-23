import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaEnvelope, FaLinkedin, FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

const Shell = styled.footer`
  background: var(--c-n900);
  color: rgba(255,255,255,.7);
`;

const Top = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--sp-16) var(--sp-12);
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--sp-12);

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: var(--sp-8);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    padding: var(--sp-12) var(--sp-6);
    gap: var(--sp-8);
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--sp-4);
`;

const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: var(--sp-2);
`;

const BrandImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: var(--r-full);
  object-fit: cover;
  opacity: .9;
`;

const BrandName = styled.span`
  font-family: var(--f-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--c-white);
`;

const FooterDesc = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.7;
  color: rgba(255,255,255,.55);
  max-width: 300px;
`;

const SocialRow = styled.div`
  display: flex;
  gap: var(--sp-3);
  margin-top: var(--sp-2);
`;

const SocialBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--r-md);
  background: rgba(255,255,255,.08);
  color: rgba(255,255,255,.65);
  font-size: 0.95rem;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,.1);
  transition: background 150ms ease, color 150ms ease, border-color 150ms ease;

  &:hover {
    background: var(--c-primary);
    color: var(--c-white);
    border-color: var(--c-primary);
  }
`;

const ColTitle = styled.h4`
  font-family: var(--f-body);
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: rgba(255,255,255,.4);
  margin-bottom: var(--sp-2);
`;

const NavItem = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-family: var(--f-body);
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255,255,255,.6);
  cursor: pointer;
  text-align: left;
  transition: color 150ms ease;
  line-height: 1.8;

  &:hover { color: var(--c-white); }
`;

const ContactLine = styled.a`
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255,255,255,.6);
  text-decoration: none;
  transition: color 150ms ease;
  line-height: 1.8;

  svg { font-size: 0.8rem; flex-shrink: 0; color: var(--c-primary); }

  &:hover { color: var(--c-white); }
`;

const Bottom = styled.div`
  border-top: 1px solid rgba(255,255,255,.08);
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--sp-5) var(--sp-12);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-4);

  @media (max-width: 560px) {
    flex-direction: column;
    padding: var(--sp-5) var(--sp-6);
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  color: rgba(255,255,255,.3);
`;

const MadeWith = styled.p`
  font-size: 0.8rem;
  color: rgba(255,255,255,.3);

  span { color: var(--c-primary); }
`;

export const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Shell role="contentinfo">
      <Top>
        {/* Brand col */}
        <Col>
          <BrandRow>
            <BrandImg src={logo} alt="" aria-hidden="true" />
            <BrandName>Coeurs Festifs</BrandName>
          </BrandRow>
          <FooterDesc>{t("footer.desc")}</FooterDesc>
          <SocialRow aria-label="Réseaux sociaux">
            <SocialBtn
              href="https://www.linkedin.com/in/c%C5%93urs-festifs-39b901360/"
              target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            >
              <FaLinkedin aria-hidden="true" />
            </SocialBtn>
            <SocialBtn
              href="https://www.facebook.com/profile.php?id=61571443886637"
              target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            >
              <FaFacebook aria-hidden="true" />
            </SocialBtn>
            <SocialBtn
              href="https://www.instagram.com/coeurs.festifs"
              target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            >
              <FaInstagram aria-hidden="true" />
            </SocialBtn>
          </SocialRow>
        </Col>

        {/* Navigation col */}
        <Col>
          <ColTitle>{t("footer.nav")}</ColTitle>
          <NavItem onClick={() => navigate("/coeur-festifs")}>{t("navBar.home")}</NavItem>
          <NavItem onClick={() => navigate("/coeur-festifs/about")}>{t("navBar.about")}</NavItem>
          <NavItem onClick={() => navigate("/coeur-festifs/events")}>{t("navBar.events")}</NavItem>
        </Col>

        {/* Contact col */}
        <Col>
          <ColTitle>{t("footer.contact")}</ColTitle>
          <ContactLine href="mailto:coeurs.festifs@gmail.com">
            <FaEnvelope aria-hidden="true" />
            coeurs.festifs@gmail.com
          </ContactLine>
        </Col>
      </Top>

      <Bottom>
        <Copyright>© {new Date().getFullYear()} Coeurs Festifs. {t("footer.rights")}</Copyright>
        <MadeWith>
          {t("footer.madeWith").split("♥")[0]}
          <span>♥</span>
          {t("footer.madeWith").split("♥")[1]}
        </MadeWith>
      </Bottom>
    </Shell>
  );
};
