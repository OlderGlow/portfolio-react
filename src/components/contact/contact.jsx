import './contact.css';
import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import CV from '../../assets/CV_Picquet.pdf';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {TailSpin} from 'react-loader-spinner';

function Contact() {

    const form = useRef();
    const [send,
        setSend] = useState(false);
    const [isSending,
        setIsSending] = useState(false);
    const [field,
        setField] = useState({user_name: '', user_email: '', message: '', user_phone: '', user_subject: ''});
    const [error,
        setError] = useState('');
    const handleChange = (e) => {
        const value = e.target.value;
        setField({
            ...field,
            [e.target.name]: value
        });
    }

    function maxLengthCheck(e) {
        if (isNaN(parseFloat(e.target.value))) {
            e.target.value = "";
        }
        if (e.target.value.length > e.target.max.length) {
            e.target.value = e
                .target
                .value
                .slice(0, e.max.length)
        }
    }

    const verify = (e) => {
        e.preventDefault();
        if (!field.user_email.includes('.')) {
            setError('Votre email n\'est pas valide');
        } else if (!field.user_email.includes('@')) {
            setError('Votre email n\'est pas valide');
        } else {
            sendEmail();
        }
    }
    const sendEmail = () => {

        setIsSending(!isSending);
        emailjs
            .sendForm('service_b4py50s', 'template_yi4rupj', form.current, 'user_enhIBoHFn9F4GpNQDYEm0')
            .then((result) => {
                console.log(result.text + ': le message a bien été envoyé');
                setSend(!send);
                setIsSending(!isSending);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='contact-container'>
            <div className="contact-left">
                <h1>Me contacter</h1>
                <div className="contact-informations">
                    <h4 className='contact-mail'>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        - julienpicquet1@gmail.com</h4>
                    <button type='button' className='contact-button-cv'>
                        <a href={CV}>Télécharger mon CV</a>
                    </button>
                </div>
            </div>
            <div className="contact-right">
                <h1 className='contact-right-title'>{!send
                        ? 'Envoyez-moi directement un message 😃'
                        : 'Message envoyé !'}</h1>
                {!send && <form ref={form} onSubmit={verify} autoComplete='off' className='contact-form'>
                    {error && <p className='contact-error'>{error}</p>}
                    <div className='contact-group'>

                        <div className='field'>
                            <input
                                type="text"
                                name="user_name"
                                id='fullname'
                                placeholder='Camille Dupond'
                                required
                                value={field.name}
                                onChange={handleChange}/>
                            <label htmlFor='fullname'>Nom</label>
                        </div>

                        <div className='field'>

                            <input
                                type="email"
                                name="user_email"
                                id='email'
                                className='contact-form-input-email'
                                placeholder='exemple@it.com'
                                value={field.email}
                                onChange={handleChange}
                                required/>
                            <label htmlFor='email'>Email</label>
                        </div>

                    </div>
                    <div className='contact-group'>

                        <div className='field'>

                            <input
                                type="tel"
                                name="user_phone"
                                id='phone'
                                className='contact-form-input-phone'
                                placeholder='0203040506'
                                pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
                                maxLength="11"
                                min="1"
                                max="99999999999"
                                value={field.phone}
                                onChange={handleChange}
                                onInput={maxLengthCheck}/>
                            <label htmlFor='phone'>Téléphone</label>
                        </div>

                        <div className='field'>

                            <input
                                type="text"
                                name="user_subject"
                                id='subject'
                                className='contact-form-input-phone'
                                placeholder='Recrutement...'
                                value={field.user_subject}
                                onChange={handleChange}
                                required/>
                            <label htmlFor='subject'>Sujet du mail</label>
                        </div>
                    </div>
                    <div className='field'>
                        <textarea
                            name="message"
                            id='message'
                            placeholder='Votre message...'
                            rows={'7'}
                            className='contact-form-textarea'
                            value={field.message}
                            onChange={handleChange}
                            required/>
                        <label htmlFor='message'>Message</label>
                    </div>


                    {!isSending
                        ? <button type="submit" className='contact-form-button' data-sitekey="6LdFlo8eAAAAAOdwQhzkycgvJ9v4yTYhSIL_U2s5" 
                        data-callback='onSubmit' >Envoyer</button>
                        : <div className='contact-form-loader'>
                            <TailSpin color="#ffc107" height={70} width={70}/>
                        </div>}
                </form>}
            </div>
        </div>
    )
}

export default Contact