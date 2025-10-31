'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Data for the events ---
const day1Events = [
  { time: '09:00 AM', title: 'Registration', part: 'chassis' },
  { time: '10:00 AM', title: 'Inaugural Ceremony', part: 'engine' },
  { time: '11:30 AM', title: 'Technical Workshop 1', part: 'wheels' },
  { time: '01:00 PM', title: 'Lunch Break', part: 'fuel' },
  { time: '02:00 PM', title: 'Industrial Visit', part: 'doors' },
  { time: '06:00 PM', title: 'Cultural Night', part: 'paint' },
];

const day2Events = [
  { time: '10:00 AM', title: 'Expert Talk Session', part: 'chassis-ev' },
  { time: '11:30 AM', title: 'Technical Workshop 2', part: 'battery' },
  { time: '01:00 PM', title: 'Lunch Break', part: 'charge' },
  { time: '03:00 PM', title: 'Project Competition', part: 'spoiler' },
  { time: '04:00 PM', title: 'Valedictory Ceremony', part: 'lights' },
];

type Vehicle = 'car' | 'ev';
type EventData = typeof day1Events | typeof day2Events;

// --- SVG Components for Car Parts ---

const CarChassis = () => (
    <path d="M50 120 h20 l10 -20 h160 l10 20 h20 v10 h-220z" className="fill-muted-foreground/20 stroke-border stroke-2" />
);

const CarEngine = () => (
    <g transform="translate(90, 95)" className="fill-primary/50 stroke-primary/70">
        <rect width="60" height="25" rx="2" />
        <path d="M5 5 v15 h-5 M55 5 v15 h5 M10 0 v-5 h40 v5 M15 25 v5 h30 v-5" strokeWidth="2" strokeLinecap="round" />
    </g>
);

const CarWheels = () => (
  <>
    <g transform="translate(85, 130)" className="fill-primary/80 stroke-primary/50 stroke-2">
      <circle cx="0" cy="0" r="15" />
      <circle cx="0" cy="0" r="8" className="fill-background/80" />
      <path d="M0 -6 v-3 M0 6 v3 M-6 0 h-3 M6 0 h3" className="stroke-primary/50" strokeWidth="1.5" strokeLinecap="round" />
    </g>
    <g transform="translate(235, 130)" className="fill-primary/80 stroke-primary/50 stroke-2">
      <circle cx="0" cy="0" r="15" />
      <circle cx="0" cy="0" r="8" className="fill-background/80" />
      <path d="M0 -6 v-3 M0 6 v3 M-6 0 h-3 M6 0 h3" className="stroke-primary/50" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </>
);

const CarDoors = () => (
    <g transform="translate(130, 70)" className="fill-primary/40 stroke-primary/60 stroke-1">
        <path d="M0 50 L 0 25 q 5 -5 10 -5 h30 l15 30 h-55z" />
        <path d="M50 50 L 50 20 h35 l15 30 h-50z" />
        <path d="M10 42 L 10 28 h30 l10 14" className="fill-background/30 stroke-none" />
        <path d="M55 42 L 55 28 h30 l10 14" className="fill-background/30 stroke-none" />
    </g>
);

const CarPaint = () => (
    <path d="M70 120 l-5 -15 l15 -30 h150 l15 30 l-5 15 a20,20 0 0,1 -10,0" className="fill-accent/50 stroke-accent/80 stroke-1"/>
);

const FuelIcon = () => (
    <g transform="translate(180 100)" className="stroke-green-500 fill-none" strokeWidth="2">
        <rect x="0" y="5" width="15" height="20" rx="2" className="fill-green-500/20" />
        <path d="M15 12 h5 q 5 0 5 5 v3" />
    </g>
);


const EVChassis = () => (
    <path d="M50 120 q 20 -30 60 -30 h100 q 40 0 60 30 v10 h-220z" className="fill-muted-foreground/20 stroke-border stroke-2" />
);

const EVBattery = () => (
    <rect x="100" y="118" width="120" height="12" rx="2" className="fill-blue-500/50 stroke-blue-400" />
);

const EVSpoiler = () => (
    <path d="M250 90 c 5 -10 15 -15 25 -15 h5 l-5 15 h-25" className="fill-accent/60 stroke-accent/80" />
);

const EVLights = () => (
    <>
        <path d="M55 115 h-5 l15 -10 h10 z" className="fill-cyan-400/80" />
        <path d="M255 115 h5 l-15 -10 h-10 z" className="fill-red-500/80" />
    </>
);

