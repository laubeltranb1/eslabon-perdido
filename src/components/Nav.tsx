import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SLIDES, SLIDE_COUNT } from '../hooks/useSlides'

type Props = {
  index: number
  goTo: (i: number) => void
  next: () => void
  prev: () => void
}

export default function Nav({ index, goTo, next, prev }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-10 py-4 sm:py-5 bg-gradient-to-t from-void-950 via-void-950/70 to-transparent">
      <button
        onClick={prev}
        disabled={index === 0}
        className="flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-widest-plus text-bone-dim hover:text-cosmic disabled:opacity-20 disabled:hover:text-bone-dim transition-colors"
      >
        <ChevronLeft size={16} />
        <span className="hidden sm:inline">Anterior</span>
      </button>

      <div className="flex items-center gap-1.5 sm:gap-3 overflow-hidden">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            title={s.label}
            className="group flex shrink-0 items-center gap-2"
          >
            <span
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 sm:w-8 bg-cosmic' : 'w-1.5 bg-bone-dim/30 group-hover:bg-bone-dim/60'
              }`}
            />
          </button>
        ))}
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-4">
        <span className="hidden sm:block font-mono text-xs text-bone-dim tracking-widest-plus">
          {String(index + 1).padStart(2, '0')} / {String(SLIDE_COUNT).padStart(2, '0')}
        </span>
        <button
          onClick={next}
          disabled={index === SLIDE_COUNT - 1}
          className="flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-widest-plus text-bone-dim hover:text-cosmic disabled:opacity-20 disabled:hover:text-bone-dim transition-colors"
        >
          <span className="hidden sm:inline">Siguiente</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}
