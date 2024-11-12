import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// Styled components
const CustomFooter = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: white;
  color: black;
  font-size: 1rem;
  border-top: 1px solid #e0e0e0;
  height: 100px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  margin: 5px 0;
  font-size: 0.875rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const IconLink = styled.a`
  font-size: 1.5rem;
  transition: transform 0.3s ease, color 0.3s ease;
  color: #db2f2f;

  &:hover {
    transform: scale(1.1);
  }
`;

// Main component
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <CustomFooter>
      <FooterSection>
        <FooterTitle>{t("footer.title")}</FooterTitle>
        <FooterText>{t("footer.desc")}</FooterText>
        <SocialIcons>
          {/* <IconLink
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebook />
          </IconLink> */}
          <IconLink
            href="https://www.instagram.com/coeurs.festifs?igsh=aTc3eDN5a2Q2dXYw"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </IconLink>
        </SocialIcons>
      </FooterSection>

      <FooterSection>
        <FooterTitle>{t("footer.contact")}</FooterTitle>
        <FooterText>cœurs.festifs@gmail.com</FooterText>
      </FooterSection>
    </CustomFooter>
  );
};
