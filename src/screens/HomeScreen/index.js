import React from 'react'
import './Style.css'
import Cover from '../../components/Cover/Cover';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contacto/Contact';
import Footer from '../../components/Footer/Footer';

const Home = () =>{


    return(
        <div 
            className='Home'
        >
            <Cover />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;