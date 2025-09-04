import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext/LanguageContext.jsx';
import sistemaFinanceiroImg from "../../../assets/images/projects/sistema de controle financeiro.png";
import ecommerceGamesImg from "../../../assets/images/projects/ecomercegames.jpg";
import backupSystemImg from "../../../assets/images/projects/backup.png";

const Container4Dynamic = () => {
    const { t } = useLanguage();
    const projects = t('container4.projects');

    // Mapeamento das imagens
    const imageMap = {
        "sistema de controle financeiro.png": sistemaFinanceiroImg,
        "ecomercegames.jpg": ecommerceGamesImg,
        "backup.png": backupSystemImg
    };

    return (
        <div className="mw-50">
            <div className="work-title">
                <h1>{t('container4.title')}</h1>
            </div>
            <div className="my-work-wrapper">
                {projects && projects.map((project, index) => (
                    <div key={index} className="work-box">
                        <div className="project-card">
                            <div className="project-image-container">
                                <img 
                                    className="project-image" 
                                    src={imageMap[project.image]} 
                                    alt={project.title}
                                />
                                <div className="project-overlay">
                                    <div className="project-info">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className="project-technologies">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span key={techIndex} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                        <div className="project-links">
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noreferrer"
                                                className="github-link"
                                            >
                                                <i className='bx bxl-github'></i>
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Container4Dynamic;
