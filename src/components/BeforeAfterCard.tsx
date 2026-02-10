'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import type { BeforeAfterItem } from '@/lib/content';
import { cn } from '@/lib/utils';

interface BeforeAfterCardProps {
  item: BeforeAfterItem;
  index?: number;
}

export function BeforeAfterCard({ item, index = 0 }: BeforeAfterCardProps) {
  const [value, setValue] = useState(50);

  const beforeStyle = useMemo(() => ({ clipPath: `inset(0 ${100 - value}% 0 0)` }), [value]);
  const afterStyle = useMemo(() => ({ clipPath: `inset(0 0 0 ${value}%)` }), [value]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 22,
        delay: index * 0.1,
      }}
      className="overflow-hidden rounded-xl bg-dark-card"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        {/* After (full image underneath) */}
        <div className="absolute inset-0" style={afterStyle}>
          <Image
            src={item.after}
            alt="After"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        {/* Before (clipped) */}
        <div className="absolute inset-0" style={beforeStyle}>
          <Image
            src={item.before}
            alt="Before"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/80 shadow-lg"
          style={{ left: `${value}%`, transform: 'translateX(-50%)' }}
        />
        {/* Labels */}
        <div className="absolute left-2 top-2 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white">
          Before
        </div>
        <div className="absolute right-2 top-2 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white">
          After
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-ew-resize appearance-none rounded-full bg-dark-border accent-accent"
        aria-label="Compare before and after"
      />
      {item.label && (
        <p className="mt-2 px-3 pb-3 text-center text-sm text-dark-muted">{item.label}</p>
      )}
    </motion.article>
  );
}
