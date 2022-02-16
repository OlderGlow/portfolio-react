import './contact.css';
import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
function Contact() {

    const form = useRef();
    const [send,
        setSend] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_b4py50s', 'template_yi4rupj', form.current, 'user_enhIBoHFn9F4GpNQDYEm0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contact-container'>
            <div className="contact-left">
                <h1>Me contacter</h1>
                <div className="contact-informations">
                    <h4><i class="fa-solid fa-phone"></i> +33650287234</h4>
                    <h4><i class="fa-solid fa-at"></i> julienpicquet1@gmail.com</h4>
                    <h4><i class="fa-solid fa-location-dot"></i> 6 Boulevard du Général de Gaulle - 49100 Angers</h4>
                </div>
            </div>
            <div className="contact-right">
                <form ref={form} onSubmit={sendEmail} autoComplete='off'>
                    <input type="text" name="user_name" placeholder='Nom'/>
                    <input type="email" name="user_email" placeholder='Email'/>
                    <textarea name="message" placeholder="Message" rows={'4'}/>
                    <button type="button">Envoyer</button>
                </form>
            </div>
        </div>
    )
}

export default Contact