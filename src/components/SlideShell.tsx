import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
  kicker: string
  title: string
  subtitle?: string
  children?: ReactNode
  align?: 'left' | 'center' | 'right'
  accent?: string
}

export default function SlideShell({ kicker, title, subtitle, children, align = 'left', accent = '#8b5cf6' }: Props) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : align === 'right' ? 'items-end text-right ml-auto' : 'items-start text-left'

  return (
    <div className={`flex flex-col ${alignClass} max-w-2xl gap-4`}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 font-mono text-xs tracking-widest-plus uppercase"
        style={{ color: accent }}
      >
        <span className="h-px w-8" style={{ backgroundColor: accent }} />
        {kicker}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display font-semibold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-bone"
      >
        {title}
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-base sm:text-lg text-bone-dim max-w-xl"
        >
          {subtitle}
        </motion.p>
      )}

      {children && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full"
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}
