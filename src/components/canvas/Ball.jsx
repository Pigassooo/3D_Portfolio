import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
const [decal] = useTexture([props.imgUrl]);
const meshRef = useRef();

// 设置随机旋转速度和方向
const [rotationSpeed, setRotationSpeed] = useState({
    x: 0,
    y: 0,
    z: 0,
});

useEffect(() => {
    setRotationSpeed({
    x: Math.random() * 0.02 - 0.01, // 随机速度在 -0.01 和 0.01 之间
    y: Math.random() * 0.02 - 0.01,
    z: Math.random() * 0.02 - 0.01,
    });
}, []);

useFrame(() => {
    if (meshRef.current) {
    // 确保小球初始时正面朝向屏幕
    if (meshRef.current.rotation.x === 0 && meshRef.current.rotation.y === 0 && meshRef.current.rotation.z === 0) {
        meshRef.current.rotation.set(0, 0, 0);
    } else {
        // 开始随机旋转
        meshRef.current.rotation.x += rotationSpeed.x;
        meshRef.current.rotation.y += rotationSpeed.y;
        meshRef.current.rotation.z += rotationSpeed.z;
    }
    }
});

return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={1}>
    <ambientLight intensity={0.7} />
    <directionalLight position={[0, 0, 0.05]} />
    <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
            color='#fff8eb'
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
        />
        <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
        />
    </mesh>
    </Float>
);
};

const BallCanvas = ({ icon }) => {
return (
    <Canvas
    frameloop='always'
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
    >
    <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
    </Suspense>

    <Preload all />
    </Canvas>
);
};

export default BallCanvas;
