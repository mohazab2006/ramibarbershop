import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Services } from '@/components/sections/Services';
import { Transformations } from '@/components/sections/Transformations';
import { GameTape } from '@/components/sections/GameTape';
import { JerseyWall } from '@/components/sections/JerseyWall';
import { Reviews } from '@/components/sections/Reviews';
import { LocationContact } from '@/components/sections/LocationContact';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
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
