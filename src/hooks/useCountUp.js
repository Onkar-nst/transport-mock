import { useEffect, useRef, useState } from 'react'

/**
 * useCountUp — animates a number from 0 to `end` once the element scrolls
 * into view. Returns [displayValue, ref]. Eases out for a natural finish.
 */
export default function useCountUp(end, { duration = 1800, decimals = 0 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setValue(end * eased)
            if (p < 1) requestAnimationFrame(tick)
            else setValue(end)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration])

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString()
  return [display, ref]
}
