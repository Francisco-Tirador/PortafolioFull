import React, { useState } from 'react'


const Contacto = () => {

const [Cambio, setCambio] = useState(true)
const [Cambio2, setCambio2] = useState(true)
const accion=()=>{ if(Cambio===true){ setCambio(false)}else{ setCambio(true)}}
const NumberAcc=()=>{if(Cambio2===true){setCambio2(false)}else{setCambio2(true)}}




  return (
    <div className='con'>
     <a href="https://www.linkedin.com/in/francisco-beltr%C3%A1n-342a31213/" target={'_blank'}>
      <img className='liImg' src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="Linkedin" />
     </a>

     <a  href="https://github.com/Francisco-Tirador" target={'_blank'}>
      <img className='liImg' src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
     </a>
     <a href="https://mail.google.com/mail/u/0/#inbox" target={'_blank'}>
      <img className='liImg' src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" alt="Gmail" />
     </a>
    </div>
  )
}

export default Contacto