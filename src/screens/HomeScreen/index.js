import React, { useState, useEffect } from 'react'
import './Style.css'
import Header from '../../components/Header';
import Cover from '../../components/Cover/Cover';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contacto/Contact';



const Home = () =>{

const [dark, setDark] = useState(false)

useEffect(()=>{
    const scrollListener = () => {
      if (window.scrollY > 640 && window.scrollY < 1295) {
        setDark(true);
      } 
      else if(window.scrollY > 1295 && window.scrollY < 1985){
        setDark(false)
      } else if(window.scrollY > 1985){
        setDark(true)
      }
      else {
        setDark(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [dark])

    return(
        <div className='Home'>
            <Header dark={dark}/>
            <Cover />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home;