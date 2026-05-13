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