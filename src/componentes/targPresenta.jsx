import React from "react";


const Target=()=>{
    
    return(
        <div className="targetPrincipal">
            
          {/* <Img enlace={link} alt="Programador"/> */}
          <img className="img" src="https://img.freepik.com/vector-premium/chico-joven-que-trabaja-computadora-mesa-elevadora-silla-pie-aislado-fondo-verde-ilustracion-plana_323758-138.jpg?w=740" alt="" />
          <div className="presentacion">
              <h1>HOLA MUNDO</h1>
             <p className="name entrada">Soy Francisco Beltran</p>

             <div >
                <dir className='palito'></dir>
                <div className="word fron">
                    <h2>PROGRAMADOR</h2>
                </div>
                <div className=" word bac">
                    <h2>DISEÑADOR</h2>
                </div>
             </div>
             
          </div>
             

        </div>
    )
}

export default Target