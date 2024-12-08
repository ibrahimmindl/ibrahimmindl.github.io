// main.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    ScrollReveal().reveal('.content-section, .video-section', {
        delay: 150,
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        origin: 'bottom',
        reset: true // This allows animations to replay during scrolling
    });
});
