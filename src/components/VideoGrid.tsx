'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import type { VideoItem } from '@/lib/content';

interface VideoGridProps {
  videos: VideoItem[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  const [active, setActive] = useState<VideoItem | null>(null);

  const close = useCallback(() => setActive(null), []);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {videos.map((video, i) => (
          <motion.button
            key={video.id}
            type="button"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            onClick={() => setActive(video)}
            className="group relative aspect-[9/16] overflow-hidden rounded-lg bg-dark-card focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
          >
            <Image
              src={video.poster}
              alt={video.title ?? 'Video'}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-dark-bg transition group-hover:bg-white/90">
                <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <VideoModal video={active} onClose={close} />
    </>
  );
}

function VideoModal({
  video,
  onClose,
}: {
  video: VideoItem | null;
  onClose: () => void;
}) {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          key={video.id}
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
          onKeyDown={handleKeyDown}
        >
          <div className="relative w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={onClose}
              className="absolute -right-2 -top-12 flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close video"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-[9/16] w-full overflow-hidden rounded-xl bg-dark-card">
              {/* Using direct src instead of <source> tag, no crossOrigin to avoid CORS issues with Supabase */}
              <video
                src={video.src}
                poster={video.poster}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
