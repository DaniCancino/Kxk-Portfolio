import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ImageCard from '../../components/ImageCard/ImageCard';
import './Style.css';
import Footer from '../../components/Footer/Footer'
import {Show, Close, Name} from '../../redux/Actions'
import ModalImage from '../../components/ModalImage/ModalImage';
import projects from '../../Data/Data';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectScreen = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const state = useSelector((state) => state.modal)
  const name = useSelector((state) => state.name)
  const dispatch = useDispatch()


  const variants1 = {
    hidden: { opacity: 0 },
    show: {
        opacity: 0.2,
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
        duration: 1.5,
        }
    }
  }

  const handleShow = (e) =>{
    dispatch(Show())
    dispatch(Name(e))
  }

  let modalProject = []

  if(name === 'dubai'){
    modalProject = projects[0].images
  } else if(name === 'cocina'){
    modalProject = projects[1].images
  } else if(name === 'apto'){
    modalProject = projects[2].images
  } else if(name === 'milencinos'){
    modalProject = projects[3].images
  } else if(name === 'justin'){
    modalProject = projects[4].images
  } else if(name === 'publicity'){
    modalProject = projects[5].images
  } else{
    modalProject = []
  }


  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  
  return (
    <div className='ProjectScreen'>
      {state ? <ModalImage close={Close} project={modalProject}/> :
      <div className='Project-container'> 
        <motion.h1
          className='title-projectScrenn'
          variants={variants1}
          initial='hidden'
          animate= {controls}
          ref={ref}
        >
          Proyectos
        </motion.h1>
        <motion.div
          className='card-projects-container'
          variants={variants2}
          initial='hidden'
          animate= {controls}
        >
        {projects.map(el => 
        <ImageCard srcImage={el.images[0]} key={el.name} show={handleShow} value={el.name} fullname={el.fullName} city={el.city}/>
        )}
        </motion.div>
      </div>
  }
  <Footer />
    </div>
  )
}

export default ProjectScreen