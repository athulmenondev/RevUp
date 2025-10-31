'use client';

import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';
import { useRef } from 'react';

type AnimatedCardProps = {
  children: React.ReactNode;
  index: number;
};

export function AnimatedCard({ children, index }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isIntersecting
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-10'
      )}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {children}
    </div>
  );
}
