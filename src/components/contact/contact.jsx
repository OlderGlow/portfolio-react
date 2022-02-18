import './contact.css';
import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import CV from '../../assets/CV_Picquet.pdf';

function Contact() {

    const form = useRef();
    const [send,
        setSend] = useState(false);
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
    const sendEmail = (e) => {
        emailjs
            .sendForm('service_b4py50s', 'template_yi4rupj', form.current, 'user_enhIBoHFn9F4GpNQDYEm0')
            .then((result) => {
                console.log(result.text);
                setSend(!send);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='contact-container'>
            <div className="contact-left">
                <h1>Me contacter</h1>
                <div className="contact-informations">
                    <h4>
                        <i className="fa-solid fa-phone"></i>
                        +(33) 0650287234</h4>
                    <h4>
                        <i className="fa-solid fa-at"></i>
                        julienpicquet1@gmail.com</h4>
                    <h4>
                        <i className="fa-solid fa-location-dot"></i>
                        6 Boulevard du Général de Gaulle - 49100 Angers</h4>
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
                                placeholder='Camille'
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
                                value={field.phone}
                                onChange={handleChange}
                                />
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
                    <button type="submit" className='contact-form-button'>Envoyer</button>
                </form>}
            </div>
        </div>
    )
}

export default Contact