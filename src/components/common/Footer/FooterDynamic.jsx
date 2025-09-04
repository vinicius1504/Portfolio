import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext/LanguageContext.jsx';

const FooterDynamic = () => {
    const { t } = useLanguage();

    return (
        <footer>
            <div className="mw-50">
                <span className="footer-txt">
                    {t('footer.copyright')} <a className="name-color" href="https://wa.me/67992236060" target="_blank" rel="noreferrer">{t('footer.name')}</a> {t('footer.createdIn')}
                </span>
            </div>
        </footer>
    );
};

export default FooterDynamic;
