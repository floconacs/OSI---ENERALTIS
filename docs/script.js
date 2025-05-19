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

// Gestion du carrousel
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    // Création des points de navigation
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
        updateDots();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        goToSlide(currentIndex);
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        goToSlide(currentIndex);
    }
    
    // Événements des boutons
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    
    // Défilement automatique
    let autoplayInterval = setInterval(nextSlide, 3000);
    
    // Pause au survol
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 3000);
    });
    
    // Navigation au clavier
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
}); 