// Name: Jeovany Velazquez-Gonzalez Date: 12/2/24

let input = document.getElementById("num");

let calculateButton = document.querySelector("button");

let addition = document.getElementById("add");

let subtraction = document.getElementById("sub");

let multiplication = document.getElementById("multi");

let division = document.getElementById("divi");

// Addition Function
function calculateAddition(userNumber) {
    let resultString = "Addition";

    for (let i = 1; i <= 10; i++) {
        resultString += `<br> ${i} + ${userNumber} = ${i + userNumber} <br>`; // Used to format the String
    }

    addition.innerHTML = resultString; // Allows the <br> to be added onto the html
}

// Subtraction Function
function calculateSubtraction(userNumber) {
    let resultString = "Subtraction";

    let i = 1;

    while (i <= 10) {
        resultString += `<br> ${i} - ${userNumber} = ${i - userNumber} <br>`; // Used to format the String
        i++; // add 1 to i until it reaches 10 
    }

    subtraction.innerHTML = resultString; // Allows the <br> to be added onto the html
}

// Multiplication Function
function calculateMultiplication(userNumber) {
    let resultString = "Multiplication";

    let i = 1;

    do {
        resultString += `<br> ${i} * ${userNumber} = ${i * userNumber} <br>`; // Used to format the String
        i++; // add 1 to i until it reaches 10 
    } 

    while (i <= 10); // Executes the do code as long as i < 10

    multiplication.innerHTML = resultString; // Allows the <br> to be added onto the html
}

// Division Function
function calculateDivision(userNumber) {
    let resultString = "Division";

    let i = 1;

    do {
        resultString += `<br> ${i} / ${userNumber} = ${(i / userNumber).toFixed(2)} <br>`; // Used to format the String
        i++; // add 1 to i until it reaches 10 
    } 

    while (i <= 10); // Executes the do code as long as i < 10

    division.innerHTML = resultString; // Allows the <br> to be added onto the html
}

// Calculate Function
function allCalcs() {
    let userNumber = parseInt(input.value);

    // Gives the function the userNumber
    calculateAddition(userNumber);
    calculateSubtraction(userNumber);
    calculateMultiplication(userNumber);
    calculateDivision(userNumber);
}

// Runs the allCalcs Function when button is pressed
calculateButton.addEventListener("click", allCalcs);
