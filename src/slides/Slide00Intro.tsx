import { motion } from "framer-motion";
import evolutionImg from "../assets/evolucion-cruce.png";

export default function Slide00Intro() {
  return (
    <div className="flex h-full w-full flex-col items-center text-center gap-5 px-6 pt-20 sm:pt-24 pb-28 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, letterSpacing: "0.1em" }}
        animate={{ opacity: 1, letterSpacing: "0.5em" }}
        transition={{ duration: 1 }}
        className="font-mono text-[10px] sm:text-xs uppercase text-cosmic"
      >
        Expediente Ancestral · Clasificación: Nivel Omega
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="font-display font-bold uppercase text-5xl sm:text-7xl lg:text-8xl text-bone text-glow-cosmic leading-[0.95]"
      >
        El Eslabón
        <br />
        <span className="text-cosmic">Perdido</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-body text-base sm:text-xl text-bone-dim max-w-xl"
      >
        Un recorrido desde la ciencia de Charles Darwin hasta la teoría más
        polémica sobre el origen del ser humano:{" "}
        <span className="text-atlante">
          el cruce entre primate y seres de otro planeta.
        </span>
      </motion.p>

      <motion.img
        src={evolutionImg}
        alt="Evolución del mono al Homo sapiens, pasando por un eslabón alienígena"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 0.92, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="w-full max-w-3xl mt-2 drop-shadow-[0_0_25px_rgba(139,92,246,0.35)]"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="font-mono text-[10px] uppercase tracking-widest-plus text-bone-dim/60 animate-pulseSlow"
      >
        → Usa las flechas o desliza para continuar
      </motion.div>
    </div>
  );
}
