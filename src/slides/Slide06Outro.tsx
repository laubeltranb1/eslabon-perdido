import { motion } from "framer-motion";

export default function Slide06Outro() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center gap-5 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-[10px] sm:text-xs uppercase tracking-widest-plus text-cosmic"
      >
        Fin del expediente
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display font-bold uppercase text-4xl sm:text-6xl text-bone"
      >
        ¿Ciencia o mito?
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="font-body text-sm sm:text-lg text-bone-dim max-w-xl"
      >
        La evolución de Darwin cuenta con evidencia sólida y consenso
        científico. La teoría del cruce alienígena es uno mas de los "rumores",
        sin evidencia verificable, pero fascinante como un cuestionamiento sobre
        nuestro propio origen.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-4 font-mono text-[10px] uppercase tracking-widest-plus text-bone-dim/50"
      >
        NO ESTAMOS SOLOS
      </motion.div>
    </div>
  );
}
