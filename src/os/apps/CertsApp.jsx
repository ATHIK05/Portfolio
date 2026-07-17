import { certifications } from '../../data/certifications'

export default function CertsApp() {
  return (
    <div className="grid gap-4 p-5 sm:grid-cols-2">
      {certifications.map((c) => (
        <div key={c.title} className="holo card-glass rounded-xl p-4">
          <p className="font-mono text-[10px] text-[var(--accent-orange)]">
            {c.issuer} · {c.year}
          </p>
          <h3 className="font-display mt-1.5 text-sm font-bold">
            {c.featured && '◆ '}
            {c.title}
          </h3>
          <p className="mt-1.5 text-xs text-[var(--text-muted)]">{c.detail}</p>
        </div>
      ))}
    </div>
  )
}
