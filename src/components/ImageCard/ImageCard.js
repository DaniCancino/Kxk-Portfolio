import React from 'react';
import './Style.css';

const ImageCard = ({srcImage}) => {
  return (
    <div className='ImageCard'>
      <img src={srcImage} alt='card-project' className='card-project' />
    </div>
  )
}

export default ImageCard;