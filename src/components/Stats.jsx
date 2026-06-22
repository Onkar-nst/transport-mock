import useCountUp from '../hooks/useCountUp'

const STATS = [
  { end: 2.1, decimals: 1, suffix: 'M', label: 'Shipments handled since 2014' },
  { end: 130, decimals: 0, suffix: '+', label: 'Ports & airports we file at' },
  { end: 98.6, decimals: 1, suffix: '%', label: 'On-time across 2025' },
  { end: 38, decimals: 0, suffix: '', label: 'People who answer your email' },
]

export default function Stats() {
  return (
    <section className="section stats">
      <div className="container">
        <span className="eyebrow" style={{ marginBottom: 40, display: 'inline-flex' }}>
          Where things stand
        </span>
        <div className="stats-grid">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatItem({ end, decimals, suffix, label }) {
  const [value, ref] = useCountUp(end, { decimals })
  return (
    <div className="stat" ref={ref}>
      <div className="v">
        {value}
        {suffix}
      </div>
      <div className="l">{label}</div>
    </div>
  )
}
