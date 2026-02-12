'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useBooking } from '@/context/BookingContext';
import { BookButton } from '@/components/BookButton';
import { HERO_IMAGE_URL, HERO_VIDEO_URL } from '@/lib/content';

function smoothScrollToEl(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  const startY = window.scrollY;
  const diff = top - startY;
  let startTime: number | null = null;
  function ease(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  function step(ts: number) {
    if (!startTime) startTime = ts;
    const p = Math.min((ts - startTime) / 1200, 1);
    window.scrollTo(0, startY + diff * ease(p));
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const charVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      delay: i * 0.03,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function AnimatedHeadline({ text, startDelay = 0 }: { text: string; startDelay?: number }) {
  return (
    <span className="inline-block">
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          className="inline-block"
          custom={i + startDelay}
          variants={charVariants}
          initial="hidden"
          animate="visible"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="relative flex min-h-[85vh] flex-col justify-end overflow-hidden md:min-h-[90vh]">
      {/* Background */}
      <div className="absolute inset-0">
        {HERO_VIDEO_URL ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            poster={HERO_IMAGE_URL}
          >
            <source src={HERO_VIDEO_URL} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={HERO_IMAGE_URL}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/70 to-dark-bg/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-24 pt-12 md:pb-16">
        <div className="max-w-xl">
          {/* Animated headline with per-character stagger */}
          <h1>
            <span className="block text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              <AnimatedHeadline text="Precision cuts." />
            </span>
            <span className="block text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {/* Solid white on mobile (reliable); gradient shimmer on desktop */}
              <span className="text-white md:bg-gradient-to-r md:from-white md:via-accent md:to-white md:bg-[length:200%_auto] md:bg-clip-text md:text-transparent md:animate-shimmer">
                <AnimatedHeadline text="Clean fades." startDelay={15} />
              </span>
            </span>
          </h1>

          <motion.p
            className="mt-5 text-lg tracking-wide text-white/85 md:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Ottawa &bull; Barber shop &bull; Book in seconds.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <BookButton onClick={openBooking} size="hero">
              Book Now
            </BookButton>
            <a
              href="#transformations"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollToEl('transformations');
              }}
              className="group flex min-h-[52px] items-center justify-center gap-2 rounded-lg border border-white/20 px-8 text-sm font-medium text-white/90 transition hover:border-white/30 hover:text-white cursor-pointer"
            >
              View Work
              <motion.span
                className="inline-block"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                &#8595;
              </motion.span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="h-8 w-[1px] bg-gradient-to-b from-transparent to-white/40"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}
