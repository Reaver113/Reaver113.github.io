import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // add logic here to send formData to backend or email service
        alert(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    }

    return (
        <div className="contact-page">
            <h1 className="contact-page__title">Contact Us</h1>
            <form className="contact-page__form" onSubmit={handleSubmit}>
                <label className="contact-page__label">
                    <span className="contact-page__label-text">Name:</span>
                    <input className="contact-page__input" type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <br />
                <label className="contact-page__label">
                    <span className="contact-page__label-text">Email:</span>
                    <input className="contact-page__input" type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <br />
                <label className="contact-page__label">
                    <span className="contact-page__label-text">Message:</span>
                    <textarea className="contact-page__textarea" name="message" value={formData.message} onChange={handleChange} />
                </label>
                <br />
                <button className="contact-page__submit-button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact