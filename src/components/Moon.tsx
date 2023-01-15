import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Texture, Vector3 } from "three";

interface Props {
    position: Vector3
    rotateAround: Vector3
    radius: number
    map: Texture
    selfRotationStep: number
    rotationStep: number
}

const Moon: React.FC<Props> = (props) => {

    var moonRef = useRef<Mesh>(null);
    var moonRelativeToOriginRef = useRef<Mesh>(null);

    useFrame(() => {
        moonRef.current?.rotateY(props.selfRotationStep);
        moonRelativeToOriginRef.current?.rotateY(props.rotationStep);
    });

    return <mesh ref={moonRelativeToOriginRef} position={props.rotateAround}>
        <mesh ref={moonRef} position={props.position}>
            <sphereGeometry args={[props.radius, 32, 32]} />
            <meshStandardMaterial
                map={props.map}
                metalness={0}
                roughness={1} />
        </mesh>
    </mesh>
}

export default Moon;