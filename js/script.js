// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Carousel Data
    const slides = [
        {
            title: "Protein",
            period: "Last 7 days",
            data: [65, 70, 85, 75, 90, 85, 95],
            text: "Ready for some wins? Start tracking, it's easy!"
        },
        {
            title: "Daily Steps",
            period: "This week",
            data: [8000, 10000, 7500, 12000, 9000, 11000, 9500],
            text: "Every step counts towards your health goals!"
        },
        {
            title: "Weight Loss",
            period: "Last 7 days",
            data: [75, 74.8, 74.5, 74.2, 74.0, 73.8, 73.5],
            text: "Watch your progress over time"
        }
    ];

    let currentSlide = 0;
    const indicators = document.querySelectorAll('.indicator');
    const chartTitle = document.querySelector('.chart-title');
    const chartPeriod = document.querySelector('.chart-period');
    const bars = document.querySelectorAll('.bar');
    const carouselText = document.querySelector('.carousel-text');

    // Function to update the carousel content
    function updateCarousel(index) {
        // Update indicators
        indicators.forEach(ind => ind.classList.remove('active'));
        indicators[index].classList.add('active');

        // Update chart data
        const slide = slides[index];
        chartTitle.textContent = slide.title;
        chartPeriod.textContent = slide.period;
        
        // Update bars
        const maxValue = Math.max(...slide.data);
        bars.forEach((bar, i) => {
            const percentage = (slide.data[i] / maxValue) * 100;
            bar.style.height = `${percentage}%`;
        });

        // Update text
        carouselText.textContent = slide.text;
    }

    // Add click events to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel(currentSlide);
        });
    });

    // Auto-rotate carousel every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel(currentSlide);
    }, 5000);

    // Initialize first slide
    updateCarousel(0);
});