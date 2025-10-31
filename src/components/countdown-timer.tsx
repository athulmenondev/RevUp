'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const AnimatedCard = ({ animation, digit }: { animation: string; digit: string }) => {
  return (
    <div className={cn("relative h-full w-full", animation)}>
      <div className="absolute inset-0">
        <div className="flex h-full w-full items-center justify-center bg-card text-4xl font-bold text-accent rounded-lg shadow-lg">
          {digit}
        </div>
      </div>
    </div>
  );
};

const StaticCard = ({ position, digit }: { position: 'upper' | 'lower'; digit: string }) => {
  return (
    <div className={cn(
      "relative h-1/2 w-full overflow-hidden rounded-t-lg",
      { 'rounded-b-lg rounded-t-none': position === 'lower' }
    )}>
      <div className="absolute inset-0">
        <div className={cn(
          "flex h-full w-full items-center justify-center bg-card text-4xl font-bold text-accent",
          { 'items-end': position === 'upper', 'items-start': position === 'lower' }
        )}>
          {digit}
        </div>
      </div>
    </div>
  );
};

const FlipUnitContainer = ({ digit, shuffle, unit }: { digit: string; shuffle: boolean; unit: string }) => {
  const previousDigit = String(parseInt(digit, 10) + 1).padStart(2, '0');

  return (
    <div className="relative h-16 w-16">
      <StaticCard position="upper" digit={digit} />
      <StaticCard position="lower" digit={previousDigit} />
      <AnimatedCard digit={digit} animation={shuffle ? 'fold' : 'unfold'} />
      <AnimatedCard digit={previousDigit} animation={shuffle ? 'unfold' : 'fold'} />
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm uppercase text-muted-foreground">
        {unit}
      </div>
    </div>
  );
};

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  
  // To trigger animations
  const [flip, setFlip] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      
      setFlip({
          days: timeLeft.days !== newTimeLeft.days,
          hours: timeLeft.hours !== newTimeLeft.hours,
          minutes: timeLeft.minutes !== newTimeLeft.minutes,
          seconds: timeLeft.seconds !== newTimeLeft.seconds,
      });

      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, timeLeft]);

  return (
    <div className="flex justify-center gap-4 md:gap-8 pb-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <FlipUnitContainer digit={String(value).padStart(2, '0')} shuffle={flip[unit as keyof typeof flip]} unit={unit} />
        </div>
      ))}
    </div>
  );
};
