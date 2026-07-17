import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../ui/Section'
import { GALLERY_ITEMS } from '../../data/gallery'

const CATEGORIES = ['All', 'Academic', 'Projects', 'Hackathons']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeItem, setActiveItem] = useState(null)
  const [activeImgIndex, setActiveImgIndex] = useState(0)

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory)

  const activeItemImages = activeItem ? (activeItem.images || [activeItem.image]) : []
  const activeImage = activeItemImages[activeImgIndex]

  return (
    <Section id="gallery" kicker="07 — GALLERY" title="Visual credentials.">
      {/* Category Filters */}
      <div className="mb-10 flex flex-wrap gap-2.5">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-5 py-2 font-mono text-xs tracking-wider border transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[var(--accent-primary)]/15 border-[var(--accent-primary)]/60 text-white font-semibold shadow-[0_0_15px_rgba(123,97,255,0.2)]'
                : 'border-white/10 bg-white/5 text-[var(--text-muted)] hover:text-white hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid List */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1000 }}>
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <button
                onClick={() => {
                  setActiveItem(item)
                  setActiveImgIndex(0)
                }}
                className="group w-full text-left card-glass overflow-hidden rounded-2xl border border-white/10 bg-black/30 hover:border-[var(--accent-cyan)]/50 transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] hover:-translate-y-1.5 duration-300 cursor-pointer focus:outline-none"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-black/40 border-b border-white/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-black/75 border border-white/10 px-3 py-1 font-mono text-[9px] font-bold text-[var(--accent-cyan)] uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h4 className="font-display text-sm font-bold text-white group-hover:text-[var(--accent-cyan)] transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)]">
                    <span>{item.date}</span>
                    <span className="text-[var(--accent-primary)] font-bold group-hover:translate-x-1 transition-transform">
                      View details ↗
                    </span>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-6 backdrop-blur-md"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="card-glass relative flex max-h-[90vh] w-full max-w-[640px] flex-col overflow-hidden rounded-2xl border border-white/15 bg-black/95 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/80 border border-white/15 text-white/80 hover:text-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Close details"
              >
                ✕
              </button>

              {/* Slider Image Area */}
              <div className="relative w-full h-[320px] md:h-[400px] overflow-hidden bg-black/35 flex items-center justify-center border-b border-white/10 group/modal">
                <img
                  src={activeImage}
                  alt={activeItem.title}
                  className="max-h-full max-w-full object-contain p-2"
                />

                {activeItemImages.length > 1 && (
                  <>
                    {/* Left Button */}
                    <button
                      onClick={() => setActiveImgIndex((prev) => (prev === 0 ? activeItemImages.length - 1 : prev - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 border border-white/10 text-white hover:bg-black/90 hover:scale-105 active:scale-95 transition-all cursor-pointer opacity-0 group-hover/modal:opacity-100 font-bold"
                      aria-label="Previous photo"
                    >
                      ←
                    </button>
                    {/* Right Button */}
                    <button
                      onClick={() => setActiveImgIndex((prev) => (prev === activeItemImages.length - 1 ? 0 : prev + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 border border-white/10 text-white hover:bg-black/90 hover:scale-105 active:scale-95 transition-all cursor-pointer opacity-0 group-hover/modal:opacity-100 font-bold"
                      aria-label="Next photo"
                    >
                      →
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/55 border border-white/10 px-3 py-1.5 rounded-full">
                      {activeItemImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImgIndex(idx)}
                          className={`h-2 w-2 rounded-full transition-all duration-300 ${
                            activeImgIndex === idx
                              ? 'bg-[var(--accent-cyan)] w-4'
                              : 'bg-white/30 hover:bg-white/60'
                          }`}
                          aria-label={`View slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Lightbox Info */}
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[var(--accent-cyan)]/15 border border-[var(--accent-cyan)]/35 px-3 py-0.5 font-mono text-[9px] font-bold text-[var(--accent-cyan)] uppercase tracking-wider">
                    {activeItem.category}
                  </span>
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {activeItem.date}
                  </span>
                </div>
                <h3 className="font-display mt-3 text-lg font-bold text-white leading-tight">
                  {activeItem.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {activeItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
