"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

const techs = [
  "Next.js", "React", "TypeScript", "Node.js", 
  "Tailwind CSS", "Three.js", "PostgreSQL", 
  "AWS", "Vercel", "AI APIs"
];

function OrbitingTech() {
  const group = useRef<THREE.Group>(null);
  const [radius, setRadius] = useState(3.8);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRadius(2.6); // Mobile
      } else if (window.innerWidth < 1024) {
        setRadius(3.2); // Tablet
      } else {
        setRadius(3.8); // Desktop (Reduced by ~15% from 4.5)
      }
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.15;
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });
  
  return (
    <group ref={group}>
      <mesh>
        {/* Sphere reduced by 10-15% from 1.5 to 1.3 */}
        <sphereGeometry args={[1.3, 32, 32]} />
        <meshStandardMaterial color="#050505" emissive="#3B82F6" emissiveIntensity={0.5} wireframe />
      </mesh>
      
      {techs.map((tech, i) => {
        const angle = (i / techs.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        // Improve spacing between tags by increasing vertical variance slightly
        const y = Math.sin(angle * 2.5) * (radius * 0.4);

        return (
          <Float key={tech} speed={2} rotationIntensity={1} floatIntensity={1} position={[x, y, z]}>
            <Html center transform sprite zIndexRange={[100, 0]}>
              <div className="glass px-4 py-2 rounded-full text-white font-mono text-sm whitespace-nowrap border border-white/20 shadow-[0_0_15px_rgba(59,130,246,0.3)] pointer-events-none">
                {tech}
              </div>
            </Html>
          </Float>
        );
      })}
    </group>
  );
}

export default function TechStack() {
  return (
    <section className="py-32 md:py-40 relative bg-deep-space border-t border-white/5 overflow-visible">
      <div className="container mx-auto px-6 mb-12 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          Modern <span className="text-gradient">Technology Stack</span>
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto">We use the most advanced frameworks and tools to build lightning-fast, scalable digital products.</p>
      </div>

      <div className="h-[600px] md:h-[700px] lg:h-[800px] w-full relative px-4 md:px-8 overflow-visible">
        <Canvas camera={{ position: [0, 2, 9], fov: 45 }} className="overflow-visible">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#8B5CF6" />
          <OrbitingTech />
        </Canvas>
      </div>
    </section>
  );
}
