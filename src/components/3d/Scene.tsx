"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Stars, useMatcapTexture } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function FloatingObjects() {
  const group = useRef<THREE.Group>(null);
  const [matcap] = useMatcapTexture("7877EE_D87FC5_75D9C7_1C78C0", 256);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
      group.current.rotation.x = state.clock.elapsedTime * 0.05;
    }
  });

  const objects = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10 - 5,
      ] as [number, number, number],
      scale: Math.random() * 0.5 + 0.5,
      type: Math.random() > 0.5 ? "icosahedron" : "torus",
    }));
  }, []);

  return (
    <group ref={group}>
      {objects.map((obj, i) => (
        <Float key={i} speed={2} rotationIntensity={2} floatIntensity={2}>
          <mesh position={obj.position} scale={obj.scale}>
            {obj.type === "icosahedron" ? (
              <icosahedronGeometry args={[1, 0]} />
            ) : (
              <torusGeometry args={[0.8, 0.2, 16, 32]} />
            )}
            <meshMatcapMaterial matcap={matcap} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#8B5CF6" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <FloatingObjects />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
