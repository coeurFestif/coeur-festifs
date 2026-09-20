import { getEventYear, groupPastEventsByYear } from "./eventGrouping";
import { Event } from "../schema/event";

const makeEvent = (overrides: Partial<Event>): Event => ({
  id: "1",
  title: "Test",
  date: "",
  location: "",
  description: "",
  image: "",
  ...overrides,
});

describe("getEventYear", () => {
  it("extracts a 4-digit year from a French date string", () => {
    expect(getEventYear("Samedi 13 décembre 2025")).toBe("2025");
  });

  it("extracts a year from an English date string", () => {
    expect(getEventYear("Friday, October 31, 2025")).toBe("2025");
  });

  it("returns null when no year is present", () => {
    expect(getEventYear("Samedi 6 septembre de 14h00 à 19h00")).toBeNull();
  });

  it("returns null for an empty string", () => {
    expect(getEventYear("")).toBeNull();
  });
});

describe("groupPastEventsByYear", () => {
  it("groups events by year, most recent first", () => {
    const events = [
      makeEvent({ id: "1", title: "A", date: "Samedi 11 janvier 2025" }),
      makeEvent({ id: "2", title: "B", date: "Samedi 6 septembre 2024" }),
      makeEvent({ id: "3", title: "C", date: "Vendredi 31 octobre 2025" }),
    ];

    const groups = groupPastEventsByYear(events);

    expect(groups.map((g) => g.year)).toEqual(["2025", "2024"]);
    expect(groups[0].events.map((e) => e.id)).toEqual(["1", "3"]);
    expect(groups[1].events.map((e) => e.id)).toEqual(["2"]);
  });

  it("puts events with no parseable year in a trailing group", () => {
    const events = [
      makeEvent({ id: "1", title: "A", date: "Samedi 11 janvier 2025" }),
      makeEvent({ id: "2", title: "B", date: "" }),
      makeEvent({ id: "3", title: "C", date: "Samedi 6 septembre de 14h00 à 19h00" }),
    ];

    const groups = groupPastEventsByYear(events);

    expect(groups[groups.length - 1].year).toBe("Sans date précisée");
    expect(groups[groups.length - 1].events.map((e) => e.id)).toEqual(["2", "3"]);
  });

  it("returns an empty array for an empty input", () => {
    expect(groupPastEventsByYear([])).toEqual([]);
  });
});
