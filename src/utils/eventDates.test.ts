import { Event } from "../schema/event";
import {
  buildIcs,
  daysUntil,
  getStatus,
  groupByYear,
  parseLocal,
  sortEvents,
} from "./eventDates";

const ev = (o: Partial<Event>): Event => ({
  id: "1",
  title: "Fête",
  date: "",
  location: "",
  description: "",
  image: "",
  ...o,
});

const NOW = new Date(2025, 8, 6, 12, 0); // 6 Sept 2025, noon local

describe("parseLocal", () => {
  it("reads a date as local midnight, not UTC", () => {
    const d = parseLocal("2025-09-06");
    expect([d.getFullYear(), d.getMonth(), d.getDate(), d.getHours()]).toEqual([2025, 8, 6, 0]);
  });
  it("reads a local time", () => {
    expect(parseLocal("2025-09-06T14:30").getHours()).toBe(14);
  });
});

describe("getStatus", () => {
  it("keeps an all-day event upcoming for the whole day", () => {
    expect(getStatus(ev({ startsAt: "2025-09-06" }), NOW)).toBe("upcoming");
  });
  it("marks an event past once its end time is over", () => {
    expect(getStatus(ev({ startsAt: "2025-09-06T08:00", endsAt: "2025-09-06T10:00" }), NOW)).toBe("past");
  });
  it("marks earlier days past and later days upcoming", () => {
    expect(getStatus(ev({ startsAt: "2025-09-05" }), NOW)).toBe("past");
    expect(getStatus(ev({ startsAt: "2025-12-13" }), NOW)).toBe("upcoming");
  });
  it("falls back to isPast for undated events, defaulting to past", () => {
    expect(getStatus(ev({}), NOW)).toBe("past");
    expect(getStatus(ev({ isPast: false }), NOW)).toBe("upcoming");
  });
});

describe("daysUntil", () => {
  it("counts calendar days", () => {
    expect(daysUntil(ev({ startsAt: "2025-09-06T18:00" }), NOW)).toBe(0);
    expect(daysUntil(ev({ startsAt: "2025-09-16" }), NOW)).toBe(10);
    expect(daysUntil(ev({}), NOW)).toBeNull();
  });
});

describe("sortEvents", () => {
  it("puts upcoming soonest-first, then past most-recent-first, undated last", () => {
    const list = [
      ev({ id: "old", startsAt: "2025-01-11" }),
      ev({ id: "undated" }),
      ev({ id: "far", startsAt: "2025-12-13" }),
      ev({ id: "recent", startsAt: "2025-08-23" }),
      ev({ id: "soon", startsAt: "2025-10-31" }),
    ];
    expect(sortEvents(list, NOW).map((e) => e.id)).toEqual(["soon", "far", "recent", "old", "undated"]);
  });
});

describe("groupByYear", () => {
  it("groups by year, most recent first, undated trailing", () => {
    const groups = groupByYear([
      ev({ id: "a", startsAt: "2024-06-01" }),
      ev({ id: "b" }),
      ev({ id: "c", startsAt: "2025-01-11" }),
    ]);
    expect(groups.map((g) => g.year)).toEqual(["2025", "2024", null]);
    expect(groupByYear([])).toEqual([]);
  });
});

describe("buildIcs", () => {
  it("builds an all-day event ending the next day", () => {
    const ics = buildIcs(ev({ startsAt: "2025-12-31", title: "Fête; Noël" }), "https://x")!;
    expect(ics).toContain("DTSTART;VALUE=DATE:20251231");
    expect(ics).toContain("DTEND;VALUE=DATE:20260101");
    expect(ics).toContain("SUMMARY:Fête\\; Noël");
  });
  it("builds a timed event and returns null without a date", () => {
    const ics = buildIcs(ev({ startsAt: "2025-09-06T14:00", endsAt: "2025-09-06T19:00" }), "https://x")!;
    expect(ics).toContain("DTSTART:20250906T140000");
    expect(ics).toContain("DTEND:20250906T190000");
    expect(buildIcs(ev({}), "https://x")).toBeNull();
  });
});
