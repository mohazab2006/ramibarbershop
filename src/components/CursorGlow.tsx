'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    if (!mq.matches) return;

    setVisible(true);

    let rafId: number | null = null;
    let pendingX = 0;
    let pendingY = 0;
    const handleMove = (e: MouseEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        mouseX.set(pendingX);
        mouseY.set(pendingY);
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-30 hidden md:block"
      style={{
        x,
        y,
        width: 600,
        height: 600,
        marginLeft: -300,
        marginTop: -300,
        background:
          'radial-gradient(circle, rgba(201,205,211,0.06) 0%, rgba(201,205,211,0.02) 30%, transparent 60%)',
        borderRadius: '50%',
      }}
      aria-hidden
    />
  );
}
