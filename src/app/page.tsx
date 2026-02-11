import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Transformations } from '@/components/sections/Transformations';
import { GameTape } from '@/components/sections/GameTape';
import { JerseyWall } from '@/components/sections/JerseyWall';
import { Reviews } from '@/components/sections/Reviews';
import { LocationContact } from '@/components/sections/LocationContact';
import { Footer } from '@/components/sections/Footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BarberShop',
  name: 'Rami The Barber',
  description:
    'Ottawa\u2019s go-to barber for precision fades, sharp lineups, and beard trims. Based in Barrhaven.',
  url: 'https://ramithebarber.com',
  image: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/hero/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '239 Moss Grove Street',
    addressLocality: 'Ottawa',
    addressRegion: 'ON',
    postalCode: 'K2J 0B2',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.2733,
    longitude: -75.7497,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '17:00',
    },
  ],
  sameAs: ['https://instagram.com/ramithebarber'],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Services />
      <Transformations />
      <JerseyWall />
      <GameTape />
      <Reviews />
      <LocationContact />
      <Footer />
    </>
  );
}
