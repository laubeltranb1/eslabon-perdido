import { useState } from 'react'
import { motion } from 'framer-motion'
import type { AlienRace } from '../data/aliens'

export default function RaceCard({ race, i }: { race: AlienRace; i: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.08 * i }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col gap-2 rounded-lg border p-3 sm:p-4 backdrop-blur-sm bg-void-900/60 transition-colors duration-300"
      style={{ borderColor: hovered ? race.color : 'rgba(164,157,192,0.15)' }}
    >
      <div className="flex items-start gap-3">
        <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-md overflow-hidden bg-void-950/60 border" style={{ borderColor: `${race.color}55` }}>
          <img
            src={race.image}
            alt={race.name}
            className="h-full w-full object-cover object-top transition-transform duration-500"
            style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: `linear-gradient(to top, ${race.color}40, transparent 55%)` }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ boxShadow: `inset 0 0 14px ${race.color}55` }}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest-plus" style={{ color: race.color }}>
            <span>Expediente-0{i + 1}</span>
            <span className="h-5 w-5 flex items-center justify-center rounded-full border" style={{ borderColor: race.color }}>
              {race.glyph}
            </span>
          </div>

          <h3 className="font-display uppercase text-lg sm:text-xl text-bone leading-tight mt-1">{race.name}</h3>
          <p className="font-mono text-[11px] text-bone-dim">{race.origin}</p>
        </div>
      </div>
      <p className="font-body text-xs sm:text-sm text-bone-dim leading-relaxed">{race.description}</p>

      <div className="flex flex-wrap gap-1.5 mt-1">
        {race.traits.map((t) => (
          <span
            key={t}
            className="font-mono text-[9px] uppercase tracking-wide px-2 py-1 rounded-full border"
            style={{ borderColor: `${race.color}55`, color: race.color }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
