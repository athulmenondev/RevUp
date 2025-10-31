'use client';

import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import {
  Ticket,
  Mic,
  Laptop,
  Coffee,
  Bus,
  Music,
  MessageSquare,
  Trophy,
  GraduationCap,
} from 'lucide-react';

const day1Events = [
  { time: '09:00 AM', title: 'Registration & Welcome Kit', icon: Ticket, cx: '10%', cy: '50%' },
  { time: '10:00 AM', title: 'Inaugural Ceremony & Keynote', icon: Mic, cx: '25%', cy: '30%' },
  { time: '11:30 AM', title: 'Technical Workshop 1', icon: Laptop, cx: '40%', cy: '60%' },
  { time: '01:00 PM', title: 'Lunch Break', icon: Coffee, cx: '55%', cy: '40%' },
  { time: '02:00 PM', title: 'Industrial Visit', icon: Bus, cx: '70%', cy: '70%' },
  { time: '06:00 PM', title: 'Cultural Night & Networking', icon: Music, cx: '85%', cy: '50%' },
];

const day2Events = [
  { time: '10:00 AM', title: 'Expert Talk Session', icon: MessageSquare, cx: '15%', cy: '40%' },
  { time: '11:30 AM', title: 'Technical Workshop 2', icon: Laptop, cx: '35%', cy: '65%' },
  { time: '01:00 PM', title: 'Lunch Break', icon: Coffee, cx: '55%', cy: '35%' },
  { time: '03:00 PM', title: 'Project Competition', icon: Trophy, cx: '75%', cy: '60%' },
  { time: '04:00 PM', title: 'Valedictory Ceremony', icon: GraduationCap, cx: '90%', cy: '40%' },
];

const Path = ({ day }: { day: 'day1' | 'day2' }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1000 200"
    preserveAspectRatio="none"
    className={cn(
      'absolute top-0 left-0 transition-opacity duration-500',
      day === 'day1' ? 'opacity-100' : 'opacity-0'
    )}
  >
    <path
      d="M 50 100 C 200 50, 300 150, 450 100 S 700 50, 800 120 S 950 150, 950 150"
      stroke="url(#day1-gradient)"
      strokeWidth="4"
      fill="none"
      strokeDasharray="10 5"
    />
    <defs>
      <linearGradient id="day1-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
      </linearGradient>
    </defs>
  </svg>
);

const Path2 = ({ day }: { day: 'day1' | 'day2' }) => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1000 200"
      preserveAspectRatio="none"
      className={cn(
        'absolute top-0 left-0 transition-opacity duration-500',
        day === 'day2' ? 'opacity-100' : 'opacity-0'
      )}
    >
      <path
        d="M 100 80 C 250 150, 400 50, 550 70 S 700 150, 850 80"
        stroke="url(#day2-gradient)"
        strokeWidth="4"
        fill="none"
        strokeDasharray="10 5"
      />
      <defs>
        <linearGradient id="day2-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </svg>
  );

export function GpsRoadmap() {
  const [currentDay, setCurrentDay] = useState<'day1' | 'day2'>('day1');
  const handleDayChange = (isDay2: boolean) => {
    setCurrentDay(isDay2 ? 'day2' : 'day1');
  };

  const events = currentDay === 'day1' ? day1Events : day2Events;

  return (
    <div className="bg-card p-4 sm:p-6 rounded-2xl shadow-lg w-full">
      <div className="flex justify-center items-center mb-6">
        <Label htmlFor="day-toggle" className={cn(currentDay === 'day1' && "text-primary")}>
          Day 1 (December 6)
        </Label>
        <Switch
          id="day-toggle"
          checked={currentDay === 'day2'}
          onCheckedChange={handleDayChange}
          className="mx-4"
        />
        <Label htmlFor="day-toggle" className={cn(currentDay === 'day2' && "text-primary")}>
          Day 2 (December 7)
        </Label>
      </div>

      <div className="relative w-full h-52">
        <Path day={currentDay} />
        <Path2 day={currentDay} />
        <TooltipProvider>
          {events.map((event) => {
            const Icon = event.icon;
            return (
              <Tooltip key={event.time}>
                <TooltipTrigger asChild>
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: event.cx, top: event.cy }}
                  >
                    <div className="relative flex items-center justify-center">
                        <div className="absolute w-4 h-4 rounded-full bg-primary/50 animate-ping" />
                        <div className={cn("relative w-5 h-5 rounded-full flex items-center justify-center transition-colors", currentDay === 'day1' ? "bg-accent" : "bg-yellow-500")}>
                            <Icon className="h-3 w-3 text-accent-foreground" />
                        </div>
                    </div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-foreground/80 group-hover:text-primary transition-colors">
                      {event.time}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{event.title}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </div>
    </div>
  );
}
