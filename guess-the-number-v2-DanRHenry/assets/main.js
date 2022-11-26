//! DO NOT ALTER THIS CODE
const form = document.querySelector('form');
const btn = document.getElementById('guess-btn');
const res = document.getElementById('status-response');
let guessedNumber;
let numberToGuess = Math.floor(Math.random() * 101) + 1;

let displayResponse = (x) => {
    res.innerText = x;
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    guessedNumber = form[0].value;

    let response = randomNumber(guessedNumber, numberToGuess);

    displayResponse(response);

    form[0].value = '';
});
//! DO NOT ALTER THIS CODE