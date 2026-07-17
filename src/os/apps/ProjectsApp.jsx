import { useState } from 'react'
import { projects } from '../../data/projects'

const FILTERS = {
  All: () => true,
  Live: (p) => p.isLive,
  Featured: (p) => p.isFeatured,
}
const ICONS = { All: '\ud83d\uddc2\ufe0f', Live: '\ud83d\udfe2', Featured: '\u2b50' }

export default function ProjectsApp() {
  const [filter, setFilter] = useState('All')

  return (
    <div className="flex h-full">
      {/* Finder-style sidebar */}
      <aside className="w-36 shrink-0 border-r border-white/5 bg-white/[0.03] p-3">
        <p className="px-2 text-[10px] tracking-wider text-white/40 uppercase">Favorites</p>
        {Object.keys(FILTERS).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`mt-1 block w-full rounded-md px-2 py-1.5 text-left text-xs ${
              filter === f ? 'bg-[var(--accent-primary)]/40' : 'hover:bg-white/5'
            }`}
          >
            {ICONS[f]} {f}
          </button>
        ))}
      </aside>
      <div className="grid flex-1 auto-rows-min grid-cols-1 gap-4 p-4 sm:grid-cols-2">
        {projects.filter(FILTERS[filter]).map((p) => (
          <article
            key={p.id}
            className="card-glass rounded-xl p-4 transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(123,97,255,0.25)]"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display text-sm font-bold">
                {p.isFeatured && '⭐ '}
                {p.title}
              </h3>
              {p.isLive && (
                <span className="rounded-full bg-green-500/15 px-2 py-0.5 font-mono text-[9px] tracking-wider text-green-400">
                  ● LIVE
                </span>
              )}
            </div>
            <p className="mt-0.5 text-xs font-medium" style={{ color: p.color }}>
              {p.subtitle}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded bg-[var(--accent-primary)]/10 px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
