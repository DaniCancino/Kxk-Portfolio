import React, { useState, useEffect } from 'react'
import './Style.css'
import Header from '../../components/Header';
import Cover from '../../components/Cover/Cover';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contacto/Contact';



const Home = () =>{

const [dark, setDark] = useState(false)
const [light, setLight] = useState(false)
const [dinamicHeader, setDinamicHeader] = useState('')

useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY === 0 ){
        setLight(false)
      }
      else if(window.scrollY > 10 && window.scrollY < 30){
        setDark(true);
        setLight(true)
        setDinamicHeader('light-header')
      }
      else if(window.scrollY > 400 && window.scrollY < 640){
        setLight(true)
        setDark(true);
        setDinamicHeader('light-header')
      }
      else if (window.scrollY > 640 && window.scrollY < 1295) {
        setLight(true)
        setDinamicHeader('light-header')
      } 
      else if(window.scrollY > 1295 && window.scrollY < 1985){
        setDark(false)
        setLight(true)
        setDinamicHeader('dark-header')
      } 
      else if(window.scrollY > 1985){
        setDark(true)
        setLight(true)
        setDinamicHeader('light-header')
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
            <Header dark={dark} light={light} headerColor={dinamicHeader}/>
            <Cover />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home;