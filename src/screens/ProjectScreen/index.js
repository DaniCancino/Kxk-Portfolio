import React from 'react'
import ImageCard from '../../components/ImageCard/ImageCard';
import './Style.css';
import projects from '../../Data/Data';
import Footer from '../../components/Footer/Footer'

const ProjectScreen = () => {
  
  return (
    <div className='ProjectScreen'>
      <h1 className='title-projectScrenn'>Proyectos</h1>
      <div className='card-projects-container'>
      {projects.map(el => <ImageCard srcImage={el} key={el.indexOf()}/>)}
      </div>
      <Footer />
    </div>
  )
}

export default ProjectScreen