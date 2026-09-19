import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars, Sparkles } from '@react-three/drei'
import type { Group } from 'three'

export default function StarField() {
  const group = useRef<Group>(null)

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.008
    }
  })

  return (
    <group ref={group}>
      <Stars radius={90} depth={50} count={4000} factor={4} saturation={0} fade speed={0.6} />
      <Sparkles count={80} scale={[40, 20, 40]} size={2.5} speed={0.3} color="#8b5cf6" opacity={0.6} />
      <Sparkles count={40} scale={[30, 15, 30]} size={1.5} speed={0.2} color="#2ee6d6" opacity={0.4} />
    </group>
  )
}
