import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import StatBar from './StatBar'
import { useIsMobile, useReducedMotion } from '../../hooks/useMedia'

// 3D scene stays out of the main chunk
const HeroScene = lazy(() => import('./HeroScene'))

const ROLES = ['App Developer', 'Startup Co-founder', 'Flutter Expert']

const TICKER_ITEMS = [
  'Flutter Expert', '10+ Hackathon Wins', 'Oracle Certified', '2 Live Apps',
  'MSc Software Systems', 'BookTheBiz — Play Store & App Store',
  'Business Partner & Application Developer · PunchBiz', 'Best Paper — IEEE ICCRTEE 2026',
  'Statathon 2025-26 Runner-Up', '9.83 GPA · 9.22 CGPA',
]

const HERO_PHOTOS = [
  {
    src: '/images/athik_profile.jpg',
    alt: 'Mohamed Athik - PunchBiz Partner',
    title: 'M. ATHIK',
    caption: 'PARTNER & DEV @ PUNCHBIZ',
    rotation: '-2.5deg'
  },
  {
    src: '/images/athik_sitting.jpg',
    alt: 'Mohamed Athik - Application Developer',
    title: 'M. ATHIK',
    caption: 'LEAD FLUTTER BUILDER',
    rotation: '3deg'
  },
  {
    src: '/images/athik_dhoti.jpg',
    alt: 'Mohamed Athik - Traditional Look',
    title: 'M. ATHIK',
    caption: '10+ HACKATHONS WON',
    rotation: '-1.5deg'
  }
]


