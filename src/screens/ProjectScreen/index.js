import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ImageCard from '../../components/ImageCard/ImageCard';
import './Style.css';
import projects from '../../Data/Data';
import Footer from '../../components/Footer/Footer'
import {Show, Close} from '../../redux/Actions'
import ModalImage from '../../components/ModalImage/ModalImage';

const ProjectScreen = () => {
  const state = useSelector((state) => state.modal)
  const dispatch = useDispatch()
  console.log(state)


  const handleShow = () =>{
    dispatch(Show())
  }
  
  return (
    <div className='ProjectScreen'>
      {state ? <ModalImage close={Close}/> :
      <div className='Project-container'> 
      <h1 className='title-projectScrenn'>Proyectos</h1>
      <div className='card-projects-container'>
      {projects.map(el => <ImageCard srcImage={el} key={el.indexOf()} show={handleShow}/>)}
      </div>
      </div>
  }
  <Footer />
    </div>
  )
}

export default ProjectScreen