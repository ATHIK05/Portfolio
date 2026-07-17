import { useEffect, useState } from 'react'

const ROLES = ['App Developer', 'Startup Co-founder', 'Flutter Expert']

export default function AboutApp({ openApp }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % ROLES.length), 2500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="flex flex-col items-center px-8 py-8 text-center">
      <div className="font-display flex h-24 w-24 items-center justify-center rounded-full bg-[image:var(--gradient-hero)] text-3xl font-black text-white shadow-[0_0_40px_rgba(123,97,255,0.5)]">
        MA
      </div>
      <h1 className="font-display mt-4 text-2xl font-black">Mohamed Athik R</h1>
      <p className="caret mt-1 font-mono text-sm text-[var(--accent-cyan)]">{ROLES[i]}</p>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
        Co-founder of <b className="text-white">PunchBiz</b> and sole technical architect of{' '}
        <b className="text-white">BookTheBiz</b> — live on the Play Store & App Store.
        Oracle-certified Java SE 17 Professional. MSc Software Systems @ KEC.
      </p>
      <div className="mt-6 grid w-full max-w-sm grid-cols-2 gap-3 text-left">
        {[
          ['Chip', 'Flutter F1 Pro'],
          ['Memory', '9.22 CGPA (9.83 GPA)'],
          ['Startup', 'PunchBiz · Co-Owner'],
          ['Serial No.', 'KEC-MSC-2026'],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg bg-white/5 px-3 py-2">
            <p className="text-[10px] tracking-wider text-white/40 uppercase">{k}</p>
            <p className="mt-0.5 text-xs font-medium">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <a
          href="/resume.pdf"
          download
          className="rounded-full bg-[image:var(--gradient-hero)] px-5 py-2 text-xs font-semibold text-white transition-transform hover:scale-105"
        >
          Download Resume ↓
        </a>
        <button
          onClick={() => openApp('projects')}
          className="rounded-full border border-white/15 px-5 py-2 text-xs font-semibold hover:bg-white/10"
        >
          Open Projects →
        </button>
      </div>
    </div>
  )
}
