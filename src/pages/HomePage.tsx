import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import { useEventData } from "../data/events";
import { PARTNERS, SPONSORS, VOLUNTEER_COUNT } from "../data/partners";
import { formatEventDate, getStatus, groupByYear, parseLocal } from "../utils/eventDates";
import { useEventMeta } from "../components/useEventMeta";
import { EMAIL, INSTAGRAM_URL } from "../components/eventActions";
import { Coloured, Hl, Rv, SPARK, Stroke } from "../components/Crayon";
import { Event } from "../schema/event";
import commonPic from "../assets/commonPic.jpg";
import logo from "../assets/logo.png";
import "./HomePage.css";

const EDGE = "M0 22V12C60 4 120 18 200 10S340 2 420 12 560 20 640 10 780 2 860 12 1000 20 1080 10 1160 6 1200 12V22Z";
const Edge = ({ pos }: { pos: "t" | "b" }) => (
  <svg className={`edge ${pos}`} viewBox="0 0 1200 22" preserveAspectRatio="none" aria-hidden="true">
    <path fill="#fde4e1" d={EDGE} />
  </svg>
);

const calm = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
const eventUrl = (e: Event) => `/coeur-festifs/event/${e.id}`;
const volunteerMail = `mailto:${EMAIL}?subject=${encodeURIComponent("Bénévolat")}`;

// Landscape posters get letterboxed instead of cropped.
const markWide = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const im = e.currentTarget;
  if (im.naturalWidth > im.naturalHeight * 1.1) im.classList.add("wide");
};

/* ═══════════════ Hero: poster pile on a heart being coloured in ═══════════════ */

const Pile: React.FC<{ events: Event[] }> = ({ events }) => {
  const { t, i18n } = useTranslation();
  const n = events.length;
  const [cur, setCur] = useState(0);
  const figs = useRef<(HTMLElement | null)[]>([]);
  const pileRef = useRef<HTMLDivElement>(null);
  const st = useRef({ stop: calm(), seen: false, hover: false, cur: 0 });

  const next = useCallback(() => {
    const s = st.current;
    const f = figs.current[s.cur];
    const reduce = calm();
    if (f && !reduce) {
      f.classList.remove("toss");
      void f.offsetWidth; // restart the animation
      f.classList.add("toss");
    }
    setTimeout(() => {
      s.cur = (s.cur + 1) % n;
      setCur(s.cur);
    }, reduce ? 0 : 300);
  }, [n]);

  useEffect(() => {
    const el = pileRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => (st.current.seen = e.isIntersecting));
    io.observe(el);
    const id = window.setInterval(() => {
      const s = st.current;
      if (!s.stop && s.seen && !s.hover && !document.hidden) next();
    }, 3800);
    return () => {
      io.disconnect();
      clearInterval(id);
    };
  }, [next]);

  const manual = () => {
    st.current.stop = true;
    next();
  };
  const ev = events[cur];

  return (
    <div className="pile-wrap">
      <Coloured shape="heart" fill="coral" line="cherry" className="bigheart" delay={0.3} dur={2} />
      <div
        className="pile"
        ref={pileRef}
        role="img"
        aria-label={t("ui.home.pileLabel")}
        onClick={manual}
        onPointerEnter={() => (st.current.hover = true)}
        onPointerLeave={() => (st.current.hover = false)}
      >
        <span className="tape" aria-hidden="true" />
        {events.map((e, k) => {
          const p = (k - cur + n) % n;
          return (
            <figure
              key={e.id}
              ref={(el) => {
                figs.current[k] = el;
              }}
              data-p={Math.min(p, 4)}
              style={p > 4 ? { visibility: "hidden" } : undefined}
            >
              <img src={e.image} alt="" loading={k < 2 ? undefined : "lazy"} decoding="async" onLoad={markWide} />
            </figure>
          );
        })}
      </div>
      <div className="stk">
        <img src={logo} alt="Logo Cœurs Festifs" width={848} height={848} />
      </div>
      <div className="cap">
        <div aria-live="polite">
          <Link to={eventUrl(ev)}>
            <b>{ev.title}</b>
          </Link>
          <span>
            {formatEventDate(ev, i18n.language) ?? t("ui.events.undated")} · {cur + 1} / {n}
          </span>
        </div>
        <button className="next" type="button" aria-label={t("ui.home.pileNext")} onClick={manual}>
          ↻
        </button>
      </div>
    </div>
  );
};

