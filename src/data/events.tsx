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
import leveeDeFonds from "../assets/levee.jpg";
import halloween from "../assets/halloween.png";
import garageMusique from "../assets/garageMusique.png";
import noelParty from "../assets/noelParty.jpg";
import foireMetier from "../assets/foireMetier.png";
import guignole from "../assets/guignole.png";
import minimolars from "../assets/minimolars.png";

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
    {
      id: "5",
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
    },

    {
      id: "6",
      title: t("events.events.5.title"),
      date: t("events.events.5.date"),
      location: t("events.events.5.location"),
      description: t("events.events.5.description"),
      isAvailable: true,
      partner: ["Centre communautaire Mountain Sights"],
      image: halloween,
    },
    {
      id: "7",
      title: t("events.events.6.title"),
      date: t("events.events.6.date"),
      location: t("events.events.6.location"),
      description: t("events.events.6.description"),
      isAvailable: true,
      partner: ["Promis", "Mini Molars Club"],
      image: foireMetier,
    },
    {
      id: "8",
      title: t("events.events.7.title"),
      date: t("events.events.7.date"),
      location: t("events.events.7.location"),
      description: t("events.events.7.description"),
      isAvailable: true,
      partner: ["Promis"],
      image: noelParty,
    },
    {
      id: "9",
      title: t("events.events.8.title"),
      date: t("events.events.8.date"),
      location: t("events.events.8.location"),
      description: t("events.events.8.description"),
      isAvailable: true,
      partner: ["Centre spécialisé de pédiatrie sociale", "Garage à Musique"],
      image: guignole,
    },
  ];

  return events;
};
