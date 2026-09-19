import { useEffect, useRef } from 'react'
import themeSrc from '../assets/x-files-theme.mp3'

export default function IntroAudio({ active }: { active: boolean }) {
  const ref = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = ref.current
    if (!audio) return

    if (!active) {
      audio.pause()
      audio.currentTime = 0
      return
    }

    audio.volume = 0.55
    const tryPlay = () => audio.play().catch(() => {})
    tryPlay()

    const unlock = () => tryPlay()
    window.addEventListener('pointerdown', unlock)
    window.addEventListener('keydown', unlock)

    return () => {
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('keydown', unlock)
    }
  }, [active])

  return <audio ref={ref} src={themeSrc} loop preload="auto" />
}
