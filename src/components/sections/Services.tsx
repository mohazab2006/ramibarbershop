'use client';

import { Scissors, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useBooking } from '@/context/BookingContext';
import { BookButton } from '@/components/BookButton';
import { SectionHeading } from '@/components/SectionHeading';
import { SERVICES } from '@/lib/content';
import { cn } from '@/lib/utils';

const iconClass = 'h-8 w-8 text-accent';

const serviceIcons: Record<string, React.ReactNode> = {
  'haircut-beard': <User className={iconClass} strokeWidth={1.5} aria-hidden />,
  haircut: <Scissors className={iconClass} strokeWidth={1.5} aria-hidden />,
};

const defaultIcon = <Scissors className={iconClass} strokeWidth={1.5} aria-hidden />;

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
              whileHover={{ y: -4 }}
              className={cn(
                'glow-card group relative overflow-hidden rounded-xl border border-dark-border bg-dark-card p-6 md:p-8',
                'transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10'
              )}
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-accent/60 via-accent/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

              <div className="relative pl-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  className="mb-4 inline-flex rounded-lg bg-white/5 p-2.5 ring-1 ring-white/10 transition-colors group-hover:bg-white/10 group-hover:ring-accent/30"
                >
                  {serviceIcons[service.id] ?? defaultIcon}
                </motion.div>

                {i === 0 && (
                  <span className="absolute right-0 top-0 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider text-accent ring-1 ring-accent/30">
                    Popular
                  </span>
                )}

                <h3 className="text-lg font-semibold text-white md:text-xl">
                  {service.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-dark-muted">
                  {service.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {service.price && (
                    <span className="rounded-md bg-white/5 px-2.5 py-1 text-sm font-medium text-white ring-1 ring-white/10">
                      {service.price}
                    </span>
                  )}
                  {service.duration && (
                    <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2.5 py-1 text-sm text-dark-muted ring-1 ring-white/10">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {service.duration}
                    </span>
                  )}
                </div>

                <div className="mt-6">
                  <BookButton onClick={openBooking} size="section">
                    Book
                  </BookButton>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
