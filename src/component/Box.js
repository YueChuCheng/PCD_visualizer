import { useRef } from "react";

const Box = (props) => {
    const boxRef = useRef();

    return (
        <mesh ref={boxRef} {...props}>
            <boxGeometry args={[100, 100, 100]} />
            <meshNormalMaterial attach="material" />
        </mesh>
    )
}


export default Box