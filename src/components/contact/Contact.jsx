import React ,{ useRef }from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_54x0nfc', 'template_y7dwh6a', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>lindaatieno24@gmail.com</h5>
            <a href="mailto:lindaatieno24@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <FaInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>lindaatieno24@gmail.com</h5>
            <a href="" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+1(470)-585-7004</h5>
            <a href="https://api.whatsapp.com/send?phone+14705857004" target='_blank'>Send a message</a>
          </article>
          
        </div>

        {/* END OF CONTACT */}

        <form useref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact