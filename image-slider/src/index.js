import './style.css';

function createFrame() {
    const frame = document.createElement('div');
    frame.className = 'frame';
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'prev';
    prevBtn.innerHTML = '<';
    frame.appendChild(prevBtn);

    const content = document.createElement('div');
    content.className = 'content';
    frame.appendChild(content);

    const nextBtn = document.createElement('button');
    nextBtn.className = 'next';
    nextBtn.innerHTML = '>';
    frame.appendChild(nextBtn);

    return frame;
}

document.body.appendChild(createFrame());
document.querySelector('.content').classList.add('image_1');

// Current image number
let currentImg = document.createElement('div');
currentImg.innerText = 'IMAGE 1';
currentImg.className = 'currentImg';
document.body.appendChild(currentImg); 

// Buttons
const prevBtn = document.querySelector('.prev'); 
const nextBtn = document.querySelector('.next');

prevBtn.addEventListener('click', () => {
    const content = document.querySelector('.content');
    const currentImage = content.className.split(' ')[1];
    const currentImageNumber = parseInt(currentImage.split('_')[1]);
    const nextImageNumber = currentImageNumber - 1 < 1 ? 6 : currentImageNumber - 1;
    const nextImage = `image_${nextImageNumber}`;
    const currentImg = document.querySelector('.currentImg');
    currentImg.innerText = `IMAGE ${nextImageNumber}`;
    content.classList.remove(currentImage);
    content.classList.add(nextImage);
});

nextBtn.addEventListener('click', () => {
    const content = document.querySelector('.content');
    const currentImage = content.className.split(' ')[1];
    const currentImageNumber = parseInt(currentImage.split('_')[1]);
    const nextImageNumber = currentImageNumber + 1 > 6 ? 1 : currentImageNumber + 1;
    const nextImage = `image_${nextImageNumber}`;
    const currentImg = document.querySelector('.currentImg');
    currentImg.innerText = `IMAGE ${nextImageNumber}`;
    content.classList.remove(currentImage);
    content.classList.add(nextImage);
});