import { motion } from 'framer-motion'
import Section from '../ui/Section'
import { awards } from '../../data/awards'

const TIERS = {
  gold: { icon: '\ud83e\udd47', color: '#FFD700' },
  silver: { icon: '\ud83e\udd48', color: '#C0C0C0' },
  academic: { icon: '\ud83c\udf93', color: '#00D4FF' },
  leadership: { icon: '\ud83c\udf96\ufe0f', color: '#FF6B35' },
}

export default function Awards() {
  return (
    <Section id="awards" kicker="06 — AWARDS" title="A pattern, not a fluke.">
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {awards.map((a, i) => {
          const tier = TIERS[a.tier]
          return (
            <motion.div
              key={a.title + a.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="card-glass mb-5 break-inside-avoid rounded-2xl p-5"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{tier.icon}</span>
                <div>
                  <h3 className="font-display font-bold">{a.title}</h3>
                  <p className="mt-0.5 font-mono text-[11px]" style={{ color: tier.color }}>
                    {a.event} · {a.level} · {a.year}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
