import { useLanguage } from '../../../contexts/LanguageContext/LanguageContext.jsx';

const Container1Dynamic = () => {
    const { t } = useLanguage();

    return(
        <div id="about" className="section">
            <div className="card-info glasseffect">
                <div className="wrapper-info">
                    <div className="name-links">
                        <h1>{t('container1.name')}</h1>
                        <div className="social-box">
                            <a href="https://www.linkedin.com/in/vinicius-gabriel-benites-leite-51b3001b6/" target="_blank" rel="noreferrer" className="social">
                                <i className='bx bxl-linkedin'></i>
                            </a>
                            <a href="https://discord.gg/underr" rel="noreferrer" target="_blank" className="social">
                                <i className='bx bxl-discord-alt'></i>
                            </a>
                            <a href="https://wa.me/67992236060" target="_blank" rel="noreferrer" className="social">
                                <i className='bx bxl-whatsapp'></i>
                            </a>
                            <a href="mailto:viniciusleitedev@gmail.com" className="social">
                                <i className='bx bxl-gmail'></i>
                            </a>
                        </div>
                    </div>
                    <div className="local">
                        <i className='bx bx-map-pin'></i>
                        <a href="https://www.google.com/maps/place/Campo+Grande,+State+of+Mato+Grosso+do+Sul/data=!4m2!3m1!1s0x9486e6726b2b9f27:0xf5a8469ebc84d2c1?sa=X&ved=1t:242&ictx=111" target="_blank" rel="noreferrer">
                            {t('container1.location')}
                        </a>
                    </div>
                </div>
                <div className="intro-wrapper">
                    {t('container1.description')}
                </div>
            </div>
        </div>
    );
};

export default Container1Dynamic;
