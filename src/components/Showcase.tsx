import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Reveal } from "./ui";
import ariane from "../assets/Ariane.jpeg";
import clara from "../assets/Clara.jpg";

/* ── Big numerals: Partiful's 112px weight-825 display figure ── */

const Numbers = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-8);

  @media (max-width: 700px) { grid-template-columns: 1fr; gap: var(--sp-6); }
`;

const Figure = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
  padding-top: var(--sp-5);
  border-top: 1px solid var(--c-ink);

  dd {
    order: -1;
    font-family: var(--f-display);
    font-weight: 800;
    font-size: clamp(4.5rem, 10vw, 7rem);
    line-height: 0.8;
    letter-spacing: -0.03em;
    font-variant-numeric: tabular-nums;
  }
  dt { font-size: 1.05rem; color: var(--c-slate); max-width: 14em; }
`;

export const Figures: React.FC<{ items: { n: number; label: string }[] }> = ({ items }) => (
  <Numbers>
    {items.map((f, i) => (
      <Reveal key={f.label} delay={i * 90}>
        <Figure>
          <dt>{f.label}</dt>
          <dd>{f.n}</dd>
        </Figure>
      </Reveal>
    ))}
  </Numbers>
);

/* ── Founders pair, second portrait offset down ── */

const Duo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-5);
  align-items: start;

  & > :nth-child(2) { margin-top: var(--sp-12); }
  img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: var(--r-card);
    box-shadow: var(--sh-card);
  }
  figcaption { margin-top: var(--sp-3); font-size: 0.9rem; }
  figcaption strong { display: block; font-weight: 700; letter-spacing: -0.02em; }
  figcaption span { color: var(--c-slate); }
`;

const FOUNDERS = [
  { name: "Ariane Manekeng Guimfack", img: ariane },
  { name: "Clara Maria Bridi", img: clara },
];

export const Founders: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Duo>
      {FOUNDERS.map((f, i) => (
        <Reveal key={f.name} delay={i * 120}>
          <figure>
            <img src={f.img} alt={f.name} loading="lazy" />
            <figcaption>
              <strong>{f.name}</strong>
              <span>{t("aboutUs.presidentsText")}</span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </Duo>
  );
};
