import React, { useEffect } from 'react'
import './Style.css';
import Contact from '../../components/Contacto/Contact'
import Footer from '../../components/Footer/Footer'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicesScreen = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();


  const variants1 = {
    hidden: { y: 100, opacity: 0 },
    show: {
        y: 0,
        opacity: 0.15,
        transition: {
        duration: 1.3
        }
    }
  }

  const variants2 = {
    hidden: { y: 200, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
        duration: 1.3,
        delay: 0.2
        }
    }
  }

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView])


  return (
    <div className='ServicesScreen'>
        <motion.h1
          className='services-title'
          variants={variants1}
          initial='hidden'
          animate= {controls}
          ref={ref}
        >
          Nuestros Servicios
        </motion.h1>
        <motion.div 
          className='services-deliver'
          variants={variants2}
          initial='hidden'
          animate= {controls}
        >
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
        </motion.div>
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