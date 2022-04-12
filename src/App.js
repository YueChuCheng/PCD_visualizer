
import './App.css';
import { Canvas } from '@react-three/fiber'
import Box from './component/Box'
import Pcdloader from './component/PCDLoader'
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function App() {
  return (
    <div className="App">
      <Canvas style={{ height: 1000, width: 1000, background: '#272730' }}>
        <ambientLight intensity={0.5} />
        <pointLight intensity={0.1} position={[500, 500, 1000]} />
        {/* <PerspectiveCamera makeDefault /> */}
        <Box position={[70, 70, 0]} />
        <Box position={[-70, 70, 0]} />
        <Box position={[70, -70, 0]} />
        <Box position={[-70, -70, 0]} />
        {/* <Pcdloader /> */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
