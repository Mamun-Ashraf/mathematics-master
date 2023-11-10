// Function for changing background color of cards

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
}

// To show, hide and update cards input field

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


// To solve problems and display in solved-result section

function solveProblem(btnSolveId, categoryNameId, unknownId1, unknownId2, unknownId3, unknownId4) {
    document.getElementById(btnSolveId).addEventListener('click', function () {

        let { categoryName, unknown1Value, unknown2Value, unknown3Value, unknown4Value } = getCategoryInfo(categoryNameId, unknownId1, unknownId2, unknownId3, unknownId4);

        let solutionString1, solutionString2;
        if (unknown1Value && unknown2Value) {
            switch (categoryName) {
                case 'Algebra':
                    const d = Math.pow(unknown2Value, 2) - (4 * unknown1Value * unknown3Value);
                    if (!unknown3Value) {
                        alert('Please provide valid values');
                    }
                    else if (d > 0) {
                        alert('The Solution is not a Real Number')
                    }
                    else {
                        solutionString1 = ((-unknown2Value + Math.sqrt(d)) / (2 * unknown1Value)).toFixed(3);
                        solutionString2 = ((-unknown2Value - Math.sqrt(d)) / (2 * unknown1Value)).toFixed(3);
                    }
                    break;
                case 'Arithmetic':
                    if (unknown1Value < 0 || unknown2Value < 0) {
                        alert('Please make sure the value of y and z is a positive number')
                    }
                    else {
                        solutionString1 = ((unknown2Value * 100) / unknown1Value).toFixed(3);
                    }
                    break;
                case 'Geometry':
                    solutionString1 = (Math.PI * Math.pow(unknown1Value, 2) * unknown2Value).toFixed(3);
                    break;
                case 'Coordinate Geometry':
                    if (unknown3Value && unknown4Value) {
                        const d1 = Math.pow((unknown1Value - unknown3Value), 2);
                        const d2 = Math.pow((unknown2Value - unknown4Value), 2);
                        solutionString1 = (Math.sqrt(d1 + d2)).toFixed(3);
                    }
                    else {
                        alert('Please provide valid values');
                    }
                    break;
                case 'Trigonometry':
                    solutionString1 = (unknown1Value * Math.tan((unknown2Value * Math.PI) / 180)).toFixed(3);
                    break;
                default:
                    alert('Not a valid category');
                    break;
            }
        }

        else {
            alert('Please provide valid values');
        }


        if (solutionString1 || solutionString2) {
            const solution1 = parseFloat(solutionString1);
            // const solution2 = parseFloat(solutionString2);
            addSolveResult(solution1, categoryNameId, unknownId1, unknownId2, unknownId3, unknownId4);
        }

    })
}

// Getting shapes information to calculate solution

function getCategoryInfo(categoryNameId, unknownId1, unknownId2, unknownId3, unknownId4) {
    let categoryName = document.getElementById(categoryNameId).innerText;

    let unknown1String, unknown2String, unknown3String, unknown4String, unknown1Value, unknown2Value, unknown3Value, unknown4Value;

    unknown1String = document.getElementById(unknownId1).innerText;
    unknown1Value = parseFloat(unknown1String);
    unknown2String = document.getElementById(unknownId2).innerText;
    unknown2Value = parseFloat(unknown2String);

    switch (categoryName) {
        case 'Arithmetic':
        case 'Geometry':
        case 'Trigonometry':
            return { categoryName, unknown1Value, unknown2Value };

        case 'Algebra':
            unknown3String = document.getElementById(unknownId3).innerText;
            unknown3Value = parseFloat(unknown3String);
            return { categoryName, unknown1Value, unknown2Value, unknown3Value };
        default:
            unknown3String = document.getElementById(unknownId3).innerText;
            unknown3Value = parseFloat(unknown3String);
            unknown4String = document.getElementById(unknownId4).innerText;
            unknown4Value = parseFloat(unknown4String);
            return { categoryName, unknown1Value, unknown2Value, unknown3Value, unknown4Value };
    }


}

// Add list of solutions to the 'Solved Result'

function addSolveResult(solution1, categoryNameId, unknownId1, unknownId2, unknownId3, unknownId4) {

    let { categoryName, unknown1Value, unknown2Value, unknown3Value, unknown4Value } = getCategoryInfo(categoryNameId, unknownId1, unknownId2, unknownId3, unknownId4);

    const list = document.getElementById('solved-result-list');
    const li = document.createElement('li');

    li.innerHTML = `
        <p class='font-bold'>
        solution of ${categoryName} problem is : <span class='text-green-400 font-bold text-2xl'>${solution1} </span><span id='meterOrCm'>cm</span>, <br /> <span class='text-xs text-blue-400'>(when First value = ${unknown1Value} cm, Second value = ${unknown2Value} cm, third value = ${unknown3Value} cm and fourth value = ${unknown4Value})</span>
        </p>
        <button id='btn-meter' class='bg-blue-400 text-white font-bold rounded px-2 py-1 my-2'>
            Convert to m
        </button>
        <button id='btn-centimeter' class='hidden bg-blue-400 text-white font-bold rounded px-2 py-1 my-2'>
            Convert to cm
        </button>
        <button id='btn-delete-solution' class='text-2xl font-bold text-red-500 bg-white rounded px-3 py-1 ml-6'>X</button>
    `
    list.appendChild(li);

    // Implementing delete button to remove a specific solution

    li.querySelector('#btn-delete-solution').addEventListener('click', function () {
        li.remove();
    })

    // Implementing convert-button from Centimeter to Meter

    const solutionInMetersString = (solution1 / 100).toFixed(3);
    const solutionInMeters = parseFloat(solutionInMetersString);
    const btnMeter = li.querySelector('#btn-meter');
    btnMeter.addEventListener('click', function () {
        btnMeter.classList.add('hidden');
        const btnCentimeter = li.querySelector('#btn-centimeter');
        btnCentimeter.classList.remove('hidden');
        li.querySelector('.text-green-400').textContent = solutionInMeters;
        li.querySelector('#meterOrCm').textContent = ' m';
    })

    // Implementing convert-button from Meter to Centimeter

    const solutionInCentimetersString = ((solution1 / 100) * 100).toFixed(3);
    const solutionInCentimeters = parseFloat(solutionInCentimetersString);
    const btnCentimeter = li.querySelector('#btn-centimeter');
    btnCentimeter.addEventListener('click', function () {
        const btnMeter = li.querySelector('#btn-meter');
        btnMeter.classList.remove('hidden');
        btnCentimeter.classList.add('hidden');
        li.querySelector('.text-green-400').textContent = solutionInCentimeters;
        li.querySelector('#meterOrCm').textContent = ' cm';
    })
}