const ChargeIcon = () => (
    <g transform="translate(155, 100)" className="stroke-yellow-400 fill-yellow-400/20" strokeWidth="2" strokeLinecap="round">
        <path d="M0 5 h10 v20 h-10z" />
        <path d="M10 8 h3 M10 12 h5 M10 16 h3 M10 20 h5" />
        <path d="M15 15 l10 0" />
    </g>
)


const partComponents: Record<string, React.FC> = {
  chassis: CarChassis,
  engine: CarEngine,
  wheels: CarWheels,
  doors: CarDoors,
  paint: CarPaint,
  fuel: FuelIcon,
  'chassis-ev': EVChassis,
  battery: EVBattery,
  spoiler: EVSpoiler,
  lights: EVLights,
  charge: ChargeIcon,
};


const PartIcon = ({ part, isBuilt }: { part: string; isBuilt: boolean }) => {
    const Icon = partComponents[part];
    if (!Icon) return null;
    return (
        <div className={cn(
            "p-2 border rounded-lg transition-all duration-300",
            isBuilt ? 'bg-primary/20 border-primary/50' : 'bg-muted/30 border-dashed'
        )}>
           <svg viewBox="0 0 320 200" className="h-8 w-16">
            <g className={cn(isBuilt ? 'opacity-100' : 'opacity-40')}>
                <Icon />
            </g>
           </svg>
        </div>
    )
}


export function AssemblyLine() {
  const [vehicle, setVehicle] = useState<Vehicle>('car');
  const [currentStep, setCurrentStep] = useState(0);

  const handleDayChange = (isEV: boolean) => {
    setVehicle(isEV ? 'ev' : 'car');
    setCurrentStep(0);
  };

  const events: EventData = vehicle === 'car' ? day1Events : day2Events;
  const currentEvent = events[currentStep];

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, events.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };
  
  const allParts = vehicle === 'car' ? day1Events.map(e => e.part) : day2Events.map(e => e.part)


  return (
    <div className="bg-card p-4 sm:p-6 rounded-2xl shadow-lg w-full flex flex-col gap-6">
      {/* --- Main Visual Area --- */}
      <div className="relative bg-background/50 rounded-lg p-4 h-64 flex items-center justify-center overflow-hidden">
        {/* Assembly Line */}
        <div className="absolute bottom-10 left-0 w-full h-1 bg-muted-foreground/20" />
        <div className="absolute bottom-10 left-0 w-full h-1 flex gap-8 animate-scroll">
            <div className="w-1/2 border-t-4 border-dashed border-muted-foreground/30"></div>
            <div className="w-1/2 border-t-4 border-dashed border-muted-foreground/30"></div>
        </div>

        {/* Car Parts */}
        <div className={cn(vehicle === 'car' ? 'car-assembly' : 'ev-assembly')} data-step={currentStep}>
            <svg viewBox="0 0 320 200" className="w-full h-full">
                {allParts.map((part, index) => {
                    const PartComponent = partComponents[part];
                    const isVisible = (vehicle === 'car' && index <= currentStep) || (vehicle === 'ev' && index <= currentStep);
                    if (!PartComponent) return null;

                    return (
                        <g key={part} className={cn(
                            'part',
                            `part-${part.replace('-ev','')}`,
                             isVisible ? 'opacity-100' : 'opacity-0'
                        )}>
                            <PartComponent />
                        </g>
                    )
                })}
            </svg>
        </div>
        
        {/* Side Panel for Parts */}
        <div className="absolute right-2 top-2 bottom-2 w-28 bg-background/50 p-2 rounded-md flex flex-col gap-2 overflow-y-auto">
            <p className="text-xs font-bold text-center text-muted-foreground">PARTS</p>
            {allParts.map((part, index) => (
                 <PartIcon key={part} part={part} isBuilt={index <= currentStep} />
            ))}
        </div>
      </div>

      {/* --- Control Area --- */}
      <div className="bg-background/50 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Day Toggle */}
        <div className="flex items-center space-x-2">
          <Label htmlFor="day-toggle" className={cn(vehicle === 'car' && 'text-primary')}>
            Day 1
          </Label>
          <Switch
            id="day-toggle"
            checked={vehicle === 'ev'}
            onCheckedChange={handleDayChange}
          />
          <Label htmlFor="day-toggle" className={cn(vehicle === 'ev' && 'text-primary')}>
            Day 2
          </Label>
        </div>

        {/* Event Display */}
        <div className="text-center flex-grow">
          <p className="text-sm font-mono text-muted-foreground">{currentEvent.time}</p>
          <p className="text-lg sm:text-xl font-bold text-primary">{currentEvent.title}</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handlePrev} disabled={currentStep === 0}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={handleNext} disabled={currentStep === events.length - 1}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
