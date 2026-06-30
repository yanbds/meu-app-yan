import {Posts } from '../Componentes/Posts'
import {useEffect } from 'react'
import { buscar} from '../Services/api'

function Home() {
  useEffect(() => {
    buscar();
  }, []);

  return (
    <>
    <div>
      <h1>Home</h1>
      <p>Bem-vindo à página inicial.</p>
    </div>
    <Posts />
    </>
  )
}

export { Home }