'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import {
  LOCATION,
  MAP_LINK,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  PHONE_PLACEHOLDER,
  EMAIL_PLACEHOLDER,
  GOOGLE_MAPS_EMBED_URL,
} from '@/lib/content';

function MapPinIcon() {
  return (
    <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function InstagramIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

export function LocationContact() {
  const addressLines = LOCATION.split(', ');

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="gradient-divider mx-auto max-w-6xl" />
      <div className="mx-auto max-w-6xl px-5 pt-16 md:pt-24">
        <SectionHeading
          title="Location & Contact"
          subtitle="Ottawa barber shop."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5 lg:gap-8">
          {/* Map */}
          <motion.div
            className="overflow-hidden rounded-xl border border-dark-border bg-dark-card lg:col-span-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              title="Map location"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </motion.div>

          {/* Contact cards */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {/* Address card */}
            <motion.a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card flex items-start gap-4 rounded-xl border border-dark-border bg-dark-card p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-accent/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white/5">
                <MapPinIcon />
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-dark-muted">
                  Address
                </span>
                <p className="mt-1.5 font-medium leading-snug text-white">
                  {addressLines[0]}
                  <br />
                  {addressLines.slice(1).join(', ')}
                </p>
                <span className="mt-2 inline-block text-sm text-accent underline-offset-4 hover:underline">
                  Open in Maps &rarr;
                </span>
              </div>
            </motion.a>

            {/* Instagram card */}
            <motion.a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card flex items-start gap-4 rounded-xl border border-dark-border bg-dark-card p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-accent/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.12 }}
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white/5">
                <InstagramIcon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-dark-muted">
                  Instagram
                </span>
                <p className="mt-1.5 font-medium text-white">@{INSTAGRAM_HANDLE}</p>
                <span className="mt-2 inline-block text-sm text-accent underline-offset-4 hover:underline">
                  Follow &rarr;
                </span>
              </div>
            </motion.a>

            {PHONE_PLACEHOLDER && (
              <motion.a
                href={`tel:${PHONE_PLACEHOLDER.replace(/\D/g, '')}`}
                className="glow-card flex items-start gap-4 rounded-xl border border-dark-border bg-dark-card p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-accent/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.16 }}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-dark-muted">
                    Phone
                  </span>
                  <p className="mt-1.5 font-medium text-white">{PHONE_PLACEHOLDER}</p>
                </div>
              </motion.a>
            )}

            {EMAIL_PLACEHOLDER && (
              <motion.a
                href={`mailto:${EMAIL_PLACEHOLDER}`}
                className="glow-card flex items-start gap-4 rounded-xl border border-dark-border bg-dark-card p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-accent/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-dark-muted">
                    Email
                  </span>
                  <p className="mt-1.5 font-medium text-white">{EMAIL_PLACEHOLDER}</p>
                </div>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
