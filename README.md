# Rami The Barber — Ottawa

Production-ready, **mobile-first** barber site. Book in under 10 seconds.

## Stack

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS** (dark theme)
- **Framer Motion** (subtle animations)
- **Supabase Storage** (public bucket for images/videos — paste URLs in config)
- **Square** booking embed (iframe only; no custom admin)

## Setup

1. **Install & run**
   ```bash
   npm install
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

2. **Supabase (optional)**  
   For your own hero/gallery/videos, use a **public** Supabase bucket named `media` with folders:
   - `hero/` — hero image or video
   - `gallery/` — gallery (cuts & work photos)
   - `transformations/` — before/after images
   - `videos/` — Game Tape clips + posters  

   Paste the public URLs in **`src/lib/content.ts`**. No env vars needed for public URLs.

3. **Env (optional)**  
   Only if you need overrides later:
   - `NEXT_PUBLIC_SQUARE_BOOKING_URL` — default is already set in `content.ts`.

## Routes

- `/` — Home (hero, services, transformations, gallery, videos, reviews, contact, footer)
- `/book` — Full-page Square booking embed
- `/privacy` — Simple privacy copy

## Mobile-first

- Sticky bottom “Book Now” bar on mobile (hidden on `/book`)
- Sticky top nav with “Book” pill
- Booking opens in an in-site **modal**; fallback “Open in new tab” if the iframe misbehaves
- 48px+ tap targets, safe-area padding for notch/home indicator

## Project layout

- `src/app/page.tsx` — Home
- `src/app/book/page.tsx` — Booking page
- `src/components/BookingModal.tsx` — Modal with Square iframe
- `src/components/BeforeAfterCard.tsx` — Before/after slider
- `src/components/VideoGrid.tsx` + inline VideoModal
- `src/components/StickyMobileBookBar.tsx`
- `src/lib/content.ts` — All copy, service list, media URLs (paste Supabase URLs here)
- `src/lib/utils.ts` — Helpers

No custom admin panel; content is driven by `content.ts` and Square embed.
