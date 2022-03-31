import React from 'react'
import './Style.css'

const Contact = () => {
  return (
    <div className='Contacto'>
       <h3 className='contact-title'>Contacto</h3>
       <div className='contact-container'>
         <div className='contact-info'>
              Aquí va contacto telefonico!
         </div>
         <div className='contact-form'>
            <form className='form-container'>
              <input type='text' className='name' placeholder='Nombre'/>
              <input type='email' className='email' placeholder='Email'/>
              <textarea className='message' placeholder='Hablanos sobre tu proyecto' />
              <button type='submit' className='button-submit'>Enviar Mensaje</button>
            </form>
         </div>
       </div>
    </div>
  )
}

export default Contact