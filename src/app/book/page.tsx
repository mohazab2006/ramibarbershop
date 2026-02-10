'use client';

import Link from 'next/link';
import { openBookingInNewTab } from '@/lib/utils';

export default function BookPage() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-4 md:min-h-[calc(100vh-6rem)]">
      <h1 className="text-2xl font-bold text-white md:text-3xl">Book your appointment</h1>
      <p className="mt-2 text-center text-dark-muted">
        You&apos;ll open Square to choose your service and time.
      </p>
      <button
        type="button"
        onClick={openBookingInNewTab}
        className="mt-8 flex min-h-tap w-full max-w-sm items-center justify-center rounded-xl bg-accent px-8 py-4 font-semibold text-dark-bg transition hover:bg-accent-hover"
      >
        Book on Square
      </button>
      <Link
        href="/"
        className="mt-6 text-sm text-white/70 underline hover:text-white"
      >
        ← Back to home
      </Link>
    </div>
  );
}
