import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useForceUpdateOnLanguageChange } from "../hooks/useForceUpdateOnLanguageChange";

// Styled NavBar container
const CustomNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: white;
  color: #333;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
  }`
;

// Logo styling
const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  margin: 0;`
;
interface LinksContainerProps {
  isOpen: boolean;
}

const LinksContainer = styled.div<LinksContainerProps>`
  display: flex;
  width: 40%;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: calc(100% - 70px);
    background-color: white;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
    padding-top: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }`
;
// Styled link with active state
const StyledLink = styled.button`
  background: none;
  border: none;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  padding: 5px 0;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #e63946;
  }

  &.active {
    color: #e63946;
  }

  &.active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: #e63946;
  }`
;

// Toggle button for mobile
const ToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  width: 20%;
  @media (max-width: 768px) {
    display: block;
  }`
;

// Language Toggle Button styling
const LanguageToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100px;
  background-color: #f3f3f3;
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;`
;

const LanguageButton = styled.button<{ isActive: boolean }>`
  background: ${({ isActive }) => (isActive ? "#e63946" : "transparent")};
  border: none;
  color: ${({ isActive }) => (isActive ? "#fff" : "#333")};
  padding: 5px 10px;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e63946;
    color: #fff;
  }`
;

// NavBar Component
export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage = useForceUpdateOnLanguageChange();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  
  return (
    <CustomNavBar>
      <Logo onClick={() => handleNavigation("/")}>Coeurs Festifs</Logo>
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </ToggleButton>
      <LinksContainer isOpen={isOpen}>
        <StyledLink
          className={isActive("/") ? "active" : ""}
          onClick={() => handleNavigation("/")}
        >
          {t("navBar.home")}
        </StyledLink>
        <StyledLink
          className={isActive("/about") ? "active" : ""}
          onClick={() => handleNavigation("/about")}
        >
          {t("navBar.about")}
        </StyledLink>
        <StyledLink
          className={isActive("/events") ? "active" : ""}
          onClick={() => handleNavigation("/events")}
        >
          {t("navBar.events")}
        </StyledLink>
        <StyledLink
          className={isActive("/contact") ? "active" : ""}
          onClick={() => handleNavigation("/contact")}
        >
          {t("navBar.contact")}
        </StyledLink>

        <LanguageToggle>
          <LanguageButton
            isActive={currentLanguage === "en"}
            onClick={() => toggleLanguage("en")}
          >
            EN
          </LanguageButton>
          <LanguageButton
            isActive={currentLanguage === "fr"}
            onClick={() => toggleLanguage("fr")}
          >
            FR
          </LanguageButton>
        </LanguageToggle>
      </LinksContainer>
    </CustomNavBar>
  );
};