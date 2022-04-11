import React from 'react';
import './Style.css';

const ImageCard = ({srcImage, show}) => {
  return (
    <div className='ImageCard' onClick={() => show()}>
      <img src={srcImage} alt='card-project' className='card-project' />
    </div>
  )
}

export default ImageCard;