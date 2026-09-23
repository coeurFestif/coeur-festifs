import React from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEventData } from "../data/events";
import { PARTNERS, SPONSORS } from "../data/partners";
import { getStatus, groupByYear } from "../utils/eventDates";
import { NextEvent, NextEventEmpty } from "../components/NextEvent";
import { PosterCard } from "../components/PosterCard";
import { OrgGrid } from "../components/OrgGrid";
import { Container, Display, Lead, Reveal, Section, SectionTitle, withViewTransition } from "../components/ui";

type Tab = "upcoming" | "past";

const Header = styled.header`
  padding: var(--sp-12) 0 var(--sp-8);
  display: flex;
  flex-direction: column;
  gap: var(--sp-4);
`;

// Partiful "feature tab selector": pill track, active tab lifts to white.
const Tabs = styled.div`
  display: inline-flex;
  padding: 4px;
  border-radius: var(--r-pill);
  background: rgba(0, 0, 0, 0.05);
  margin-bottom: var(--sp-10);
`;

const TabBtn = styled.button<{ $on: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 40px;
  padding: 8px 18px;
  border: none;
  border-radius: var(--r-pill);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  background: ${(p) => (p.$on ? "var(--c-white)" : "transparent")};
  color: ${(p) => (p.$on ? "var(--c-ink)" : "var(--c-slate)")};
  box-shadow: ${(p) => (p.$on ? "var(--sh-card)" : "none")};
  transition: background 200ms ease, color 200ms ease, box-shadow 200ms ease;

  &:hover { color: var(--c-ink); }

  span {
    min-width: 22px;
    padding: 1px 7px;
    border-radius: var(--r-pill);
    font-size: 0.75rem;
    background: ${(p) => (p.$on ? "var(--c-ink)" : "rgba(0,0,0,.08)")};
    color: ${(p) => (p.$on ? "var(--c-white)" : "var(--c-slate)")};
    font-variant-numeric: tabular-nums;
  }
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: var(--sp-8) var(--sp-5);
  list-style: none;
`;

const YearBlock = styled.section`
  & + & { margin-top: var(--sp-16); }
`;

const YearHead = styled.h2`
  display: flex;
  align-items: baseline;
  gap: var(--sp-3);
  margin-bottom: var(--sp-6);
  padding-bottom: var(--sp-3);
  border-bottom: 1px solid var(--c-hair);
  font-family: var(--f-display);
  font-weight: 800;
  font-size: 2rem;
  letter-spacing: -0.03em;

  small {
    font-family: var(--f-body);
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0;
    color: var(--c-ash);
  }
`;

const Later = styled.div`
  margin-top: var(--sp-12);
`;

const GroupLabel = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--c-slate);
  margin: var(--sp-8) 0 var(--sp-4);
`;

export const Events = () => {
  const { t } = useTranslation();
  const events = useEventData();
  const upcoming = events.filter((e) => getStatus(e) === "upcoming");
  const past = events.filter((e) => getStatus(e) === "past");

  // Tab lives in the URL so it survives back/forward and can be shared.
  const [params, setParams] = useSearchParams();
  const fallback: Tab = upcoming.length ? "upcoming" : "past";
  const tab: Tab = params.get("tab") === "upcoming" || params.get("tab") === "past" ? (params.get("tab") as Tab) : fallback;
  const select = (next: Tab) =>
    withViewTransition(() => setParams(next === fallback ? {} : { tab: next }, { replace: true }));

  const [first, ...rest] = upcoming;

  return (
    <>
      <Container>
        <Header>
          <Display>{t("events.title")}</Display>
          <Lead>{t("ui.events.lead")}</Lead>
        </Header>

        <Tabs role="tablist" aria-label={t("events.title")}>
          {(["upcoming", "past"] as Tab[]).map((key) => (
            <TabBtn
              key={key}
              role="tab"
              id={`tab-${key}`}
              aria-selected={tab === key}
              aria-controls={`panel-${key}`}
              $on={tab === key}
              onClick={() => select(key)}
            >
              {t(key === "upcoming" ? "events.filterUpcoming" : "events.filterPast")}
              <span>{key === "upcoming" ? upcoming.length : past.length}</span>
            </TabBtn>
          ))}
        </Tabs>

        <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} style={{ paddingBottom: "var(--section)" }}>
          {tab === "upcoming" ? (
            first ? (
              <>
                <Reveal>
                  <NextEvent event={first} />
                </Reveal>
                {rest.length > 0 && (
                  <Later>
                    <Grid>
                      {rest.map((ev, i) => (
                        <li key={ev.id}>
                          <Reveal delay={Math.min(i, 6) * 60}>
                            <PosterCard event={ev} showStatus />
                          </Reveal>
                        </li>
                      ))}
                    </Grid>
                  </Later>
                )}
              </>
            ) : (
              <NextEventEmpty />
            )
          ) : (
            groupByYear(past).map((group) => (
              <YearBlock key={group.year ?? "undated"} aria-label={group.year ?? t("ui.events.undatedGroup")}>
                <YearHead>
                  {group.year ?? t("ui.events.undatedGroup")}
                  <small>{group.events.length}</small>
                </YearHead>
                <Grid>
                  {group.events.map((ev, i) => (
                    <li key={ev.id}>
                      <Reveal delay={Math.min(i, 6) * 60}>
                        <PosterCard event={ev} />
                      </Reveal>
                    </li>
                  ))}
                </Grid>
              </YearBlock>
            ))
          )}
        </div>
      </Container>

      <Section $wash aria-labelledby="orgs-title">
        <Container>
          <SectionTitle id="orgs-title">{t("ui.home.worksWith")}</SectionTitle>
          <GroupLabel>{t("events.partner")}</GroupLabel>
          <OrgGrid orgs={PARTNERS} />
          <GroupLabel>{t("events.sponsor")}</GroupLabel>
          <OrgGrid orgs={SPONSORS} />
        </Container>
      </Section>
    </>
  );
};
