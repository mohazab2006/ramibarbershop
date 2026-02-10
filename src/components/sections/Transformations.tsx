'use client';

import { BeforeAfterCard } from '@/components/BeforeAfterCard';
import { SectionHeading } from '@/components/SectionHeading';
import { TRANSFORMATIONS } from '@/lib/content';

export function Transformations() {
  return (
    <section id="transformations" className="relative py-16 md:py-24">
      <div className="gradient-divider mx-auto max-w-6xl" />
      <div className="mx-auto max-w-6xl px-5 pt-16 md:pt-24">
        <SectionHeading
          title="Transformations"
          subtitle="Before & after. Drag to compare."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {TRANSFORMATIONS.map((item, index) => (
            <BeforeAfterCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
