import React, { useEffect } from 'react';
import './Style.css';
import apto from '../../assets/projects/apto.png';
import cocina from '../../assets/projects/cocina.png';
import dubai from '../../assets/projects/dubai.png';
import milencinos from '../../assets/projects/milencinos.jpg';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdHorizontalRule } from "react-icons/md";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView()

  const variants1 = {
    hidden: { opacity: 0 },
    show: {
        opacity: 0.015,
        transition: {
        duration: 1
        }
    }
  }

  const variants2 = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
        duration: 1
        }
    }
  }

  const variants3 = {
    hidden: {opacity: 0 },
    show: {
        opacity: 1,
        transition: {
        duration: 1,
        delay: 1
        }
    }
  }

  const variants4 = {
    hidden: {opacity: 0 },
    show: {
        opacity: 1,
        transition: {
        duration: 1,
        delay: 1.5
        }
    }
  }

  const variants5 = {
    hidden: {opacity: 0 },
    show: {
        opacity: 1,
        transition: {
        duration: 1,
        delay: 2
        }
    }
  }

  const variants6 = {
    hidden: {opacity: 0 },
    show: {
        opacity: 1,
        transition: {
        duration: 1,
        delay: 2.5
        }
    }
  }


  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);


  return (
    <div className='Projects'>
        <motion.h3 
          className='project-title'
          variants={variants1}
          initial='hidden'
          animate= {controls}
        >
          Proyectos
        </motion.h3>
        <div className='project-container'>
          <motion.h3 
            className='subtitle-projects'
            variants={variants2}
            initial='hidden'
            animate= {controls}
          >
            Nuestros proyectos destacados
          </motion.h3>
          <motion.div className='images-container' ref={ref}>
            <div className='up-container'>
              <motion.div 
                className='img-container'
                variants={variants3}
                initial='hidden'
                animate= {controls}
              >
                <img src={apto} alt='apartamento' className='image-project' />
                <p className='down-text-img'>Apartamento HG <MdHorizontalRule size={40}/> Mexico</p>
              </motion.div>
              <motion.div 
                className='img-container'
                variants={variants4}
                initial='hidden'
                animate= {controls} 
              >
                <img src={cocina} alt='cocina' className='image-project' />
                <p className='down-text-img'>Cocina AB <MdHorizontalRule size={40}/> Mexico</p>
              </motion.div>
            </div>

            <div className='down-container'>
              <motion.div 
                className='img-container'
                variants={variants5}
                initial='hidden'
                animate= {controls} 
              >
                <img src={dubai} alt='dubai' className='image-project' />
                <p className='down-text-img'>Fachada de Villa PK <MdHorizontalRule size={40}/> Dubai</p>
              </motion.div>

              <motion.div 
                className='img-container'
                variants={variants6}
                initial='hidden'
                animate= {controls}
              >
                <img src={milencinos} alt='milencinos' className='image-project' />
                <p className='down-text-img'>Villa Milencinos DM <MdHorizontalRule size={40}/> Mexico</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Projects