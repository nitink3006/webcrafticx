
import { useRef, useEffect } from 'react';
import { useFrame, Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture, Sphere, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleProps {
  count: number;
  size?: number;
  color?: string;
  scale?: number;
}

const Particles = ({ count = 3000, size = 0.02, color = "#5046e5", scale = 6 }: ParticleProps) => {
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
        
        // Enhanced color palette with brighter colors
        const colorOption = Math.random();
        if (colorOption < 0.3) {
          // Indigo/purple family - brighter
          color.setHSL(0.7, 0.95, 0.8 + Math.random() * 0.2);
        } else if (colorOption < 0.6) {
          // Blue family - brighter
          color.setHSL(0.6, 0.9, 0.7 + Math.random() * 0.3);
        } else if (colorOption < 0.8) {
          // Purple/pink family - brighter
          color.setHSL(0.8, 0.9, 0.8 + Math.random() * 0.2);
        } else {
          // Accent color - bright teal/cyan
          color.setHSL(0.5, 0.9, 0.75 + Math.random() * 0.25);
        }
        
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
      }

      const geometry = mesh.current.geometry as THREE.BufferGeometry;
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    }
  }, [count, scale]);

  useFrame((state) => {
    if (mesh.current) {
      // More dynamic movement
      mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.15) * 0.15;
      mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.15;
      
      // Add subtle wave effect
      const positions = (mesh.current.geometry as THREE.BufferGeometry).attributes.position.array as Float32Array;
      const time = state.clock.getElapsedTime();
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];
        
        // Apply subtle wave motion
        positions[i3 + 1] = y + Math.sin(time * 0.5 + x * 0.5) * 0.01;
      }
      
      (mesh.current.geometry as THREE.BufferGeometry).attributes.position.needsUpdate = true;
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

const FloatingSpheres = () => {
  return (
    <>
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.6}>
        <mesh position={[2, -1, -1]} scale={0.6}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#8B5CF6" metalness={0.4} roughness={0.2} />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.5}>
        <mesh position={[-2.5, 1, -2]} scale={0.4}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#60A5FA" metalness={0.5} roughness={0.3} />
        </mesh>
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.7}>
        <mesh position={[-1.5, -2, -1]} scale={0.3}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#F471B5" metalness={0.6} roughness={0.1} />
        </mesh>
      </Float>
    </>
  );
};

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.004;
      meshRef.current.rotation.z += 0.002;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={2.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial 
        color="#4F46E5" 
        metalness={0.8} 
        roughness={0.2} 
        wireframe 
        emissive="#8B5CF6"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 bg-white">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 25 }}>
        <color attach="background" args={["#ffffff"]} />
        <fog attach="fog" args={["#ffffff", 15, 25]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={2.0} color="#8B5CF6" />
        <directionalLight position={[-10, -10, -5]} intensity={0.7} color="#60A5FA" />
        <pointLight position={[0, 5, 0]} intensity={0.8} color="#F471B5" />
        
        <Particles count={3000} size={0.03} scale={12} />
        <AnimatedSphere />
        <FloatingSpheres />
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
