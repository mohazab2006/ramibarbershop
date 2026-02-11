import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { BookingProvider } from '@/context/BookingContext';
import { Nav } from '@/components/Nav';

import { BackgroundEffects } from '@/components/BackgroundEffects';
import { ScrollProgress } from '@/components/ScrollProgress';
import { CursorGlow } from '@/components/CursorGlow';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const siteUrl = 'https://ramithebarber.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Rami The Barber | Ottawa Barber Shop – Fades & Haircuts',
    template: '%s | Rami The Barber',
  },
  description:
    'Ottawa\u2019s go-to barber for precision fades, sharp lineups, and beard trims. Based in Barrhaven. Book your appointment in seconds.',
  keywords: [
    'barber ottawa',
    'ottawa barber shop',
    'fade haircut ottawa',
    'barrhaven barber',
    'rami the barber',
    'mens haircut ottawa',
    'beard trim ottawa',
    'lineup ottawa',
    'book barber online ottawa',
  ],
  authors: [{ name: 'Rami The Barber' }],
  creator: 'Rami The Barber',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteUrl,
    siteName: 'Rami The Barber',
    title: 'Rami The Barber | Ottawa Barber Shop – Fades & Haircuts',
    description:
      'Precision cuts. Clean fades. Ottawa\u2019s go-to barber. Book in seconds.',
    images: [
      {
        url: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/hero/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rami The Barber – Ottawa Barber Shop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rami The Barber | Ottawa Barber Shop',
    description:
      'Precision cuts. Clean fades. Ottawa\u2019s go-to barber. Book in seconds.',
    images: ['https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/hero/og-image.jpg'],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
          <main className="relative">{children}</main>
        </BookingProvider>
      </body>
    </html>
  );
}
