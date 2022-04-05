import React, { useState, useEffect } from 'react'
import './Style.css'
import Header from '../../components/Header';
import Cover from '../../components/Cover/Cover';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contacto/Contact';
import Footer from '../../components/Footer/Footer';



const Home = () =>{

const [dark, setDark] = useState(false)
const [light, setLight] = useState(false)

useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY === 0 ){
        setLight(false)
      }
      else if(window.scrollY > 10 && window.scrollY < 30){
        setLight(true)
        setDark(true);
      }
      else {
        setDark(false)
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [dark])

    return(
        <div className='Home'>
            <Cover />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;