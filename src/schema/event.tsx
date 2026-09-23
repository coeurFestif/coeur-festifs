export type Event = {
  id: string;
  isAvailable?: boolean;
  /** Manual fallback, only used when startsAt is missing. */
  isPast?: boolean;
  title: string;
  /** Legacy display string from i18n; the UI formats startsAt instead. */
  date: string;
  /** Local Montréal time: "2025-09-06" (all day) or "2025-09-06T14:00". Drives past/upcoming. */
  startsAt?: string;
  endsAt?: string;
  location: string;
  capacity?: number;
  partner?: string[];
  Sponsor?: string[];
  partnerImg?: string[];
  SponsorImg?: string[];
  description: string;
  image: string;
};
