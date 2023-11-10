// Function for changing background color of cards

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
}

// To show and hide cards input field

function updateCardsInputValue(isEdit, cardUpdateButtonId, cardInputFieldId, argumentsNumber, unknownId1, unknownId2, inputUnknownId1, inputUnknownId2, unknownId3, inputUnknownId3, unknownId4, inputUnknownId4) {
    if (isEdit) {
        document.getElementById(cardUpdateButtonId).addEventListener('click', function () {
            const cardInputField = document.getElementById(cardInputFieldId);
            cardInputField.classList.remove('hidden');
            cardInputField.classList.add('grid');
        })
    }
    else {

        document.getElementById(cardUpdateButtonId).addEventListener('click', function () {
            const cardInputField = document.getElementById(cardInputFieldId);
            cardInputField.classList.add('hidden');
            cardInputField.classList.remove('grid');

            let unknown1, unknown2, unknown3, unknown4, inputUnknown1, inputUnknown2, inputUnknown3, inputUnknown4;

            unknown1 = document.getElementById(unknownId1);
            unknown2 = document.getElementById(unknownId2);

            inputUnknown1 = document.getElementById(inputUnknownId1).value;
            inputUnknown2 = document.getElementById(inputUnknownId2).value;

            unknown1.innerText = inputUnknown1;
            unknown2.innerText = inputUnknown2;

            switch (argumentsNumber) {
                case 2:
                    break;

                case 3:
                    unknown3 = document.getElementById(unknownId3);

                    inputUnknown3 = document.getElementById(inputUnknownId3).value;

                    unknown3.innerText = inputUnknown3;
                    break;

                default:
                    unknown3 = document.getElementById(unknownId3);
                    unknown4 = document.getElementById(unknownId4);

                    inputUnknown3 = document.getElementById(inputUnknownId3).value;
                    inputUnknown4 = document.getElementById(inputUnknownId4).value;

                    unknown3.innerText = inputUnknown3;
                    unknown4.innerText = inputUnknown4;
                    break;
            }
        })
    }
}


//         document.getElementById(cardUpdateButtonId).addEventListener('click', function () {
//             const cardInputField = document.getElementById(cardInputFieldId);
//             cardInputField.classList.add('hidden');
//             cardInputField.classList.remove('grid');

//             const unknown1 = document.getElementById(unknownId1);
//             const unknown2 = document.getElementById(unknownId2);
//             const unknown3 = document.getElementById(unknownId3);
//             const unknown4 = document.getElementById(unknownId4);

//             const inputUnknown1 = document.getElementById(inputUnknownId1).value;
//             const inputUnknown2 = document.getElementById(inputUnknownId2).value;
//             const inputUnknown3 = document.getElementById(inputUnknownId3).value;
//             const inputUnknown4 = document.getElementById(inputUnknownId4).value;

//             unknown1.innerText = inputUnknown1;
//             unknown2.innerText = inputUnknown2;
//             unknown3.innerText = inputUnknown3;
//             unknown4.innerText = inputUnknown4;
//         })
//     }
// }