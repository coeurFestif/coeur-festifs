import { Event } from "../schema/event";

export interface EventYearGroup {
  year: string;
  events: Event[];
}

const YEAR_PATTERN = /\b(20\d{2})\b/;
const NO_DATE_LABEL = "Sans date précisée";

export function getEventYear(dateStr: string): string | null {
  const match = dateStr.match(YEAR_PATTERN);
  return match ? match[1] : null;
}

export function groupPastEventsByYear(events: Event[]): EventYearGroup[] {
  const byYear = new Map<string, Event[]>();
  const undated: Event[] = [];

  for (const event of events) {
    const year = getEventYear(event.date);
    if (year) {
      const bucket = byYear.get(year) ?? [];
      bucket.push(event);
      byYear.set(year, bucket);
    } else {
      undated.push(event);
    }
  }

  const groups: EventYearGroup[] = Array.from(byYear.entries())
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, yearEvents]) => ({ year, events: yearEvents }));

  if (undated.length > 0) {
    groups.push({ year: NO_DATE_LABEL, events: undated });
  }

  return groups;
}
