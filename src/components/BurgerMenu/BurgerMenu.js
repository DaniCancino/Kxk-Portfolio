import React, { useState } from 'react';
import { FaBars, FaArrowRight, FaUsers} from "react-icons/fa";
import { AiFillHome, AiFillPicture} from "react-icons/ai";
import { MdDesignServices} from "react-icons/md";
import { Link } from 'react-router-dom';
import './Style.css';
import { AnimatePresence, motion } from "framer-motion";
import {useSelector, useDispatch} from 'react-redux';
import {Dark, Light} from '../../redux/Actions'

const BurgerMenu = () => {

    const [close, setClose] = useState(true)
    const burgerState = useSelector(state => state.dark)
    const dispatch = useDispatch()

    const handleOpen = () =>{
        setClose(false)
    }

    const handleClose = () =>{
        setClose(true)
    }


    const handleTrue = () =>{
        dispatch(Dark())
        handleClose()
    }

    const handleFalse = () =>{
        dispatch(Light())
        handleClose()
    }



  return (
    <AnimatePresence exitBeforeEnter>
    <div className='BurgerMenu'>
        {close ? <FaBars size={30} color={burgerState ? '#101010' : '#fff'} onClick={()=> handleOpen()}/>
            :
            <motion.div 
                className='Open-Menu'
                key={close}
                initial={{x: '200vw'}}
                animate={{x: 0}}
                transition={{type: 'Spring', duration: 0.3, bounce: 1, stiffness: 50 }}
                exit={{x: '200vw', duration: 0.7}}
            >
                <span onClick={() => handleClose()} className='close-button'><FaArrowRight size={38} /></span>
                <div className='links-burger-container'>
                    <Link 
                        to='/' 
                        className='burger-links' 
                        onClick={() => handleFalse()}
                    >
                        <AiFillHome size={38} color='#fff' />
                    </Link>
                    <Link
                        to='about'
                        className='burger-links'
                        onClick={() => handleTrue()}
                    >
                        <FaUsers size={38} color= '#fff' />
                    </Link>
                    <Link
                        to='projects'
                        className='burger-links'
                        onClick={() => handleFalse()}
                    >
                        <AiFillPicture size={38} color='#fff' />
                    </Link>
                    <Link
                        to='services'
                        className='burger-links'
                        onClick={() => handleTrue()}
                    >
                        <MdDesignServices size={38} color='#fff' />
                    </Link>
                </div>
            </motion.div>
        }
    </div>
    </AnimatePresence>
  )
}

export default BurgerMenu