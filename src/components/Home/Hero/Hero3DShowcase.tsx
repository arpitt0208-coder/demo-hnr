"use client";

import { Float, OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef, useMemo } from "react";
import type { StaticImageData } from "next/image";
import * as THREE from "three";

interface BikeSceneProps {
  bikeSrc: string;
  podiumSrc: string;
}

function BikeModel({ bikeSrc, podiumSrc }: BikeSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const bikeTexture = useTexture(bikeSrc);
  const podiumTexture = useTexture(podiumSrc);
  const { pointer } = useThree();

  bikeTexture.colorSpace = THREE.SRGBColorSpace;
  podiumTexture.colorSpace = THREE.SRGBColorSpace;

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.08;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.y * 0.08,
      0.05,
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      pointer.x * -0.04,
      0.05,
    );
  });

  const bikeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: bikeTexture,
        transparent: true,
        alphaTest: 0.05,
        metalness: 0.35,
        roughness: 0.45,
      }),
    [bikeTexture],
  );

  const podiumMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: podiumTexture,
        transparent: true,
        alphaTest: 0.05,
        metalness: 0.2,
        roughness: 0.6,
      }),
    [podiumTexture],
  );

  return (
    <group ref={groupRef} position={[0, -0.15, 0]}>
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.35}>
        <mesh position={[0, 0.35, 0]} material={bikeMaterial}>
          <planeGeometry args={[3.2, 2.2]} />
        </mesh>
      </Float>
      <mesh position={[0, -0.55, -0.2]} material={podiumMaterial}>
        <planeGeometry args={[3.8, 1.4]} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.95, 0]} receiveShadow>
        <circleGeometry args={[2.2, 48]} />
        <meshStandardMaterial color="#f1f5f9" metalness={0.5} roughness={0.5} />
      </mesh>
    </group>
  );
}

interface Hero3DShowcaseProps {
  bikeImage: StaticImageData;
  podiumImage: StaticImageData;
  className?: string;
}

export function Hero3DShowcase({
  bikeImage,
  podiumImage,
  className,
}: Hero3DShowcaseProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0.4, 4.2], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.55} />
        <spotLight
          position={[4, 6, 5]}
          angle={0.35}
          penumbra={0.8}
          intensity={1.4}
          color="#F7CB46"
          castShadow
        />
        <pointLight position={[-3, 2, 2]} intensity={0.6} color="#FF6B35" />
        <directionalLight position={[0, 3, -2]} intensity={0.35} color="#ffffff" />
        <Suspense fallback={null}>
          <BikeModel bikeSrc={bikeImage.src} podiumSrc={podiumImage.src} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.35}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 3.5}
        />
      </Canvas>
    </div>
  );
}
