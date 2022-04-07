import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import picture from '../../Data/image.json'
import './Style.css'

const ModalImage = () => {
  return (
    <div className='ModalImage'>
    <Carousel>
        {picture.map(element =><div className='image'><img src={element} alt='project' className='picture-carousel'/></div>)}
    </Carousel>
    </div>
  )
}

export default ModalImage