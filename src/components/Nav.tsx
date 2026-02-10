'use client';

import Link from 'next/link';
import { useBooking } from '@/context/BookingContext';
import { AnimatedLogo } from '@/components/AnimatedLogo';
import { BookButton } from '@/components/BookButton';
import { motion, AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#transformations' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Videos', href: '#game-tape' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
] as const;

/** Eased smooth scroll — slower and cinematic */
function smoothScrollTo(targetY: number, duration = 1200) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime: number | null = null;

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function scrollToHash(hash: string) {
  if (hash === '#' || hash === '') {
    smoothScrollTo(0);
    return;
  }
  const el = document.getElementById(hash.replace('#', ''));
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80; // offset for sticky nav
    smoothScrollTo(top);
  }
}

export function Nav() {
  const { openBooking } = useBooking();
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for active section and navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    scrollToHash(href);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-30 transition-all duration-300',
          scrolled
            ? 'border-b border-dark-border bg-dark-bg/95 backdrop-blur-lg'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[72px]">
          <AnimatedLogo />

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  'relative px-3 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 cursor-pointer',
                  activeSection === link.href.slice(1)
                    ? 'text-white'
                    : 'text-white/50 hover:text-white/80'
                )}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-px h-px bg-white"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <BookButton onClick={openBooking} size="nav">
              Book
            </BookButton>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white/80 transition hover:text-white md:hidden"
              aria-label="Menu"
            >
              <div className="relative h-4 w-5">
                <span
                  className={cn(
                    'absolute left-0 h-px w-full bg-current transition-all duration-300',
                    mobileOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current transition-opacity duration-200',
                    mobileOpen ? 'opacity-0' : 'opacity-100'
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 h-px w-full bg-current transition-all duration-300',
                    mobileOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-20 bg-dark-bg/98 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col px-6 pt-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      'block border-b border-dark-border py-5 text-lg font-medium tracking-wide transition cursor-pointer',
                      activeSection === link.href.slice(1)
                        ? 'text-white'
                        : 'text-white/60 hover:text-white'
                    )}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.04 + 0.05, duration: 0.2 }}
                className="pt-8"
              >
                <BookButton
                  onClick={() => {
                    handleNavClick();
                    openBooking();
                  }}
                  size="sticky"
                >
                  Book Now
                </BookButton>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
