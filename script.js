// Select all slides and initialize the current slide index
let currentSlide = 0;
const slides = document.querySelectorAll('.project-slide');

// Function to show a specific slide based on the index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

// Initial call to display the first slide
showSlide(currentSlide);

// Automatically move to the next slide every 3 seconds
const autoSlide = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);

// Manual controls for next and previous buttons
document.querySelector('#next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    resetAutoSlide();
});

document.querySelector('#prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    resetAutoSlide();
});

// Reset auto slide when a manual control is used
function resetAutoSlide() {
    clearInterval(autoSlide);
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000);
}
