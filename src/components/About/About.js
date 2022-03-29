import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence} from 'framer-motion';



function About({about}) {

  return (
    <AnimatePresence>
      <div className='About'>
        {about && (
          <div className='About'>
          <motion.h2 
            className='about-title'
            variants={{hidden: { y: 100, opacity: 0 },
                            show: {
                                y: 0,
                                opacity: 0.15,
                                transition: {
                                duration: 1.3
                                }
                            }
                }}
                initial='hidden'
                animate= 'show'
          >
            Acerca de nosotros
          </motion.h2>

          <div className='about-container'>
            <motion.h3 
              className='about-subtitle'
              variants={{hidden: { y: 200, opacity: 0 },
                            show: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                duration: 1.3,
                                delay: 0.2
                                }
                            }
                }}
                initial='hidden'
                animate= 'show'
            >
                Diseñamos cada proyecto como si fuera el unico
            </motion.h3>

            <motion.p 
              className='about-text'
              variants={{hidden: { y: 300, opacity: 0 },
                            show: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                duration: 1.3,
                                delay: 0.3
                                }
                            }
                }}
                initial='hidden'
                animate= 'show'
            >
                KxKarquitectura está conformada por Walter Kuttel y Krismary Chacón. Nos especializamos en diseños, Modelado 3D, renderizado en 360° y tours virtuales.<br/>Ofrecemos una visión general de la amplia gama de diseños en diferentes tipos de entornos.<br/>Nuestro trabajo se caracteriza por la simplicidad, modernidad y elegancia. Siempre de la mano de nuestros clientes.
            </motion.p>

          </div>
          <motion.div
              variants={{hidden: { y: 250, opacity: 0 },
              show: {
                  y: 0,
                  opacity: 1,
                  transition: {
                  duration: 1.3,
                  delay: 0.35
                  }
              }
              }}
              initial='hidden'
              animate= 'show'
          >
          <Link 
            to='/about'
            className='button-about'
          >
            Descubre más
          </Link>
          </motion.div>
          </div>
      )}
      </div>
    </AnimatePresence>
  )
}

export default About