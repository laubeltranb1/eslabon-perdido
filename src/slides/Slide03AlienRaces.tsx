import { motion } from 'framer-motion'
import { ALIEN_RACES } from '../data/aliens'
import RaceCard from '../components/RaceCard'

export default function Slide03AlienRaces() {
  return (
    <div className="flex h-full w-full flex-col px-5 sm:px-12 pt-24 sm:pt-24 pb-28 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 font-mono text-xs tracking-widest-plus uppercase text-leonine mb-2"
      >
        <span className="h-px w-8 bg-leonine" />
        03 · Taxonomía no oficial
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display font-semibold uppercase text-3xl sm:text-5xl text-bone mb-6"
      >
        Las razas extraterrestres
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ALIEN_RACES.map((race, i) => (
          <RaceCard key={race.id} race={race} i={i} />
        ))}
      </div>
    </div>
  )
}
