'use client';

import { usePathname } from 'next/navigation';
import { useBooking } from '@/context/BookingContext';
import { BookButton } from '@/components/BookButton';
import { cn } from '@/lib/utils';

export function StickyMobileBookBar() {
  const pathname = usePathname();
  const { openBooking } = useBooking();

  if (pathname === '/book') return null;

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-40 md:hidden'
      )}
    >
      {/* Top glow */}
      <div className="h-8 bg-gradient-to-t from-dark-bg/95 to-transparent" />
      <div
        className={cn(
          'border-t border-dark-border bg-dark-bg/95 backdrop-blur-md',
          'pb-[env(safe-area-inset-bottom)] pt-3'
        )}
      >
        <div className="px-4">
          <BookButton onClick={openBooking} size="sticky">
            Book Now
          </BookButton>
        </div>
      </div>
    </div>
  );
}
