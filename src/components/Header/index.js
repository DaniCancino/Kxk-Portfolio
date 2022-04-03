import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './Style.css'
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () =>{
    return(
        <div className= {'Header'}>
            <Link to='/'><img src={logo} alt='logo KxK' className='logo' /></Link>
            <div className='links-container'>
                <Link to='/' className='links'>Inicio</Link>
                <Link to='about' className='links'>Acerca de..</Link>
                <Link to='projects' className='links'>Proyectos</Link>
                <Link to='contact' className='links'>Contacto</Link>
            </div>
            <div className='burger-element'><BurgerMenu /></div>
        </div>
    )
}

export default Header;