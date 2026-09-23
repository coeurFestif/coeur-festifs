import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { PiInstagramLogoFill, PiEnvelopeSimpleFill } from "react-icons/pi";
import { useEventData } from "../data/events";
import { PARTNERS, VOLUNTEER_COUNT } from "../data/partners";
import { Figures, Founders } from "../components/Showcase";
import { ButtonA, Container, Display, Lead, OutlineA, Reveal, Section, SectionTitle } from "../components/ui";
import { EMAIL, INSTAGRAM_URL } from "../components/eventActions";
import commonPic from "../assets/commonPic.jpg";

const Intro = styled(Container)`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: var(--sp-16);
  align-items: center;
  padding-top: var(--sp-12);
  padding-bottom: var(--section);

  @media (max-width: 860px) { grid-template-columns: 1fr; gap: var(--sp-10); }
`;

const IntroCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--sp-6);
`;

const Body = styled.p`
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--c-graphite);
  max-width: 36em;
`;

const PhotoCard = styled.figure`
  justify-self: center;
  width: min(100%, 440px);
  transform: rotate(-2deg);
  transition: transform 500ms var(--ease-out);

  &:hover { transform: rotate(0deg); }
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: var(--r-card);
    box-shadow: var(--sh-event);
  }
`;

const Split = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-16);
  align-items: start;

  @media (max-width: 860px) { grid-template-columns: 1fr; gap: var(--sp-10); }
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--sp-5);
`;

// Values as editorial rows, not three emoji cards.
const Values = styled.ol`
  list-style: none;
  margin-top: var(--sp-10);
  border-top: 1px solid var(--c-ink);
`;

const Value = styled.div`
  display: grid;
  grid-template-columns: minmax(180px, 1fr) 1.4fr;
  gap: var(--sp-8);
  align-items: baseline;
  padding: var(--sp-8) 0;
  border-bottom: 1px solid var(--c-hair);

  h3 {
    font-family: var(--f-display);
    font-weight: 800;
    font-size: clamp(1.75rem, 3.6vw, 2.75rem);
    letter-spacing: -0.03em;
    line-height: 1;
  }
  p { font-size: 1.1rem; color: var(--c-graphite); max-width: 32em; }

  @media (max-width: 640px) { grid-template-columns: 1fr; gap: var(--sp-3); }
`;

const Join = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-8);
  flex-wrap: wrap;

  div { display: flex; flex-direction: column; gap: var(--sp-3); }
  nav { display: flex; gap: var(--sp-3); flex-wrap: wrap; }
`;

export const AboutUs = () => {
  const { t } = useTranslation();
  const events = useEventData();

  const values = [
    { title: t("ui.about.compassionTitle"), text: t("ui.about.compassion") },
    { title: t("ui.about.communityTitle"), text: t("ui.about.community") },
    { title: t("ui.about.inclusionTitle"), text: t("ui.about.inclusion") },
  ];

  return (
    <>
      <Intro>
        <IntroCopy>
          <Display>{t("aboutUs.title")}</Display>
          <Lead>{t("ui.about.lead")}</Lead>
          <Body>{t("aboutUs.desc").trim()}</Body>
        </IntroCopy>
        <PhotoCard>
          <img src={commonPic} alt={t("aboutUs.presidentsTitle")} />
        </PhotoCard>
      </Intro>

      <Section $wash>
        <Container>
          <Figures
            items={[
              { n: VOLUNTEER_COUNT, label: t("ui.home.statVolunteers") },
              { n: events.length, label: t("ui.home.statEvents") },
              { n: PARTNERS.length, label: t("ui.home.statPartners") },
            ]}
          />
        </Container>
      </Section>

      <Section aria-labelledby="team-title">
        <Split>
          <Stack>
            <SectionTitle id="team-title">{t("aboutUs.presidentsTitle")}</SectionTitle>
            <Lead>{t("aboutUs.benevoleText")}</Lead>
            <SectionTitle as="h3" style={{ fontSize: "1.5rem", marginTop: "var(--sp-6)" }}>
              {t("aboutUs.missionTitle")}
            </SectionTitle>
            <Body>{t("aboutUs.missionText")}</Body>
          </Stack>
          <Founders />
        </Split>
      </Section>

      <Section aria-labelledby="values-title">
        <Container>
          <SectionTitle id="values-title">{t("aboutUs.valuesTitle")}</SectionTitle>
          <Lead style={{ marginTop: "var(--sp-3)" }}>{t("ui.about.valuesLead")}</Lead>
          <Values>
            {values.map((v, i) => (
              <li key={v.title}>
                <Reveal delay={i * 80}>
                  <Value>
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </Value>
                </Reveal>
              </li>
            ))}
          </Values>
        </Container>
      </Section>

      <Section $wash aria-labelledby="join-title">
        <Container>
          <Join>
            <div>
              <SectionTitle id="join-title">{t("ui.about.joinTitle")}</SectionTitle>
              <Lead>{t("ui.about.joinText")}</Lead>
            </div>
            <nav aria-label={t("footer.contact")}>
              <ButtonA href={`mailto:${EMAIL}`}>
                <PiEnvelopeSimpleFill aria-hidden="true" /> {t("footer.contact")}
              </ButtonA>
              <OutlineA href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <PiInstagramLogoFill aria-hidden="true" /> Instagram
              </OutlineA>
            </nav>
          </Join>
        </Container>
      </Section>
    </>
  );
};
