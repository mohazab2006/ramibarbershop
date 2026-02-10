'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BookButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
  size?: 'nav' | 'hero' | 'section' | 'sticky';
}

export function BookButton({ onClick, children = 'Book', className, size = 'section' }: BookButtonProps) {
  const sizes = {
    nav: 'min-h-[48px] min-w-[100px] rounded-lg px-5 text-sm font-medium md:min-w-[110px] md:text-base',
    hero: 'min-h-[52px] rounded-lg px-8 text-base font-medium',
    section: 'min-h-[52px] w-full rounded-lg px-6 text-base font-medium',
    sticky: 'h-14 min-h-tap w-full rounded-lg text-base font-medium',
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={cn(
        'bg-accent text-dark-bg',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg',
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.button>
  );
}
