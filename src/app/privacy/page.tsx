import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <Link
        href="/"
        className="inline-flex min-h-tap items-center text-sm text-white/80 hover:text-white"
      >
        ← Back to home
      </Link>
      <h1 className="mt-8 text-2xl font-bold text-white">Privacy</h1>
      <p className="mt-4 text-dark-muted">
        This site does not collect personal data beyond what you provide when booking (handled by
        Square). We do not use analytics or tracking cookies. For booking terms and data handling,
        see Square’s privacy policy.
      </p>
      <p className="mt-4 text-dark-muted">
        If you have questions, reach out via Instagram.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-tap items-center rounded-xl bg-accent px-6 py-3 font-medium text-dark-bg hover:bg-accent-hover"
      >
        Back to home
      </Link>
    </div>
  );
}
