import React, { createContext, useContext, useState, useEffect } from 'react';
import enTranslations from '../locales/en.json';
import ptTranslations from '../locales/pt.json';

const LanguageContext = createContext();

const translations = {
  en: enTranslations,
  pt: ptTranslations
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [currentTranslations, setCurrentTranslations] = useState(translations.en);

  useEffect(() => {
    // Verificar se há um idioma salvo no localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
      setCurrentTranslations(translations[savedLanguage]);
    }
  }, []);

  const changeLanguage = (language) => {
    if (translations[language]) {
      setCurrentLanguage(language);
      setCurrentTranslations(translations[language]);
      localStorage.setItem('preferredLanguage', language);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let result = currentTranslations;
    
    for (const k of keys) {
      result = result?.[k];
    }
    
    return result || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    translations: currentTranslations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  return context;
};

export default LanguageContext;
