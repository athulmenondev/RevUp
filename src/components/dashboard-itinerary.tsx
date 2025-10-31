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
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const day1Events = [
  { time: '09:00 AM', icon: '🎟️', title: 'Registration & Welcome Kit' },
  { time: '10:00 AM', icon: '🎤', title: 'Inaugural Ceremony & Keynote' },
  { time: '11:30 AM', icon: '💻', title: 'Technical Workshop 1' },
  { time: '01:00 PM', icon: '☕', title: 'Lunch Break' },
  { time: '02:00 PM', icon: '🚌', title: 'Industrial Visit' },
  { time: '06:00 PM', icon: '🎶', title: 'Cultural Night & Networking' },
];

const day2Events = [
  { time: '10:00 AM', icon: '🗣️', title: 'Expert Talk Session' },
  { time: '11:30 AM', icon: '💻', title: 'Technical Workshop 2' },
  { time: '01:00 PM', icon: '☕', title: 'Lunch Break' },
  { time: '03:00 PM', icon: '🏆', title: 'Project Competition' },
  { time: '04:00 PM', icon: '🎓', title: 'Valedictory Ceremony' },
];

const eventsData = {
  day1: day1Events,
  day2: day2Events,
};

export const DashboardItinerary = () => {
  const [currentDay, setCurrentDay] = useState<'day1' | 'day2'>('day1');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const handleDayChange = (isDay2: boolean) => {
    setCurrentDay(isDay2 ? 'day2' : 'day1');
    setCurrentIndex(0);
    setAnimationKey(prev => prev + 1);
  };

  const handleNext = () => {
    const currentEvents = eventsData[currentDay];
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentEvents.length);
    setAnimationKey(prev => prev + 1);
  };

  const handlePrev = () => {
    const currentEvents = eventsData[currentDay];
    setCurrentIndex((prevIndex) => (prevIndex - 1 + currentEvents.length) % currentEvents.length);
    setAnimationKey(prev => prev + 1);
  };

  const currentEvent = eventsData[currentDay][currentIndex];

  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
        {/* Column 1: Digital Clock */}
        <div className="flex items-center justify-center md:justify-start">
          <div key={animationKey} className="text-4xl md:text-5xl font-mono font-bold text-accent animate-fade-in-fast">
            {currentEvent.time}
          </div>
        </div>

        {/* Column 2: GPS Screen */}
        <div key={`${animationKey}-gps`} className="flex flex-col items-center text-center animate-fade-in-fast">
          <div className="text-6xl md:text-7xl mb-4">{currentEvent.icon}</div>
          <h3 className="text-xl md:text-2xl font-bold text-primary/90">{currentEvent.title}</h3>
        </div>

        {/* Column 3: Trip Computer */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex items-center space-x-2">
            <Label htmlFor="day-toggle">Day 1</Label>
            <Switch
              id="day-toggle"
              checked={currentDay === 'day2'}
              onCheckedChange={handleDayChange}
            />
            <Label htmlFor="day-toggle">Day 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={handlePrev} aria-label="Previous Stop">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleNext} aria-label="Next Stop">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};