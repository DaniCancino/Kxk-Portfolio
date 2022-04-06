import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './Style.css'
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useSelector, useDispatch } from 'react-redux';
import {Dark, Light} from '../../redux/Actions'

const Header = () =>{
    const dispatch = useDispatch()
    const headerState = useSelector((state) => state.dark)

    const handleTrue = () =>{
        dispatch(Dark())
    }

    const handleFalse = () =>{
        dispatch(Light())
    }

    return(
        <div className= {'Header'}>
            <Link to='/'><img src={logo} alt='logo KxK' className='logo' /></Link>
            <div className='links-container'>
                <Link 
                    to='/'
                    className={headerState ? 'dark' : 'links'}
                    onClick={() => handleFalse()}
                >
                    Inicio
                </Link>
                <Link 
                    to='about' 
                    className={headerState ? 'dark' : 'links'}
                    onClick={() => handleTrue()}
                >
                        Acerca de..
                </Link>
                <Link
                    to='projects'
                    className={headerState ? 'dark' : 'links'}
                    onClick={() => handleFalse()}
                >
                    Proyectos
                </Link>
                <Link 
                    to='services'
                    className={headerState ? 'dark' : 'links'} 
                    onClick={() => handleTrue()}
                >
                        Servicios
                </Link>
            </div>
            <div className='burger-element'><BurgerMenu /></div>
        </div>
    )
}

export default Header;