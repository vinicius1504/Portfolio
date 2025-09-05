import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from './LanguageContext.jsx';

const LanguageSync = () => {
  const location = useLocation();
  const { changeLanguage, currentLanguage } = useLanguage();

  useEffect(() => {
    const path = location.pathname;
    
    if (path === '/pt' && currentLanguage !== 'pt') {
      changeLanguage('pt');
    } else if (path === '/' && currentLanguage !== 'en') {
      changeLanguage('en');
    }
  }, [location.pathname, changeLanguage, currentLanguage]);

  return null; // Este componente não renderiza nada
};

export default LanguageSync;
