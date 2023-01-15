import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { DoubleSide, Mesh, Texture, Vector3 } from "three";

interface Props {
    position: Vector3
    radius: number
    normalMap: Texture
    colorMap: Texture
    specularMap: Texture
    cloudsMap: Texture | null
    cloudRotationStep: number | null
    cloudOpacity: number | null
}

const Planet: React.FC<Props> = (props) => {

    var cloudRadius = props.radius + 0.009;

    const hasClouds = props.cloudsMap !== null && props.cloudRotationStep !== null && props.cloudOpacity !== null;

    const cloudsRef = useRef<Mesh>(null);

    useFrame(() => {
        if (hasClouds) {
            cloudsRef.current?.rotateY(props.cloudRotationStep!);
        }
    });

    return <mesh position={props.position}>
        <mesh>
            <sphereGeometry args={[props.radius, 32, 32]} />
            <meshPhongMaterial specularMap={props.specularMap} />
            <meshStandardMaterial
                map={props.colorMap}
                normalMap={props.normalMap}
                metalness={0}
                roughness={1} />
        </mesh>

        {hasClouds && (<mesh ref={cloudsRef}>
            <sphereGeometry args={[cloudRadius, 32, 32]} />
            <meshPhongMaterial
                reflectivity={0}
                map={props.cloudsMap}
                opacity={props.cloudOpacity!}
                depthWrite={true}
                transparent={true}
                side={DoubleSide} />
        </mesh>)}
    </mesh>;
};

export default Planet;
