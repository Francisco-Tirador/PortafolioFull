import './App.css'
import SobreMi from './componentes/sobreMi'
import Proyectos from './componentes/subComponentes/Proyectos'
import Target from './componentes/targPresenta'
import Contacto from './componentes/Contacto'
import Habilidades from './componentes/Habilidades'
function App() {
 
  return (
    <div className="App">
      <div className='Nav'>

      <div className='menu'>
  <img  src="https://cdn-icons-png.flaticon.com/512/2099/2099043.png"/>
      </div>
        <ul>
          <li><b>PRINCIPAL</b></li>
          <li><b>SOBRE MI</b></li>
          <li><b>HABILIDADES</b></li>
          <li><b>PROYECTOS</b></li>
          <li><b>CONTACTO</b></li>
        </ul>
      </div>


     <Target/>
     <div>
       <SobreMi/>

       <h3 className='Subtitule'>Habilidades</h3>
        <Habilidades/>

         <h3 className='Subtitule'>Proyectos</h3>
         <Proyectos/>
         <div className='cir'>

</div>
          <h3 className='Subtitule'>Contacto</h3>
          <Contacto/>

     </div>
    
    </div>
  
  )
}

export default App
