import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import { Sobre } from './Pages/Sobre'
import { Contato } from './Pages/Contato'


function App() {

  return (

    <>
    <div>
      <nav>
       <Link to="/">Home</Link><br></br>
       <Link to="/sobre">Sobre</Link><br></br>
       <Link to="/contato">Contato</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </div>
  
    </>
  );
}

export default App