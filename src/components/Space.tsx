import { Stars } from "@react-three/drei";
import Moon from "./Moon";
import Planet from "./Planet";

import { useLoader } from "@react-three/fiber";
import { TextureLoader, Vector3 } from "three";

import EarthDayMap from "../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../assets/textures/8k_earth_specular_map.jpg";
import EarthClouds from "../assets/textures/8k_earth_clouds.jpg";
import MoonMap from "../assets/textures/2k_moon_map.jpg";



function Space() {

    const [colorMap, normalMap, specularMap, cloudsMap, moonMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthClouds, MoonMap]);

    const earthPosition = new Vector3(0, 0, 0);
    const moonPosition = new Vector3(-3, 0, -2.5);

    return <mesh>
        <ambientLight/>
        <Stars radius={100} depth={10} count={5000} fade />
        <Planet position={earthPosition} radius={1} cloudOpacity={0.25} cloudRotationStep={0.0001} colorMap={colorMap} normalMap={normalMap} specularMap={specularMap} cloudsMap={cloudsMap}/>
        <Moon position={moonPosition} rotateAround={earthPosition} radius={0.3} selfRotationStep={-0.0005} rotationStep={-0.00045} map={moonMap}/>
    </mesh>;
}

export default Space