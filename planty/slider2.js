const month = new Date().getMonth();

let season;
if (month === 11 || month === 0 || month === 1) {
    season = "winter";
} else if (month >= 2 && month <= 4) {
    season = "spring";
} else if (month >= 5 && month <= 7) {
    season = "summer";
} else {
    season = "autumn";
}

const slides = ["winter", "spring", "summer", "autumn"];
let currentSlide = slides.indexOf(season);
if (currentSlide === -1) currentSlide = 0;

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateSlider() {
    document.querySelectorAll('.seasonContent').forEach(el => {
        el.style.display = 'none';
    });
    const currentSeason = slides[currentSlide];
    const activeBlock = document.getElementById(`${currentSeason}Content`);
    if (activeBlock) {
        activeBlock.style.display = 'block';
    }
    console.log(currentSeason);
}

if (prevButton) {
    prevButton.addEventListener("click", (e) => {
        e.stopPropagation();
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    });
}

if (nextButton) {
    nextButton.addEventListener("click", (e) => {
        e.stopPropagation();
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
        event.preventDefault();
    } else if (event.key === "ArrowRight") {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
        event.preventDefault();
    }
});

updateSlider();