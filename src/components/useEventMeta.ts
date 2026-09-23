import { useTranslation } from "react-i18next";
import { Event } from "../schema/event";
import {
  dateBadge,
  daysUntil,
  formatEventDate,
  formatEventTime,
  getStatus,
} from "../utils/eventDates";

/** Everything the UI shows about an event's timing, localized. */
export function useEventMeta(event: Event) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const status = getStatus(event);
  const days = daysUntil(event);

  let relative: string | null = null;
  if (status === "upcoming" && days !== null) {
    if (days <= 0) relative = t("ui.events.today");
    else if (days === 1) relative = t("ui.events.tomorrow");
    else relative = t("ui.events.inDays", { count: days });
  }

  return {
    status,
    statusLabel: t(status === "upcoming" ? "ui.events.statusUpcoming" : "ui.events.statusPast"),
    dateText: formatEventDate(event, lang) ?? t("ui.events.undated"),
    timeText: formatEventTime(event, lang),
    badge: dateBadge(event, lang),
    relative,
  };
}
