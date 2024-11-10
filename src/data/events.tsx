import { Event } from "../schema/event";
import { useTranslation } from "react-i18next";

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
      image: "https://via.placeholder.com/150",
      isAvailable: true,
    },
    {
      id: "2",
      title: t("events.events.1.title"),
      date: t("events.events.1.date"),
      location: t("events.events.1.location"),
      description: t("events.events.1.description"),
      image: "https://via.placeholder.com/150",
      isAvailable: false,
    },
    {
      id: "3",
      title: t("events.events.2.title"),
      date: t("events.events.2.date"),
      location: t("events.events.2.location"),
      description: t("events.events.2.description"),
      image: "https://via.placeholder.com/150",
      isAvailable: false,
    },
  ];

  return events;
};
