import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import StarField from './scene/StarField'
import DNAHelix from './scene/DNAHelix'
import TreeOfLife from './scene/TreeOfLife'
import EvolutionRow from './scene/EvolutionRow'
import HybridUFOScene from './scene/HybridUFOScene'

export default function SceneCanvas({ slide }: { slide: number }) {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0.4, 7], fov: 50 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 1.8]}
      >
        <color attach="background" args={['#04030a']} />
        <fog attach="fog" args={['#04030a', 8, 20]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={40} color="#8b5cf6" />
        <pointLight position={[-5, -3, -5]} intensity={20} color="#2ee6d6" />

        <Suspense fallback={null}>
          <StarField />

          {slide === 6 && (
            <group position={[0, 0.3, -3.4]}>
              <DNAHelix scale={1.7} speed={0.5} opacity={0.3} />
            </group>
          )}

          {slide === 1 && (
            <group position={[2.6, -0.4, -1.4]}>
              <TreeOfLife />
            </group>
          )}

          {slide === 2 && (
            <group position={[2.2, -0.3, -1]} scale={1}>
              <DNAHelix position={[-0.9, 0, 0]} scale={0.8} colorA="#39ff8f" colorB="#0d0c1e" />
              <DNAHelix position={[0.9, 0, 0]} scale={0.8} colorA="#8b5cf6" colorB="#2ee6d6" />
            </group>
          )}

          {slide === 3 && <group />}

          {slide === 4 && (
            <group position={[2.3, 0, 0]}>
              <EvolutionRow />
            </group>
          )}

          {slide === 5 && <HybridUFOScene />}
        </Suspense>
      </Canvas>
    </div>
  )
}
