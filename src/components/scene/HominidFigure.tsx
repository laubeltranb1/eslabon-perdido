import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group } from 'three'

type Props = {
  position?: [number, number, number]
  height?: number
  hunch?: number // 0 = fully upright, 1 = fully hunched knuckle-walker
  color?: string
  emissive?: string
  glow?: boolean
  label?: string
}

export default function HominidFigure({
  position = [0, 0, 0],
  height = 1,
  hunch = 0,
  color = '#0d0c1e',
  emissive = '#8b5cf6',
  glow = false,
}: Props) {
  const group = useRef<Group>(null)
  const legSwing = useRef(0)

  useFrame((state, delta) => {
    legSwing.current += delta * 1.6
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.15
    }
  })

  const torsoTilt = hunch * 0.9
  const material = glow
    ? { color, emissive, emissiveIntensity: 0.5, roughness: 0.4 }
    : { color, roughness: 0.85, metalness: 0.05 }

  return (
    <group ref={group} position={position} scale={height}>
      {/* legs */}
      <mesh position={[-0.12, 0.5, 0]} rotation={[0.15, 0, 0]}>
        <capsuleGeometry args={[0.09, 0.75, 4, 8]} />
        <meshStandardMaterial {...material} />
      </mesh>
      <mesh position={[0.12, 0.48, 0.05]} rotation={[-0.2, 0, 0]}>
        <capsuleGeometry args={[0.09, 0.75, 4, 8]} />
        <meshStandardMaterial {...material} />
      </mesh>

      {/* torso, tilted forward for hunch */}
      <group position={[0, 1.0, 0]} rotation={[torsoTilt, 0, 0]}>
        <mesh position={[0, 0.35, 0]}>
          <capsuleGeometry args={[0.19, 0.55, 4, 8]} />
          <meshStandardMaterial {...material} />
        </mesh>

        {/* arms - longer & lower for more hunched ancestors */}
        <mesh
          position={[-0.32, 0.15 - hunch * 0.55, 0.05]}
          rotation={[0.1, 0, 0.25 + hunch * 0.3]}
        >
          <capsuleGeometry args={[0.075, 0.5 + hunch * 0.35, 4, 8]} />
          <meshStandardMaterial {...material} />
        </mesh>
        <mesh
          position={[0.32, 0.15 - hunch * 0.55, 0.05]}
          rotation={[0.1, 0, -0.25 - hunch * 0.3]}
        >
          <capsuleGeometry args={[0.075, 0.5 + hunch * 0.35, 4, 8]} />
          <meshStandardMaterial {...material} />
        </mesh>

        {/* neck + head */}
        <group position={[0, 0.72, 0.05 + hunch * 0.12]} rotation={[-torsoTilt * 0.6, 0, 0]}>
          <mesh>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial {...material} />
          </mesh>
          {/* brow ridge, prominent for ancestors, subtle for sapiens */}
          <mesh position={[0, 0.03, 0.16]} scale={[1, 0.4 + (1 - hunch) * 0.1, 0.5]}>
            <sphereGeometry args={[0.16, 12, 12]} />
            <meshStandardMaterial {...material} />
          </mesh>
        </group>
      </group>
    </group>
  )
}
