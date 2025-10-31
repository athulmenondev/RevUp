'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, inView } from 'motion';

interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  className = '',
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const stop = inView(element, () => {
      if (hasAnimated) return;

      animate(from, to, {
        duration,
        delay,
        onUpdate(latest) {
          element.textContent = latest.toFixed(0);
        },
        onComplete() {
          if (onEnd) {
            onEnd();
          }
        },
      });

      setHasAnimated(true);

      return () => {
        // This function is called when the element leaves the view
        // if `once: false` were used in `inView`.
        // Since we're using the default `once: true`, this is less critical
        // but good practice to have.
      };
    });

    return () => stop();
  }, [from, to, duration, delay, hasAnimated, onEnd]);

  return <span ref={ref} className={className} />;
}
