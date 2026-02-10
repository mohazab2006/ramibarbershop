'use client';

import { motion } from 'framer-motion';
import { useBooking } from '@/context/BookingContext';
import { BookButton } from '@/components/BookButton';
import { SectionHeading } from '@/components/SectionHeading';
import { SERVICES } from '@/lib/content';
import { cn } from '@/lib/utils';

export function Services() {
  const { openBooking } = useBooking();

  return (
    <section id="services" className="relative py-10 md:py-16">
      <div className="gradient-divider mx-auto max-w-6xl" />
      <div className="mx-auto max-w-5xl px-5 pt-10 md:pt-16">
        <SectionHeading
          title="Services"
          subtitle="Pick your service and book in one tap."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                type: 'spring',
                stiffness: 80,
                damping: 20,
                delay: i * 0.1,
              }}
              className={cn(
                'glow-card rounded-xl border border-dark-border bg-dark-card p-6 md:p-8',
                'transition-all duration-300 hover:border-white/10 hover:shadow-lg hover:shadow-accent/5'
              )}
            >
              <h3 className="text-lg font-semibold text-white md:text-xl">
                {service.name}
              </h3>
              <p className="mt-3 text-base text-dark-muted">
                {service.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-dark-muted">
                {service.price && <span>{service.price}</span>}
                {service.duration && <span>{service.duration}</span>}
              </div>
              <div className="mt-6">
                <BookButton onClick={openBooking} size="section">
                  Book
                </BookButton>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
