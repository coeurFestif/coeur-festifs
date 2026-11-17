import React, { useEffect, useId, useMemo, useRef, useState } from "react";

/*
 * Crayon kit: hand-drawn strokes that draw themselves, and shapes that get
 * "coloured in" with back-and-forth zig-zags. Styles live in index.css (.dd,
 * .ln, .fz, .hl, .rv). Anything inside an element with `.go` animates.
 */

export const COL = {
  gold: "#f2b92f",
  coral: "#f86668",
  cherry: "#c81e2b",
  wine: "#5e0b1c",
  blush: "#fde4e1",
  pink: "#f9b6b4",
} as const;
export type Colour = keyof typeof COL;

const SHAPES = {
  heart: "M50 88C20 68 6 50 8 32 10 16 26 8 38 12c6 2 10 6 12 12 2-6 6-10 12-12 12-4 28 4 30 20 2 18-12 36-42 56Z",
  house: "M12 50L50 16l38 34M22 42v44h56V42M42 86V64h16v22",
  star: "M50 8l11 27 29 2-22 19 7 29-25-16-25 16 7-29-22-19 29-2Z",
};
const CLIP: Record<keyof typeof SHAPES, string> = {
  heart: SHAPES.heart,
  house: "M22 44L50 19l28 25v42H22Z",
  star: SHAPES.star,
};
export const SPARK = "M12 2C13 9 15 11 22 12 15 13 13 15 12 22 11 15 9 13 2 12 9 11 11 9 12 2Z";

/** Zig-zag strokes across a w×h box. m < 0 overshoots (clipped fills), m > 0 stays inside (highlights). */
const zz = (w: number, h: number, gap: number, j = 1.4, m = -6, top = -gap, bot = h + gap) => {
  let d = `M${m} ${top}`;
  let y = top;
  let right = true;
  while (y < bot) {
    y += gap;
    d += `L${right ? w - m : m} ${Math.min(bot, y + (Math.random() - 0.5) * j * 2).toFixed(1)}`;
    right = !right;
  }
  return d;
};

type Timing = { delay?: number; dur?: number };
const timing = ({ delay, dur }: Timing, style?: React.CSSProperties) =>
  ({ ...(delay != null && { "--w": `${delay}s` }), ...(dur != null && { "--d": `${dur}s` }), ...style } as React.CSSProperties);

/** SVG filters referenced by the kit. Mount once. */
export const CrayonDefs = () => (
  <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
    <filter id="crayon" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves={2} seed={4} result="w" />
      <feDisplacementMap in="SourceGraphic" in2="w" scale="2.4" result="d" />
      <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves={1} seed={11} result="g" />
      <feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  3 0 0 0 -.8" result="grain" />
      <feComposite in="d" in2="grain" operator="in" />
    </filter>
    <filter id="wax" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency=".7" numOctaves={2} seed={7} result="w" />
      <feDisplacementMap in="SourceGraphic" in2="w" scale="3" result="d" />
      <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves={1} seed={3} result="g" />
      <feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  2.4 0 0 0 -.35" result="grain" />
      <feComposite in="d" in2="grain" operator="in" />
    </filter>
  </svg>
);

/** A single stroke that draws itself. */
export const Stroke: React.FC<
  Timing & { d: string; viewBox: string; color: Colour; width?: number; className?: string; style?: React.CSSProperties; stretch?: boolean }
> = ({ d, viewBox, color, width = 3, className = "", style, stretch, ...t }) => (
  <svg
    className={`dd ln ${className}`}
    style={timing(t, style)}
    viewBox={viewBox}
    preserveAspectRatio={stretch ? "none" : undefined}
    aria-hidden="true"
  >
    <path pathLength={1} stroke={COL[color]} strokeWidth={width} d={d} />
  </svg>
);

/** A shape coloured in with crayon, then outlined. */
export const Coloured: React.FC<
  Timing & { shape: keyof typeof SHAPES; fill: Colour; line: Colour; gap?: number; className?: string; style?: React.CSSProperties }
> = ({ shape, fill, line, gap = 4.2, className = "", style, ...t }) => {
  const id = "c" + useId().replace(/:/g, "");
  const d = useMemo(() => zz(100, 100, gap), [gap]);
  return (
    <svg className={`dd ${className}`} style={timing(t, style)} viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <clipPath id={id}>
          <path d={CLIP[shape]} />
        </clipPath>
      </defs>
      <g className="fz" clipPath={`url(#${id})`}>
        <path pathLength={1} stroke={COL[fill]} strokeWidth={gap * 1.5} d={d} />
      </g>
      <g className="ln" style={{ "--w": `${(t.delay ?? 0) + 1}s`, "--d": ".9s" } as React.CSSProperties}>
        <path pathLength={1} stroke={COL[line]} strokeWidth={3} d={SHAPES[shape]} />
      </g>
    </svg>
  );
};

/** Highlighter scribble behind a word: <Hl color="gold">36 bénévoles</Hl>. */
export const Hl: React.FC<Timing & { color?: Colour; children?: React.ReactNode; className?: string }> = ({
  color = "gold",
  children,
  className = "",
  ...t
}) => {
  const d = useMemo(() => zz(100, 40, 6, 1, 5, 6, 34), []);
  return (
    <span className={`hl ${className}`}>
      {children}
      <svg className="dd fz" style={timing({ dur: 0.7, ...t })} viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
        <path pathLength={1} stroke={COL[color]} strokeWidth={9} d={d} />
      </svg>
    </span>
  );
};

/** Adds `go` once the element scrolls into view, which starts its crayon work. */
export function useGo<T extends HTMLElement>(immediate = false) {
  const ref = useRef<T>(null);
  const [go, setGo] = useState(immediate);
  useEffect(() => {
    if (go || !ref.current) return;
    if (typeof IntersectionObserver === "undefined") return setGo(true);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setGo(true);
          io.disconnect();
        }
      },
      // Elements already scrolled past (anchor jumps) count as seen too.
      { rootMargin: "100000px 0px -15% 0px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [go]);
  return [ref, go ? "go" : ""] as const;
}

/** Fade-up block that also triggers the crayon drawing inside it. */
export const Rv: React.FC<{ as?: React.ElementType; className?: string; style?: React.CSSProperties; children?: React.ReactNode; id?: string }> = ({
  as: Tag = "div",
  className = "",
  ...rest
}) => {
  const [ref, go] = useGo<HTMLElement>();
  return <Tag ref={ref} className={`rv ${go} ${className}`} {...rest} />;
};
