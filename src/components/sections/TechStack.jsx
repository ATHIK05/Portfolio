import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../ui/Section'
import { skills } from '../../data/skills'

export default function TechStack() {
  const [activeCat, setActiveCat] = useState(skills[0].category)
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const currentCategoryData = skills.find((c) => c.category === activeCat)

  return (
    <Section id="skills" kicker="04 — TECH STACK" title="Tools of the trade.">
      <div className="grid gap-8 lg:grid-cols-12">
        
        {/* Left Column: Interactive Nav Tabs */}
        <div className="lg:col-span-4 flex flex-col gap-2 border-b border-t border-[rgba(26,20,16,0.1)] lg:border-b-0 lg:border-t-0 lg:border-r border-[rgba(123,97,255,0.15)]/40 py-4 lg:py-0 lg:pr-8">
          <p className="font-mono text-[10px] tracking-widest text-[var(--accent-orange)] uppercase mb-3 hidden lg:block">
            Filter Stack
          </p>
          <div className="flex flex-wrap lg:flex-col gap-2">
            {skills.map((cat) => {
              const isActive = cat.category === activeCat
              return (
                <button
                  key={cat.category}
                  onClick={() => {
                    setActiveCat(cat.category)
                    setHoveredSkill(null)
                  }}
                  className={`relative px-4 py-2.5 text-left font-display text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded-md lg:rounded-none lg:border-l-2 ${
                    isActive
                      ? 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border-[var(--accent-primary)] lg:bg-transparent lg:border-l-[var(--accent-primary)]'
                      : 'text-[var(--text-muted)] border-transparent hover:text-[var(--text-primary)] hover:bg-[var(--text-muted)]/5 lg:hover:bg-transparent'
                  }`}
                >
                  {cat.category}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryIndicator"
                      className="absolute inset-0 bg-[var(--accent-primary)]/5 -z-10 hidden lg:block"
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Column: Dynamic Cards Grid */}
        <div className="lg:col-span-8 min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {currentCategoryData.items.map((s, i) => {
                const percent = s.level * 20

                return (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onMouseEnter={() => setHoveredSkill(s.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="card-glass relative flex flex-col justify-between overflow-hidden rounded-xl p-5 border border-[rgba(123,97,255,0.15)] transition-all duration-300 shadow-sm"
                  >
                    {/* Background gold/purple glow on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at top right, rgba(184,151,74,0.08), transparent 70%)'
                      }}
                    />

                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-display text-base font-black text-[var(--text-primary)]">
                          {s.name}
                        </h4>
                        
                        {/* Interactive percentage badge */}
                        <span className="font-mono text-[10px] font-bold text-[var(--accent-cyan)] bg-[var(--accent-cyan)]/15 px-2 py-0.5 rounded">
                          {percent}%
                        </span>
                      </div>
                      
                      {s.desc && (
                        <p className="mt-2 text-xs text-[var(--text-muted)] leading-relaxed">
                          {s.desc}
                        </p>
                      )}
                    </div>

                    {/* Premium minimalist slider bar */}
                    <div className="mt-5 pt-2 border-t border-[rgba(26,20,16,0.06)]">
                      <div className="h-1 w-full bg-[var(--text-muted)]/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percent}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.05 + 0.2 }}
                          className="h-full bg-[image:var(--gradient-hero)] rounded-full"
                          style={{
                            backgroundImage: 'var(--gradient-hero)'
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </Section>
  )
}
