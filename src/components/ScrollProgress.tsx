'use client';

import { useEffect } from 'react';

/**
 * Scroll progress bar driven by a CSS variable. Avoids scroll-linked React state
 * and framer-motion (useScroll + useSpring) so scrolling does not trigger re-renders.
 */
export function ScrollProgress() {
  useEffect(() => {
    let rafId: number | null = null;

    const update = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll <= 0 ? 0 : Math.min(scrollY / maxScroll, 1);
      document.documentElement.style.setProperty('--scroll-progress', String(progress));
      rafId = null;
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(update);
    };

    const handleResize = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    update();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="scroll-progress-bar fixed left-0 right-0 top-0 z-50 h-[2px]"
      style={{
        background:
          'linear-gradient(90deg, rgba(201,205,211,0.3) 0%, rgba(201,205,211,0.9) 50%, rgba(201,205,211,0.3) 100%)',
      }}
      aria-hidden
    />
  );
}
