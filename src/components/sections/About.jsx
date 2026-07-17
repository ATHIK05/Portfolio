import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Section from '../ui/Section'

gsap.registerPlugin(ScrollTrigger)

const Hi = ({ children }) => (
  <span className="font-semibold text-[var(--text-primary)] underline decoration-[var(--accent-primary)] decoration-2 underline-offset-4">
    {children}
  </span>
)

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.about-line').forEach((line) => {
        gsap.from(line, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: line, start: 'top 85%' },
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <Section id="about" kicker="01 — ABOUT" title="Builder first. Student second.">
      <div ref={ref} className="max-w-3xl space-y-6 text-lg leading-relaxed text-[var(--text-muted)]">
        <p className="about-line">
          I am a <Hi>business partner</Hi> at PunchBiz and serve as the <Hi>Lead Flutter Developer</Hi>
          and architect behind BookTheBiz — a turf booking platform live on the <Hi>Play Store</Hi> and{' '}
          <Hi>App Store</Hi>.
        </p>
        <p className="about-line">
          I'm an <Hi>Oracle-certified</Hi> Java SE 17 Professional pursuing my MSc in Software
          Systems at Kongu Engineering College with a 9.22 CGPA (9.83 GPA).
        </p>
        <p className="about-line">
          10+ hackathon wins. 2 live apps. Production CI/CD pipelines. I ship real products used by
          real people — not just coursework.
        </p>
      </div>
    </Section>
  )
}
