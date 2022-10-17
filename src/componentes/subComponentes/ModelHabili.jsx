import React from 'react'

const ModelHabili = ({url,title}) => {
  return (
    <div >
        <img  src={url} className='liImg' alt={title} title={title}/>
    </div>
  )
}

export default ModelHabili