import React from 'react'
import './Style.css'
import logo from '../../assets/logo.png'
import { CgInstagram } from "react-icons/cg";
import { RiBehanceLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='logo-text-container'>
        <img src={logo} alt='logo' className='logo-footer' />
        <p className='footer-title'>KxKarchitecture</p>
      </div>
      <div className='socials-footer-container'>
                <a 
                    className= 'social-links-footer'
                    href='https://www.instagram.com/kxkarquitectura/'
                    rel='noreferrer'
                    target='_blank'
                 >
                        <CgInstagram size={37} className='instagram'/>
                </a>
                <a
                    className= 'social-links-footer' 
                    href='https://www.behance.net/kx2architecture' 
                    rel='noreferrer'
                    target='_blank'
                >
                        <RiBehanceLine size={37} className='behance'/>
                </a>
      </div>
      <div className='design-by'>
        <p>Design by</p>
        <a 
          href='https://danielcancino.vercel.app/'
          className='link-design'
          rel='noreferrer'
          target='_blank'
        >
            Daniel Cancino
        </a>
      </div>
        
    </div>
  )
}

export default Footer;