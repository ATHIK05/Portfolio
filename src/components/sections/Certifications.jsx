import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../ui/Section'
import { certifications } from '../../data/certifications'

export default function Certifications() {
  const [activeCertImg, setActiveCertImg] = useState(null)

  return (
    <Section id="certifications" kicker="05 — CERTIFICATIONS" title="Industry-verified.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="holo card-glass flex flex-col justify-between rounded-2xl p-5 border border-[rgba(123,97,255,0.15)] overflow-hidden shadow-sm"
          >
            <div>
              {/* Optional Certificate Thumbnail */}
              {c.image && (
                <div 
                  onClick={() => setActiveCertImg(c.image)}
                  className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-black/5 bg-black/5 cursor-zoom-in mb-4 group"
                >
                  <img 
                    src={c.image} 
                    alt={c.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Glass Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/95 text-black font-mono text-[9px] font-bold px-3 py-1.5 rounded-full shadow-lg">
                      VIEW CREDENTIAL
                    </span>
                  </div>
                </div>
              )}

              <p className="font-mono text-xs text-[var(--accent-orange)]">
                {c.issuer} · {c.year}
              </p>
              <h3 className="font-display mt-2 text-lg font-bold leading-snug text-[var(--text-primary)]">
                {c.featured && '◆ '}
                {c.title}
              </h3>
            </div>
            
            <div className="mt-4">
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{c.detail}</p>
              
              {c.image && (
                <button
                  onClick={() => setActiveCertImg(c.image)}
                  className="mt-4 font-mono text-[10px] text-[var(--ct-gold)] hover:text-[var(--accent-cyan)] font-bold tracking-wider uppercase flex items-center gap-1.5 transition-colors"
                >
                  Inspect Certificate ↗
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal Backdrop */}
      <AnimatePresence>
        {activeCertImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCertImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 cursor-zoom-out"
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveCertImg(null)}
              className="absolute top-6 right-6 text-white/75 hover:text-white font-mono text-xs tracking-wider"
            >
              [ CLOSE ]
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={activeCertImg} 
                alt="Certificate full view" 
                className="w-full max-h-[80vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
