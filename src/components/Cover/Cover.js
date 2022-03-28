import React from 'react'
import { CgInstagram } from "react-icons/cg";
import { RiBehanceLine } from "react-icons/ri";
import video from '../../assets/video.mp4'
import './Style.css'
import { motion, AnimatePresence } from 'framer-motion'

function Cover() {
  return (
    <div className='Cover'>
        <video className='video-cover' src={video} autoPlay loop muted />
        <AnimatePresence>
            <motion.div 
                className='text-container'
                variants={{hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                duration: 3,
                                delay: 1.5
                                }
                            }
                }}
                initial="hidden"
                animate="show"
            >
                <h3 className='text-arch'>
                    <p>Arch<spam className='punto'>.</spam></p> <p className='studio'>STUDIO</p>
                </h3>
                <h3 className='subtitle'><p className='architecture'>ARCHITECTURE</p> <spam>+</spam> DESIGN</h3>
            </motion.div>
        </AnimatePresence>
            <div className='socials-container'>
                <a 
                    className= 'social-links'
                    href='https://www.instagram.com/kxkarquitectura/'
                    rel='noreferrer'
                    target='_blank'
                >
                        <CgInstagram size={37} className='instagram'/>
                </a>
                <a
                    className= 'social-links' 
                    href='https://www.behance.net/kx2architecture' 
                    rel='noreferrer'
                    target='_blank'
                >
                        <RiBehanceLine size={37} className='behance'/>
                </a>
            </div>
    </div>
  )
}

export default Cover