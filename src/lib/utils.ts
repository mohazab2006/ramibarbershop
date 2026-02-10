/**
 * Merge class names. Pass strings or undefined; falsy values are dropped.
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ').trim();
}

import { SQUARE_BOOKING_URL } from '@/lib/content';

export function openBookingInNewTab(): void {
  if (typeof window !== 'undefined') {
    window.open(SQUARE_BOOKING_URL, '_blank', 'noopener,noreferrer');
  }
}
