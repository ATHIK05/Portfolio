import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Section from '../ui/Section'
import { experience } from '../../data/experience'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const lineRef = useRef(null)

  // Timeline line draws as you scroll
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const tween = gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        transformOrigin: 'top',
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: true,
        },
      },
    )
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <Section id="experience" kicker="02 — EXPERIENCE" title="Where I've shipped.">
      <div className="relative pl-8">
        <div
          ref={lineRef}
          className="absolute top-0 left-2 h-full w-px bg-[image:var(--gradient-hero)]"
        />
        <div className="space-y-8">
          {experience.map((job, i) => (
            <motion.article
              key={job.company + job.role}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="card-glass relative rounded-2xl p-6"
            >
              <span className="absolute top-7 -left-[30px] h-3 w-3 rounded-full bg-[var(--accent-primary)] shadow-[0_0_12px_var(--accent-primary)]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-bold">
                  {job.isCurrent && '⭐ '}
                  {job.role}
                </h3>
                <span className="font-mono text-xs text-[var(--accent-cyan)]">{job.period}</span>
              </div>
              <p className="mt-1 text-[var(--text-muted)]">
                {job.company} · {job.type}
              </p>
              <ul className="mt-3 space-y-1 text-sm text-[var(--text-muted)]">
                {job.highlights.map((h) => (
                  <li key={h}>— {h}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}
