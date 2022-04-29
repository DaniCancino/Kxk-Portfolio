import React, { useState, useRef } from 'react'
import './Style.css'
import { FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import ClipLoader from "react-spinners/ClipLoader";

const Contact = () => {
  const initialState = {
    name : '',
    email : '',
    subject: '',
    message: ''
  }

  const ref = useRef()
  
  const [form, setForm] = useState(initialState);
  const [load, setLoad] = useState(false);
  

  const handleChange = (e) =>{
    setForm({
        ...form,
        [e.target.name] :e.target.value
    })
}

  const handleReset = () =>{
    setForm(initialState)
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setLoad(true)
    if(!form.name || !form.email || !form.subject || !form.message){
        setLoad(false)
        swal("Error", "Asegurate de llenar todos lo campos correctamente.", "error");
    }else{
        emailjs.sendForm('service_2vjlhll', 'template_gzmnkag', ref.current, 'wN4lCfJtfzhJgzl37')
        .then((result) => {
            setLoad(false)
            console.log(result.text);
            swal("Email enviado", "Me pondré en contacto contigo lo mas pronto posible.", "success");
            handleReset()
        }, (error) => {
            swal("Error", error.text, "error");
            console.log(error.text);
            setLoad(false)
        });
    }
  };


  return (
    <div className='Contacto'>
       <h3 className='contact-title'>Contactanos</h3>
       <div className='contact-container'>
         <div className='contact-info'>
             <h3 className='subtitle-contact'>Cuentanos sobre tu proyecto</h3>
             <div className='whatsapp-container'>
               <p className='whatsapp'>whatsapp: </p>
                <a 
                  href='https://api.whatsapp.com/send?phone=584244252063'
                  target='_blank'
                  rel='noreferrer'
                  className='whatsapp-logo'
                >
                      <FaWhatsapp size={30} />
                </a>
            </div>
         </div>
         <div className='contact-form'>
         {load ? <div className="loader" ><ClipLoader size={50} color="#3DD0CE" loading={load}/></div> : 
            <form className='form-container' onSubmit={sendEmail} ref={ref}>
              <input 
                type='text'
                className='name'
                name='name'
                placeholder='Nombre'
                value={form.name}
                onChange={handleChange}
                autoComplete= 'off'
              />

              <input 
                type='email'
                className='email'
                name='email'
                placeholder='Email'
                value={form.email}
                onChange={handleChange}
                autoComplete= 'off'
              />

              <input 
                type='text'
                className='email'
                name='subject'
                placeholder='Asunto'
                value={form.subject}
                onChange={handleChange}
                autoComplete= 'off'
              />

              <textarea 
                className='message'
                name='message'
                placeholder='Hablanos sobre tu proyecto'
                value={form.message}
                onChange={handleChange}
                autoComplete= 'off'
              />

              <button type='submit' className='button-submit'>Enviar email</button>
            </form>}
         </div>
       </div>
    </div>
  )
}

export default Contact