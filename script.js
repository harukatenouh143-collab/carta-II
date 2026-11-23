document.addEventListener('DOMContentLoaded', () => {
    const supportBtn = document.getElementById('supportBtn');
    const hiddenMessage = document.getElementById('hiddenMessage');

    // Despliegue suave del mensaje adicional
    supportBtn.addEventListener('click', () => {
        hiddenMessage.classList.toggle('show');
        
        if (hiddenMessage.classList.contains('show')) {
            supportBtn.style.background = 'linear-gradient(135deg, #0096c7, #48cae4)';
        } else {
            supportBtn.style.background = 'linear-gradient(135deg, #0077b6, #00b4d8)';
        }
    });

    // Pequeño efecto táctil sutil para pantallas móviles en la tarjeta
    const card = document.querySelector('.card-container');
    card.addEventListener('touchstart', () => {
        card.style.borderColor = 'rgba(76, 201, 240, 0.4)';
    }, { passive: true });

    card.addEventListener('touchend', () => {
        card.style.borderColor = 'rgba(76, 201, 240, 0.2)';
    }, { passive: true });
});