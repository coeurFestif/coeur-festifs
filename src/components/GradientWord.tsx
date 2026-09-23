import styled from "styled-components";

/**
 * The one signature brand gesture (see docs/DESIGN.md — "Un seul geste de
 * marque, utilisé rarement"). Wrap a single word per page headline in this,
 * never more.
 */
export const GradientWord = styled.span`
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
