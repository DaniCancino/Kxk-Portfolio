import React, { useState } from 'react';
import { FaBars, FaArrowRight, FaUsers} from "react-icons/fa";
import { AiFillHome, AiFillPicture} from "react-icons/ai";
import { MdDesignServices} from "react-icons/md";
import { Link } from 'react-router-dom';
import './Style.css';
import { AnimatePresence, motion } from "framer-motion";

const BurgerMenu = () => {

    const [close, setClose] = useState(true)
    const [dark, setDark] = useState(false)

    const handleOpen = () =>{
        setClose(false)
    }

    const handleClose = () =>{
        setClose(true)
    }


    const handleTrue = () =>{
        setDark(true)
    }

    const handleFalse = () =>{
        setDark(false)
    }



  return (
    <AnimatePresence>
    <div className='BurgerMenu'>
        {close ? <FaBars size={30} color={dark ? '#101010' : '#fff'}onClick={()=> handleOpen()}/>
            :
            <motion.div 
                className='Open-Menu'
                key={close}
                initial={{x: '200vw'}}
                animate={{x: 0}}
                transition={{type: 'Spring', duration: 0.7, bounce: 1, stiffness: 100 }}
                exit={{x: '200vw'}}
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
                        to='contact'
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