// Apparition des sections au scroll
const sections = document.querySelectorAll('.section');
const showSection = () => {
    const trigger = window.innerHeight * 0.85;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < trigger) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
};
window.addEventListener('scroll', showSection);
window.addEventListener('load', showSection);

// Animation du header au scroll
const header = document.querySelector('header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > lastScroll && current > 80) {
        header.style.boxShadow = '0 4px 16px rgba(33,150,243,0.10)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
    }
    lastScroll = current;
});

// Galerie : (zoom désactivé)
// const galerieImages = document.querySelectorAll('.galerie-grid img');
// let isFullscreen = false;
// galerieImages.forEach(img => {
//     img.addEventListener('click', function (e) {
//         if (!img.classList.contains('fullscreen') && !isFullscreen) {
//             img.classList.add('fullscreen');
//             img.style.cursor = 'zoom-out';
//             isFullscreen = true;
//         }
//         e.stopPropagation(); // Empêche la propagation pour éviter la fermeture immédiate
//     });
// });
// document.addEventListener('click', function () {
//     closeFullscreen();
// });
// function closeFullscreen() {
//     const img = document.querySelector('.galerie-grid img.fullscreen');
//     if (img) {
//         img.classList.remove('fullscreen');
//         img.style.cursor = '';
//         isFullscreen = false;
//     }
// }

// Olympiades : ouverture plein écran au clic sur les images de prix
const olympiadesImages = document.querySelectorAll('.olympiades-imgs img');
olympiadesImages.forEach(img => {
    img.addEventListener('click', function (e) {
        if (!img.classList.contains('fullscreen') && !isFullscreen) {
            img.classList.add('fullscreen');
            img.style.cursor = 'zoom-out';
            isFullscreen = true;
        }
        e.stopPropagation();
    });
}); 