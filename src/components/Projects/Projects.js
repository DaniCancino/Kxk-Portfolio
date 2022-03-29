import React, { useEffect } from 'react';
import './Style.css';
import apto from '../../assets/projects/apto.png';
import cocina from '../../assets/projects/cocina.png';
import dubai from '../../assets/projects/dubai.jpg';
import milencinos from '../../assets/projects/milencinos.jpg';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    hidden: { x: -150, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: {
        duration: 1.3,
        delay: 0.6
        }
    }
  }

  const variants4 = {
    hidden: { x: -100, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: {
        duration: 1.3,
        }
    }
  }

  const variants5 = {
    hidden: { x: -150, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: {
        duration: 1.3,
        delay: 0.8
        }
    }
  }

  const variants6 = {
    hidden: { x: -100, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: {
        duration: 1.3,
        delay: 0.4
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
            <motion.img 
              src={apto} 
              alt='apartamento' 
              className='image-project'
              variants={variants3}
              initial='hidden'
              animate= {controls}
            />

            <motion.img 
              src={cocina} 
              alt='cocina' 
              className='image-project'
              variants={variants4}
              initial='hidden'
              animate= {controls} 
            />

            <motion.img 
              src={dubai} 
              alt='dubai' 
              className='image-project'
              variants={variants5}
              initial='hidden'
              animate= {controls} 
            />

            <motion.img 
              src={milencinos}
              alt='milencinos'
              className='image-project'
              variants={variants6}
              initial='hidden'
              animate= {controls}
            />
          </motion.div>
        </div>
    </div>
  )
}

export default Projects