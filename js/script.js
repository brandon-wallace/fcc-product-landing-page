"use strict";


const tileImage = document.querySelectorAll('.tile-img');


const openModal = () => {
    console.log(`Opening modal`);
    document.querySelector('.modal').style.display = 'flex';
}

for (let i = 0; i < tileImage.length; i++) {
    tileImage[i].addEventListener('click', () => {
        openModal();
    });
}


const closeModal = () => {
    console.log(`Closing modal`);
    document.querySelector('.modal').style.display = 'none';
}
