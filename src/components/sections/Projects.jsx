import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../ui/Section'
import { projects } from '../../data/projects'

export default function Projects() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const selectedProject = projects[selectedIdx]

  return (
    <Section id="projects" kicker="03 — PROJECTS" title="Real products. Real users.">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        
        {/* Left Column: Vertical Interactive List Selector */}
        <div className="lg:col-span-4 flex flex-col border-b border-[rgba(26,20,16,0.1)] lg:border-b-0 py-4 lg:py-0">
          <p className="font-mono text-[10px] tracking-widest text-[var(--ct-gold)] uppercase mb-4 hidden lg:block">
            Project List
          </p>
          <div className="flex overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 lg:flex-col gap-2 scrollbar-none">
            {projects.map((p, idx) => {
              const isSelected = idx === selectedIdx
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`group flex items-baseline gap-4 py-3 px-4 lg:px-2 text-left border border-[rgba(26,20,16,0.08)] rounded-lg lg:rounded-none lg:border-t-0 lg:border-l-0 lg:border-r-0 lg:border-b transition-all duration-300 shrink-0 ${
                    isSelected
                      ? 'bg-[var(--accent-primary)]/10 lg:bg-transparent text-[var(--text-primary)] border-[var(--accent-primary)] lg:border-b-[var(--ct-gold)] lg:pl-4'
                      : 'text-[var(--text-muted)] border-[rgba(26,20,16,0.08)] lg:border-transparent hover:text-[var(--text-primary)]'
                  }`}
                >
                  <span className="font-mono text-[10px] text-[var(--ct-gold)]">0{idx + 1}</span>
                  <span className="font-display text-sm lg:text-base font-bold tracking-wider uppercase whitespace-nowrap">
                    {p.title}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Column: Premium Showdeck Panel */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="card-glass overflow-hidden rounded-2xl border border-[rgba(123,97,255,0.15)] shadow-md"
            >
              <div className="grid md:grid-cols-12 md:items-stretch min-h-[460px]">
                
                {/* Showcase Details Panel (spans 7/12 or 12/12) */}
                <div className={`${selectedProject.mockup ? 'md:col-span-7' : 'md:col-span-12'} p-6 md:p-8 flex flex-col justify-between`}>
                  <div>
                    {/* Header: Title & Status */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5">
                      <span className="font-mono text-[9px] tracking-widest text-[var(--ct-gold)] uppercase font-bold">
                        0{selectedIdx + 1} // {selectedProject.subtitle.toUpperCase()}
                      </span>
                      {selectedProject.isLive && (
                        <span className="rounded-full bg-green-500/15 px-2.5 py-0.5 font-mono text-[9px] tracking-wider text-green-400 font-bold">
                          ● LIVE
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 mt-3">
                      {selectedProject.title === 'BookTheBiz' && (
                        <img 
                          src="/images/bookthebiz_logo.png" 
                          alt="BookTheBiz Logo" 
                          className="w-14 h-14 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.12)] border border-black/5 shrink-0 select-none"
                        />
                      )}
                      <h3 className="font-display text-2xl lg:text-3xl font-black text-[var(--text-primary)] leading-none">
                        {selectedProject.title}
                      </h3>
                    </div>
                    
                    <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)] font-medium">
                      {selectedProject.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="mt-6">
                      <p className="font-mono text-[9px] tracking-widest text-[var(--ct-ink-faint)] uppercase font-bold mb-2">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-[rgba(123,97,255,0.15)] bg-[var(--accent-primary)]/10 px-2.5 py-1 font-mono text-[10px] text-[var(--text-muted)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer & Actions */}
                  <div className="mt-8 pt-4 border-t border-[rgba(26,20,16,0.06)] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2.5">
                      {selectedProject.badges.map((b) => (
                        <span key={b} className="font-mono text-[10px] text-[var(--accent-cyan)] font-bold">
                          # {b}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.links?.playStore && (
                        <a
                          href={selectedProject.links.playStore}
                          target="_blank"
                          rel="noreferrer"
                          className="ct-btn-primary rounded-full bg-[#34A853] hover:bg-[#2c8f47] px-4.5 py-2.5 font-mono text-[9px] font-bold text-white transition-all hover:scale-105"
                        >
                          Play Store
                        </a>
                      )}
                      {selectedProject.links?.appStore && (
                        <a
                          href={selectedProject.links.appStore}
                          target="_blank"
                          rel="noreferrer"
                          className="ct-btn-primary rounded-full bg-[#007AFF] hover:bg-[#0062cc] px-4.5 py-2.5 font-mono text-[9px] font-bold text-white transition-all hover:scale-105"
                        >
                          App Store
                        </a>
                      )}
                      {selectedProject.links?.web && (
                        <a
                          href={selectedProject.links.web}
                          target="_blank"
                          rel="noreferrer"
                          className="ct-btn-primary rounded-full bg-[var(--ct-ink)] hover:bg-[var(--ct-gold)] px-4.5 py-2.5 font-mono text-[9px] font-bold text-white transition-all hover:scale-105"
                        >
                          Web View
                        </a>
                      )}
                      {selectedProject.links?.github && (
                        <a
                          href={selectedProject.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="ct-btn-primary rounded-full bg-[var(--ct-ink)] hover:bg-[var(--ct-gold)] px-4.5 py-2.5 font-mono text-[9px] font-bold text-white transition-all hover:scale-105"
                        >
                          Source Code
                        </a>
                      )}
                      {selectedProject.links?.linkedin && (
                        <a
                          href={selectedProject.links.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="ct-btn-primary rounded-full bg-[#0077B5] hover:bg-[#005a8a] px-4.5 py-2.5 font-mono text-[9px] font-bold text-white transition-all hover:scale-105"
                        >
                          Connect on LinkedIn →
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Showcase Visual Graphic Panel (spans 5/12) */}
                {selectedProject.mockup && (
                  <div 
                    className="md:col-span-5 relative flex items-center justify-center p-6 min-h-[220px] md:min-h-0"
                    style={{
                      background: `linear-gradient(135deg, ${selectedProject.color}15, ${selectedProject.color}35)`
                    }}
                  >
                    {/* Subtle radial lines background */}
                    <div className="absolute inset-0 opacity-10" 
                      style={{
                        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                        backgroundSize: '16px 16px'
                      }}
                    />

                    <div className="relative z-10 w-full max-w-[140px] aspect-[9/19] rounded-2xl overflow-hidden border-4 border-black/80 bg-black shadow-2xl transition-transform duration-500 hover:scale-105">
                      <img 
                        src={selectedProject.mockup} 
                        alt={`${selectedProject.title} mockup`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </Section>
  )
}
