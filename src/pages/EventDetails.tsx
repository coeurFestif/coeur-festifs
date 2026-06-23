import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useEventData } from "../data/events";
import { useTranslation } from "react-i18next";
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowLeft, FaShareAlt, FaCheck } from "react-icons/fa";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ── Shell ─────────────────────────────────────────────────── */

const Page = styled.div`
  min-height: 100dvh;
  background: var(--c-cream);
  display: flex;
  flex-direction: column;
  padding-top: 68px;
`;

/* ── Hero ──────────────────────────────────────────────────── */

const Hero = styled.div`
  position: relative;
  width: 100%;
  height: 520px;
  overflow: hidden;

  @media (max-width: 768px) { height: 360px; }
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0,0,0,.72) 0%,
    rgba(0,0,0,.22) 50%,
    rgba(0,0,0,.0) 100%
  );
`;

const HeroBottom = styled.div`
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 0 var(--sp-12) var(--sp-10);

  @media (max-width: 768px) { padding: 0 var(--sp-6) var(--sp-8); }
`;

const HeroTitle = styled.h1`
  font-family: var(--f-display);
  font-size: clamp(1.9rem, 4.5vw, 3rem);
  font-weight: 700;
  color: var(--c-white);
  margin: 0;
  line-height: 1.12;
  text-shadow: 0 2px 16px rgba(0,0,0,.35);
  max-width: 900px;
`;

/* ── Content ────────────────────────────────────────────────── */

const Content = styled.div`
  max-width: 860px;
  width: 100%;
  margin: 0 auto;
  padding: var(--sp-8) var(--sp-12) var(--sp-20);
  display: flex;
  flex-direction: column;
  gap: var(--sp-8);
  animation: ${fadeUp} .5s var(--ease-out) both;

  @media (max-width: 768px) { padding: var(--sp-6) var(--sp-6) var(--sp-16); gap: var(--sp-6); }
`;

/* Back */
const BackBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: var(--c-white);
  border: 1.5px solid var(--c-n200);
  font-family: var(--f-body);
  font-size: .85rem;
  font-weight: 700;
  color: var(--c-n700);
  cursor: pointer;
  padding: 8px 18px;
  border-radius: var(--r-full);
  align-self: flex-start;
  box-shadow: var(--sh-xs);
  transition: color 150ms ease, border-color 150ms ease, box-shadow 150ms ease;

  svg { font-size: .78rem; }
  &:hover {
    color: var(--c-primary);
    border-color: var(--c-primary);
    box-shadow: 0 2px 12px rgba(230,57,70,.14);
  }
`;

/* Share */
const ShareBtn = styled.button<{ copied?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: ${p => p.copied ? "var(--c-primary)" : "var(--c-white)"};
  border: 1.5px solid ${p => p.copied ? "var(--c-primary)" : "var(--c-n200)"};
  font-family: var(--f-body);
  font-size: .85rem;
  font-weight: 700;
  color: ${p => p.copied ? "var(--c-white)" : "var(--c-n700)"};
  cursor: pointer;
  padding: 8px 18px;
  border-radius: var(--r-full);
  align-self: flex-start;
  box-shadow: var(--sh-xs);
  transition: all 150ms ease;

  svg { font-size: .78rem; }
  &:hover:not([data-copied="true"]) {
    color: var(--c-primary);
    border-color: var(--c-primary);
  }
`;

/* Info chips */
const ChipRow = styled.div`
  display: flex;
  gap: var(--sp-3);
  flex-wrap: wrap;
`;

const InfoChip = styled.div`
  flex: 1;
  min-width: 200px;
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  background: var(--c-white);
  border: 1.5px solid var(--c-n200);
  box-shadow: inset 4px 0 0 var(--c-primary);
  border-radius: var(--r-lg);
  padding: var(--sp-4) var(--sp-5);

  .icon {
    width: 38px; height: 38px;
    background: var(--c-primary-surface);
    border-radius: var(--r-md);
    display: flex; align-items: center; justify-content: center;
    color: var(--c-primary);
    font-size: .9rem;
    flex-shrink: 0;
  }

  .text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }

  .label {
    font-size: .68rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: .09em;
    color: var(--c-n400);
  }

  .value {
    font-size: .9rem;
    font-weight: 600;
    color: var(--c-n900);
    word-break: break-word;
    line-height: 1.35;
  }
`;

/* Description */
const Description = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: var(--c-n800);
  line-height: 1.82;
  margin: 0;
  white-space: pre-line;
`;

/* Divider */
const Divider = styled.hr`
  border: none;
  border-top: 1.5px solid var(--c-n100);
`;

/* Partners */
const PartnerBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
`;

const BlockLabel = styled.p`
  font-size: .72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: var(--c-primary);
  margin: 0;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-2);
`;

interface TagProps { accent: string; }

const Tag = styled.span<TagProps>`
  font-size: .85rem;
  font-weight: 700;
  padding: 6px 16px;
  border-radius: var(--r-full);
  background: ${p => p.accent}12;
  color: ${p => p.accent};
  border: 1.5px solid ${p => p.accent}30;
`;

const LogoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-3);
`;

const LogoTile = styled.img`
  width: 88px; height: 70px;
  object-fit: contain;
  background: var(--c-n50);
  border: 1.5px solid var(--c-n200);
  border-radius: var(--r-md);
  padding: var(--sp-2);
  transition: border-color 150ms ease, box-shadow 150ms ease;

  &:hover {
    border-color: var(--c-accent-blue);
    box-shadow: 0 4px 14px rgba(67,97,238,.18);
  }
`;

/* Error */
const ErrorWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--sp-4);
  padding: var(--sp-16) var(--sp-6);
  text-align: center;

  h1 { font-family: var(--f-display); font-size: 2rem; font-weight: 700; color: var(--c-primary); }
  p  { font-size: 1rem; font-weight: 500; color: var(--c-n600); }
`;

/* ── Component ─────────────────────────────────────────────── */

export const EventDetail = () => {
  const { id }  = useParams();
  const navigate = useNavigate();
  const events  = useEventData();
  const event   = events.find(e => e.id === id);
  const { t }   = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try { await navigator.share({ title: event?.title, url }); } catch {}
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!event) {
    return (
      <Page>
        <ErrorWrap>
          <span style={{ fontSize: "3rem" }}>🔍</span>
          <h1>{t("events.notFound") || "Événement introuvable"}</h1>
          <p>{t("events.notFoundDesc") || "Cet événement n'existe pas ou a été supprimé."}</p>
        </ErrorWrap>
      </Page>
    );
  }

  const hasPartners   = event.partner    && event.partner.length   > 0;
  const hasSponsors   = event.Sponsor    && event.Sponsor.length   > 0;
  const hasPartnerImg = event.partnerImg && event.partnerImg.length > 0;
  const hasSponsorImg = event.SponsorImg && event.SponsorImg.length > 0;

  const renderLogos = (imgs: string[] | undefined, names: string[] | undefined) =>
    imgs && imgs.length > 0 ? (
      <LogoRow>
        {imgs.map((src, i) => (
          <LogoTile
            key={i}
            src={src}
            alt={names?.[i] ?? `Logo ${i + 1}`}
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ))}
      </LogoRow>
    ) : null;

  return (
    <Page>
      {/* Hero */}
      <Hero>
        <HeroImg src={event.image} alt="" aria-hidden="true" />
        <HeroOverlay />
        <HeroBottom>
          <HeroTitle>{event.title}</HeroTitle>
        </HeroBottom>
      </Hero>

      {/* Body */}
      <Content>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--sp-3)", flexWrap: "wrap" }}>
          <BackBtn onClick={() => navigate("/coeur-festifs/events")}>
            <FaArrowLeft aria-hidden="true" />
            {t("navBar.events")}
          </BackBtn>
          <ShareBtn onClick={handleShare} copied={copied} data-copied={copied}>
            {copied ? <FaCheck aria-hidden="true" /> : <FaShareAlt aria-hidden="true" />}
            {copied ? (t("events.copied") || "Copié !") : (t("events.share") || "Partager")}
          </ShareBtn>
        </div>

        {(event.date || event.location) && (
          <ChipRow>
            {event.date && (
              <InfoChip>
                <div className="icon"><FaCalendarAlt aria-hidden="true" /></div>
                <div className="text">
                  <span className="label">{t("date") || "Date"}</span>
                  <span className="value">{event.date}</span>
                </div>
              </InfoChip>
            )}
            {event.location && (
              <InfoChip>
                <div className="icon"><FaMapMarkerAlt aria-hidden="true" /></div>
                <div className="text">
                  <span className="label">{t("location") || "Lieu"}</span>
                  <span className="value">{event.location}</span>
                </div>
              </InfoChip>
            )}
          </ChipRow>
        )}

        {event.description && <Description>{event.description}</Description>}

        {(hasPartners || hasPartnerImg) && (
          <>
            <Divider />
            <PartnerBlock>
              <BlockLabel>{t("events.partner")}</BlockLabel>
              {hasPartners && (
                <TagRow>
                  {event.partner!.map((p, i) => <Tag key={i} accent="#e63946">{p}</Tag>)}
                </TagRow>
              )}
              {renderLogos(event.partnerImg, event.partner)}
            </PartnerBlock>
          </>
        )}

        {(hasSponsors || hasSponsorImg) && (
          <>
            <Divider />
            <PartnerBlock>
              <BlockLabel>{t("events.sponsor")}</BlockLabel>
              {hasSponsors && (
                <TagRow>
                  {event.Sponsor!.map((s, i) => <Tag key={i} accent="#4361ee">{s}</Tag>)}
                </TagRow>
              )}
              {renderLogos(event.SponsorImg, event.Sponsor)}
            </PartnerBlock>
          </>
        )}
      </Content>
    </Page>
  );
};
