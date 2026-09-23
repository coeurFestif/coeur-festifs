import { Event } from "../schema/event";
import { useTranslation } from "react-i18next";
import { sortEvents } from "../utils/eventDates";
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
import leveeDeFonds from "../assets/levee.jpg";
import halloween from "../assets/halloween.png";
import noelParty from "../assets/noelParty.jpg";
import foireMetier from "../assets/foireMetier.png";
import guignole from "../assets/guignole.png";

export const useEventData = (): Event[] => {
  const { t } = useTranslation();

  const events: Event[] = [
    {
      id: "1",
      startsAt: "2025-01-11",
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
      isPast: true,
    },
    {
      id: "2",
      startsAt: "2025-04-10",
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
      isPast: true,
    },
    {
      id: "3",
      startsAt: "2025-08-23",
      title: t("events.events.2.title"),
      date: t("events.events.2.date"),
      location: t("events.events.2.location"),
      description: t("events.events.2.description"),
      image: birthday,
      isAvailable: true,
      isPast: true,
    },
    {
      id: "4",
      startsAt: "2025-09-06T14:00",
      endsAt: "2025-09-06T19:00",
      title: t("events.events.3.title"),
      date: t("events.events.3.date"),
      location: t("events.events.3.location"),
      description: t("events.events.3.description"),
      partner: ["La Maison de la culture de Côte-des-Neiges"],
      image: prismart,
      isAvailable: true,
      isPast: true,
    },
    {
      id: "5",
      startsAt: "2025-11-01",
      title: t("events.events.4.title"),
      date: t("events.events.4.date"),
      location: t("events.events.4.location"),
      description: t("events.events.4.description"),
      partner: [
        "CCSIG",
        "Sainte-Justine au Coeur du Monde",
        "Carrefour Jeunesse Emploi Côte-des-Neiges",
      ],
      image: leveeDeFonds,
      isAvailable: true,
      isPast: true,
    },
    {
      id: "6",
      startsAt: "2025-10-31",
      title: t("events.events.5.title"),
      date: t("events.events.5.date"),
      location: t("events.events.5.location"),
      description: t("events.events.5.description"),
      isAvailable: true,
      isPast: true,
      partner: ["Centre communautaire Mountain Sights"],
      image: halloween,
    },
    {
      id: "7",
      startsAt: "2025-11-22",
      title: t("events.events.6.title"),
      date: t("events.events.6.date"),
      location: t("events.events.6.location"),
      description: t("events.events.6.description"),
      isAvailable: true,
      isPast: true,
      partner: ["Promis", "Mini Molars Club"],
      image: foireMetier,
    },
    {
      id: "8",
      startsAt: "2025-12-13",
      title: t("events.events.7.title"),
      date: t("events.events.7.date"),
      location: t("events.events.7.location"),
      description: t("events.events.7.description"),
      isAvailable: true,
      isPast: true,
      partner: ["Promis"],
      image: noelParty,
    },
    {
      id: "9",
      startsAt: "2025-12-13",
      title: t("events.events.8.title"),
      date: t("events.events.8.date"),
      location: t("events.events.8.location"),
      description: t("events.events.8.description"),
      isAvailable: true,
      isPast: true,
      partner: ["Centre spécialisé de pédiatrie sociale", "Garage à Musique"],
      image: guignole,
    },
  ];

  // Past/upcoming is derived from startsAt (see utils/eventDates), so an event
  // moves to "Passés" by itself the day after it happens.
  return sortEvents(events.filter((e) => e.isAvailable));
};
