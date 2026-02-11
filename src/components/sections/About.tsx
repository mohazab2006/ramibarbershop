'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useBooking } from '@/context/BookingContext';
import { BookButton } from '@/components/BookButton';
import { SectionHeading } from '@/components/SectionHeading';
import { ABOUT_PHOTO_URL, ABOUT_BIO, ABOUT_TAGS, STATS } from '@/lib/content';
import { AboutStats } from './AboutStats';

export function About() {
  const { openBooking } = useBooking();

  return (
    <section id="about" className="relative py-10 md:py-16">
      <div className="gradient-divider mx-auto max-w-6xl" />
      <div className="mx-auto max-w-5xl px-5 pt-10 md:pt-16">
        <SectionHeading
          title="About"
          subtitle="The person behind the chair."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,340px)_1fr] md:gap-14 md:items-start">
          <motion.div
            className="relative aspect-[3/4] w-full max-w-[340px] overflow-hidden rounded-xl bg-dark-card mx-auto md:mx-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={ABOUT_PHOTO_URL}
              alt="Rami the Barber"
              fill
              sizes="(max-width: 768px) 100vw, 340px"
              className="object-cover"
              priority={false}
            />
          </motion.div>

          <div className="flex flex-col justify-between gap-8">
            <motion.p
              className="text-lg leading-relaxed text-dark-muted md:text-xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.08 }}
            >
              {ABOUT_BIO}
            </motion.p>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {ABOUT_TAGS.map((tag, i) => (
                <motion.div
                  key={tag.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: 0.12 + i * 0.06 }}
                  className="glow-card group flex flex-col items-center justify-center rounded-xl border border-dark-border bg-dark-card px-4 py-6 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 md:py-8"
                >
                  <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-accent md:text-xs">
                    {tag.label}
                  </span>
                  <span className="mt-2 text-lg font-bold text-white md:text-xl">
                    {tag.value}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: 0.22 }}
            >
              <BookButton onClick={openBooking} size="hero">
                Book Now
              </BookButton>
              <motion.a
                href="#transformations"
                className="inline-flex min-h-[52px] items-center rounded-lg border border-dark-border px-8 text-base font-medium text-white transition-colors hover:border-accent/40 hover:bg-white/5"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                See My Work
              </motion.a>
            </motion.div>
          </div>
        </div>

        <AboutStats stats={STATS} />
      </div>
    </section>
  );
}
