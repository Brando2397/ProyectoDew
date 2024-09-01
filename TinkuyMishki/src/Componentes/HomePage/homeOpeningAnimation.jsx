import React, { useEffect } from "react";
import '../styles/homeOpeningAnimation.css';

function OpeningAnimation() {

    useEffect(() => {
        // Esperamos a que el DOM se haya renderizado
        const fadeInOutBackground = document.getElementById('fade-out-background');
        const fadeInOutLogo = document.getElementById('logo-animations');

        // Revisa si los elementos existen antes de intentar manipularlos
        if (fadeInOutBackground && fadeInOutLogo) {
            setTimeout(() => {
                fadeInOutBackground.style.display = 'none';
                fadeInOutLogo.style.display = 'none';
            }, 1500);
        }
    }, []); // El array vacio asegura que el efecto solo se ejecute una vez que el componente se monte

    return (
        <>
            <div id="fade-out-background"></div>
            <img src="" alt="" id="logo-animations"/>
        </>
    );
}

export default OpeningAnimation;