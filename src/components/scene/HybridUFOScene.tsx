import { Suspense, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'
import type { Group } from 'three'
import AlienDancer from './AlienDancer'

export default function HybridUFOScene() {
  const saucer = useRef<Group>(null)

  useFrame((state, delta) => {
    if (saucer.current) {
      saucer.current.rotation.y += delta * 0.4
      saucer.current.position.y = 2.6 + Math.sin(state.clock.elapsedTime * 0.7) * 0.15
    }
  })

  return (
    <group position={[1.8, -0.4, 0]}>
      {/* saucer */}
      <group ref={saucer} position={[0, 2.6, 0]}>
        <mesh scale={[1.8, 0.4, 1.8]}>
          <sphereGeometry args={[0.5, 24, 12]} />
          <meshStandardMaterial color="#2ee6d6" emissive="#2ee6d6" emissiveIntensity={0.4} />
        </mesh>
        <mesh position={[0, 0.22, 0]}>
          <sphereGeometry args={[0.32, 20, 20]} />
          <meshStandardMaterial color="#c4b5fd" emissive="#8b5cf6" emissiveIntensity={0.5} transparent opacity={0.85} />
        </mesh>
        {[...Array(6)].map((_, i) => {
          const a = (i / 6) * Math.PI * 2
          return (
            <mesh key={i} position={[Math.cos(a) * 0.7, -0.05, Math.sin(a) * 0.7]}>
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshStandardMaterial color="#ffb02e" emissive="#ffb02e" emissiveIntensity={1} />
            </mesh>
          )
        })}
      </group>

      {/* tractor beam */}
      <mesh position={[0, 1.2, 0]}>
        <coneGeometry args={[0.9, 2.8, 32, 1, true]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.18} depthWrite={false} />
      </mesh>

      {/* dancing alien hybrid, under the tractor beam */}
      <Suspense fallback={null}>
        <AlienDancer position={[0, -0.3, 0]} scale={0.95} />
      </Suspense>

      <Sparkles count={60} scale={[6, 6, 6]} size={2} speed={0.4} color="#c4b5fd" opacity={0.5} />
    </group>
  )
}
