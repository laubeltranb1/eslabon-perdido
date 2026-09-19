import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group } from 'three'

type Props = {
  position?: [number, number, number]
  scale?: number
  colorA?: string
  colorB?: string
  speed?: number
  count?: number
  opacity?: number
}

export default function DNAHelix({
  position = [0, 0, 0],
  scale = 1,
  colorA = '#8b5cf6',
  colorB = '#2ee6d6',
  speed = 1,
  count = 16,
  opacity = 1,
}: Props) {
  const group = useRef<Group>(null)

  const rungs = useMemo(() => {
    const items: { y: number; angle: number }[] = []
    for (let i = 0; i < count; i++) {
      items.push({ y: (i - count / 2) * 0.22, angle: (i / count) * Math.PI * 5 })
    }
    return items
  }, [count])

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.5 * speed
  })

  const radius = 0.8

  return (
    <group ref={group} position={position} scale={scale}>
      {rungs.map((r, i) => {
        const x1 = Math.cos(r.angle) * radius
        const z1 = Math.sin(r.angle) * radius
        const x2 = Math.cos(r.angle + Math.PI) * radius
        const z2 = Math.sin(r.angle + Math.PI) * radius
        return (
          <group key={i}>
            <mesh position={[x1, r.y, z1]}>
              <sphereGeometry args={[0.09, 12, 12]} />
              <meshStandardMaterial color={colorA} emissive={colorA} emissiveIntensity={0.6} transparent={opacity < 1} opacity={opacity} />
            </mesh>
            <mesh position={[x2, r.y, z2]}>
              <sphereGeometry args={[0.09, 12, 12]} />
              <meshStandardMaterial color={colorB} emissive={colorB} emissiveIntensity={0.6} transparent={opacity < 1} opacity={opacity} />
            </mesh>
            {i % 2 === 0 && (
              <mesh position={[(x1 + x2) / 2, r.y, (z1 + z2) / 2]} rotation={[0, -r.angle, Math.PI / 2]}>
                <cylinderGeometry args={[0.02, 0.02, radius * 2, 6]} />
                <meshStandardMaterial color="#ece7f5" transparent opacity={0.35 * opacity} />
              </mesh>
            )}
          </group>
        )
      })}
    </group>
  )
}
