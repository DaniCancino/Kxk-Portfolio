import React, { useState } from 'react';
import { FaBars, FaTimes} from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Style.css';

const BurgerMenu = () => {

    const [close, setClose] = useState(true)

    const handleOpen = () =>{
        setClose(false)
    }

    const handleClose = () =>{
        setClose(true)
    }
  return (
    <div className='BurgerMenu'>
        {close ? <FaBars size={30} onClick={()=> handleOpen()}/>
            :
            <div className='Open-Menu'>
                <span onClick={() => handleClose()} className='close-button'><FaTimes size={40} /></span>
                <Link to='/' className='burger-links'>Inicio</Link>
                <Link to='about' className='burger-links'>Acerca de..</Link>
                <Link to='projects' className='burger-links'>Proyectos</Link>
                <Link to='contact' className='burger-links'>Contacto</Link>
            </div>
        }
    </div>
  )
}

export default BurgerMenu