// calling function to change background color of cards

const hoverColorCards = document.querySelectorAll('.hover-random-bg');

hoverColorCards.forEach(hoverColorCard => {
    hoverColorCard.addEventListener('mouseenter', function () {
        hoverColorCard.style.backgroundColor = getRandomColor();
    });
});

hoverColorCards.forEach(hoverColorCard => {
    hoverColorCard.addEventListener('mouseleave', function () {
        hoverColorCard.style.backgroundColor = '#f5d0fe';
    });
});

// creating Modal

const modal = document.getElementById('indexModal');

document.getElementById('closeIndexButton').addEventListener('click', function () {
    modal.classList.add('hidden');
});

document.getElementById('openIndexButton').addEventListener('click', function () {
    modal.classList.remove('hidden');
});

// calling the functions to show and hide cards input field

updateCardsInputValue(true, 'btn-edit-algebra', 'algebra-input-field');
updateCardsInputValue(true, 'btn-edit-arithmetic', 'arithmetic-input-field');
updateCardsInputValue(true, 'btn-edit-geometry', 'geometry-input-field');
updateCardsInputValue(true, 'btn-edit-coordinate', 'coordinate-input-field');
updateCardsInputValue(true, 'btn-edit-trigonometry', 'trigonometry-input-field');


updateCardsInputValue(false, 'btn-check-algebra', 'algebra-input-field', 3, 'algebra-unknown1', 'algebra-unknown2', 'algebra-input-unknown1', 'algebra-input-unknown2', 'algebra-unknown3', 'algebra-input-unknown3');

updateCardsInputValue(false, 'btn-check-arithmetic', 'arithmetic-input-field', 2, 'arithmetic-unknown1', 'arithmetic-unknown2', 'arithmetic-input-unknown1', 'arithmetic-input-unknown2');

updateCardsInputValue(false, 'btn-check-geometry', 'geometry-input-field', 2, 'geometry-unknown1', 'geometry-unknown2', 'geometry-input-unknown1', 'geometry-input-unknown2');

updateCardsInputValue(false, 'btn-check-coordinate', 'coordinate-input-field', 4, 'coordinate-unknown1', 'coordinate-unknown2', 'coordinate-input-unknown1', 'coordinate-input-unknown2', 'coordinate-unknown3', 'coordinate-input-unknown3', 'coordinate-unknown4', 'coordinate-input-unknown4');

updateCardsInputValue(false, 'btn-check-trigonometry', 'trigonometry-input-field', 2, 'trigonometry-unknown1', 'trigonometry-unknown2', 'trigonometry-input-unknown1', 'trigonometry-input-unknown2');


// Calling the functions to solve problems of shapes and display in solved result section

solveProblem('btn-solve-algebra', 'category-algebra', 'algebra-unknown1', 'algebra-unknown2', 'algebra-unknown3');
solveProblem('btn-solve-arithmetic', 'category-arithmetic', 'arithmetic-unknown1', 'arithmetic-unknown2');
solveProblem('btn-solve-geometry', 'category-geometry', 'geometry-unknown1', 'geometry-unknown2');
solveProblem('btn-solve-coordinate', 'category-coordinate', 'coordinate-unknown1', 'coordinate-unknown2', 'coordinate-unknown3', 'coordinate-unknown4');
solveProblem('btn-solve-trigonometry', 'category-trigonometry', 'trigonometry-unknown1', 'trigonometry-unknown2');