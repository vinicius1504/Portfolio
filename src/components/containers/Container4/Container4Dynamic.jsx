import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext/LanguageContext.jsx';
import sistemaFinanceiroImg from "../../../assets/images/projects/sistema de controle financeiro.png";
import ecommerceGamesImg from "../../../assets/images/projects/ecomercegames.jpg";
import backupSystemImg from "../../../assets/images/projects/backup.png";
import globooImg from "../../../assets/images/projects/globoo.png";
import placeholderUserImg from "../../../assets/images/collaborators/placeholder-user.svg";
import viniciusLeiteImg from "../../../assets/images/collaborators/vinicius-leite.svg";
import pedroTrottaImg from "../../../assets/images/collaborators/pedro-trotta.svg";
import viniciusColabImg from "../../../assets/images/collaborators/vinicius-colaborador.jpg";
import pedroColabImg from "../../../assets/images/collaborators/pedro-colaborador.webp";
import clevertonColabImg from "../../../assets/images/collaborators/cleverton-colaborador.jpg";
import douglasColabImg from "../../../assets/images/collaborators/douglas-colaborador.jpg";
import isabelaColabImg from "../../../assets/images/collaborators/isabela-colaborador.jpg";
import joseColabImg from "../../../assets/images/collaborators/josé-colaborador.jpg";
import kevinColabImg from "../../../assets/images/collaborators/kevin-colaborador.jpg";
import wevertonColabImg from "../../../assets/images/collaborators/weverton-colaborador.jpg";

const Container4Dynamic = () => {
    const { t } = useLanguage();
    const projects = t('container4.projects');
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    // Mapeamento das imagens dos projetos
    const imageMap = {
        "sistema de controle financeiro.png": sistemaFinanceiroImg,
        "ecomercegames.jpg": ecommerceGamesImg,
        "backup.png": backupSystemImg,
        "globoo.png": globooImg
    };

    // Mapeamento das imagens dos colaboradores
    const collaboratorImageMap = {
        "placeholder-user.svg": placeholderUserImg,
        "vinicius-leite.svg": viniciusLeiteImg,
        "pedro-trotta.svg": pedroTrottaImg,
        "vinicius-colaborador.jpg": viniciusColabImg,
        "pedro-colaborador.webp": pedroColabImg,
        "cleverton-colaborador.jpg": clevertonColabImg,
        "douglas-colaborador.jpg": douglasColabImg,
        "isabela-colaborador.jpg": isabelaColabImg,
        "josé-colaborador.jpg": joseColabImg,
        "kevin-colaborador.jpg": kevinColabImg,
        "weverton-colaborador.jpg": wevertonColabImg
    };

    const nextProject = () => {
        setCurrentProjectIndex((prev) => 
            prev === projects.length - 1 ? 0 : prev + 1
        );
    };

    const prevProject = () => {
        setCurrentProjectIndex((prev) => 
            prev === 0 ? projects.length - 1 : prev - 1
        );
    };

    const goToProject = (index) => {
        setCurrentProjectIndex(index);
    };

    // Suporte a navegação por teclado
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'ArrowLeft') {
                prevProject();
            } else if (event.key === 'ArrowRight') {
                nextProject();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [projects]);

    if (!projects || projects.length === 0) {
        return null;
    }

    const currentProject = projects[currentProjectIndex];

    return (
        <div className="mw-50">
            <div className="work-title">
                <h1>{t('container4.title')}</h1>
            </div>
            
            <div className="project-gallery">
                {/* Projeto atual */}
                <div className="gallery-container">
                    <div className="project-card gallery-card">
                        <div className="project-image-container">
                            <img 
                                className="project-image" 
                                src={imageMap[currentProject.image]} 
                                alt={currentProject.title}
                            />
                            <div className="project-overlay">
                                <div className="project-info">
                                    <h3>{currentProject.title}</h3>
                                    <p>{currentProject.description}</p>
                                    <div className="project-technologies">
                                        {currentProject.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                    
                                    <div className="project-footer">
                                        <div className="project-links">
                                            <a 
                                                href={currentProject.github} 
                                                target="_blank" 
                                                rel="noreferrer"
                                                className="github-link"
                                            >
                                                <i className='bx bxl-github'></i>
                                                GitHub
                                            </a>
                                        </div>

                                        {/* Seção de Colaboradores - apenas fotos no canto direito */}
                                        {currentProject.collaborators && currentProject.collaborators.length > 0 && (
                                            <div className="project-collaborators-corner">
                                                <div className="collaborators-avatars">
                                                    {currentProject.collaborators.map((collaborator, collabIndex) => (
                                                        <img 
                                                            key={collabIndex}
                                                            src={collaboratorImageMap[collaborator.image]} 
                                                            alt={collaborator.name}
                                                            className="collaborator-avatar-corner"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Indicadores de posição */}
                <div className="gallery-indicators">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentProjectIndex ? 'active' : ''}`}
                            onClick={() => goToProject(index)}
                            aria-label={`Ir para projeto ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Container4Dynamic;
