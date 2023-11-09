function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
}

const hoverColorCards = document.querySelectorAll('.hover-random-bg');

for (const hoverColorCard of hoverColorCards) {
    hoverColorCard.addEventListener('mouseenter', function () {
        hoverColorCard.style.backgroundColor = getRandomColor();
    });
}

for (const hoverColorCard of hoverColorCards) {
    hoverColorCard.addEventListener('mouseleave', function () {
        hoverColorCard.style.backgroundColor = '#f5d0fe';
    })
}