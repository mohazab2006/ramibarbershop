# Supabase media guide — Rami The Barber

This site uses **Supabase Storage** only for images and videos. No database, no login, no API keys in the browser. You upload files to a **public** bucket and paste the URLs into the project. Here’s how.

---

## 1. What you need

- A [Supabase](https://supabase.com) account (free tier is enough).
- Your photos and videos (hero, gallery, before/after, Game Tape clips).

---

## 2. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and sign in.
2. Click **New project**.
3. Pick an organization (or create one), name the project (e.g. `ramibarbershop`), set a database password, choose a region, then **Create new project**.
4. Wait until the project is ready. You’ll land in the dashboard.

You don’t need the database or Auth for this — we only use **Storage**.

---

## 3. Create the storage bucket and folders

1. In the left sidebar, open **Storage**.
2. Click **New bucket**.
3. **Name:** `media` (must be exactly this — the code expects it).
4. **Public bucket:** turn **ON**. This makes files reachable via a public URL (no auth).
5. Click **Create bucket**.
6. Open the `media` bucket, then create these **folders** (click **New folder** for each):
   - `hero`
   - `gallery`
   - `transformations`
   - `videos`

You should see:

```
media/
  hero/
  gallery/
  transformations/
  videos/
```

---

## 4. Upload files

### From the Supabase dashboard

1. Go to **Storage** → **media**.
2. Open the folder you need (e.g. `hero`).
3. Click **Upload file** (or drag and drop).
4. Choose one or more files. Wait for the upload to finish.
5. Repeat for each folder.

### Recommended file types and names

| Section           | Folder            | What to upload                    | Suggested format      |
|------------------|-------------------|-----------------------------------|------------------------|
| Hero             | `hero/`           | 1 image or 1 video (optional)     | `hero-bg.jpg` or `hero-loop.mp4` |
| Gallery          | `gallery/`        | 6–12 photos of cuts & work        | `cut-1.jpg`, etc.      |
| Before/After     | `transformations/`| Pairs of images (before + after)  | `1-before.jpg`, `1-after.jpg` |
| Game Tape        | `videos/`         | Short MP4 clips + poster images   | `clip-1.mp4`, `clip-1-poster.jpg` |

- **Images:** JPG, PNG, or WebP. ~1200px wide for hero; ~600px for the rest is plenty.
- **Videos:** MP4 (H.264). Keep clips short (e.g. 15–60 seconds) so they load quickly.
- **Posters:** One image per video (e.g. first frame or a thumbnail). Same folder as the video or in `videos/` with a clear name like `clip-1-poster.jpg`.

---

## 5. Get the public URL for a file

After a file is uploaded:

1. In **Storage** → **media** → open the folder (e.g. `videos`).
2. Click the **file name** (e.g. `clip-1.mp4`).
3. In the right panel, find **Public URL** and click the copy icon.

The URL looks like:

```text
https://XXXXXXXX.supabase.co/storage/v1/object/public/media/videos/clip-1.mp4
```

Replace `XXXXXXXX` with your project’s reference ID (you see it in the Supabase dashboard URL).

You’ll use this exact URL in the next step.

---

## 6. Paste URLs into the project

All URLs go in **one file:** `src/lib/content.ts`.

Open `src/lib/content.ts` and replace the placeholder URLs with your Supabase public URLs.

### Hero (top of the page)

- **Hero image**  
  Replace `HERO_IMAGE_URL` with the public URL of your hero image (e.g. from `media/hero/hero-bg.jpg`).

- **Hero video (optional)**  
  If you use a background video, set `HERO_VIDEO_URL` to the public URL of the MP4 (e.g. from `media/hero/hero-loop.mp4`).  
  If you only use an image, leave it as:  
  `export const HERO_VIDEO_URL: string | null = null;`

Example:

```ts
export const HERO_IMAGE_URL =
  'https://XXXXXXXX.supabase.co/storage/v1/object/public/media/hero/hero-bg.jpg';
export const HERO_VIDEO_URL: string | null = null;
// Or with video:
// export const HERO_VIDEO_URL = 'https://XXXXXXXX.supabase.co/storage/v1/object/public/media/hero/hero-loop.mp4';
```

### Transformations (Before/After)

Each item has `before`, `after`, and optional `label`. Use the public URLs for the images you uploaded to `media/transformations/`.

Example for one item:

```ts
{
  id: '1',
  before: 'https://XXXXXXXX.supabase.co/storage/v1/object/public/media/transformations/1-before.jpg',
  after: 'https://XXXXXXXX.supabase.co/storage/v1/object/public/media/transformations/1-after.jpg',
  label: 'Fade',
},
```

Do the same for the rest of the items in the `TRANSFORMATIONS` array (add or remove items as needed).

### Game Tape (videos)

Each video has `id`, `src` (MP4 URL), `poster` (image URL), and optional `title`. Get the public URL for both the `.mp4` and the poster image from `media/videos/`.

Example:

```ts
{
  id: 'v1',
  src: 'https://XXXXXXXX.supabase.co/storage/v1/object/public/media/videos/clip-1.mp4',
  poster: 'https://XXXXXXXX.supabase.co/storage/v1/object/public/media/videos/clip-1-poster.jpg',
  title: 'Fade',
},
```

Update every entry in the `VIDEOS` array with your real `src` and `poster` URLs.

### Gallery (cuts & work)

Replace the strings in the `GALLERY_IMAGES` array with the public URLs of the photos in `media/gallery/`.

Example:

```ts
export const GALLERY_IMAGES: string[] = [
  'https://XXXXXXXX.supabase.co/storage/v1/object/public/media/gallery/cut-1.jpg',
  'https://XXXXXXXX.supabase.co/storage/v1/object/public/media/gallery/cut-2.jpg',
  // ... add or remove as many as you want
];
```

---

## 7. Checklist

- [ ] Supabase project created.
- [ ] Bucket `media` created and set to **Public**.
- [ ] Folders `hero`, `gallery`, `transformations`, `videos` created inside `media`.
- [ ] Files uploaded to the correct folders.
- [ ] Public URL copied for each file (Storage → open file → copy **Public URL**).
- [ ] `src/lib/content.ts` updated:
  - [ ] `HERO_IMAGE_URL` (and optionally `HERO_VIDEO_URL`).
  - [ ] `TRANSFORMATIONS` — each `before` and `after` URL.
  - [ ] `VIDEOS` — each `src` and `poster` URL.
  - [ ] `GALLERY_IMAGES` — list of gallery image URLs.
- [ ] Run `npm run dev` and check the site to confirm images and videos load.

---

## 8. No env vars or API keys needed

Because the bucket is **public**, the site only needs the URLs in `content.ts`. You do **not** need:

- `.env` or Supabase anon key for the frontend.
- Any Supabase client or SDK for media.

If you later add a private bucket or backend features, you’d use env vars and the Supabase client; for this setup, URLs in `content.ts` are enough.

---

## 9. Replacing or adding media later

- **Replace a file:** Upload a new file with the **same name** in the same folder (Supabase overwrites), or upload with a new name and update the URL in `content.ts`.
- **Add more items:** Upload to the right folder, copy the new public URL, and add a new entry to the right array in `content.ts` (e.g. one more object in `TRANSFORMATIONS` or `VIDEOS`, or one more string in `GALLERY_IMAGES`).
- **Remove an item:** Delete the row/entry from the array in `content.ts`. You can optionally delete the file in Supabase Storage to save space.

---

## 10. Quick reference — URL pattern

For any file in your `media` bucket:

```text
https://<PROJECT_REF>.supabase.co/storage/v1/object/public/media/<FOLDER>/<FILENAME>
```

- `<PROJECT_REF>` = your project reference (e.g. from the Supabase dashboard URL).
- `<FOLDER>` = `hero`, `gallery`, `transformations`, or `videos`.
- `<FILENAME>` = the file name you used when uploading (e.g. `hero-bg.jpg`, `clip-1.mp4`).

Example for a video:

```text
https://abcdefgh.supabase.co/storage/v1/object/public/media/videos/fade-clip.mp4
```

That’s the URL you paste into `content.ts` for `src` (or for images, into `before`/`after`/`poster`/`HERO_IMAGE_URL`/`JERSEY_WALL_IMAGES` as appropriate).
