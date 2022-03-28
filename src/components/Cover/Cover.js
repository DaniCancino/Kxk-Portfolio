import React from 'react'
import { CgInstagram } from "react-icons/cg";
import { RiBehanceLine } from "react-icons/ri";
import video from '../../assets/video.mp4'
import './Style.css'

function Cover() {
  return (
    <div className='Cover'>
        <video className='video-cover' src={video} autoPlay loop muted />
            <div className='text-container'>
                <h3 className='text-arch'>
                    <p>Arch.</p> <p className='studio'>STUDIO</p>
                </h3>
                <h3 className='subtitle'><p className='architecture'>ARCHITECTURE</p> <spam>+</spam> DESIGN</h3>
            </div>
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