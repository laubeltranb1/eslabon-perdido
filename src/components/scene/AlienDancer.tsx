import { useMemo, useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import * as THREE from 'three'
import objUrl from '../../assets/model/alien.obj?url'
import diffuseUrl from '../../assets/model/diffuse.jpg'
import normalUrl from '../../assets/model/normal.png'
import roughnessUrl from '../../assets/model/roughness.png'
import metallicUrl from '../../assets/model/metallic.png'

type Props = {
  position?: [number, number, number]
  scale?: number
}

export default function AlienDancer({ position = [0, 0, 0], scale = 1 }: Props) {
  const group = useRef<THREE.Group>(null)
  const hips = useRef<THREE.Group>(null)

  const obj = useLoader(OBJLoader, objUrl)
  const [diffuse, normal, roughness, metalness] = useLoader(THREE.TextureLoader, [
    diffuseUrl,
    normalUrl,
    roughnessUrl,
    metallicUrl,
  ])

  const model = useMemo(() => {
    diffuse.colorSpace = THREE.SRGBColorSpace
    const material = new THREE.MeshStandardMaterial({
      map: diffuse,
      normalMap: normal,
      roughnessMap: roughness,
      metalnessMap: metalness,
    })
    const cloned = obj.clone(true)
    cloned.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = material
        child.castShadow = false
      }
    })
    return cloned
  }, [obj, diffuse, normal, roughness, metalness])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (group.current) {
      group.current.position.y = position[1] + Math.abs(Math.sin(t * 4.2)) * 0.22
      group.current.rotation.y = Math.sin(t * 1.6) * 0.9
    }
    if (hips.current) {
      hips.current.rotation.z = Math.sin(t * 4.2) * 0.12
      hips.current.rotation.x = Math.sin(t * 2.1) * 0.06
    }
  })

  return (
    <group ref={group} position={position} scale={scale}>
      <group ref={hips}>
        <primitive object={model} />
      </group>
    </group>
  )
}
