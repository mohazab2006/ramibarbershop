import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { BookingProvider } from '@/context/BookingContext';
import { Nav } from '@/components/Nav';
import { StickyMobileBookBar } from '@/components/StickyMobileBookBar';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { ScrollProgress } from '@/components/ScrollProgress';
import { CursorGlow } from '@/components/CursorGlow';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Rami The Barber | Ottawa',
  description: 'Precision cuts. Clean fades. Barber shop in Ottawa. Book in seconds.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ScrollProgress />
        <CursorGlow />
        <BackgroundEffects />
        <BookingProvider>
          <Nav />
          <main className="relative pb-24 md:pb-0">{children}</main>
          <StickyMobileBookBar />
        </BookingProvider>
      </body>
    </html>
  );
}
