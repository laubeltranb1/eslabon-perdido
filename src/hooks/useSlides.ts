import { useCallback, useEffect, useState } from 'react'

export const SLIDES = [
  { id: 'intro', label: 'Expediente' },
  { id: 'darwin', label: 'Darwin' },
  { id: 'eslabon', label: 'El Vacío' },
  { id: 'razas', label: 'Razas' },
  { id: 'progreso', label: 'La Marcha' },
  { id: 'hibrido', label: 'El Cruce' },
  { id: 'outro', label: 'Cierre' },
] as const

export const SLIDE_COUNT = SLIDES.length

export function useSlides() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)

  const goTo = useCallback((next: number) => {
    setIndex((current) => {
      const clamped = Math.max(0, Math.min(SLIDE_COUNT - 1, next))
      setDirection(clamped >= current ? 1 : -1)
      return clamped
    })
  }, [])

  const nextSlide = useCallback(() => goTo(index + 1), [goTo, index])
  const prevSlide = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (['ArrowRight', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault()
        nextSlide()
      } else if (['ArrowLeft', 'PageUp'].includes(e.key)) {
        e.preventDefault()
        prevSlide()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [nextSlide, prevSlide])

  return { index, direction, goTo, nextSlide, prevSlide }
}
