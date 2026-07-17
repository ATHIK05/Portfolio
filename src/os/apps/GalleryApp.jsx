import { useState } from 'react'
import { GALLERY_ITEMS } from '../../data/gallery'

const CATEGORIES = ['All', 'Academic', 'Projects', 'Hackathons']

export default function GalleryApp() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeItem, setActiveItem] = useState(null)
  const [activeImgIndex, setActiveImgIndex] = useState(0)

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory)

  const activeItemImages = activeItem ? (activeItem.images || [activeItem.image]) : []
  const activeImage = activeItemImages[activeImgIndex]

  return (
    <div className="flex h-full flex-col md:flex-row bg-[var(--bg-surface)]/25 text-white">
      {/* Sidebar Navigation */}
      <div className="w-full shrink-0 border-b border-white/5 bg-black/20 p-4 md:w-48 md:border-r md:border-b-0">
        <h3 className="font-display text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
          Categories
        </h3>
        <ul className="mt-3 flex flex-row gap-2 md:flex-col md:gap-1.5">
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setSelectedCategory(cat)}
                className={`w-full rounded-lg px-3 py-1.5 text-left font-mono text-[11px] transition-all hover:bg-white/5 ${selectedCategory === cat
                  ? 'bg-[var(--accent-primary)]/15 border border-[var(--accent-primary)]/30 text-white font-semibold'
                  : 'border border-transparent text-white/60 hover:text-white'
                  }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Grid View */}
      <div className="flex-1 overflow-auto p-5">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItem(item)
                setActiveImgIndex(0)
              }}
              className="group text-left card-glass overflow-hidden rounded-xl border border-white/10 bg-black/20 hover:border-[var(--accent-cyan)]/50 transition-all hover:shadow-[0_0_15px_rgba(0,212,255,0.1)] active:scale-98 cursor-pointer focus:outline-none"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-black/40 border-b border-white/5">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-2 left-2 rounded-full bg-black/60 border border-white/10 px-2.5 py-0.5 font-mono text-[9px] font-semibold text-[var(--accent-cyan)] uppercase">
                  {item.category}
                </span>
              </div>

              {/* Thumbnail Details */}
              <div className="p-3">
                <h4 className="font-display text-xs font-bold leading-snug group-hover:text-[var(--accent-cyan)] transition-colors">
                  {item.title}
                </h4>
                <div className="mt-1.5 flex items-center justify-between font-mono text-[9px] text-[var(--text-muted)]">
                  <span>{item.date}</span>
                  <span className="text-[var(--accent-primary)] font-semibold group-hover:translate-x-0.5 transition-transform">
                    view ↗
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {activeItem && (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center bg-black/85 p-6 backdrop-blur-md"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="card-glass relative flex max-h-[90%] w-full max-w-[560px] flex-col overflow-hidden rounded-2xl border border-white/15 bg-black/80 shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 border border-white/10 text-white/80 hover:text-white hover:bg-black/90 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Close lightbox"
            >
              ✕
            </button>

            {/* Lightbox Image */}
            <div className="relative w-full h-[320px] md:h-[360px] overflow-hidden bg-black/20 flex items-center justify-center border-b border-white/10 group/modal">
              <img
                src={activeImage}
                alt={activeItem.title}
                className="max-h-full max-w-full object-contain transition-all duration-300"
              />

              {activeItemImages.length > 1 && (
                <>
                  {/* Left Arrow */}
                  <button
                    onClick={() => setActiveImgIndex((prev) => (prev === 0 ? activeItemImages.length - 1 : prev - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 border border-white/10 text-white hover:bg-black/80 hover:scale-105 active:scale-95 transition-all cursor-pointer opacity-0 group-hover/modal:opacity-100 font-bold"
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  {/* Right Arrow */}
                  <button
                    onClick={() => setActiveImgIndex((prev) => (prev === activeItemImages.length - 1 ? 0 : prev + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 border border-white/10 text-white hover:bg-black/80 hover:scale-105 active:scale-95 transition-all cursor-pointer opacity-0 group-hover/modal:opacity-100 font-bold"
                    aria-label="Next image"
                  >
                    →
                  </button>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 border border-white/5 px-2 py-1 rounded-full">
                    {activeItemImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImgIndex(idx)}
                        className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                          activeImgIndex === idx
                            ? 'bg-[var(--accent-cyan)] w-3'
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Lightbox Details */}
            <div className="p-4 bg-black/40">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/25 px-2.5 py-0.5 font-mono text-[9px] font-semibold text-[var(--accent-cyan)] uppercase">
                  {activeItem.category}
                </span>
                <span className="font-mono text-[9px] text-[var(--text-muted)]">
                  {activeItem.date}
                </span>
              </div>
              <h3 className="font-display mt-2 text-sm font-bold text-white leading-tight">
                {activeItem.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
