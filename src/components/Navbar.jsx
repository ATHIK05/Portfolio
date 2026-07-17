import { useEffect, useState } from 'react'

const links = ['About', 'Experience', 'Projects', 'Skills', 'Awards', 'Contact']

export default function Navbar({ setViewMode }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-gradient text-lg font-black tracking-tight">
          MA.
        </a>
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center gap-3">

          
          {/* Resume button — always visible (non-negotiable) */}
          <a
            href="/resume.pdf"
            download
            className="rounded-full bg-[image:var(--gradient-hero)] px-4.5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Resume ↓
          </a>
        </div>
      </nav>
    </header>
  )
}