const Hero: React.FC<{ pile: Event[] }> = ({ pile }) => {
  const { t } = useTranslation();
  return (
    <section className="wrap hero go" aria-labelledby="hero-title">
      <div className="conf" style={{ left: "44%", top: "6%" }} aria-hidden="true">
        <Stroke viewBox="0 0 46 30" color="coral" width={3.4} delay={1.4} style={{ width: 46, height: 30 }} d="M3 20c6-14 10 8 16-6s10 8 16-6 8 4 8 4" />
      </div>
      <div className="conf" style={{ left: "56%", top: "74%" }} aria-hidden="true">
        <Stroke viewBox="0 0 34 34" color="gold" width={3.4} delay={1.7} style={{ width: 34, height: 34 }} d="M17 17c0-3 4-3 4 0s-5 6-8 3-1-11 5-11 11 6 9 13-11 9-16 5" />
      </div>
      <div>
        <span className="kick hand">
          <Stroke viewBox="0 0 24 24" color="gold" width={2.6} delay={0.2} d={SPARK} />
          {t("ui.home.kicker")}
        </span>
        <h1 id="hero-title">
          <span className="l">{t("ui.home.heroL1")}</span>
          <span className="l">{t("ui.home.heroL2")}</span>
          <span className="l">
            <Hl className="vie" color="gold" delay={0.9} dur={1}>
              {t("ui.home.heroL3")}
              <Stroke className="spk1" viewBox="0 0 24 24" color="coral" width={2.6} delay={1.8} dur={0.5} d={SPARK} />
              <Stroke className="spk2" viewBox="0 0 24 24" color="gold" width={3} delay={2.1} dur={0.4} d={SPARK} />
            </Hl>
          </span>
        </h1>
        <p className="lead">{t("ui.home.heroLead")}</p>
        <div className="actions">
          <Link className="btn" to="/coeur-festifs/events">
            {t("ui.home.ctaEvents")}
          </Link>
          <a className="tl" href={volunteerMail}>
            {t("ui.home.ctaJoin")}
          </a>
        </div>
      </div>
      {pile.length > 0 && <Pile events={pile} />}
    </section>
  );
};

/* ═══════════════ The year, month by month ═══════════════ */

