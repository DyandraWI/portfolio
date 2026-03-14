import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 800 }) {
  const meshRef = useRef()
  const mouseRef = useRef({ x: 0, y: 0 })

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    const cyanColor = new THREE.Color('#00f0ff')
    const purpleColor = new THREE.Color('#a855f7')
    const pinkColor = new THREE.Color('#f472b6')

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 20
      positions[i3 + 1] = (Math.random() - 0.5) * 20
      positions[i3 + 2] = (Math.random() - 0.5) * 15

      const colorChoice = Math.random()
      let color
      if (colorChoice < 0.4) color = cyanColor
      else if (colorChoice < 0.75) color = purpleColor
      else color = pinkColor

      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b

      sizes[i] = Math.random() * 3 + 0.5
    }

    return { positions, colors, sizes }
  }, [count])

  const originalPositions = useMemo(() => {
    return new Float32Array(positions)
  }, [positions])

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime

    const posArray = meshRef.current.geometry.attributes.position.array

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const speed = 0.15 + (i % 5) * 0.05

      posArray[i3] = originalPositions[i3] + Math.sin(time * speed + i * 0.1) * 0.3
      posArray[i3 + 1] = originalPositions[i3 + 1] + Math.cos(time * speed + i * 0.15) * 0.25
      posArray[i3 + 2] = originalPositions[i3 + 2] + Math.sin(time * speed * 0.5 + i * 0.05) * 0.2
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true
    meshRef.current.rotation.y = time * 0.015
    meshRef.current.rotation.x = Math.sin(time * 0.01) * 0.05
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function FloatingOrbs() {
  const group = useRef()

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    group.current.rotation.y = t * 0.05
  })

  return (
    <group ref={group}>
      {[...Array(5)].map((_, i) => {
        const angle = (i / 5) * Math.PI * 2
        const radius = 4 + i * 0.5
        return (
          <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(angle * 2) * 2, Math.sin(angle) * radius]}>
            <sphereGeometry args={[0.08 + i * 0.02, 16, 16]} />
            <meshBasicMaterial
              color={i % 2 === 0 ? '#00f0ff' : '#a855f7'}
              transparent
              opacity={0.6}
            />
          </mesh>
        )
      })}
    </group>
  )
}

export default function ParticleField() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <Particles count={600} />
        <FloatingOrbs />
      </Canvas>
    </div>
  )
}
