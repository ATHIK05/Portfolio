import { skills } from '../../data/skills'

export default function SkillsApp() {
  return (
    <div className="grid gap-5 p-5 sm:grid-cols-2">
      {skills.map((cat) => (
        <div key={cat.category} className="card-glass rounded-xl p-4">
          <h3 className="font-mono text-[10px] tracking-[0.2em] text-[var(--accent-cyan)]">
            {cat.category.toUpperCase()}
          </h3>
          <ul className="mt-3 space-y-2">
            {cat.items.map((s) => (
              <li key={s.name} className="flex items-center justify-between text-xs">
                <span>{s.name}</span>
                <span className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, d) => (
                    <i
                      key={d}
                      className={`h-1.5 w-1.5 rounded-full ${
                        d < s.level ? 'bg-[var(--accent-primary)]' : 'bg-white/10'
                      }`}
                    />
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
