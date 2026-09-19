import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float } from '@react-three/drei'
import type { Group, Mesh } from 'three'
import HominidFigure from './HominidFigure'
import DNAHelix from './DNAHelix'

const STAGES = [
  { x: -3.6, height: 0.5, hunch: 1 },
  { x: -1.9, height: 0.68, hunch: 0.75 },
]
const STAGES_AFTER_GAP = [{ x: 1.6, height: 0.85, hunch: 0.42 }]

export default function EvolutionRow() {
  const beam = useRef<Mesh>(null)
  const saucer = useRef<Group>(null)

  useFrame((state) => {
    if (beam.current) {
      const m = beam.current.material as { opacity: number }
      m.opacity = 0.25 + Math.sin(state.clock.elapsedTime * 2) * 0.12
    }
    if (saucer.current) {
      saucer.current.rotation.y += 0.01
      saucer.current.position.y = 2.5 + Math.sin(state.clock.elapsedTime * 0.8) * 0.12
    }
  })

  return (
    <group position={[0, -1.1, 0]}>
      {/* ground line */}
      <mesh position={[0, -0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 2]} />
        <meshStandardMaterial color="#0d0c1e" transparent opacity={0.6} />
      </mesh>

      {STAGES.map((s, i) => (
        <HominidFigure
          key={`pre-${i}`}
          position={[s.x, 0, 0]}
          height={s.height}
          hunch={s.hunch}
          color="#3a3568"
        />
      ))}

      {/* THE MISSING LINK GAP */}
      <group position={[-0.4, 0, 0]}>
        <Float speed={2} floatIntensity={0.6} rotationIntensity={0.3}>
          <Text
            position={[0, 1.5, 0]}
            fontSize={0.55}
            color="#ff3b5c"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.015}
            outlineColor="#04030a"
          >
            ?
          </Text>
        </Float>

        <DNAHelix position={[0, 0.7, 0]} scale={0.35} speed={2} />

        {/* UFO saucer */}
        <group ref={saucer} position={[0, 2.5, 0]}>
          <mesh>
            <sphereGeometry args={[0.22, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#c4b5fd" emissive="#8b5cf6" emissiveIntensity={0.4} />
          </mesh>
          <mesh scale={[1.6, 0.35, 1.6]}>
            <sphereGeometry args={[0.28, 20, 10]} />
            <meshStandardMaterial color="#2ee6d6" emissive="#2ee6d6" emissiveIntensity={0.3} />
          </mesh>
        </group>

        {/* tractor beam */}
        <mesh ref={beam} position={[0, 1.25, 0]}>
          <coneGeometry args={[0.55, 2.5, 24, 1, true]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.3} depthWrite={false} />
        </mesh>

        <Text
          position={[0, -0.45, 0]}
          fontSize={0.14}
          color="#a49dc0"
          anchorX="center"
          font={undefined}
          maxWidth={2}
          textAlign="center"
        >
          ESLABÓN PERDIDO{'\n'}(teoría del cruce)
        </Text>
      </group>

      {STAGES_AFTER_GAP.map((s, i) => (
        <HominidFigure key={`post-${i}`} position={[s.x, 0, 0]} height={s.height} hunch={s.hunch} color="#3a3568" />
      ))}
    </group>
  )
}
