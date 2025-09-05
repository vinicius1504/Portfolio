import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext/LanguageContext.jsx';
import htmlIcon from '../../../assets/images/icons/html-svgrepo-com.svg';
import cssIcon from '../../../assets/images/icons/css-3-svgrepo-com.svg';
import jsIcon from '../../../assets/images/icons/js-svgrepo-com.svg';
import angularIcon from '../../../assets/images/icons/angular-svgrepo-com.svg';
import typescriptIcon from '../../../assets/images/icons/typescript-icon-svgrepo-com.svg';
import reactIcon from '../../../assets/images/icons/react-svgrepo-com.svg';
import nodejsIcon from '../../../assets/images/icons/node-svgrepo-com.svg';
import javaIcon from '../../../assets/images/icons/java-svgrepo-com.svg';
import mongoIcon from '../../../assets/images/icons/mongodb-svgrepo-com.svg';
import gitIcon from '../../../assets/images/icons/git-svgrepo-com.svg';
import pythonIcon from '../../../assets/images/icons/python-svgrepo-com.svg';
import phpIcon from '../../../assets/images/icons/php2-svgrepo-com.svg';
import viteIcon from '../../../assets/images/icons/vite-svgrepo-com.svg';

const Container2Dynamic = () => {
    const { t } = useLanguage();

    return (
        <div id="skills" className="mw-50">
            <div className="what-i-work">
                <h1>{t('container2.title')}</h1>
            </div>
            <div className="languages">
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <img src={htmlIcon} alt="HTML" />
                            <span>HTML</span>
                        </div>
                        <div className="slide">
                            <img src={cssIcon} alt="CSS" />
                            <span>CSS</span>
                        </div>
                        <div className="slide">
                            <img src={jsIcon} alt="JavaScript" />
                            <span>JavaScript</span>
                        </div>
                        <div className="slide">
                            <img src={typescriptIcon} alt="TypeScript" />
                            <span>TypeScript</span>
                        </div>
                        <div className="slide">
                            <img src={pythonIcon} alt="Python" />
                            <span>Python</span>
                        </div>
                        <div className="slide">
                            <img src={phpIcon} alt="PHP" />
                            <span>PHP</span>
                        </div>
                        <div className="slide">
                            <img src={javaIcon} alt="Java" />
                            <span>Java</span>
                        </div>
                    </div>
                </div>
                <div className="slider2">
                    <div className="slide-track2">
                        <div className="slide">
                            <img src={angularIcon} alt="Angular" />
                            <span>Angular</span>
                        </div>
                        <div className="slide">
                            <img src={reactIcon} alt="React" />
                            <span>React</span>
                        </div>
                        <div className="slide">
                            <img src={nodejsIcon} alt="Node.js" />
                            <span>Node JS</span>
                        </div>
                        <div className="slide">
                            <img src={mongoIcon} alt="MongoDB" />
                            <span>Mongo DB</span>
                        </div>
                        <div className="slide">
                            <img src={viteIcon} alt="Vite" />
                            <span>Vite</span>
                        </div>
                        <div className="slide">
                            <img src={gitIcon} alt="Git" />
                            <span>Git</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container2Dynamic;
