'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const day1Events = [
    { time: "09:00 AM", title: "Registration & Welcome Kit" },
    { time: "10:00 AM", title: "Inaugural Ceremony & Keynote" },
    { time: "11:30 AM", title: "Technical Workshop 1" },
    { time: "01:00 PM", title: "Lunch Break" },
    { time: "02:00 PM", title: "Industrial Visit" },
    { time: "06:00 PM", title: "Cultural Night & Networking" },
];
  
const day2Events = [
    { time: "10:00 AM", title: "Expert Talk Session" },
    { time: "11:30 AM", title: "Technical Workshop 2" },
    { time: "01:00 PM", title: "Lunch Break" },
    { time: "03:00 PM", title: "Project Competition" },
    { time: "04:00 PM", title: "Valedictory Ceremony" },
];

const eventsData = {
  day1: day1Events,
  day2: day2Events,
};

// Config for the speedometer arc
const START_ANGLE = -120; // in degrees
const END_ANGLE = 120;
const ANGLE_RANGE = END_ANGLE - START_ANGLE;

export const SpeedometerSchedule = () => {
  const [currentDay, setCurrentDay] = useState<'day1' | 'day2'>('day1');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDayChange = (isDay2: boolean) => {
    setCurrentDay(isDay2 ? 'day2' : 'day1');
    setCurrentIndex(0);
  };
  
  const currentEvents = useMemo(() => eventsData[currentDay], [currentDay]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentEvents.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + currentEvents.length) % currentEvents.length);
  };

  const currentEvent = currentEvents[currentIndex];
  const needleAngle = START_ANGLE + (currentIndex / (currentEvents.length - 1)) * ANGLE_RANGE;

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative w-[350px] h-[200px] md:w-[500px] md:h-[280px]">
        {/* Speedometer Arc */}
        <div className="absolute top-0 left-0 w-full h-[200%] border-[16px] md:border-[24px] border-primary/20 rounded-full border-b-transparent border-l-transparent border-r-transparent" style={{ transform: 'rotate(-150deg)' }}></div>
        <div className="absolute top-0 left-0 w-full h-[200%] border-[16px] md:border-[24px] border-accent rounded-full border-b-transparent border-l-transparent border-r-transparent transition-all duration-700 ease-in-out" 
          style={{ 
            transform: 'rotate(-150deg)',
            clipPath: `path('M ${500/2} 0 A ${500/2-12} ${500/2-12} 0 0 1 ${500/2 + (500/2-12) * Math.cos((needleAngle-90)*Math.PI/180)} ${(500/2) + (500/2-12) * Math.sin((needleAngle-90)*Math.PI/180)} L ${500/2} ${500/2} Z')`
          }}>
        </div>

        {/* Needle */}
        <div className="absolute bottom-[-10px] md:bottom-0 left-1/2 w-2 h-1/2 origin-bottom transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-50%) rotate(${needleAngle}deg)` }}>
          <div className="w-full h-full bg-primary rounded-t-full"></div>
        </div>
        <div className="absolute bottom-[-20px] md:bottom-[-10px] left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 bg-card border-4 border-primary rounded-full z-10"></div>
        
        {/* Event Labels */}
        {currentEvents.map((event, index) => {
          const angle = START_ANGLE + (index / (currentEvents.length - 1)) * ANGLE_RANGE;
          const x = 50 + 48 * Math.cos(angle * Math.PI / 180);
          const y = 50 + 48 * Math.sin(angle * Math.PI / 180);
          return (
            <div key={event.time} className="absolute text-xs md:text-sm text-muted-foreground transition-all"
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                opacity: currentDay ? 1 : 0,
                transitionDelay: `${index * 50}ms`
              }}
            >
                <span className={cn("block transition-colors", currentIndex === index && "text-primary font-bold")}>{event.time}</span>
            </div>
          );
        })}

        {/* Center Display */}
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-full text-center px-4">
            <p className="text-lg md:text-xl font-bold text-primary transition-opacity duration-300 h-14">{currentEvent.title}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-4 mt-4 md:mt-0">
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
            <Button variant="outline" size="icon" onClick={handlePrev} aria-label="Previous Event">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleNext} aria-label="Next Event">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
    </div>
  );
};
