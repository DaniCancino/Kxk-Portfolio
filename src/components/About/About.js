import React, { useEffect } from 'react';
import './Style.css';
import { Link } from 'react-router-dom';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import H7 from '../../assets/H7.png';



const About = () => {
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


  const variants3 = {
      hidden: { y: 300, opacity: 0 },
      show: {
          y: 0,
          opacity: 1,
          transition: {
          duration: 1.3,
          delay: 0.3
          }
      }
  }


  const variants4 = {
    hidden: { y: 250, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
        duration: 1.3,
        delay: 0.35
        }
    }
  }


  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);


  return (
      <div className='About'>
          <motion.h2 
            className='about-title'
            variants={variants1}
            initial='hidden'
            animate= {controls}
          >
            Acerca de nosotros
          </motion.h2>
          <div className='about-container'>
            <motion.div 
              className='about-text-container'
              variants={variants2}
              initial='hidden'
              animate= {controls}
              ref={ref}
            >
              <motion.h3 
                className='about-subtitle'
              >
                  Diseñamos cada proyecto como si fuera el unico
              </motion.h3>

              <motion.p 
                className='about-text'
                variants={variants3}
                  initial='hidden'
                  animate= {controls}
              >
                  KxKarquitectura está conformado por Walter y Krismary. Nos especializamos en diseños arquitectonicos y de interiorismo, modelado 3D, renderizado y tours virtuales.<br/>
                  Ofrecemos una visión general de la amplia gama de diseños en diferentes tipos de entornos.<br />
                  Nuestro trabajo se caracteriza por la simplicidad, modernidad y elegancia. Siempre de la mano de nuestros clientes.
              </motion.p>
            </motion.div>
              <motion.img 
                className='image-about' 
                src={H7} 
                alt='image about'
                variants={variants2}
                initial='hidden'
                animate= {controls}
              />
          </div>
          <motion.div
              variants={variants4}
              initial='hidden'
              animate= {controls}
          >
          <Link 
            to='/about'
            className='button-about'
          >
            Descubre más
          </Link>
          </motion.div>

      </div>
  )
}

export default About