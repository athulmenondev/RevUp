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
    <div className={cn("absolute inset-0 z-10", animation === 'fold' ? 'fold' : 'unfold')}>
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

const FlipUnitContainer = ({ digit, shuffle, unit }: { digit: number; shuffle: boolean; unit: string }) => {
  let currentDigit = digit;
  let previousDigit = digit + 1;

  if (unit === 'hours') {
    if (previousDigit === 24) previousDigit = 0;
  } else if (unit === 'days') {
    // Days don't cycle like this
  }
  else {
    if (previousDigit === 60) previousDigit = 0;
  }
  
  const currentDigitStr = String(currentDigit).padStart(2, '0');
  const previousDigitStr = String(previousDigit).padStart(2, '0');

  const digit1 = shuffle ? previousDigitStr : currentDigitStr;
  const digit2 = !shuffle ? previousDigitStr : currentDigitStr;

  const animation1 = shuffle ? 'fold' : 'unfold';
  const animation2 = !shuffle ? 'fold' : 'unfold';

  return (
    <div className="relative flex flex-col h-24 w-24 md:h-32 md:w-32">
      <div className="relative w-full h-full">
        <StaticCard position="upper" digit={currentDigitStr} />
        <StaticCard position="lower" digit={previousDigitStr} />
        <AnimatedCard digit={digit1} animation={animation1} />
        <AnimatedCard digit={digit2} animation={animation2} />
      </div>
      <div className="mt-2 text-sm uppercase text-muted-foreground tracking-widest text-center">
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

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    // Set initial time on client to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;
  const [prevSeconds, setPrevSeconds] = useState(seconds);

  useEffect(() => {
      setPrevSeconds(seconds);
  }, [seconds]);

  const flipSeconds = seconds !== prevSeconds;
  
  const [prevMinutes, setPrevMinutes] = useState(minutes);
  useEffect(() => { setPrevMinutes(minutes); }, [minutes]);
  const flipMinutes = minutes !== prevMinutes;
  
  const [prevHours, setPrevHours] = useState(hours);
  useEffect(() => { setPrevHours(hours); }, [hours]);
  const flipHours = hours !== prevHours;
  
  const [prevDays, setPrevDays] = useState(days);
  useEffect(() => { setPrevDays(days); }, [days]);
  const flipDays = days !== prevDays;


  return (
    <div className="flex justify-center gap-4 md:gap-8 pb-8 flex-wrap">
      <FlipUnitContainer digit={days} shuffle={flipDays} unit="days" />
      <FlipUnitContainer digit={hours} shuffle={flipHours} unit="hours" />
      <FlipUnitContainer digit={minutes} shuffle={flipMinutes} unit="minutes" />
      <FlipUnitContainer digit={seconds} shuffle={flipSeconds} unit="seconds" />
    </div>
  );
};
