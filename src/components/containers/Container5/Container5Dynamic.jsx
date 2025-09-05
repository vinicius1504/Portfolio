import React, { useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext/LanguageContext.jsx';

const Container5Dynamic = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleWhatsApp = () => {
        const { name, message } = formData;
        if (!name.trim() || !message.trim()) {
            alert(t('contact.fillRequired'));
            return;
        }
        
        const whatsappMessage = `${t('contact.whatsappPrefix')} ${name}. ${message}`;
        const phoneNumber = '5567992236060'; // Substitua pelo seu número do WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleEmail = () => {
        const { name, phone, message } = formData;
        if (!name.trim() || !message.trim()) {
            alert(t('contact.fillRequired'));
            return;
        }
        
        const subject = `${t('contact.emailSubject')} - ${name}`;
        const body = `${t('contact.emailName')}: ${name}\n${t('contact.emailPhone')}: ${phone}\n\n${t('contact.emailMessage')}:\n${message}`;
        const mailtoUrl = `mailto:viniciusleitems15@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    };

    return (
        <div id="contact" className="contact-wrapper">
            <div className="contact-title">
                <h1>{t('contact.title')}</h1>
                <p>{t('contact.subtitle')}</p>
            </div>
            
            <div className="contact-form-container">
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">{t('contact.nameLabel')} *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder={t('contact.namePlaceholder')}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">{t('contact.phoneLabel')}</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder={t('contact.phonePlaceholder')}
                            />
                        </div>
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="message">{t('contact.messageLabel')} *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder={t('contact.messagePlaceholder')}
                            rows="5"
                            required
                        />
                    </div>

                    <div className="form-buttons">
                        <button 
                            type="button" 
                            className="btn btn-whatsapp"
                            onClick={handleWhatsApp}
                        >
                            <i className='bx bxl-whatsapp'></i>
                            {t('contact.whatsappButton')}
                        </button>
                        
                        <button 
                            type="button" 
                            className="btn btn-email"
                            onClick={handleEmail}
                        >
                            <i className='bx bx-envelope'></i>
                            {t('contact.emailButton')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Container5Dynamic;
