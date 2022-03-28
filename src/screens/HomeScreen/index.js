import React, { useState, useEffect } from 'react'
import './Style.css'
import Header from '../../components/Header';
import Cover from '../../components/Cover/Cover';
import About from '../../components/About/About';



const Home = () =>{

const [dark, setDark] = useState(false)

useEffect(()=>{
    const scrollListener = () => {
      if (window.scrollY > 640) {
        setDark(true);
      } else {
        setDark(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

    return(
        <div className='Home'>
            <Header dark={dark}/>
            <Cover />
            <About />
        </div>
    )
}

export default Home;