const Year: React.FC<{ year: string; events: Event[] }> = ({ year, events }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const monthName = new Intl.DateTimeFormat(lang, { month: "short" });
  const dayMonth = new Intl.DateTimeFormat(lang, { day: "numeric", month: "short" });

  const byMonth: Event[][] = Array.from({ length: 12 }, () => []);
  for (const e of events) if (e.startsAt) byMonth[parseLocal(e.startsAt).getMonth()].push(e);
  byMonth.forEach((list) => list.sort((a, b) => a.startsAt!.localeCompare(b.startsAt!)));

  // Busiest 3-month stretch, worth a note when it's really busy.
  const busy = Math.max(...byMonth.slice(0, 10).map((_, m) => byMonth[m].length + byMonth[m + 1].length + byMonth[m + 2].length));

  return (
    <section className="year" id="annee" aria-labelledby="year-title">
      <div className="wrap">
        <Rv className="year-head">
          <h2 id="year-title">
            <Trans i18nKey="ui.home.yearTitle" values={{ year }} components={{ h: <Hl color="cherry" delay={0.4} dur={0.8} /> }} />
          </h2>
          <p>{t("ui.home.yearLead")}</p>
        </Rv>
        <Rv className="months-wrap">
          {busy >= 4 && (
            <span className="busy hand" aria-hidden="true">
              {t("ui.home.yearBusy", { count: busy })}
            </span>
          )}
          <Stroke viewBox="0 0 1000 14" color="gold" width={2.6} delay={0.2} dur={1.8} stretch d="M2 7Q60 1 125 7T250 7T375 7T500 7T625 7T750 7T875 7T998 7" />
          <ol className="months">
            {byMonth.map((list, m) => {
              const name = monthName.format(new Date(2000, m, 1));
              if (!list.length)
                return (
                  <li key={m} className="m empty" aria-hidden="true">
                    <h3>{name}</h3>
                    <div className="slot" />
                  </li>
                );
              return (
                <li key={m} className="m has">
                  <h3>{name}</h3>
                  <div className={`slot ${list.length > 1 ? "two" : ""}`}>
                    {list.slice(0, 2).map((e) => (
                      <Link key={e.id} to={eventUrl(e)}>
                        <img src={e.image} alt={t("ui.events.posterAlt", { title: e.title })} loading="lazy" decoding="async" onLoad={markWide} />
                      </Link>
                    ))}
                  </div>
                  <ul>
                    {list.map((e) => (
                      <li key={e.id}>
                        <b>{dayMonth.format(parseLocal(e.startsAt!))}</b>
                        {e.title}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        </Rv>
      </div>
    </section>
  );
};

/* ═══════════════ Closing: next party, or the designed empty state ═══════════════ */

const NextParty: React.FC<{ event: Event }> = ({ event }) => {
  const { t } = useTranslation();
  const meta = useEventMeta(event);
  const when = [meta.dateText, meta.timeText].filter(Boolean).join(", ");
  return (
    <>
      <span className="kk hand">
        {t("ui.home.nextKicker")}
        {meta.relative ? ` · ${meta.relative.toLowerCase()}` : ""}
      </span>
      <h2 id="end-title">{event.title}</h2>
      <p>{[when, event.location].filter(Boolean).join(" · ")}</p>
      <div className="actions">
        <Link className="btn" to={eventUrl(event)}>
          {t("events.viewDetails")}
        </Link>
        <a className="btn lt" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          {t("ui.events.followInstagram")}
        </a>
      </div>
    </>
  );
};

const NoParty = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 id="end-title">{t("ui.events.emptyTitle")}</h2>
      <p>{t("ui.events.emptyText")}</p>
      <div className="actions">
        <a className="btn" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          {t("ui.events.followInstagram")}
        </a>
        <a className="btn lt" href={`mailto:${EMAIL}?subject=Partenariat`}>
          {t("ui.events.proposePartnership")}
        </a>
      </div>
    </>
  );
};

/* ═══════════════ Page ═══════════════ */

const STEPS = [
  { shape: "house", fill: "pink", c: "var(--c-coral)" },
  { shape: "heart", fill: "coral", c: "var(--c-gold)" },
  { shape: "star", fill: "gold", c: "var(--c-cherry)" },
] as const;

const VALUES = [
  { key: "compassionTitle", c: "var(--c-coral)", r: "-2deg" },
  { key: "communityTitle", c: "var(--c-gold)", r: "1.5deg" },
  { key: "inclusionTitle", c: "var(--c-blush)", r: "-1deg" },
];

export const HomePage = () => {
  const { t } = useTranslation();
  const events = useEventData(); // upcoming soonest-first, then past newest-first
  const upcoming = events.filter((e) => getStatus(e) === "upcoming");
  const next = upcoming[0];

  // Pile: upcoming first; otherwise open on Halloween (a portrait poster reads best on top).
  const lead = upcoming.length ? 0 : Math.max(0, events.findIndex((e) => e.id === "6"));
  const pile = [...events.slice(lead), ...events.slice(0, lead)].filter((e) => e.image);

  // Timeline: the latest year with a real season of parties (3+), else the latest year.
  const years = groupByYear(events).filter((g) => g.year);
  const season = years.find((g) => g.events.length >= 3) ?? years[0];

  return (
    <div className="home">
      <Hero pile={pile} />

      {/* the sentence, real counts only */}
      <section className="says">
        <Edge pos="t" />
        <Rv className="wrap">
          <p>
            <Trans
              i18nKey="ui.home.says"
              values={{ v: VOLUNTEER_COUNT, e: events.length, o: PARTNERS.length + SPONSORS.length }}
              components={{
                v: <Hl color="gold" delay={0.3} />,
                e: <Hl color="coral" delay={0.8} dur={0.6} />,
                o: <Hl color="gold" delay={1.3} />,
                m: <span className="muted" />,
              }}
            />
          </p>
        </Rv>
        <Edge pos="b" />
      </section>

      {/* three steps */}
      <section className="wrap how" aria-labelledby="how-title">
        <Rv className="how-head">
          <h2 id="how-title">{t("ui.home.howTitle")}</h2>
          <span className="hand">{t("ui.home.howNote")}</span>
        </Rv>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <Rv as="li" key={s.shape} style={{ "--c": s.c } as React.CSSProperties}>
              <div className="ico">
                <Coloured shape={s.shape} fill={s.fill} line="cherry" gap={5} />
              </div>
              <span className="num hand" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{t(`ui.home.step${i + 1}Title`)}</h3>
              <p>{t(`ui.home.step${i + 1}Text`, { count: VOLUNTEER_COUNT })}</p>
            </Rv>
          ))}
        </ol>
      </section>

      {season && <Year year={season.year!} events={season.events} />}

      {/* founders */}
      <section className="wrap us" aria-labelledby="us-title">
        <Rv className="ph">
          <span className="tape" aria-hidden="true" />
          <span className="tape" aria-hidden="true" />
          <div className="frame">
            <img src={commonPic} alt={t("ui.home.photoAlt")} loading="lazy" decoding="async" width={1074} height={1074} />
            <span className="cap2 hand">{t("ui.home.photoCaption")}</span>
          </div>
          <span className="note hand" aria-hidden="true">
            {t("ui.home.photoNote")}
          </span>
          <Stroke className="arrow" viewBox="0 0 120 90" color="cherry" width={2.6} delay={0.5} d="M110 8C70 2 30 18 24 62M38 52L24 66l-8-18" />
          <Coloured shape="heart" fill="gold" line="cherry" className="h1s" delay={0.8} dur={1.2} />
        </Rv>
        <Rv>
          <span className="kk hand">{t("ui.home.usKicker")}</span>
          <h2 id="us-title">{t("ui.home.aboutTitle")}</h2>
          <p>{t("ui.home.aboutText")}</p>
          <ul className="vals">
            {VALUES.map((v) => (
              <li key={v.key} style={{ "--c": v.c, "--r": v.r } as React.CSSProperties}>
                {t(`ui.about.${v.key}`)}
              </li>
            ))}
          </ul>
          <Link className="tl" to="/coeur-festifs/about">
            {t("ui.home.ctaAbout")}
          </Link>
        </Rv>
      </section>

      {/* partners & sponsors */}
      <section className="credits" aria-labelledby="credits-title">
        <Edge pos="t" />
        <Rv className="wrap">
          <span className="merci hand">
            {t("ui.home.merci")}
            <Stroke viewBox="0 0 80 80" color="cherry" width={4} delay={0.5} d="M40 68C14 50 8 32 20 22c10-8 18-2 20 6 2-8 10-14 20-6 12 10 6 28-20 46z" />
          </span>
          <h2 id="credits-title">{t("ui.home.creditsTitle", { count: PARTNERS.length + SPONSORS.length })}</h2>
          <div className="cols">
            {[
              { label: t("events.partner"), orgs: PARTNERS, c: "var(--c-coral)" },
              { label: t("events.sponsor"), orgs: SPONSORS, c: "var(--c-gold)" },
            ].map((g) => (
              <div key={g.label} style={{ "--c": g.c } as React.CSSProperties}>
                <h3>{g.label}</h3>
                <ul>
                  {g.orgs.map((o) => (
                    <li key={o.name}>{o.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Rv>
      </section>

      {/* closing */}
      <section className="end" aria-labelledby="end-title">
        <div className="wrap">
          <Rv>{next ? <NextParty event={next} /> : <NoParty />}</Rv>
          <Rv className="endart">
            <Coloured shape="heart" fill="cherry" line="wine" className="heart" delay={0.4} dur={2} />
            <div className="stk">
              <img src={logo} alt="" width={848} height={848} loading="lazy" />
            </div>
          </Rv>
        </div>
      </section>
    </div>
  );
};
