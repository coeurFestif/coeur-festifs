import { Event } from "../schema/event";

export type EventStatus = "upcoming" | "past";

export interface EventYearGroup {
  year: string | null;
  events: Event[];
}

const DAY_MS = 24 * 60 * 60 * 1000;

// "2025-09-06" or "2025-09-06T14:00" parsed as Montréal local time, not UTC
// (new Date("2025-09-06") would be midnight UTC = the evening before here).
export function parseLocal(iso: string): Date {
  const [datePart, timePart = "00:00"] = iso.split("T");
  const [y, m, d] = datePart.split("-").map(Number);
  const [hh, mm] = timePart.split(":").map(Number);
  return new Date(y, m - 1, d, hh, mm);
}

const hasTime = (iso?: string) => !!iso && iso.includes("T");

function endOf(event: Event): Date | null {
  if (event.endsAt) return parseLocal(event.endsAt);
  if (!event.startsAt) return null;
  const start = parseLocal(event.startsAt);
  // All-day (or start-time-only) events stay "upcoming" until the day is over.
  return new Date(start.getFullYear(), start.getMonth(), start.getDate(), 23, 59, 59);
}

export function getStatus(event: Event, now: Date = new Date()): EventStatus {
  const end = endOf(event);
  if (end) return end >= now ? "upcoming" : "past";
  // Undated events fall back to the manual flag; unknown means past.
  return event.isPast === false ? "upcoming" : "past";
}

export function daysUntil(event: Event, now: Date = new Date()): number | null {
  if (!event.startsAt) return null;
  const start = parseLocal(event.startsAt);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const day = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  return Math.round((day.getTime() - today.getTime()) / DAY_MS);
}

const locale = (lang: string) => (lang.startsWith("en") ? "en-CA" : "fr-CA");

export function formatEventDate(event: Event, lang: string): string | null {
  if (!event.startsAt) return null;
  const s = new Intl.DateTimeFormat(locale(lang), {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parseLocal(event.startsAt));
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function formatEventTime(event: Event, lang: string): string | null {
  if (!hasTime(event.startsAt)) return null;
  const fmt = new Intl.DateTimeFormat(locale(lang), { hour: "numeric", minute: "2-digit" });
  const start = fmt.format(parseLocal(event.startsAt!));
  return hasTime(event.endsAt) ? `${start} – ${fmt.format(parseLocal(event.endsAt!))}` : start;
}

export function dateBadge(event: Event, lang: string): { day: string; month: string } | null {
  if (!event.startsAt) return null;
  const d = parseLocal(event.startsAt);
  const month = new Intl.DateTimeFormat(locale(lang), { month: "short" }).format(d).replace(".", "");
  return { day: String(d.getDate()), month };
}

/** Upcoming soonest-first, then past most-recent-first, undated last. */
export function sortEvents(events: Event[], now: Date = new Date()): Event[] {
  const time = (e: Event) => (e.startsAt ? parseLocal(e.startsAt).getTime() : null);
  const upcoming = events
    .filter((e) => getStatus(e, now) === "upcoming")
    .sort((a, b) => (time(a) ?? Infinity) - (time(b) ?? Infinity));
  const past = events
    .filter((e) => getStatus(e, now) === "past")
    .sort((a, b) => (time(b) ?? -Infinity) - (time(a) ?? -Infinity));
  return [...upcoming, ...past];
}

/** Most recent year first; undated events in a trailing group with year null. */
export function groupByYear(events: Event[]): EventYearGroup[] {
  const byYear = new Map<string, Event[]>();
  const undated: Event[] = [];
  for (const e of events) {
    if (!e.startsAt) { undated.push(e); continue; }
    const y = e.startsAt.slice(0, 4);
    byYear.set(y, [...(byYear.get(y) ?? []), e]);
  }
  const groups: EventYearGroup[] = Array.from(byYear.entries())
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, evs]) => ({ year, events: evs }));
  if (undated.length) groups.push({ year: null, events: undated });
  return groups;
}

const icsDate = (iso: string) => {
  const d = parseLocal(iso);
  const p = (n: number) => String(n).padStart(2, "0");
  const ymd = `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}`;
  return hasTime(iso) ? `${ymd}T${p(d.getHours())}${p(d.getMinutes())}00` : ymd;
};

const icsEscape = (s: string) => s.replace(/\\/g, "\\\\").replace(/([,;])/g, "\\$1").replace(/\n/g, "\\n");

export function buildIcs(event: Event, url: string): string | null {
  if (!event.startsAt) return null;
  const allDay = !hasTime(event.startsAt);
  let dtEnd: string;
  if (event.endsAt) dtEnd = icsDate(event.endsAt);
  else if (allDay) {
    const d = parseLocal(event.startsAt);
    const next = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
    const p = (n: number) => String(n).padStart(2, "0");
    dtEnd = `${next.getFullYear()}${p(next.getMonth() + 1)}${p(next.getDate())}`;
  } else dtEnd = icsDate(event.startsAt);
  const val = allDay ? ";VALUE=DATE" : "";
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Coeurs Festifs//Evenements//FR",
    "BEGIN:VEVENT",
    `UID:coeurs-festifs-${event.id}@coeur-festifs.vercel.app`,
    `DTSTART${val}:${icsDate(event.startsAt)}`,
    `DTEND${val}:${dtEnd}`,
    `SUMMARY:${icsEscape(event.title)}`,
    event.location ? `LOCATION:${icsEscape(event.location)}` : "",
    `DESCRIPTION:${icsEscape(`${event.description}\n\n${url}`)}`,
    `URL:${url}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].filter(Boolean).join("\r\n");
}

export const mapsUrl = (location: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
