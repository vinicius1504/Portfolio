import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext/LanguageContext.jsx';

const Container3Dynamic = () => {
    const { t } = useLanguage();
    const experiences = t('container3.experiences');
    const [visibleExperiences, setVisibleExperiences] = useState(new Set());
    const experienceRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.dataset.index);
                    setVisibleExperiences(prev => new Set([...prev, index]));
                }
            });
        }, observerOptions);

        experienceRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            experienceRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [experiences]);

    return(
        <div id="experience" className="mw-50">
            <div className="experience">
                <h1>{t('container3.title')}</h1>
            </div>

            {experiences && experiences.map((experience, index) => (
                <div 
                    key={index} 
                    ref={el => experienceRefs.current[index] = el}
                    data-index={index}
                    className={`wrapper-experience step-experience ${visibleExperiences.has(index) ? 'visible' : ''}`}
                    style={{
                        animationDelay: `${index * 0.2}s`
                    }}
                >
                    <a href={experience.url} target="_blank" rel="noreferrer">
                        {experience.website}
                    </a>
                    <h3>{experience.position}</h3>
                    <span>{experience.period}</span>
                    <p>{experience.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Container3Dynamic;
