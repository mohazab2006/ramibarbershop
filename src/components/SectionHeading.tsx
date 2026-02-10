'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={isCenter ? 'text-center' : ''}>
      <motion.div
        className={isCenter ? 'flex justify-center' : ''}
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4 }}
      >
        <span className="mb-5 block h-px w-8 bg-accent" />
      </motion.div>
      <motion.h2
        className="text-xl font-semibold tracking-tight text-white md:text-3xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="mt-3 text-sm text-dark-muted md:text-base"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.08 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
