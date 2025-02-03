document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        // Removed button event listeners since buttons are hidden

        // Auto advance the slides every 7 seconds
        setInterval(() => showSlide(currentSlide + 1), 7000);
    });
});
