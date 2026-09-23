import React from "react";
import styled from "styled-components";
import { Org } from "../data/partners";
import { Reveal } from "./ui";

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 640px) { grid-template-columns: repeat(2, 1fr); }
  gap: var(--sp-3);
  list-style: none;
`;

const Tile = styled.div`
  display: grid;
  place-items: center;
  height: 96px;
  padding: var(--sp-4);
  border-radius: var(--r-card);
  background: var(--c-white);
  box-shadow: var(--sh-card);
  transition: transform 250ms var(--ease-out);

  img {
    max-height: 48px;
    max-width: 100%;
    object-fit: contain;
    filter: grayscale(1);
    opacity: 0.75;
    transition: filter 250ms ease, opacity 250ms ease;
  }

  &:hover { transform: translateY(-2px); }
  &:hover img { filter: none; opacity: 1; }
`;

export const OrgGrid: React.FC<{ orgs: Org[] }> = ({ orgs }) => (
  <Grid>
    {orgs.map((o, i) => (
      <li key={o.name}>
        <Reveal delay={Math.min(i, 8) * 40}>
          <Tile title={o.name}>
            <img src={o.img} alt={o.name} loading="lazy" />
          </Tile>
        </Reveal>
      </li>
    ))}
  </Grid>
);
