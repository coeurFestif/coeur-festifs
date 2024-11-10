// schema for event data
export type Event = {
  id: string;
  isAvailable?: boolean;
  title: string;
  date: string;
  location: string;
  capacity?: number;
  description: string;
  image: string;
};