export default function Hero({ setViewMode, isClassic = false }) {
  const root = useRef(null)
  const isMobile = useIsMobile()
  const reduced = useReducedMotion()
  const [roleIndex, setRoleIndex] = useState(0)
  const [activePhoto, setActivePhoto] = useState(0)

  const cyclePhotos = () => {
    setActivePhoto((prev) => (prev + 1) % HERO_PHOTOS.length)
  }

  // Typewriter role cycle — 2.5s
  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2500)
    return () => clearInterval(id)
  }, [])

  // GSAP intro timeline
  useEffect(() => {
    if (reduced) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-eyebrow', { x: -40, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' })
      gsap.from('.hero-word', { y: 100, opacity: 0, stagger: 0.15, duration: 1.0, delay: 0.3, ease: 'power4.out' })
      gsap.from('.hero-sub', { y: 30, opacity: 0, stagger: 0.12, duration: 0.8, delay: 0.9, ease: 'power3.out' })
    }, root)
    return () => ctx.revert()
  }, [reduced])

  // Ticker items doubled for seamless loop
  const tickerLoop = [...TICKER_ITEMS, ...TICKER_ITEMS]

  // Show 3D scene only in OS / dark theme, not in classic editorial mode
  const show3D = !isClassic && !isMobile && !reduced

  return (
    <section ref={root} className="relative flex min-h-screen flex-col overflow-hidden">

      {/* Background — 3D scene (dark mode only) or gradient fallback */}
      {show3D ? (
        <Suspense fallback={null}>
          <div className="absolute inset-0">
            <HeroScene />
          </div>
        </Suspense>
      ) : (
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'linear-gradient(135deg, #7B61FF22, #00D4FF22, #7B61FF22)',
            backgroundSize: '300% 300%',
            animation: 'gradient-drift 8s ease infinite',
          }}
        />
      )}

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-10 flex-1 flex flex-col justify-center">
        {isClassic ? (
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            {/* Left Column: Text Content */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <p className="hero-eyebrow font-mono text-sm tracking-[0.3em] text-[var(--text-muted)]">
                HEY, I'M
              </p>

              {/* Editorial two-line name — each word on its own overflow-hidden line */}
              <div className="mt-3 overflow-hidden leading-[0.88]">
                <div className="hero-word font-display text-[clamp(2.75rem,8vw,7.5rem)] font-black tracking-tight text-gradient">
                  MOHAMED
                </div>
              </div>
              <div className="overflow-hidden leading-[0.88]">
                <div className="hero-word font-display text-[clamp(2.75rem,8vw,7.5rem)] font-black tracking-tight text-gradient">
                  ATHIK
                </div>
              </div>

              {/* Horizontal rule — editorial divider */}
              <div className="hero-sub ct-hero-rule" />

              <div className="hero-sub space-y-6">
                {/* Role / tagline */}
                <div>
                  <p className="caret font-mono text-xl text-[var(--accent-cyan)] md:text-2xl">
                    {ROLES[roleIndex]}
                  </p>
                  <p className="mt-3 max-w-xl text-lg text-[var(--text-muted)]">
                    Building real products used by real people.
                  </p>
                </div>

                {/* CTA cluster */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/resume.pdf"
                    download
                    className="rounded-full bg-[image:var(--gradient-hero)] px-7 py-3 font-semibold text-white transition-transform hover:scale-105"
                  >
                    Resume ↓
                  </a>
                  <a
                    href="#projects"
                    className="rounded-full border border-[var(--accent-primary)]/40 px-7 py-3 font-semibold transition-colors hover:bg-[var(--accent-primary)]/10"
                  >
                    Projects →
                  </a>
                  <button
                    onClick={() => setViewMode('booting')}
                    className="ragebait-btn group relative flex items-center gap-2 rounded-full border px-8 py-3.5 font-bold tracking-wide cursor-pointer overflow-hidden"
                  >
                    <span className="relative z-10 ragebait-text">You're not ready for this →</span>
                    <span className="ragebait-shimmer" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Photo Stack */}
            <div className="md:col-span-5 flex justify-center">
              <div 
                onClick={cyclePhotos}
                className="relative w-full max-w-[310px] aspect-[3/4] cursor-pointer group"
                title="Click to cycle photos"
              >
                {HERO_PHOTOS.map((photo, index) => {
                  // Calculate relative position in stack
                  const offset = (index - activePhoto + HERO_PHOTOS.length) % HERO_PHOTOS.length
                  const isTop = offset === 0
                  const isMiddle = offset === 1
                  const isBottom = offset === 2

                  let zIndex = "z-10"
                  let transformStyle = {}
                  let opacity = "opacity-100"

                  if (isTop) {
                    zIndex = "z-30"
                    transformStyle = {
                      transform: `rotate(${photo.rotation}) scale(1)`,
                    }
                  } else if (isMiddle) {
                    zIndex = "z-20"
                    transformStyle = {
                      transform: `rotate(${parseFloat(photo.rotation) + 4.5}deg) translate(6px, 6px) scale(0.96)`,
                    }
                    opacity = "opacity-95"
                  } else if (isBottom) {
                    zIndex = "z-10"
                    transformStyle = {
                      transform: `rotate(${parseFloat(photo.rotation) - 4.5}deg) translate(12px, 12px) scale(0.92)`,
                    }
                    opacity = "opacity-60"
                  }

                  return (
                    <div
                      key={index}
                      style={{
                        ...transformStyle,
                        transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s, z-index 0s',
                      }}
                      className={`absolute inset-0 w-full h-full border border-[rgba(26,20,16,0.15)] bg-[#FFFCF7] p-4 pb-14 shadow-[0_12px_30px_rgba(26,20,16,0.08)] ${zIndex} ${opacity} hover:shadow-[0_18px_40px_rgba(26,20,16,0.12)]`}
                    >
                      {/* Subtle pin/clip at the top */}
                      {isTop && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-8 w-2.5 bg-[#B8974A]/25 rounded-sm border border-[#B8974A]/40 shadow-sm" />
                      )}
                      
                      <div className="w-full h-full overflow-hidden bg-stone-100 border border-[rgba(26,20,16,0.08)]">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="h-full w-full object-cover grayscale contrast-[1.05] transition-all duration-700 hover:scale-105 hover:grayscale-0"
                          loading="eager"
                        />
                      </div>
                      
                      <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-[10px] font-mono text-[var(--ct-ink-muted)]">
                        <span className="font-bold tracking-wider">{photo.title}</span>
                        <span className="opacity-70">{photo.caption}</span>
                      </div>
                    </div>
                  )
                })}
                
                {/* Floating "Click to cycle" badge */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--ct-gold)] animate-ping" />
                  <span className="font-mono text-[9px] text-[var(--ct-ink-muted)] tracking-wider uppercase">Click to cycle</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <p className="hero-eyebrow font-mono text-sm tracking-[0.3em] text-[var(--text-muted)]">
              HEY, I'M
            </p>

            {/* Editorial two-line name — each word on its own overflow-hidden line */}
            <div className="mt-3 overflow-hidden leading-[0.88]">
              <div className="hero-word font-display text-[clamp(2.75rem,11vw,9rem)] font-black tracking-tight text-gradient">
                MOHAMED
              </div>
            </div>
            <div className="overflow-hidden leading-[0.88]">
              <div className="hero-word font-display text-[clamp(2.75rem,11vw,9rem)] font-black tracking-tight text-gradient">
                ATHIK
              </div>
            </div>

            {/* Horizontal rule — editorial divider */}
            <div className="hero-sub ct-hero-rule" />

            <div className="hero-sub flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              {/* Role / tagline */}
              <div>
                <p className="caret font-mono text-xl text-[var(--accent-cyan)] md:text-2xl">
                  {ROLES[roleIndex]}
                </p>
                <p className="mt-3 max-w-xl text-lg text-[var(--text-muted)]">
                  Building real products used by real people.
                </p>
              </div>

              {/* CTA cluster */}
              <div className="flex flex-wrap gap-3 shrink-0">
                <a
                  href="/resume.pdf"
                  download
                  className="rounded-full bg-[image:var(--gradient-hero)] px-7 py-3 font-semibold text-white transition-transform hover:scale-105"
                >
                  Resume ↓
                </a>
                <a
                  href="#projects"
                  className="rounded-full border border-[var(--accent-primary)]/40 px-7 py-3 font-semibold transition-colors hover:bg-[var(--accent-primary)]/10"
                >
                  Projects →
                </a>
                <button
                  onClick={() => setViewMode('booting')}
                  className="ragebait-btn group relative flex items-center gap-2 rounded-full border px-8 py-3.5 font-bold tracking-wide cursor-pointer overflow-hidden"
                >
                  <span className="relative z-10 ragebait-text">You're not ready for this →</span>
                  <span className="ragebait-shimmer" />
                </button>
              </div>
            </div>
          </>
        )}

        <StatBar />
      </div>

      {/* Animated ticker strip — editorial accent, only in classic theme */}
      {isClassic && (
        <div className="relative z-10 ct-ticker">
          <div className="ct-ticker-inner">
            {tickerLoop.map((item, i) => (
              <span key={i} className="ct-ticker-item">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
