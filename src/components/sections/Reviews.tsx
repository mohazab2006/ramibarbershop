'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { REVIEWS } from '@/lib/content';

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={filled ? '#FBBF24' : '#374151'}
      className="h-4 w-4"
    >
      <path
        fillRule="evenodd"
        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} filled={i < rating} />
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84Z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
        fill="#EA4335"
      />
    </svg>
  );
}

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
      {initials}
    </div>
  );
}

export function Reviews() {
  const averageRating = (
    REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length
  ).toFixed(1);

  return (
    <section id="reviews" className="relative py-16 md:py-24">
      <div className="gradient-divider mx-auto max-w-6xl" />
      <div className="mx-auto max-w-6xl px-5 pt-16 md:pt-24">
        <SectionHeading
          title="Reviews"
          subtitle="What clients are saying."
        />

        {/* Aggregate rating */}
        <motion.div
          className="mx-auto mt-10 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-3xl font-bold text-white">{averageRating}</span>
          <div className="flex flex-col">
            <StarRating rating={Math.round(Number(averageRating))} />
            <span className="mt-0.5 text-xs text-dark-muted">
              Based on {REVIEWS.length} reviews
            </span>
          </div>
          <GoogleIcon />
        </motion.div>

        {/* Review cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                type: 'spring',
                stiffness: 80,
                damping: 22,
                delay: i * 0.08,
              }}
              className="glow-card group flex flex-col justify-between rounded-xl border border-dark-border bg-dark-card p-6 transition-all duration-300 hover:border-white/10 hover:shadow-lg hover:shadow-accent/5"
            >
              {/* Header: avatar + name + time */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <InitialsAvatar name={review.name} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">{review.name}</p>
                    <p className="text-xs text-dark-muted">{review.timeAgo}</p>
                  </div>
                  <GoogleIcon />
                </div>

                {/* Stars */}
                <div className="mb-3">
                  <StarRating rating={review.rating} />
                </div>

                {/* Review text */}
                <p className="text-sm leading-relaxed text-white/80">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
