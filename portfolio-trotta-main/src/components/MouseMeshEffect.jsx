import { useEffect } from 'react';

const MouseMeshEffect = () => {
    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let isMoving = false;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Atualizar posição do efeito de deformação
            const body = document.body;
            const afterElement = body;
            
            // Criar deformação na mesh baseada na posição do mouse
            const meshOffsetX = (mouseX / window.innerWidth - 0.5) * 20;
            const meshOffsetY = (mouseY / window.innerHeight - 0.5) * 20;
            
            // Aplicar deformação no background
            body.style.backgroundPosition = `${meshOffsetX}px ${meshOffsetY}px, ${-meshOffsetX}px ${-meshOffsetY}px, ${meshOffsetX * 0.5}px ${meshOffsetY * 0.5}px`;
            
            // Atualizar o ::after elemento (efeito de luz seguindo o mouse)
            body.style.setProperty('--mouse-x', `${mouseX}px`);
            body.style.setProperty('--mouse-y', `${mouseY}px`);
            
            // Mostrar o efeito de deformação
            if (!isMoving) {
                body.classList.add('mouse-active');
                isMoving = true;
            }
            
            // Limpar timeout anterior se existir
            clearTimeout(window.mouseTimeout);
            
            // Esconder o efeito após parar de mover
            window.mouseTimeout = setTimeout(() => {
                body.classList.remove('mouse-active');
                isMoving = false;
            }, 1000);
        };

        const handleMouseEnter = () => {
            document.body.classList.add('mouse-active');
        };

        const handleMouseLeave = () => {
            document.body.classList.remove('mouse-active');
            // Resetar posição da mesh
            document.body.style.backgroundPosition = '';
        };

        // Adicionar listeners
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            clearTimeout(window.mouseTimeout);
        };
    }, []);

    return null; // Componente não renderiza nada visível
};

export default MouseMeshEffect;
