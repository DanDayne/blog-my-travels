import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import Space from './components/Space';
import { OrbitControls } from '@react-three/drei';


function Loader() {
  return (
    <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </div>
  )
}

function App() {
  return (
    <div className="App">
      <Canvas>
        <Space/>
        <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            zoomSpeed={0.5}
            panSpeed={0.5}
            rotateSpeed={0.5}
            minDistance={1.6}
            maxDistance={2} />
      </Canvas>
    </div>
  );
}

export default App;
