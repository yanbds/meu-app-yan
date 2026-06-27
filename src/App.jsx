import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import { Sobre } from './Pages/Sobre'
import { Contato } from './Pages/Contato'

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  async function buscarPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
  return data; }

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