'use client';

import {
  Bus,
  Coffee,
  Laptop,
  MessageSquare,
  Mic,
  Music,
  Ticket,
  Trophy,
  GraduationCap,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

type ItineraryEvent = {
  time: string;
  title: string;
  icon: LucideIcon;
};

const day1Events: ItineraryEvent[] = [
  {
    time: '09:00 AM',
    title: 'Registration & Welcome Kit',
    icon: Ticket,
  },
  {
    time: '10:00 AM',
    title: 'Inaugural Ceremony & Keynote',
    icon: Mic,
  },
  {
    time: '11:30 AM',
    title: 'Technical Workshop 1',
    icon: Laptop,
  },
  {
    time: '01:00 PM',
    title: 'Lunch Break',
    icon: Coffee,
  },
  {
    time: '02:00 PM',
    title: 'Industrial Visit',
    icon: Bus,
  },
  {
    time: '06:00 PM',
    title: 'Cultural Night & Networking',
    icon: Music,
  },
];

const day2Events: ItineraryEvent[] = [
  {
    time: '10:00 AM',
    title: 'Expert Talk Session',
    icon: MessageSquare,
  },
  {
    time: '11:30 AM',
    title: 'Technical Workshop 2',
    icon: Laptop,
  },
  {
    time: '01:00 PM',
    title: 'Lunch Break',
    icon: Coffee,
  },
  {
    time: '03:00 PM',
    title: 'Project Competition',
    icon: Trophy,
  },
  {
    time: '04:00 PM',
    title: 'Valedictory Ceremony',
    icon: GraduationCap,
  },
];

const EventRow = ({ event }: { event: ItineraryEvent }) => {
  const Icon = event.icon;
  return (
    <div className="flex items-center gap-4 py-4 px-6 rounded-lg hover:bg-white/5 transition-colors duration-200">
      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-grow">
        <p className="font-mono text-sm text-accent">{event.time}</p>
        <h3 className="font-semibold text-primary/90">{event.title}</h3>
      </div>
    </div>
  );
};

export const Itinerary = () => {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg max-w-4xl mx-auto">
      <Tabs defaultValue="day1" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-sm mx-auto h-auto bg-card-foreground/5 p-1.5 rounded-lg">
          <TabsTrigger
            value="day1"
            className="py-2.5 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-md rounded-md transition-all duration-300"
          >
            Day 1 (December 6)
          </TabsTrigger>
          <TabsTrigger
            value="day2"
            className="py-2.5 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-md rounded-md transition-all duration-300"
          >
            Day 2 (December 7)
          </TabsTrigger>
        </TabsList>
        <div className="relative mt-8">
          <TabsContent
            value="day1"
            className="mt-0 data-[state=inactive]:absolute data-[state=inactive]:opacity-0 data-[state=active]:animate-fade-in data-[state=inactive]:animate-fade-out"
          >
            <div className="space-y-2">
              {day1Events.map((event, index) => (
                <EventRow event={event} key={index} />
              ))}
            </div>
          </TabsContent>
          <TabsContent
            value="day2"
            className="mt-0 data-[state=inactive]:absolute data-[state=inactive]:opacity-0 data-[state=active]:animate-fade-in data-[state=inactive]:animate-fade-out"
          >
            <div className="space-y-2">
              {day2Events.map((event, index) => (
                <EventRow event={event} key={index} />
              ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
