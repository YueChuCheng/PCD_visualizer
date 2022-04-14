
import './App.css';
import { Canvas } from '@react-three/fiber'
import PCDScene from './component/PCDLoader'
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="App">
      <Canvas dpr={1} style={{ height: 1000, width: 1000, background: '#272730' }}>
        <ambientLight intensity={0.5} />
        <pointLight intensity={0.1} position={[500, 500, 1000]} />
        <PCDScene />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
