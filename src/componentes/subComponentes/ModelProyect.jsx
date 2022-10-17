import React from 'react'
import { useState } from 'react'
import visual from '../../imgSRC/atom.png'

const ModelProyect = ({title,description,imgs,icono,url,gitHub}) => {

const [Info, setInfo] = useState(false)
const masInfo=()=>{
    if(Info){setInfo(false)}
    else{setInfo(true)}
}

  return (
    <div >
        <div className='targetProyect'>

        <div class="card">
        <div class="face front">
            <img src={icono} alt={title}/>
            <h3>{title}</h3>
        </div>
        <div class="face back">
            <h3>{title}</h3>
            <p>{description}</p>
           <div class="link">
                <a href={url} title={`App ${title}`} target='_blank' >Ver aplicación</a>
                <a href={gitHub}  target='_blank' >
                    <img  src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" title={`GitHub de ${title}`} />
                </a>
            </div>
        </div>
    </div>    
        <div >
             <img className='imgProyect' src={imgs[0]} /> 
        </div>
      
    </div>
 
    </div>
  )
}

export default ModelProyect