import { Event } from "../schema/event";
import { buildIcs } from "../utils/eventDates";

export const eventUrl = (event: Event) =>
  `${window.location.origin}/coeur-festifs/event/${event.id}`;

/** Downloads a .ics file so the event lands in any calendar app, no backend needed. */
export function downloadIcs(event: Event) {
  const ics = buildIcs(event, eventUrl(event));
  if (!ics) return;
  const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = `coeurs-festifs-${event.id}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}

export const INSTAGRAM_URL = "https://www.instagram.com/coeurs.festifs";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61571443886637";
export const LINKEDIN_URL = "https://www.linkedin.com/company/coeurs-festifs/";
export const EMAIL = "coeurs.festifs@gmail.com";
