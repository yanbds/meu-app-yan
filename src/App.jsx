import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Botao({ texto }) {
  
  return (
    <button
      style={{
        background: "#F2A900",
        color: "#0D2248",
        padding: "10px 24px",
        fontWeight: "bold",
        border: "none",
      }}
    >
      {texto}
    </button>
  );
}


function App() {

  return (
    <>
  <div>
    Aperte o meu botão! 
  </div>
  <br>
  </br>
      <div>
      <Botao texto="Clique aqui!" />
      </div>
    </>
  )
}

export default App