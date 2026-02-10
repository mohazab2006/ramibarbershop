'use client';

import { motion, useAnimation } from 'framer-motion';
import { useCallback } from 'react';

const letters = ['R', 'A', 'M', 'I'];

function smoothScrollToTop() {
  const startY = window.scrollY;
  const duration = 1200;
  let startTime: number | null = null;

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY * (1 - easeInOutCubic(progress)));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export function AnimatedLogo() {
  const controls = useAnimation();

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollToTop();
  }, []);

  return (
    <a
      href="/"
      onClick={handleClick}
      className="group flex flex-col leading-tight focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-bg rounded cursor-pointer"
      aria-label="Rami The Barber – Home"
      onMouseEnter={() => controls.start('hover')}
      onMouseLeave={() => controls.start('idle')}
    >
      <span className="flex">
        {letters.map((letter, i) => (
          <motion.span
            key={letter}
            className="inline-block font-bold text-white tracking-tight text-2xl md:text-3xl"
            variants={{
              idle: { y: 0, opacity: 1 },
              hover: { y: -6, opacity: 1 },
            }}
            initial="idle"
            animate={controls}
            transition={{
              duration: 0.25,
              delay: i * 0.06,
            }}
            style={{ display: 'inline-block' }}
          >
            {letter}
          </motion.span>
        ))}
      </span>
      <motion.span
        className="text-xs font-medium uppercase tracking-[0.2em] text-dark-muted md:text-sm"
        variants={{
          idle: { x: 0, opacity: 0.8 },
          hover: { x: 4, opacity: 1 },
        }}
        initial="idle"
        animate={controls}
        transition={{ duration: 0.2, delay: 0.15 }}
      >
        The Barber
      </motion.span>
    </a>
  );
}
