function initCarousel(carouselElement) {
    const slides = carouselElement.getElementsByClassName('carousel-slide');
    let currentIndex = 0;

    // Set first slide as active
    slides[0].classList.add('active');

    setInterval(() => {
        // Remove active class from current slide
        slides[currentIndex].classList.remove('active');
        
        // Move to next slide
        currentIndex = (currentIndex + 1) % slides.length;
        
        // Add active class to new current slide
        slides[currentIndex].classList.add('active');
    }, 3000);
}

// Initialize all carousels when page loads
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.getElementsByClassName('carousel');
    Array.from(carousels).forEach(carousel => {
        initCarousel(carousel);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

    // Auto advance slides every 5 seconds
    setInterval(() => showSlide(currentSlide + 1), 5000);
});
