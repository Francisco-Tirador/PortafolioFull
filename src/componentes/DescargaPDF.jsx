import React from 'react'
import {PDFDownloadLink,PDFViewer} from '@react-pdf/renderer'
import CV from '../imgSRC/CVFULLSTACK.pdf'


const DescargaPDF = () => {
    const pdfra=()=>{
        document.getElementById('Descargarpdf').click(),
        window.close()
    }

    //con el div Objet podemos mostrar el pdf en una nueva pesataña
  return (
    <div>
        {/* <div>
            <object data={CV}  type='application/pdf' width="20%" height='20%'></object>
        </div> */}
         <div className='PDF'>
          <a onClick={pdfra} href={CV} id='Descargarpdf' download='José Francisco Béltran Bolívar CV.pdf'>
          DESCARGAR CV
        </a>  
         
         </div>
    </div>
  )
}

export default DescargaPDF