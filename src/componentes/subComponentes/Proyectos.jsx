import ModelProyect from './ModelProyect'
import Poke from '../../imgSRC/Pokemon.jpg'
import gato from '../../imgSRC/gato.jpg'
import rick from '../../imgSRC/rick.jpg'


const Proyectos = () => {

const infoProyects=[
  {id:"1",title:"POKEDEX",
  description:'Este proyecto web hace referencia a la famosa serie Pokémon utilizando su amplia gama de personajes aprovechándolos para explorar las diferentes formas de búsqueda de estos; construido en React, trabajando con la experiencia de usuario y la api.',
  imgs:[Poke],
  url:'https://api-pokedex-francisco.netlify.app/',
  gitHub:'https://github.com/Francisco-Tirador/PokedexApi',
  icon:'https://cdn-icons-png.flaticon.com/512/189/189001.png'},
  
  {id:"2",title:"RICK and MORTY",description:'Este proyecto web ocupa los personajes de la serie Rick and Morty, tomado esta información para ver estos personajes en sus respectivos universos, podemos tomar como referencia este proyecto si lo queremos llevar a una tienda virtual en su forma de búsqueda y la vista de los productos; construido en React, utilizando redux, y sus apis correspondientes.',
  imgs:[rick],
  url:'https://rickymort.netlify.app/',
  gitHub:'https://github.com/Francisco-Tirador/rick',
  icon:'https://cdn-icons-png.flaticon.com/512/1374/1374413.png'},
  
  {id:"3",title:"RED SOCIAL",description:'Este proyecto simula ser una red social, totalmente FULL STACK, pudiendo interactuar con diferentes usuarios, creando publicaciones, agregando amigos con la posibilidad de tener conversaciones por el momento solo entre los dos usuarios.De la parte del Back end se costruyo en base a modelos MVC con PostgresSQL rutas protegidas y la implementacion de jsonwebtoken',
   imgs:[gato],
   url:'https://gato-red.netlify.app/#/',
  gitHub:'https://github.com/Francisco-Tirador/FRONT-GATO_RED',
  icon:'https://cdn-icons-png.flaticon.com/512/6855/6855215.png'}
]

  return (
    <div className='contenProyects'>

    {
      infoProyects.map(Proyect=>(
        <ModelProyect
        icono={Proyect.icon}
        title={Proyect.title}
        url={Proyect.url}
        gitHub={Proyect.gitHub}
        description={Proyect.description}
        imgs={Proyect.imgs}
        key={Proyect.id}
        />
      ))
    }

    </div>
  )
}

export default Proyectos