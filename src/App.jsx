import './App.css'
import SobreMi from './componentes/sobreMi'
import Proyectos from './componentes/subComponentes/Proyectos'
import Target from './componentes/targPresenta'
import Contacto from './componentes/Contacto'
import Habilidades from './componentes/Habilidades'
import { useState } from 'react'
function App() {
  const [Menu, setMenu] = useState(false)
  const menu = () => {
    if (Menu) { setMenu(false) }
    else { setMenu(true) }
  }

  return (
    <div className="App">
      <div className='Nav'>

        <div className='menu' onClick={menu}>
          <img src="https://cdn-icons-png.flaticon.com/512/2099/2099043.png" />
        </div>

        <ul>
          <a href="#1" ><li><b>PRINCIPAL</b></li></a>
          <a href="#2" ><li><b>SOBRE MI</b></li></a>
          <a href="#3"><li><b>HABILIDADES</b></li></a>
          <a href="#4"><li><b>PROYECTOS</b></li></a>
          <a href="#5"><li><b>CONTACTO</b></li></a>
        </ul>
      </div>
      {Menu &&
        <div className='Menu'>
          <ul>
            <a href="#1" onClick={menu}><li><b>PRINCIPAL</b></li></a>
            <a href="#2" onClick={menu}><li><b>SOBRE MI</b></li></a>
            <a href="#3" onClick={menu}><li><b>HABILIDADES</b></li></a>
            <a href="#4" onClick={menu}><li><b>PROYECTOS</b></li></a>
            <a href="#5" onClick={menu}><li><b>CONTACTO</b></li></a>
          </ul>
        </div>
      }



      <div id='1'></div>
      <Target />
      <div> <div id='2'></div>
        <SobreMi />
        <div id='3'></div>
        <h3 className='Subtitule' >Habilidades</h3>
        <Habilidades />

        <div id='4' ></div>
        <h3 className='Subtitule'>Proyectos</h3>

        <Proyectos />
        <div id='5'>

        </div >
        <h3 className='Subtitule'>Contacto</h3>
        <Contacto />

      </div>

    </div>

  )
}

export default App
