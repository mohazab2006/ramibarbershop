'use client';

import React, { createContext, useCallback, useContext } from 'react';
import { openBookingInNewTab } from '@/lib/utils';

type BookingContextType = {
  openBooking: () => void;
};

const BookingContext = createContext<BookingContextType | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const openBooking = useCallback(() => openBookingInNewTab(), []);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
}
