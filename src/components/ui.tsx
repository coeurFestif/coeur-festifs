import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { EventStatus } from "../utils/eventDates";

/* ── Layout ────────────────────────────────────────────────── */

export const Container = styled.div`
  width: 100%;
  max-width: calc(var(--page-max) + 2 * var(--gutter));
  margin: 0 auto;
  padding: 0 var(--gutter);
`;

export const Section = styled.section<{ $wash?: boolean }>`
  padding: var(--section) 0;
  background: ${(p) => (p.$wash ? "var(--wash-coral)" : "var(--c-white)")};
`;

/* ── Type ──────────────────────────────────────────────────── */

export const Display = styled.h1`
  font-family: var(--f-display);
  font-weight: 800;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--c-ink);
`;

export const SectionTitle = styled.h2`
  font-family: var(--f-display);
  font-weight: 800;
  font-size: clamp(1.75rem, 3.4vw, 2.5rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--c-ink);
`;

export const Lead = styled.p`
  font-size: 1.125rem;
  line-height: 1.5;
  color: var(--c-slate);
  max-width: 34em;
`;

/* ── Actions: black/white only ─────────────────────────────── */

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  padding: 10px 22px;
  border-radius: var(--r-btn);
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: -0.02em;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 150ms ease, color 150ms ease, opacity 150ms ease;

  &:active { transform: translateY(1px); }
  svg { flex-shrink: 0; }
`;

const filled = css`
  ${buttonBase}
  background: var(--c-ink);
  color: var(--c-white);
  border: 1px solid var(--c-ink);
  &:hover { opacity: 0.85; }
`;

const outline = css`
  ${buttonBase}
  background: transparent;
  color: var(--c-ink);
  border: 1px solid var(--c-ink);
  &:hover { background: var(--c-ink); color: var(--c-white); }
`;

export const ButtonLink = styled(Link)`${filled}`;
export const OutlineLink = styled(Link)`${outline}`;
export const ButtonA = styled.a`${filled}`;
export const OutlineA = styled.a`${outline}`;
export const OutlineButton = styled.button`${outline}`;

export const TextLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--c-ink);
  text-decoration: none;
  background: linear-gradient(currentColor, currentColor) 0 100% / 0 1px no-repeat;
  transition: background-size 250ms var(--ease-out);
  padding-bottom: 2px;

  &:hover { background-size: 100% 1px; }
  svg { transition: transform 250ms var(--ease-out); }
  &:hover svg { transform: translateX(3px); }
`;

/* ── Status pill (semantic, the only place red appears in UI chrome) ── */

const Pill = styled.span<{ $status: EventStatus }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: var(--r-pill);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  background: ${(p) => (p.$status === "upcoming" ? "rgba(230,57,70,.10)" : "rgba(0,0,0,.05)")};
  color: ${(p) => (p.$status === "upcoming" ? "var(--c-status-upcoming)" : "var(--c-slate)")};

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
  }
`;

export const StatusPill: React.FC<{ status: EventStatus; label: string }> = ({ status, label }) => (
  <Pill $status={status}>{label}</Pill>
);

/* ── Reveal on scroll ──────────────────────────────────────── */

const RevealBox = styled.div<{ $shown: boolean; $delay: number }>`
  opacity: ${(p) => (p.$shown ? 1 : 0)};
  transform: ${(p) => (p.$shown ? "none" : "translateY(8px)")};
  transition: opacity var(--dur) var(--ease-out) ${(p) => p.$delay}ms,
              transform var(--dur) var(--ease-out) ${(p) => p.$delay}ms;
`;

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(
    () => typeof IntersectionObserver === "undefined" || prefersReducedMotion()
  );

  useEffect(() => {
    if (shown || !ref.current) return;
    // The huge top margin makes everything *above* the viewport count as
    // intersecting too, so jumping past an element (End key, anchor, fast
    // scroll) still reveals it instead of leaving it invisible.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "100000px 0px -8% 0px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [shown]);

  return (
    <RevealBox ref={ref} $shown={shown} $delay={delay} className={className}>
      {children}
    </RevealBox>
  );
};
