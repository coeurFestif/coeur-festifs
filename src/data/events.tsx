import { Event } from "../schema/event";
import { useTranslation } from "react-i18next";
import choco from "../assets/choco.jpg";
import prismart from "../assets/prismart.png";
import birthday from "../assets/30yB.png";
import gcpp from "../assets/Gcpp.png";
import repit from "../assets/repitProvidence.png";
import debrouillard from "../assets/debrouillard.png";
import drJulien from "../assets/drJulien.png";
import Gallimard from "../assets/Gallimard.jpg";
import Scholastic from "../assets/Scholastic.png";
import renojouets from "../assets/renojouets.jpeg";


export const useEventData = (): Event[] => {
  const { t } = useTranslation();

  const events: Event[] = [
    {
      id: "1",
      title: t("events.events.0.title"),
      date: t("events.events.0.date"),
      location: t("events.events.0.location"),
      capacity: 100,
      description: t("events.events.0.description"),
      partner: ["Répit providence"],
      Sponsor: ["Fondation Réno-Jouets"],
      SponsorImg: [renojouets],
      partnerImg: [repit],
      image: choco,
      isAvailable: true,
    },
    {
      id: "2",
      title: t("events.events.1.title"),
      date: t("events.events.1.date"),
      location: t("events.events.1.location"),
      description: t("events.events.1.description"),
      image: gcpp,
      partner: ["Fondation du Dr Julien"],
      partnerImg: [drJulien],
      Sponsor: ["Scholastic", "Librairie Gallimard", "Les Débrouillards"],
      SponsorImg: [Scholastic, Gallimard, debrouillard],
      isAvailable: true,
    },
    {
      id: "3",
      title: t("events.events.2.title"),
      date: t("events.events.2.date"),
      location: t("events.events.2.location"),
      description: t("events.events.2.description"),
      image: birthday,
      isAvailable: true,
    },
    {
      id: "4",
      title: t("events.events.3.title"),
      date: t("events.events.3.date"),
      location: t("events.events.3.location"),
      description: t("events.events.3.description"),
      partner: ["La Maison de la culture de Côte-des-Neiges"],
      image: prismart,
      isAvailable: true,
    },
  ];

  return events;
};
