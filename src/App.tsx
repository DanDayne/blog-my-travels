import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import Planet from './components/Planet';


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
        <Planet></Planet>
      </Canvas>
    </div>
  );
}

export default App;
