import type { ImagePlaceholder } from './placeholder-images';

export interface Speaker {
  name: string;
  title: string;
  image: ImagePlaceholder;
}

export interface AgendaItem {
  time: string;
  title: string;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  locationDescription: string;
  description: string;
  speakers: Speaker[];
  agenda: AgendaItem[];
}
