import { useEffect, useRef, useState } from 'react'
import { projects } from '../../data/projects'
import { skills } from '../../data/skills'
import { awards } from '../../data/awards'
import { certifications } from '../../data/certifications'

const APP_IDS = ['about', 'projects', 'experience', 'skills', 'awards', 'certs', 'terminal', 'mail', 'gallery']
const PROMPT = 'athik@punchbiz ~ %'

const NEOFETCH = [
  '   \u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e    athik@punchbiz',
  '   \u2502 M A \u2502    ---------------',
  '   \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f    OS: AthikOS 2.0 (portfolio)',
  '              Host: Kongu Engineering College',
  '              Kernel: Flutter 3.x / Dart',
  '              Uptime: 10+ hackathon wins',
  '              Shell: founder-mode',
  '              CPU: 9.22 CGPA (9.83 GPA)',
  '              GPU: Three.js + GSAP',
  '              Apps: 2 LIVE (Play Store + App Store)',
]

export default function TerminalApp({ openApp }) {
  const [lines, setLines] = useState([
    { type: 'out', text: "AthikOS Terminal — type 'help' to get started." },
  ])
  const [input, setInput] = useState('')
  const inputRef = useRef(null)
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end' })
  }, [lines])

  const run = (raw) => {
    const [cmd, ...args] = raw.trim().split(/\s+/)
    let out = []
    switch (cmd) {
      case '':
        break
      case 'help':
      case '--help':
      case '-h':
        out = [
          'Available commands:',
          '  whoami      — who is this guy',
          '  neofetch    — system info',
          '  projects    — shipped products',
          '  skills      — tech stack',
          '  awards      — trophy cabinet',
          '  certs       — certifications',
          '  contact     — reach out',
          '  open <app>  — launch an app (e.g. open gallery, open projects)',
          '  clear       — clear screen',
        ]
        break
      case 'athik':
        if (args.includes('--help') || args.includes('-h') || args.includes('help')) {
          out = [
            'AthikOS CLI v2.0.0',
            'Available commands:',
            '  whoami      — who is this guy',
            '  neofetch    — system info',
            '  projects    — shipped products',
            '  skills      — tech stack',
            '  awards      — trophy cabinet',
            '  certs       — certifications',
            '  contact     — reach out',
            '  open <app>  — launch an app (e.g. open projects)',
            '  clear       — clear screen',
          ]
        } else {
          out = [
            'AthikOS CLI v2.0.0',
            'Usage: athik --help or type any available command directly (e.g. whoami, neofetch).',
          ]
        }
        break
      case 'whoami':
        out = [
          'Mohamed Athik R — App Developer · Startup Co-founder · Flutter Expert',
          'Co-owner @ PunchBiz · sole architect of BookTheBiz (LIVE on Play Store + App Store)',
        ]
        break
      case 'neofetch':
        out = NEOFETCH
        break
      case 'projects':
        out = projects.map(
          (p) => `${p.isLive ? '\ud83d\udfe2' : '\u26aa'} ${p.title} — ${p.tech.join(', ')}`,
        )
        break
      case 'skills':
        out = skills.map((c) => `${c.category}: ${c.items.map((s) => s.name).join(', ')}`)
        break
      case 'awards':
        out = awards.map((a) => `\ud83c\udfc6 ${a.title} (${a.level}, ${a.year})`)
        break
      case 'certs':
        out = certifications.map((c) => `\ud83d\udcdc ${c.title} — ${c.issuer} ${c.year}`)
        break
      case 'contact':
        out = ['\ud83d\udcec Use the Contact app: open mail', '\ud83d\udcc4 Resume: /resume.pdf']
        break
      case 'sudo':
        out = ['Nice try. This portfolio already runs in founder-mode.']
        break
      case 'open': {
        const id = args[0]
        if (APP_IDS.includes(id)) {
          openApp(id)
          out = [`Opening ${id}\u2026`]
        } else {
          out = [`open: app not found: ${id ?? ''} (try: ${APP_IDS.join(', ')})`]
        }
        break
      }
      case 'clear':
        setLines([])
        return
      default:
        out = [`command not found: ${cmd}. Try 'help'.`]
    }
    setLines((ls) => [
      ...ls,
      { type: 'in', text: raw },
      ...out.map((t) => ({ type: 'out', text: t })),
    ])
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      run(input)
      setInput('')
    }
  }

  return (
    <div
      className="flex h-full min-h-[300px] cursor-text flex-col bg-black/60 p-3 font-mono text-xs leading-relaxed"
      onClick={() => inputRef.current?.focus()}
    >
      {lines.map((l, i) => (
        <p key={i} className={l.type === 'in' ? 'text-white' : 'text-[var(--accent-cyan)]/90'}>
          {l.type === 'in' && <span className="text-[var(--accent-primary)]">{PROMPT} </span>}
          <span className="whitespace-pre-wrap">{l.text}</span>
        </p>
      ))}
      <div className="flex">
        <span className="shrink-0 text-[var(--accent-primary)]">{PROMPT}&nbsp;</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          autoFocus
          spellCheck={false}
          className="flex-1 bg-transparent text-white caret-[var(--accent-cyan)] outline-none"
          aria-label="Terminal input"
        />
      </div>
      <div ref={endRef} />
    </div>
  )
}
