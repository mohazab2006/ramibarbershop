/**
 * Rami The Barber – Content & media config
 * Paste your Supabase public URLs below. Bucket: "media", folders: hero, gallery, transformations, videos
 * No auth needed for public bucket URLs.
 */

export const SQUARE_BOOKING_URL =
  'https://book.squareup.com/appointments/3znymmi6st17wo/location/LF62XJBRXXSDA/services';

// --- HERO ---
// Replace with your Supabase public URL, e.g. https://<project>.supabase.co/storage/v1/object/public/media/hero/hero-bg.jpg
export const HERO_IMAGE_URL =
  'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/hero/ramii.jpg';
// Optional: video loop (mp4). Upload hero-loop.mp4 to media/hero/ in Supabase, then set the URL below. Poster shows until video loads; keep clip short (10–20s).
export const HERO_VIDEO_URL = 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/hero/hero-loop.mp4';

// --- ABOUT ---
// Rami's photo: upload to Supabase media/about/ e.g. rami.jpg
export const ABOUT_PHOTO_URL =
  'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/about/rami1.jpg';
export const ABOUT_BIO =
  'Ottawa-based barber with a passion for clean fades and sharp lineups. I focus on giving you a cut that fits your style and lifestyle.';

export interface AboutTag {
  label: string;
  value: string;
}
export const ABOUT_TAGS: AboutTag[] = [
  { label: 'Hobby', value: 'Soccer' },
  { label: 'From', value: 'Algeria' },
  { label: 'Art', value: 'Cutting Hair' },
];

// --- STATS (used in About section) ---
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}
export const STATS: StatItem[] = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 2000, suffix: '+', label: 'Fades Done' },
  { value: 5, suffix: '★', label: 'Avg Rating' },
  { value: 10, suffix: 's', label: 'To Book' },
];

// --- SERVICES (local config, not from Square API) ---
export interface Service {
  id: string;
  name: string;
  description: string;
  price?: string;
  duration?: string;
}

export const SERVICES: Service[] = [
  {
    id: 'haircut-beard',
    name: 'Haircut & Beard Service',
    description: 'Full service: precision cut and beard trim.',
    price: 'CA$35.00',
    duration: '45 min',
  },
  {
    id: 'haircut',
    name: 'Haircut Service',
    description: 'Sharp lines, clean fades. Classic or modern.',
    price: 'CA$30.00',
    duration: '30 min',
  },
];

// --- TRANSFORMATIONS (Before/After) ---
// Paste Supabase URLs: bucket media, folder transformations
export interface BeforeAfterItem {
  id: string;
  before: string;
  after: string;
  label?: string;
}

export const TRANSFORMATIONS: BeforeAfterItem[] = [
  {
    id: '1',
    before: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/transformations/1-before.jpg',
    after: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/transformations/1-after.jpg',
    label: 'Trim & Taper',
  },
  {
    id: '2',
    before: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/transformations/2-before.jpg',
    after: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/transformations/2-after.jpg',
    label: 'Beard & Cut',
  },
  {
    id: '3',
    before: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/transformations/3-before.jpg',
    after: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/transformations/3-after.jpg',
    label: 'Style',
  },
  {
    id: '4',
    before: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/transformations/4-before.jpg',
    after: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/transformations/4-after.jpg',
    label: 'Richard Rios',
  },
];

// --- GAME TAPE (videos) ---
export interface VideoItem {
  id: string;
  src: string;
  poster: string;
  title?: string;
}

// Paste Supabase URLs: media/videos/*.mp4 and poster images
export const VIDEOS: VideoItem[] = [
  {
    id: 'v1',
    src: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/videos/video-1.mp4',
    poster: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/videos/poster-1.jpg',
  },
  {
    id: 'v2',
    src: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/videos/video-2.mp4',
    poster: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/videos/poster-2.jpg',
  },
  {
    id: 'v3',
    src: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/videos/video-3.mp4',
    poster: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/videos/poster-3.jpg',
  },
  {
    id: 'v4',
    src: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/videos/video-4.mp4',
    poster: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/videos/poster-4.jpg',
  },
  {
    id: 'v5',
    src: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/videos/video-5.mp4',
    poster: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/videos/poster-5.jpg',
  },
  {
    id: 'v6',
    src: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/videos/video-6.mp4',
    poster: 'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/videos/poster-6.jpg',
  },
];

// --- GALLERY (cuts & work) ---
// media/gallery/*
export const GALLERY_IMAGES: string[] = [
  'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/gallery/cut-1.jpg',
  'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/gallery/cut-2.jpg',
  'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/gallery/cut-3.png',
  'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/gallery/cut-4.png',
  'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/gallery/cut-5.jpg',
  'https://eopeytscrcaamwnlzoho.supabase.co/storage/v1/object/public/media/gallery/cut-6.jpg',
];

// --- REVIEWS ---
export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
  timeAgo: string;
}

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'James H.',
    text: 'Been going to Rami for over a year now. Nobody else touches my hair. The fade is always crisp and he actually listens to what you want.',
    rating: 5,
    timeAgo: '2 weeks ago',
  },
  {
    id: 'r2',
    name: 'Marcus T.',
    text: 'Best barber in Ottawa hands down. Booked online in literally 10 seconds and walked out looking fresh. Highly recommend.',
    rating: 5,
    timeAgo: '1 month ago',
  },
  {
    id: 'r3',
    name: 'Adam K.',
    text: 'Rami is a real one. Always on time, clean setup, and the beard lineup is always perfect. My go-to every two weeks.',
    rating: 5,
    timeAgo: '3 weeks ago',
  },
  {
    id: 'r4',
    name: 'Chris L.',
    text: 'Came in for a haircut before a wedding and Rami went above and beyond. Got so many compliments. Will never go anywhere else.',
    rating: 5,
    timeAgo: '1 month ago',
  },
  {
    id: 'r5',
    name: 'Ryan P.',
    text: 'The vibe is unmatched. Great conversation, and you leave looking like a million bucks every single time.',
    rating: 4,
    timeAgo: '2 months ago',
  },
  {
    id: 'r6',
    name: 'Omar A.',
    text: 'Drove 30 minutes just to get a cut from Rami. Worth every minute. The man is an artist with the clippers.',
    rating: 5,
    timeAgo: '3 weeks ago',
  },
];

// --- CONTACT ---
export const INSTAGRAM_HANDLE = 'ramithebarber';
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;
export const LOCATION = '239 Moss Grove Street, Ottawa, ON K2J 0B2';
export const MAP_LINK = 'https://www.google.com/maps/search/?api=1&query=239+Moss+Grove+Street+Ottawa+ON+K2J+0B2';
// Embed: address-based query (replace with Share > Embed URL from Google Maps for a fixed pin)
export const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps?q=239+Moss+Grove+Street+Ottawa+ON+K2J+0B2&output=embed';
export const PHONE_PLACEHOLDER: string = ''; // e.g. +1 (613) 555-0123
export const EMAIL_PLACEHOLDER: string = ''; // e.g. hello@ramithebarber.com
