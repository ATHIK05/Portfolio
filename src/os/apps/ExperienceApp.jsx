import { experience } from '../../data/experience'

export default function ExperienceApp() {
  return (
    <div className="space-y-4 p-5">
      {experience.map((job) => (
        <article key={job.role + job.company} className="card-glass rounded-xl p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-sm font-bold">
              {job.isCurrent && '⭐ '}
              {job.role}
            </h3>
            <span className="font-mono text-[10px] text-[var(--accent-cyan)]">{job.period}</span>
          </div>
          <p className="mt-0.5 text-xs text-[var(--text-muted)]">
            {job.company} · {job.type}
          </p>
          <ul className="mt-2 space-y-1 text-xs text-[var(--text-muted)]">
            {job.highlights.map((h) => (
              <li key={h}>— {h}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
