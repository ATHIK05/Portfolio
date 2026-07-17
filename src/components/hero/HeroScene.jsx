import { Canvas } from '@react-three/fiber'
import { Stars, Float } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: 'high-performance' }}
    >
      <Stars radius={100} count={5000} factor={4} fade speed={1} />
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} color="#7B61FF" intensity={3} />
      <pointLight position={[-5, -3, 2]} color="#00D4FF" intensity={1.5} />
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
        {/* Phone placeholder — swap for a Draco-compressed .glb mockup (< 500KB) */}
        <mesh position={[1.6, 0, 0]} rotation={[0.1, -0.4, 0.05]}>
          <boxGeometry args={[1.1, 2.3, 0.12]} />
          <meshStandardMaterial
            color="#0D0D1A"
            emissive="#7B61FF"
            emissiveIntensity={0.35}
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>
      </Float>
      <EffectComposer>
        <Bloom luminanceThreshold={0.4} intensity={1.2} mipmapBlur />
        <ChromaticAberration offset={[0.0005, 0.0005]} />
      </EffectComposer>
    </Canvas>
  )
}
