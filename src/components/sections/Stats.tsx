'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

function AnimatedStat({ value, suffix, label, delay = 0 }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        delay,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [isInView, value, delay, count]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
    >
      <span className="flex items-baseline gap-0.5">
        <motion.span className="text-3xl font-bold text-white md:text-4xl">
          {rounded}
        </motion.span>
        <span className="text-lg font-semibold text-accent md:text-xl">{suffix}</span>
      </span>
      <span className="text-xs uppercase tracking-wider text-dark-muted md:text-sm">{label}</span>
    </motion.div>
  );
}

const STATS = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 2000, suffix: '+', label: 'Fades Done' },
  { value: 5, suffix: '★', label: 'Avg Rating' },
  { value: 10, suffix: 's', label: 'To Book' },
];

export function Stats() {
  return (
    <section className="relative pb-4 pt-6 md:pb-6 md:pt-8">
      <div className="mx-auto max-w-4xl px-5">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {STATS.map((stat, i) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
