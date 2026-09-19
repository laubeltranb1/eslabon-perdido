import { AnimatePresence, motion } from 'framer-motion'
import SceneCanvas from './components/SceneCanvas'
import Nav from './components/Nav'
import IntroAudio from './components/IntroAudio'
import { useSlides } from './hooks/useSlides'
import Slide00Intro from './slides/Slide00Intro'
import Slide01Darwin from './slides/Slide01Darwin'
import Slide02MissingLink from './slides/Slide02MissingLink'
import Slide03AlienRaces from './slides/Slide03AlienRaces'
import Slide04Progress from './slides/Slide04Progress'
import Slide05Hybrid from './slides/Slide05Hybrid'
import Slide06Outro from './slides/Slide06Outro'

const SLIDE_COMPONENTS = [
  Slide00Intro,
  Slide01Darwin,
  Slide02MissingLink,
  Slide03AlienRaces,
  Slide04Progress,
  Slide05Hybrid,
  Slide06Outro,
]

const variants = {
  enter: (direction: 1 | -1) => ({ opacity: 0, x: direction * 60 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: 1 | -1) => ({ opacity: 0, x: direction * -60 }),
}

function App() {
  const { index, direction, goTo, nextSlide, prevSlide } = useSlides()
  const Current = SLIDE_COMPONENTS[index]

  return (
    <div className="relative h-screen w-screen bg-void-950 overflow-hidden">
      <SceneCanvas slide={index} />
      <IntroAudio active={index === 0} />

      <div className="pointer-events-none fixed inset-0 bg-noise opacity-40 z-0" />
      <div className="pointer-events-none fixed inset-0 vignette z-0" />
      <div className="pointer-events-none fixed inset-0 bg-grid bg-[size:44px_44px] opacity-[0.15] z-0" />

      <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-5 sm:px-10 py-4 sm:py-5 font-mono text-[10px] sm:text-xs uppercase tracking-widest-plus text-bone-dim/70">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-reptile animate-blink" />
          Expediente Ancestral
        </span>
        <span className="hidden sm:block">Origen · Evolución · Contacto</span>
      </header>

      <main className="relative z-10 h-full w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="h-full w-full"
          >
            <Current />
          </motion.div>
        </AnimatePresence>
      </main>

      <Nav index={index} goTo={goTo} next={nextSlide} prev={prevSlide} />
    </div>
  )
}

export default App
