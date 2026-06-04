"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Image, RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import type { Group, Mesh } from "three";
import { images } from "@/lib/images";

function FloatingProducts() {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.8} rotationIntensity={0.35} floatIntensity={1.2}>
        <Image
          url={images.heroFashion}
          position={[-1.35, 0.35, 0.2]}
          scale={1.45}
          radius={0.06}
        />
      </Float>
      <Float speed={2.2} rotationIntensity={0.45} floatIntensity={1}>
        <Image
          url={images.heroProducts}
          position={[0, -0.15, 0.5]}
          scale={1.65}
          radius={0.06}
        />
      </Float>
      <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.9}>
        <Image
          url={images.productShoes}
          position={[1.4, 0.25, -0.1]}
          scale={1.2}
          radius={0.06}
        />
      </Float>
    </group>
  );
}

function PurplePlatform() {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y -= delta * 0.08;
  });

  return (
    <mesh ref={mesh} position={[0, -0.85, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[1.1, 1.65, 64]} />
      <meshStandardMaterial
        color="#7c3aed"
        metalness={0.55}
        roughness={0.25}
        emissive="#4c1d95"
        emissiveIntensity={0.35}
      />
    </mesh>
  );
}

function AccentCube() {
  const ref = useRef<Mesh>(null);
  useFrame((state: any) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.4;
      ref.current.rotation.z = state.clock.elapsedTime * 0.25;
    }
  });

  return (
    <RoundedBox
      ref={ref}
      args={[0.35, 0.35, 0.35]}
      radius={0.04}
      position={[1.75, 0.9, -0.35]}
    >
      <meshStandardMaterial
        color="#a78bfa"
        metalness={0.7}
        roughness={0.15}
        emissive="#6d28d9"
        emissiveIntensity={0.5}
      />
    </RoundedBox>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#f5f3ff"]} />
      <ambientLight intensity={0.85} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#c4b5fd" />
      <pointLight position={[-3, 2, -2]} intensity={0.6} color="#7c3aed" />
      <spotLight
        position={[0, 5, 2]}
        angle={0.35}
        penumbra={1}
        intensity={0.8}
        color="#ddd6fe"
      />
      <PurplePlatform />
      <AccentCube />
      <FloatingProducts />
    </>
  );
}

export function HeroScene3D() {
  return (
    <div className="hero-3d-canvas" aria-hidden>
      <Canvas
        camera={{ position: [0, 0.35, 4.2], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
