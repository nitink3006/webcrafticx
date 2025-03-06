
import { useRef, useEffect } from 'react';
import { useFrame, Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleProps {
  count: number;
  size?: number;
  color?: string;
  scale?: number;
}

const Particles = ({ count = 2000, size = 0.02, color = "#ffffff", scale = 5 }: ParticleProps) => {
  const mesh = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  useEffect(() => {
    if (mesh.current) {
      // Initial random positions
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const color = new THREE.Color();
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * scale;
        positions[i3 + 1] = (Math.random() - 0.5) * scale;
        positions[i3 + 2] = (Math.random() - 0.5) * scale;
        
        const colorValue = new THREE.Color(color);
        colorValue.setHSL(Math.random() * 0.1 + 0.05, 0.5, 0.5);
        colors[i3] = colorValue.r;
        colors[i3 + 1] = colorValue.g;
        colors[i3 + 2] = colorValue.b;
      }

      const geometry = mesh.current.geometry as THREE.BufferGeometry;
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    }
  }, [count, scale]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
      mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry />
      <pointsMaterial
        size={size}
        sizeAttenuation={true}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={2}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#ffffff" metalness={0.7} roughness={0.1} wireframe />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-b from-background to-background/10">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Particles count={2000} size={0.015} scale={10} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
