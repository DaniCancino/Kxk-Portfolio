import React from 'react'
import './Style.css';
import Contact from '../../components/Contacto/Contact'
import Footer from '../../components/Footer/Footer'

const ServicesScreen = () => {
  return (
    <div className='ServicesScreen'>
        <h1 className='services-title'>Nuestros Servicios</h1>
        <div className='services-deliver'>
          <p>Al pedir un proyecto de diseño, obtienes:</p>
          <ul>
            <li>2/3 opciones de diseño.</li>
            <li>Visualización 3-D de espacios (4 - 6 vistas para cada espacios).</li>
            <li>Plano de medición.</li>
            <li>Plano de distribución de muebles.</li>
            <li>Planos de Instalaciones eléctricas.</li>
            <li>Planos de diseño de techo.</li>
            <li>Planos de Iluminación.</li>
            <li>Especificación de materiales de acabado, muebles y 
            accesorios de iluminación.</li>
          </ul>
        </div>
        <div className='services-need'>
          <p>¿Que necesitamos?</p>
          <ul>
            <li>Planos del espacio (si existen)</li>
            <li>Medidas del lugar</li>
            <li>Imágenes/referencias</li>
          </ul>
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default ServicesScreen;