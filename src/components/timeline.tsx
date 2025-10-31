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

type TimelineEvent = {
  time: string;
  title: string;
  icon: LucideIcon;
  side: 'left' | 'right';
};

const day1Events: TimelineEvent[] = [
  {
    time: '09:00 AM',
    title: 'Registration',
    icon: Ticket,
    side: 'left',
  },
  {
    time: '10:00 AM',
    title: 'Inaugural Ceremony & Keynote',
    icon: Mic,
    side: 'right',
  },
  {
    time: '11:30 AM',
    title: 'Technical Workshop 1',
    icon: Laptop,
    side: 'left',
  },
  {
    time: '01:00 PM',
    title: 'Lunch Break',
    icon: Coffee,
    side: 'right',
  },
  {
    time: '02:00 PM',
    title: 'Industrial Visit',
    icon: Bus,
    side: 'left',
  },
  {
    time: '06:00 PM',
    title: 'Cultural Night & Networking',
    icon: Music,
    side: 'right',
  },
];

const day2Events: TimelineEvent[] = [
  {
    time: '10:00 AM',
    title: 'Expert Talk Session',
    icon: MessageSquare,
    side: 'left',
  },
  {
    time: '11:30 AM',
    title: 'Technical Workshop 2',
    icon: Laptop,
    side: 'right',
  },
  {
    time: '01:00 PM',
    title: 'Lunch Break',
    icon: Coffee,
    side: 'left',
  },
  {
    time: '03:00 PM',
    title: 'Project Competition',
    icon: Trophy,
    side: 'right',
  },
  {
    time: '04:00 PM',
    title: 'Valedictory Ceremony',
    icon: GraduationCap,
    side: 'left',
  },
];

const TimelineCard = ({
  event,
  index,
}: {
  event: TimelineEvent;
  index: number;
}) => {
  const Icon = event.icon;
  return (
    <div
      className={cn(
        'relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group'
      )}
    >
      <div className="hidden md:flex w-5/12"></div>
      <div className="hidden md:flex absolute w-8 h-8 bg-accent text-accent-foreground rounded-full items-center justify-center top-1/2 -translate-y-1/2 group-odd:right-1/2 group-odd:-mr-4 group-even:left-1/2 group-even:-ml-4 z-10 shadow-lg border-2 border-card">
        <Icon className="w-4 h-4" />
      </div>
      <div
        className={cn(
          'w-full md:w-[45%] bg-card p-4 rounded-lg shadow-md transition-all duration-500',
          'data-[state=inactive]:animate-slide-out-left'
        )}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="flex items-center gap-4">
          <div className="md:hidden flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <p className="font-mono text-sm text-accent">{event.time}</p>
            <h3 className="font-bold text-primary">{event.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineLane = ({ events }: { events: TimelineEvent[] }) => {
  return (
    <div
      className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-accent before:to-transparent md:before:mx-auto md:before:ml-0"
    >
      {events.map((event, index) => (
        <TimelineCard event={event} index={index} key={index} />
      ))}
    </div>
  );
};

export const Timeline = () => {
  return (
    <Tabs defaultValue="day1" className="w-full">
      <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto h-auto bg-card/80 p-1.5 rounded-lg">
        <TabsTrigger
          value="day1"
          className="py-2.5 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-md rounded-md"
        >
          Day 1 (December 6)
        </TabsTrigger>
        <TabsTrigger
          value="day2"
          className="py-2.5 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-md rounded-md"
        >
          Day 2 (December 7)
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="day1"
        className="mt-12 data-[state=active]:animate-slide-in-right"
      >
        <TimelineLane events={day1Events} />
      </TabsContent>
      <TabsContent
        value="day2"
        className="mt-12 data-[state=active]:animate-slide-in-right"
      >
        <TimelineLane events={day2Events} />
      </TabsContent>
    </Tabs>
  );
};
