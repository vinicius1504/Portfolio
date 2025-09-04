import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import flagBrazil from '../imgs/icons/flag-brasil.svg';
import flagUSA from '../imgs/icons/flag-usa.svg';

const HeaderDynamic = () => {
    const { currentLanguage, changeLanguage, t } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLanguageChange = (language) => {
        changeLanguage(language);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="section header-wrapper">
            <div className="navbar-header">
                <a href="/" className="logo">{t('header.logo')}</a>

                {/* Desktop Navigation */}
                <div className="navigation-refs desktop-nav">
                    <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                        {t('header.navigation.about')}
                    </a>
                    <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
                        {t('header.navigation.myWork')}
                    </a>
                    <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>
                        {t('header.navigation.projects')}
                    </a>
                    <a href="https://wa.me/67999710088" target="_blank" rel="noreferrer">
                        {t('header.navigation.contact')}
                    </a>
                </div>

                {/* Mobile Navigation Icons */}
                <div className="mobile-nav">
                    <div className="mobile-nav-icons">
                        <button onClick={() => scrollToSection('about')} title={t('header.navigation.about')}>
                            <span className="material-icons">person</span>
                        </button>
                        <button onClick={() => scrollToSection('skills')} title={t('header.navigation.myWork')}>
                            <span className="material-icons">code</span>
                        </button>
                        <button onClick={() => scrollToSection('experience')} title={t('header.navigation.projects')}>
                            <span className="material-icons">work</span>
                        </button>
                        <a href="https://wa.me/67999710088" target="_blank" rel="noreferrer" title={t('header.navigation.contact')}>
                            <span className="material-icons">chat</span>
                        </a>
                        <button onClick={toggleMobileMenu} className="menu-toggle" title="Menu">
                            <span className="material-icons">more_vert</span>
                        </button>
                    </div>
                    
                    {/* Mobile Menu Dropdown */}
                    <div className={`mobile-dropdown ${isMobileMenuOpen ? 'open' : ''}`}>
                        <div className="translate-region">
                            <div 
                                className={`flag-region ${currentLanguage === 'pt' ? 'active' : ''}`}
                                onClick={() => handleLanguageChange('pt')}
                            >
                                <img src={flagBrazil} alt="Português" />
                                <span>PT</span>
                            </div>
                            <div 
                                className={`flag-region ${currentLanguage === 'en' ? 'active' : ''}`}
                                onClick={() => handleLanguageChange('en')}
                            >
                                <img src={flagUSA} alt="English" />
                                <span>EN</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Language Switcher */}
                <div className="translate-region desktop-translate">
                    <div 
                        className={`flag-region ${currentLanguage === 'pt' ? 'active' : ''}`}
                        onClick={() => handleLanguageChange('pt')}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={flagBrazil} alt="Português" />
                    </div>
                    <div 
                        className={`flag-region ${currentLanguage === 'en' ? 'active' : ''}`}
                        onClick={() => handleLanguageChange('en')}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={flagUSA} alt="English" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderDynamic;
