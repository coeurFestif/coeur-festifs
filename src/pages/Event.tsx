import React from "react";
import styled, { keyframes } from "styled-components";
import { useEventData } from "../data/events";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const fadeIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(-20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  margin-top: 30px;
  color: #4a4a4a;
  min-height: 100vh;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  animation: ${fadeIn} 1.2s ease-out both;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(2px);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.2rem, 5vw, 2.5rem);
  color: #000;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1.2s ease-out both;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

const SwiperContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 40px 0;

  .swiper {
    padding: 20px 0 60px 0;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #db2f2f;
    background: white;
    width: 25px;
    height: 25px;
    padding: 15px;
    border-radius: 50%;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;

    &:after {
      font-size: 10px;
      font-weight: bold;
    }

    &:hover {
      background: #db2f2f;
      color: white;
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;

      &:after {
        font-size: 16px;
      }
    }
  }

  .swiper-pagination-bullet {
    background: #db2f2f;
    width: 12px;
    height: 12px;
    opacity: 0.5;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    width: 30px;
    border-radius: 6px;
  }
`;

const Card = styled.div`
  width: 300px; /* Reduced width */
  max-width: 80vw; /* Adjusted max width */
  min-height: 400px; /* Reduced height */
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  color: #2d3a4b;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  .image-container {
    position: relative;
    overflow: hidden;
    height: 200px; /* Reduced image height */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  .info {
    padding: 20px; /* Adjusted padding */
    text-align: center;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h2 {
    font-size: 1.5rem; /* Reduced font size */
    margin-bottom: 10px; /* Adjusted margin */
    color: #1a1a1a;
    font-weight: 600;
    line-height: 1.3;
  }

  .date,
  .location {
    font-size: 0.9rem; /* Reduced font size */
    display: flex;
    align-items: center;
    justify-content: center;
    color: #636e72;
    margin-bottom: 10px; /* Adjusted margin */
    font-weight: 500;

    svg {
      margin-right: 8px; /* Adjusted spacing */
      color: #db2f2f;
      font-size: 1rem; /* Reduced icon size */
    }
  }

  @media (max-width: 480px) {
    width: 250px; /* Adjusted width for smaller screens */

    .info {
      padding: 15px; /* Adjusted padding for smaller screens */
    }

    h2 {
      font-size: 1.3rem; /* Adjusted font size for smaller screens */
    }
  }
`;

const PartnerSection = styled.div`
  margin: 15px 0 10px 0;

  .section-title {
    font-size: 1rem;
    font-weight: 600;
    color: #2d3a4b;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .items-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      background: rgba(219, 47, 47, 0.1);
      color: #db2f2f;
      padding: 6px 12px;
      border-radius: 15px;
      font-size: 0.9rem;
      font-weight: 500;
      border: 1px solid rgba(219, 47, 47, 0.2);
      transition: all 0.3s ease;

      &:hover {
        background: rgba(219, 47, 47, 0.2);
        transform: translateY(-2px);
      }
    }
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #db2f2f, #e63946);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 14px 28px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  margin: 20px auto 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 20px rgba(219, 47, 47, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #c62828, #d32f2f);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(219, 47, 47, 0.4);

    &::before {
      left: 100%;
    }
  }

  svg {
    margin-left: 8px;
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #89f7fe, #66a6ff);
  text-align: center;
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.05);
  position: relative;
`;

const FooterText = styled.p`
  color: #1a1a1a;
  line-height: 1.8;
  margin-bottom: 40px;
  max-width: 700px;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 40px;

  a {
    color: #db2f2f;
    font-size: 2.5rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.1));

    &:hover {
      transform: translateY(-5px) scale(1.15);
      color: #c62828;
    }
  }
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #db2f2f, #e63946);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(219, 47, 47, 0.3);

  &:hover {
    background: linear-gradient(135deg, #c62828, #d32f2f);
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(219, 47, 47, 0.4);
  }

  svg {
    margin-left: 10px;
    font-size: 1.1rem;
  }
`;

const NoEventsMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  p {
    font-size: 1.5rem;
    color: #666;
    margin-bottom: 20px;
    font-weight: 500;
  }

  .emoji {
    font-size: 3rem;
    margin-bottom: 15px;
  }
`;
// Main Events Component
export const Events = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const events = useEventData();

  // Filter out unavailable events
  const availableEvents = events.filter((event) => event.isAvailable);

  const handleCardClick = (eventId: string | number) => {
    navigate(`/coeur-festifs/event/${eventId}`);
  };

  const renderPartnersList = (
    items: string[] | undefined,
    titleKey: string
  ) => {
    if (!items || items.length === 0) return null;

    return (
      <PartnerSection>
        <div className="section-title">{t(titleKey)}</div>
        <ul className="items-list" role="list">
          {items.map((item, index) => (
            <li key={`${titleKey}-${index}`} role="listitem">
              {item}
            </li>
          ))}
        </ul>
      </PartnerSection>
    );
  };

  return (
    <>
      <EventsContainer role="main">
        <Title>{t("events.title")}</Title>

        {availableEvents.length > 0 ? (
          <SwiperContainer>
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              effect="coverflow"
              coverflowEffect={{
                rotate: 50,
                stretch: 1,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              loop={availableEvents.length > 3}
            >
              {availableEvents.map((event) => (
                <SwiperSlide key={event.id}>
                  <Card onClick={() => handleCardClick(event.id)}>
                    <div className="image-container">
                      <img
                        src={event.image}
                        alt={`${event.title} - ${event.location}`}
                        loading="lazy"
                      />
                    </div>

                    <div className="info">
                      <div>
                        <h2>{event.title}</h2>

                        <div className="date">
                          {event.date && <FaCalendarAlt />}
                          {event.date && <span>{event.date}</span>}
                        </div>

                        <div className="location">
                          {event.location && <FaMapMarkerAlt />}
                          {event.location && <span>{event.location}</span>}
                        </div>

                        {renderPartnersList(event.partner, "Partners")}
                        {renderPartnersList(event.Sponsor, "Sponsors")}
                      </div>

                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(event.id);
                        }}
                      >
                        <span>View Details</span>
                        <FaExternalLinkAlt />
                      </Button>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperContainer>
        ) : (
          <NoEventsMessage role="status" aria-live="polite">
            <div className="emoji" role="img" aria-label="Calendar">
              📅
            </div>
            <p>{t("events.noEventsMessage")}</p>
          </NoEventsMessage>
        )}
      </EventsContainer>

      <FooterContainer role="contentinfo">
        <FooterText>{t("events.Footer.desc")}</FooterText>

        <SocialIcons role="navigation" aria-label="Social media links">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
          >
            <FaInstagram aria-hidden="true" />
          </a>
          <a
            href="mailto:coeurs.festifs@gmail.com"
            aria-label="Send us an email"
          >
            <FaEnvelope aria-hidden="true" />
          </a>
        </SocialIcons>

        <ContactButton
          href="mailto:coeurs.festifs@gmail.com"
          aria-label="Contact us via email"
        >
          <span>{t("events.Footer.contact")}</span>
          <FaEnvelope aria-hidden="true" />
        </ContactButton>
      </FooterContainer>
    </>
  );
};
