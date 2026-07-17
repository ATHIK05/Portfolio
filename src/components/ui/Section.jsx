import { motion } from 'framer-motion'

export default function Section({ id, title, kicker, children, className = '' }) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl px-6 py-24 md:py-32 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        {kicker && (
          <p className="font-mono text-sm tracking-[0.3em] text-[var(--accent-cyan)]">{kicker}</p>
        )}
        {title && <h2 className="font-display mt-2 text-4xl font-black md:text-5xl">{title}</h2>}
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  )
}
