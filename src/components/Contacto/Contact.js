import React, { useState } from 'react'
import './Style.css'
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const initialState = {
    name : '',
    email : '',
    text: ''
  }

  const [form, setForm] = useState(initialState);
  console.log(form)

  const handleChange = (e) =>{
    setForm({
        ...form,
        [e.target.name] :e.target.value
    })
}

// const handleReset = () =>{
//   setForm(initialState)
// }


  return (
    <div className='Contacto'>
       <h3 className='contact-title'>Contactanos</h3>
       <div className='contact-container'>
         <div className='contact-info'>
             <h3 className='subtitle-contact'>Cuentanos sobre tu proyecto</h3>
             <div className='whatsapp-container'>
               <p className='whatsapp'>whatsapp: </p>
                <a 
                  href='https://api.whatsapp.com/send?phone=5491126318243'
                  target='_blank'
                  rel='noreferrer'
                  className='whatsapp-logo'
                >
                      <FaWhatsapp size={30} />
                </a>
            </div>
         </div>
         <div className='contact-form'>
            <form className='form-container'>
              <input 
                type='text'
                className='name'
                name='name'
                placeholder='Nombre'
                value={form.name}
                onChange={handleChange}
                autocomplete= 'off'
              />

              <input 
                type='email'
                className='email'
                name='email'
                placeholder='Email'
                value={form.email}
                onChange={handleChange}
                autocomplete= 'off'
              />

              <textarea 
                className='message'
                name='text'
                placeholder='Hablanos sobre tu proyecto'
                value={form.text}
                onChange={handleChange}
                autocomplete= 'off'
              />

              <button type='submit' className='button-submit'>Enviar email</button>
            </form>
         </div>
       </div>
    </div>
  )
}

export default Contact