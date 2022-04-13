import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ImageCard from '../../components/ImageCard/ImageCard';
import './Style.css';
import Footer from '../../components/Footer/Footer'
import {Show, Close, Name} from '../../redux/Actions'
import ModalImage from '../../components/ModalImage/ModalImage';
import projects from '../../Data/Data';

const ProjectScreen = () => {
  const state = useSelector((state) => state.modal)
  const name = useSelector((state) => state.name)
  const dispatch = useDispatch()

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

  
  return (
    <div className='ProjectScreen'>
      {state ? <ModalImage close={Close} project={modalProject}/> :
      <div className='Project-container'> 
      <h1 className='title-projectScrenn'>Proyectos</h1>
      <div className='card-projects-container'>
      {projects.map(el => 
      <ImageCard srcImage={el.images[0]} key={el.name} show={handleShow} value={el.name} fullname={el.fullName} city={el.city}/>
      )}
      </div>
      </div>
  }
  <Footer />
    </div>
  )
}

export default ProjectScreen