import React, { isValidElement, useState } from 'react';
import emailjs from "emailjs-com";
import DOMPurify from 'dompurify';

export default function ContactMenu() {
  const initialState = {
    name:"",
    email:"",
    message:"",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validateForm();
    if (Object.keys(validateErrors).length > 0){
        setErrors(validateErrors);
        return;
    }

    setIsLoading(true);
    const {name, email, message} = formData;
    const sanitixedData = {
        name: "Name: " + DOMPurify.sanitize(name),
        email: "Email: " + DOMPurify.sanitize(email),
        message: "Message: " + DOMPurify.sanitize(message),
    }

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs
    .send(serviceID, templateID, sanitixedData, userID)
    .then((response) => {
        console.log("Email is sent successfully!", response.text);
        setFormData(initialState);
        setErrors({});
        setIsSent(true);
    })
    .catch((errors) => {
        console.log("Email sending failed", errors);
    })
    .finally(() => {
        setIsLoading(false);
    })
  };

  const validateForm = () => {
    const {name, email, message} = formData;
    const errors = {};

    if (!name.trim()) {
        errors.name = "Le nom est obligatoire"
    }
    if (!email.trim()) {
        errors.email = "L'email' est obligatoire"
    }else if (!isValidEmail(email)) {
        errors.email = "Le format n'est pas valide'"
    }

    if (!message.trim()) {
        errors.message = "Le message est obligatoire"
    }
    
    return errors;
  };
  const  isValidEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/
    return emailRegex.test(value);
  }

  return (
    <div className='contact-menu'>
        {!isSent && (
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Nom:</label>
                    <input type='text' id="name" name='name' placeholder='Nom' value={formData.name} onChange={handleChange} className={errors.name ? "error" : ""} disabled={isLoading}/>

                        {errors.name && (<span className='error-message'>{errors.name}</span>)}
                </div>

                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange} className={errors.email ? "error" : ""} disabled={isLoading}/>

                        {errors.email && (<span className='error-message'>{errors.email}</span>)}
                </div>

                <div className='form-group'>
                    <label htmlFor='message'>Message:</label>
                    <textarea type='message' id="message" name='message' placeholder='Message' value={formData.message} onChange={handleChange} className={errors.message ? "error" : ""} disabled={isLoading}/>

                        {errors.message && (<span className='error-message'>{errors.message}</span>)}
                </div>

                <button type='submit' disabled={isLoading}>{isLoading ? "ENVOIE..." : "ENVOYER"}</button>
            </form>
        )}

        {isSent && (
            <div className='success-message'>
                <p>SUCCESS!</p>
                <p>Votre message à bien été envoyé !</p>
                <p>Vous pouvez quitter cette page en toute sécurité.</p>
            </div>
        )}
    </div>
  )
}
