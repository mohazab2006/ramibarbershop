'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useBooking } from '@/context/BookingContext';
import { BookButton } from '@/components/BookButton';
import {
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  LOCATION,
  MAP_LINK,
} from '@/lib/content';

const FOOTER_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#transformations' },
  { label: 'Videos', href: '#game-tape' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const { openBooking } = useBooking();

  return (
    <footer className="relative">
      <div className="gradient-divider mx-auto max-w-6xl" />
      {/* CTA band */}
      <div className="border-b border-dark-border py-16 md:py-20">
        <motion.div
          className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Ready for a fresh cut?
          </h2>
          <p className="text-sm text-dark-muted md:text-base">
            Book your appointment in seconds.
          </p>
          <div className="mt-2">
            <BookButton onClick={openBooking} size="hero">
              Book Now
            </BookButton>
          </div>
        </motion.div>
      </div>

      {/* Footer columns */}
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-white">RAMI</span>
              <span className="ml-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-dark-muted">
                The Barber
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-dark-muted">
              Precision cuts and clean fades in Ottawa. Walk in sharp, every time.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-dark-muted">
              Navigate
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-dark-muted">
              Info
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {LOCATION.split(',')[0]}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  @{INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours placeholder */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-dark-muted">
              Hours
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white/50">By appointment</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white/50">By appointment</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white/50">By appointment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-dark-border pt-8 text-xs text-dark-muted sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Rami The Barber. Ottawa, ON.</span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
