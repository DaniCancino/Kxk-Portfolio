import React from 'react';
import './Style.css';
import { MdHorizontalRule } from "react-icons/md";

const ImageCard = ({srcImage, show, value, fullname, city}) => {
  return (
    <div className='ImageCard' onClick={() => show(value)}>
      <img src={srcImage} alt='card-project' className='card-project' />
      <p className='down-text'>{fullname} <MdHorizontalRule size={40}/> {city}</p>
    </div>
  )
}

export default ImageCard;