import { awards } from '../../data/awards'

const TIERS = {
  gold: { icon: '\ud83e\udd47', color: '#FFD700' },
  silver: { icon: '\ud83e\udd48', color: '#C0C0C0' },
  academic: { icon: '\ud83c\udf93', color: '#00D4FF' },
  leadership: { icon: '\ud83c\udf96\ufe0f', color: '#FF6B35' },
}

export default function AwardsApp() {
  return (
    <div className="grid gap-3 p-5 sm:grid-cols-2">
      {awards.map((a) => {
        const tier = TIERS[a.tier]
        return (
          <div key={a.title + a.year} className="card-glass flex items-center gap-3 rounded-xl p-3">
            <span className="text-2xl">{tier.icon}</span>
            <div>
              <h3 className="font-display text-xs font-bold">{a.title}</h3>
              <p className="mt-0.5 font-mono text-[10px]" style={{ color: tier.color }}>
                {a.event} · {a.level} · {a.year}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
