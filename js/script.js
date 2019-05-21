"use strict";


const tileImage = document.querySelectorAll('.tile-img');


const openModal = (event) => {
    const modalImage = event.target.alt;
    document.querySelector('.'+modalImage).style.display = 'flex';
}


tileImage.forEach(tile => {
    tile.addEventListener('click', openModal);
});


const closeModal = () => {
    const modals = document.querySelectorAll('.modal');
    for (let i = 0; i < modals.length; i++) {
        modals[i].style.display = 'none';
    }
}
