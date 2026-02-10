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
    // Only show on devices with a fine pointer (no touch)
    const mq = window.matchMedia('(pointer: fine)');
    if (!mq.matches) return;

    setVisible(true);

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
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
