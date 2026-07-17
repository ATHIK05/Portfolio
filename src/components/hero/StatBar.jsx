import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 9.22, label: 'CGPA', decimals: 2 },
  { value: 10, label: 'Hackathons', suffix: '+' },
  { value: 2, label: 'Live Apps' },
  { value: 8, label: 'Certifications', suffix: '+' },
]

function CountUp({ value, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (t) => {
          const p = Math.min((t - start) / 1500, 1)
          setN(value * (1 - Math.pow(1 - p, 3))) // ease-out cubic
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default function StatBar() {
  return (
    <div className="hero-sub mt-14 grid max-w-2xl grid-cols-2 gap-6 border-t border-[var(--accent-primary)]/15 pt-8 sm:grid-cols-4">
      {STATS.map((s) => (
        <div key={s.label}>
          <p className="font-display text-gradient text-3xl font-black">
            <CountUp {...s} />
          </p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">{s.label}</p>
        </div>
      ))}
    </div>
  )
}
