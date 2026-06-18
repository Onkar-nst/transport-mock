import useCountUp from '../hooks/useCountUp'

const STATS = [
  { end: 4.2, decimals: 1, suffix: 'M', label: 'Shipments delivered' },
  { end: 130, decimals: 0, suffix: '+', label: 'Countries served' },
  { end: 98.7, decimals: 1, suffix: '%', label: 'On-time rate' },
  { end: 15, decimals: 0, suffix: 'k', label: 'Fleet vehicles' },
]

export default function Stats() {
  return (
    <section className="section stats">
      <div className="container stats-grid">
        {STATS.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
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
