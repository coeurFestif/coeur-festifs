// schema for event data
export type Event = {
  id: string;
  isAvailable?: boolean;
  title: string;
  date: string;
  location: string;
  capacity?: number;
  partner?: string[];
  Sponsor?: string[];
  partnerImg?: string[];
  SponsorImg?: string[];
  description: string;
  image: string;
};
