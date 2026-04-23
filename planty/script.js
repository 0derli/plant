document.addEventListener('DOMContentLoaded', function() {
    const flower = document.getElementById('flower');
    let lastDirection = 0;
    
    flower.addEventListener('mousemove', (e) => {
        const rect = flower.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const width = rect.width;
        
        if (mouseX < width / 3) {
            lastDirection = -1;
        } else if (mouseX > (width * 2) / 3) {
            lastDirection = 1;
        } else {
            lastDirection = 0;
        }
    });
    
    flower.addEventListener('mouseleave', () => {

        if (lastDirection === -1) {
            flower.style.transform = 'rotate(-10deg) skewX(-5deg)';
        } else if (lastDirection === 1) {
            flower.style.transform = 'rotate(10deg) skewX(5deg)';
        }
        

        setTimeout(() => {
            if (lastDirection === -1) {
                flower.style.transform = 'rotate(-3deg) skewX(-1deg)';
            } else if (lastDirection === 1) {
                flower.style.transform = 'rotate(3deg) skewX(1deg)';
            }
        }, 150);
        

        setTimeout(() => {
            flower.style.transform = 'rotate(0deg) skewX(0deg)';
        }, 500);
    });
});

const plants = [
    { img: "/img/plant1.png", name: "Спатифиллум" },
    { img: "/img/plant2.png", name: "Хлорофитум" },
    { img: "/img/plant3.png", name: "Алоэ Вера" },
    { img: "/img/plant4.png", name: "Замиокулькас" },
    { img: "/img/plant5.png", name: "Сансевиерия" }
];

let currentIndex = 0;

const plantsContainer = document.querySelector('.plants');
const plantNameElement = document.getElementById('plantName');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

function createAllPlants() {
    plantsContainer.innerHTML = '';
    
    plants.forEach((plant, idx) => {
        const div = document.createElement('div');
        div.className = 'plant-item';
        div.setAttribute('data-index', idx);
        
        const img = document.createElement('img');
        img.src = plant.img;
        img.alt = plant.name;
        
        div.appendChild(img);
        
        div.addEventListener('click', () => {
            currentIndex = idx;
            render();
        });
        
        plantsContainer.appendChild(div);
    });
}


function getItemWidth() {
    const item = document.querySelector('.plant-item');
    if (!item) return 540;
    const styles = window.getComputedStyle(item);
    return parseInt(styles.width) + 40; 
}

function render() {
    const itemWidth = getItemWidth();
    const container = document.querySelector('.sliderContainer');
    const containerWidth = container.offsetWidth;

    const offset = (containerWidth / 2) - (itemWidth / 2) - (currentIndex * itemWidth);
    
    plantsContainer.style.transform = `translateX(${offset}px)`;
    
    const allItems = document.querySelectorAll('.plant-item');
    allItems.forEach((item, idx) => {
        if (idx === currentIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    plantNameElement.textContent = plants[currentIndex].name;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % plants.length;
    render();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + plants.length) % plants.length;
    render();
}

createAllPlants();
leftBtn.addEventListener('click', prevSlide);
rightBtn.addEventListener('click', nextSlide);
window.addEventListener('resize', () => render());

setTimeout(render, 100);
render();