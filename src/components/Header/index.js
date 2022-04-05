import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './Style.css'
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () =>{
    const [dark, setDark] = useState(false)

    const handleTrue = () =>{
        setDark(true)
    }

    const handleFalse = () =>{
        setDark(false)
    }

    return(
        <div className= {'Header'}>
            <Link to='/'><img src={logo} alt='logo KxK' className='logo' /></Link>
            <div className='links-container'>
                <Link 
                    to='/'
                    className={dark ? 'dark' : 'links'}
                    onClick={() => handleFalse()}
                >
                    Inicio
                </Link>
                <Link 
                    to='about' 
                    className={dark ? 'dark' : 'links'}
                    onClick={() => handleTrue()}
                >
                        Acerca de..
                </Link>
                <Link
                    to='projects'
                    className={dark ? 'dark' : 'links'}
                    onClick={() => handleFalse()}
                >
                    Proyectos
                </Link>
                <Link 
                    to='contact'
                    className={dark ? 'dark' : 'links'} 
                    onClick={() => handleTrue()}
                >
                        Contacto
                </Link>
            </div>
            <div className='burger-element'><BurgerMenu /></div>
        </div>
    )
}

export default Header;