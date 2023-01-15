import { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader, DoubleSide, Mesh } from "three";

import EarthDayMap from "../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../assets/textures/8k_earth_specular_map.jpg";
import EarthClouds from "../assets/textures/8k_earth_clouds.jpg";
import { OrbitControls } from "@react-three/drei";

const RADIUS = 1;
const CLOUD_RADIUS = 1.009;

const CLOUD_ROATION_Y = 0.0001;

const Planet = () => {

    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthClouds]);

    const cloudsRef = useRef<Mesh>(null);
    
    useFrame(() => {
        cloudsRef.current?.rotateY(CLOUD_ROATION_Y);
    });

    return (<>
        <ambientLight></ambientLight>
        <mesh>
            <sphereGeometry args={[RADIUS, 32, 32]} />
            <meshPhongMaterial specularMap={specularMap} />
            <meshStandardMaterial
                map={colorMap}
                normalMap={normalMap}
                metalness={0}
                roughness={1} />
        </mesh>

        <mesh ref={cloudsRef}>
            <sphereGeometry args={[CLOUD_RADIUS, 32, 32]} />
            <meshPhongMaterial
                reflectivity={0}
                map={cloudsMap}
                opacity={0.4}
                depthWrite={true}
                transparent={true}
                side={DoubleSide} />
        </mesh>

        <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            zoomSpeed={0.5}
            panSpeed={0.5}
            rotateSpeed={0.5}
            minDistance={1.6}
            maxDistance={2} />
    </>
    );
};

export default Planet;
