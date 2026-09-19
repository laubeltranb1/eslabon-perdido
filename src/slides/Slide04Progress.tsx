import { motion } from 'framer-motion'
import apeWalk from '../assets/ape-walk.gif'

export default function Slide04Progress() {
  return (
    <div className="flex h-full w-full flex-col px-6 sm:px-16 pt-16 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 font-mono text-xs tracking-widest-plus uppercase text-alert"
      >
        <span className="h-px w-8 bg-alert" />
        04 · La marcha del progreso
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display font-semibold uppercase text-3xl sm:text-5xl text-bone mt-3 max-w-2xl"
      >
        Del mono al Homo sapiens
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-body text-sm sm:text-base text-bone-dim max-w-xl mt-3"
      >
        La icónica ilustración de 1965 muestra la marcha erguida progresiva de
        nuestros ancestros. Justo en el punto donde la ciencia ubica el salto
        entre el homínido primitivo y el género Homo, la teoría del cruce
        alienígena sitúa su intervención.
      </motion.p>

      <div className="flex-1 flex items-end">
        <motion.img
          src={apeWalk}
          alt="Australopithecus caminando"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-32 sm:h-44 w-auto mb-8 sm:mb-10 drop-shadow-[0_0_18px_rgba(255,59,92,0.3)]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="self-center mb-28 sm:mb-24 font-mono text-[10px] sm:text-xs uppercase tracking-widest-plus text-bone-dim/70 text-center"
      >
        Australopithecus → <span className="text-alert">[ VACÍO ]</span> → Homo erectus → Homo sapiens
      </motion.div>
    </div>
  )
}
