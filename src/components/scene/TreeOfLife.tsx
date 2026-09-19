import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import type { Group } from 'three'
import * as THREE from 'three'

type Branch = {
  from: THREE.Vector3
  to: THREE.Vector3
  color: string
}

function buildTree(): Branch[] {
  const branches: Branch[] = []
  const root = new THREE.Vector3(0, -1.6, 0)
  const colors = ['#39ff8f', '#2ee6d6', '#ffb02e', '#8b5cf6', '#ff3b5c']

  function grow(start: THREE.Vector3, dir: THREE.Vector3, depth: number, len: number) {
    if (depth === 0) return
    const end = start.clone().add(dir.clone().multiplyScalar(len))
    branches.push({ from: start, to: end, color: colors[depth % colors.length] })
    const spread = 0.55
    const children = depth > 2 ? 2 : Math.random() > 0.5 ? 2 : 1
    for (let i = 0; i < children; i++) {
      const angle = (i - (children - 1) / 2) * spread + (Math.random() - 0.5) * 0.3
      const newDir = dir
        .clone()
        .applyAxisAngle(new THREE.Vector3(0, 0, 1), angle)
        .applyAxisAngle(new THREE.Vector3(0, 1, 0), (Math.random() - 0.5) * 1.4)
      grow(end, newDir.normalize(), depth - 1, len * 0.72)
    }
  }

  grow(root, new THREE.Vector3(0, 1, 0), 5, 1.3)
  return branches
}

export default function TreeOfLife() {
  const group = useRef<Group>(null)
  const branches = useMemo(buildTree, [])

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.15
  })

  return (
    <group ref={group}>
      {branches.map((b, i) => {
        const mid = b.from.clone().add(b.to).multiplyScalar(0.5)
        const dir = b.to.clone().sub(b.from)
        const length = dir.length()
        const quaternion = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          dir.clone().normalize(),
        )
        return (
          <group key={i}>
            <mesh position={mid} quaternion={quaternion}>
              <cylinderGeometry args={[0.02, 0.035, length, 6]} />
              <meshStandardMaterial color={b.color} emissive={b.color} emissiveIntensity={0.4} />
            </mesh>
            <Float speed={2} floatIntensity={0.3} rotationIntensity={0.2}>
              <mesh position={b.to}>
                <sphereGeometry args={[0.06, 10, 10]} />
                <meshStandardMaterial color={b.color} emissive={b.color} emissiveIntensity={0.8} />
              </mesh>
            </Float>
          </group>
        )
      })}
    </group>
  )
}
