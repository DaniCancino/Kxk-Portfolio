import React, { useEffect } from 'react';
import './Style.css';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from '../../components/Footer/Footer'
import firstPhoto from '../../assets/portada.JPG'
import secondPhoto from '../../assets/portada2.JPG'
import krismary from '../../assets/krismary.JPG'
import walter from '../../assets/walter.JPG'

const AboutScreen = () => {
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
  }, [controls, inView]);


  return (
    <div 
      className='AboutScreen'
    >
      <motion.h1 
        className='about-page-title'
        variants={variants1}
        initial='hidden'
        animate= {controls}
        ref={ref}
      >
          Acerca de Nostros
      </motion.h1>
      <motion.div 
        className='about-container'
        variants={variants2}
        initial='hidden'
        animate= {controls}
      >
        <h2 className='subtitle-page-about'>Equipo orientado al resultado</h2>
        <div className='paragraph-container'>
          <p className='about-paragraph'>
            KXK es un estudio de arquitectura e interiorismo especializados en visualización arquitectónica, fundado en Enero de 2019. Nuestro equipo se basa en hacer diseño de interiores y visualización arquitectónica fotorrealista. <br/>
          </p>
          <p className='about-paragraph'>
            Nos centramos en crear un diseño individual para cada cliente, así como en encontrar soluciones creativas e individuales para cada proyecto. Tenemos una experiencia considerable en diseño de interiores también cooperando con otros diseñadores y estudios arquitectónicos.
          </p>
        </div>
      </motion.div>
      <motion.div 
        className='portada-container'
        variants={variants2}
        initial='hidden'
        animate= {controls}
      >
          <img src={firstPhoto} alt='portada team' className='portada' />
          <img src={secondPhoto} alt='portada team' className='portada' id='second'/>
      </motion.div>
      <div className='team-container'>
        <h2 className='team-title'>TEAM</h2>
        <div className='krismary-container'>
          <img src={krismary} alt='krismary' className='krismary' />
          <div className='krismary-about'>
            <h3>Krismary Chacon - Arquitecto/Diseñador</h3>
            <p>La arquitectura es un arte que “se puede atravesar”. Cada proyecto es único, porque está pensado para un lugar y unas personas concretas. La alegría del proceso de diseñar un interior que se convertirá en un nuevo hogar en el futuro es lo que da inspiración y nuevas fuerzas creativas.</p>
          </div>
        </div>
        <div className='walter-contain'>
          <div className='walter-about'>
            <h3>Walter Kuttel - Arquitecto encargado de la visualizacion 3D.</h3>
            <p>El estilo en el interior implica un enfoque único e inusual para crear visualizaciones, El éxito de cualquier proyecto depende no solo de la originalidad del diseño, sino también de la belleza de la luz, la precisión del color y la calidad de las texturas.</p>
          </div>
          <img src={walter} alt='walter' className='walter' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutScreen;