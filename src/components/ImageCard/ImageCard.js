import React from 'react';
import './Style.css';

const ImageCard = ({srcImage, show, value}) => {
  return (
    <div className='ImageCard' onClick={() => show(value)}>
      <img src={srcImage} alt='card-project' className='card-project' />
    </div>
  )
}

export default ImageCard;