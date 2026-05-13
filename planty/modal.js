
const modalDesc = document.getElementById('modalDesc');
const openDescBtn = document.getElementById('openDesc');
const closeBtn = document.querySelector('.close');

openDescBtn.onclick = function() {
    modalDesc.style.display = 'flex'; 
}

closeBtn.onclick = function() {
    modalDesc.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modalDesc) {
        modalDesc.style.display = 'none';
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modalDesc.style.display === 'flex') { 
        modalDesc.style.display = 'none';
    }
});

