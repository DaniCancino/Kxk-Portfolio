import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './Style.css'

const Header = ({dark, light, headerColor}) =>{
    return(
        <div className= {light? headerColor : 'Header'}>
            <Link to='/'><img src={logo} alt='logo KxK' className='logo' /></Link>
            <div className='links-container'>
                <Link to='/' className={dark? 'dark-links' : 'links'}>Inicio</Link>
                <Link to='about' className={dark? 'dark-links' : 'links'}>Acerca de..</Link>
                <Link to='projects' className={dark? 'dark-links' : 'links'}>Proyectos</Link>
                <Link to='contact' className={dark? 'dark-links' : 'links'}>Contacto</Link>
            </div>
        </div>
    )
}

export default Header;