/**
 * Ambient background glows. Uses CSS keyframes only (no framer-motion) so the
 * compositor handles animation and JS main thread stays free.
 */
export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Glow 1 — top-left, light grey */}
      <div
        className="absolute -left-[15%] -top-[10%] h-[80vh] w-[80vh] rounded-full bg-glow-1"
        style={{
          background:
            'radial-gradient(circle, rgba(180,180,190,0.12) 0%, rgba(180,180,190,0.04) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Glow 2 — bottom-right, cool grey */}
      <div
        className="absolute -bottom-[10%] -right-[10%] h-[75vh] w-[75vh] rounded-full bg-glow-2"
        style={{
          background:
            'radial-gradient(circle, rgba(160,165,175,0.11) 0%, rgba(160,165,175,0.03) 40%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Glow 3 — center-left, neutral grey */}
      <div
        className="absolute left-[10%] top-[50%] h-[55vh] w-[55vh] rounded-full bg-glow-3"
        style={{
          background:
            'radial-gradient(circle, rgba(200,200,210,0.10) 0%, rgba(200,200,210,0.03) 40%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Glow 4 — top-right, warm grey */}
      <div
        className="absolute -top-[5%] right-[5%] h-[50vh] w-[50vh] rounded-full bg-glow-4"
        style={{
          background:
            'radial-gradient(circle, rgba(190,185,180,0.10) 0%, rgba(190,185,180,0.02) 40%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Glow 5 — bottom-left, silver */}
      <div
        className="absolute -bottom-[5%] left-[20%] h-[45vh] w-[45vh] rounded-full bg-glow-5"
        style={{
          background:
            'radial-gradient(circle, rgba(170,175,185,0.09) 0%, rgba(170,175,185,0.02) 40%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 55%, rgba(15,17,21,0.5) 100%)',
        }}
      />
    </div>
  );
}
