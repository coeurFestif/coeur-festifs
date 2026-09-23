import React from "react";
import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

const Track = styled.div`
  display: flex;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
`;

const Reel = styled.div`
  display: flex;
  align-items: center;
  gap: var(--sp-8);
  padding-right: var(--sp-8);
  flex-shrink: 0;
  animation: ${scroll} 32s linear infinite;

  ${Track}:hover & { animation-play-state: paused; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const LogoTile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  padding: 0 var(--sp-4);
  flex-shrink: 0;

  img {
    max-height: 44px;
    max-width: 140px;
    object-fit: contain;
    filter: grayscale(1) opacity(0.6);
    transition: filter 200ms ease;
  }

  &:hover img { filter: grayscale(0) opacity(1); }
`;

export interface MarqueeLogo {
  name: string;
  img: string;
}

interface PartnersMarqueeProps {
  logos: MarqueeLogo[];
}

// Infinite horizontal auto-scroll: the logo list is duplicated once so the
// track can loop seamlessly from -50% back to 0 with no visible jump.
export const PartnersMarquee: React.FC<PartnersMarqueeProps> = ({ logos }) => {
  const doubled = [...logos, ...logos];

  return (
    <Track>
      <Reel>
        {doubled.map((logo, i) => (
          <LogoTile key={`${logo.name}-${i}`}>
            <img src={logo.img} alt={logo.name} loading="lazy" />
          </LogoTile>
        ))}
      </Reel>
    </Track>
  );
};
