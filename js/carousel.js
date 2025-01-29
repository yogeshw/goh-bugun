function initCarousel(carouselElement) {
    const images = carouselElement.getElementsByTagName('img');
    let currentIndex = 0;

    // Set first image as active
    images[0].classList.add('active');

    // Adjust carousel height based on image aspect ratio
    function adjustCarouselHeight() {
        const activeImage = carouselElement.querySelector('img.active');
        if (activeImage && activeImage.naturalHeight && activeImage.naturalWidth) {
            const aspectRatio = activeImage.naturalHeight / activeImage.naturalWidth;
            carouselElement.style.paddingBottom = (aspectRatio * 100) + '%';
        }
    }

    // Adjust height when images load
    Array.from(images).forEach(img => {
        img.onload = adjustCarouselHeight;
    });

    setInterval(() => {
        // Remove active class from current image
        images[currentIndex].classList.remove('active');
        
        // Move to next image
        currentIndex = (currentIndex + 1) % images.length;
        
        // Add active class to new current image
        images[currentIndex].classList.add('active');
        adjustCarouselHeight();
    }, 2000);
}

// Initialize all carousels when page loads
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.getElementsByClassName('carousel');
    for (let carousel of carousels) {
        initCarousel(carousel);
    }
});
