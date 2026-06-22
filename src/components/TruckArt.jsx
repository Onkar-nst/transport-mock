/**
 * TruckArt — the Meridian box truck, shared by the hero road and the loader
 * docket. Drawn in paper + ink + a single amber detail so it reads on both
 * the light hero and the dark loader. `spin` toggles the rolling wheels.
 */
export default function TruckArt({ width = 118, height = 60, spin = true }) {
  return (
    <svg width={width} height={height} viewBox="0 0 118 60" fill="none" aria-hidden="true">
      {/* exhaust */}
      <g className={spin ? 'truck-smoke' : undefined}>
        <circle cx="8" cy="20" r="3" fill="#8c8475" opacity="0.5" />
        <circle cx="3" cy="15" r="2.2" fill="#8c8475" opacity="0.35" />
      </g>

      {/* trailer / box */}
      <rect x="18" y="14" width="58" height="30" rx="2" fill="#f4f1e9" stroke="#181511" strokeWidth="1.6" />
      <rect x="18" y="26" width="58" height="1.4" fill="#181511" opacity="0.22" />
      <text x="24" y="24" fontFamily="'IBM Plex Mono', monospace" fontWeight="600" fontSize="7" letterSpacing="0.5" fill="#181511">MERIDIAN</text>
      <rect x="24" y="31" width="20" height="2" rx="1" fill="#d94e1f" />

      {/* cab */}
      <path d="M76 22h13l11 11v11H76V22Z" fill="#181511" />
      <path d="M79 25h9l7 7.5H79V25Z" fill="#f4f1e9" />
      <rect x="98" y="36" width="5" height="5" rx="1" fill="#d94e1f" />

      {/* wheels */}
      <g className={spin ? 'truck-wheel' : undefined}>
        <circle cx="34" cy="46" r="8" fill="#181511" />
        <circle cx="34" cy="46" r="3" fill="#f4f1e9" />
      </g>
      <g className={spin ? 'truck-wheel' : undefined}>
        <circle cx="60" cy="46" r="8" fill="#181511" />
        <circle cx="60" cy="46" r="3" fill="#f4f1e9" />
      </g>
      <g className={spin ? 'truck-wheel' : undefined}>
        <circle cx="92" cy="46" r="8" fill="#181511" />
        <circle cx="92" cy="46" r="3" fill="#d94e1f" />
      </g>
    </svg>
  )
}
