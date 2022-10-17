import React from 'react'
import ModelHabili from './subComponentes/ModelHabili'

const Habilidades = () => {
const habilidades=[
    {id:'1',title:'HTML5',url:'https://cdn-icons-png.flaticon.com/512/1051/1051277.png'},
    {id:'2',title:'CSS',url:'https://cdn-icons-png.flaticon.com/512/732/732190.png'},
    {id:'3',title:'JAVA SCRIPT',url:'https://cdn-icons-png.flaticon.com/512/5968/5968292.png'},
    {id:'4',title:'REAC + VITE',url:'https://cdn-icons-png.flaticon.com/512/1126/1126012.png'},
    {id:'6',title:'EXPRESS',url:'https://cdn-icons-png.flaticon.com/512/477/477430.png'},
    {id:'7',title:'SQL',url:'https://cdn-icons-png.flaticon.com/512/4492/4492311.png'},
    {id:'8',title:'POSTGRES',url:'https://cdn-icons-png.flaticon.com/512/5968/5968342.png'},
    {id:'9',title:'DBeaver',url:'https://cdn-icons-png.flaticon.com/512/7432/7432625.png'},
    {id:'10',title:'ILUSTRATOR',url:'https://cdn-icons-png.flaticon.com/512/5968/5968472.png'},
    {id:'11',title:'PHOTOSHOP',url:'https://cdn-icons-png.flaticon.com/512/5968/5968520.png'},
    {id:'12',title:'COREL DRAW',url:'https://cdn-icons-png.flaticon.com/512/527/527543.png'}
]

  return (
    <div className='contenHabili'>
        {
            habilidades.map(Habil=>(
                <ModelHabili
                key={Habil.id}
                url={Habil.url}
                title={Habil.title}
                />
            ))
        }
    </div>
  )
}

export default Habilidades