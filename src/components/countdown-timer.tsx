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
        <div className="flex h-full w-full items-center justify-center bg-card text-4xl md:text-6xl font-bold text-accent rounded-lg shadow-lg">
          {digit}
        </div>
      </div>
    </div>
  );
};

const StaticCard = ({ position, digit }: { position: 'upper' | 'lower'; digit: string }) => {
  return (
    <div className={cn(
      "relative h-1/2 w-full overflow-hidden",
      { 'rounded-t-lg': position === 'upper', 'rounded-b-lg': position === 'lower' }
    )}>
      <div className="absolute inset-0">
        <div className={cn(
          "flex h-full w-full items-center justify-center bg-card text-4xl md:text-6xl font-bold text-accent",
          { 'items-end': position === 'upper', 'items-start': position === 'lower' }
        )}>
          {digit}
        </div>
      </div>
    </div>
  );
};

const FlipUnitContainer = ({ digit, shuffle, unit }: { digit: string; shuffle: boolean; unit: string }) => {
  let currentDigit: string | number = +digit;
  let previousDigit: string | number = +digit + 1;

  if (unit !== 'hours') {
    previousDigit = previousDigit === 60 ? 59 : previousDigit;
  } else {
    previousDigit = previousDigit === 24 ? 23 : previousDigit;
  }

  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  const animation1 = shuffle ? 'fold' : 'unfold';
  const animation2 = !shuffle ? 'fold' : 'unfold';

  return (
    <div className="relative h-24 w-24 md:h-32 md:w-32">
      <StaticCard position="upper" digit={String(currentDigit).padStart(2, '0')} />
      <StaticCard position="lower" digit={String(previousDigit).padStart(2, '0')} />
      <AnimatedCard digit={String(digit1).padStart(2, '0')} animation={animation1} />
      <AnimatedCard digit={String(digit2).padStart(2, '0')} animation={animation2} />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm uppercase text-muted-foreground tracking-widest">
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
    seconds: true,
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
      <FlipUnitContainer digit={String(timeLeft.days).padStart(2, '0')} shuffle={flip.days} unit="days" />
      <FlipUnitContainer digit={String(timeLeft.hours).padStart(2, '0')} shuffle={flip.hours} unit="hours" />
      <FlipUnitContainer digit={String(timeLeft.minutes).padStart(2, '0')} shuffle={flip.minutes} unit="minutes" />
      <FlipUnitContainer digit={String(timeLeft.seconds).padStart(2, '0')} shuffle={flip.seconds} unit="seconds" />
    </div>
  );
};
