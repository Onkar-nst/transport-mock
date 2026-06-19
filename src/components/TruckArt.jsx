/**
 * TruckArt — the Meridian delivery truck SVG, shared by the hero animation
 * and the page loader. `spin` toggles the rolling-wheel / smoke animation
 * classes (driven by CSS in index.css).
 */
export default function TruckArt({ width = 118, height = 60, spin = true }) {
  return (
    <svg width={width} height={height} viewBox="0 0 118 60" fill="none" aria-hidden="true">
      {/* exhaust puffs */}
      <g className={spin ? 'truck-smoke' : undefined}>
        <circle cx="8" cy="20" r="3" fill="rgba(255,255,255,0.18)" />
        <circle cx="3" cy="15" r="2.4" fill="rgba(255,255,255,0.12)" />
      </g>

      {/* trailer / box */}
      <rect x="18" y="14" width="58" height="30" rx="4" fill="#f2f6ff" />
      <rect x="18" y="14" width="58" height="30" rx="4" stroke="#cdd9f0" strokeWidth="1.5" />
      <rect x="24" y="20" width="46" height="3" rx="1.5" fill="#5e9bff" opacity="0.5" />
      <text x="30" y="38" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="12" fill="#0b63f6">MERIDIAN</text>

      {/* cab */}
      <path d="M76 22h14l10 11v11H76V22Z" fill="#0b63f6" />
      <path d="M78 25h11l7.5 8.5H78V25Z" fill="#bcd4ff" />
      <rect x="98" y="36" width="6" height="6" rx="1" fill="#ff7a3d" />

      {/* wheels */}
      <g className={spin ? 'truck-wheel' : undefined}>
        <circle cx="34" cy="46" r="8" fill="#0c1729" />
        <circle cx="34" cy="46" r="3.2" fill="#5e9bff" />
      </g>
      <g className={spin ? 'truck-wheel' : undefined}>
        <circle cx="60" cy="46" r="8" fill="#0c1729" />
        <circle cx="60" cy="46" r="3.2" fill="#5e9bff" />
      </g>
      <g className={spin ? 'truck-wheel' : undefined}>
        <circle cx="92" cy="46" r="8" fill="#0c1729" />
        <circle cx="92" cy="46" r="3.2" fill="#ff7a3d" />
      </g>
    </svg>
  )
}
