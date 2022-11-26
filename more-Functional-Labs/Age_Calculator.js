/*
Write a function that calculates the number of seconds old you are when given your age
*/

let age = 40

function ageCalc (num) {
    let seconds = 60;
    let days = 365.25;
    let hours = 24;
    let minutes = 60;
    let secondsInAYear = (num * days * hours * minutes * seconds);
    console.log(secondsInAYear)
}
ageCalc(age);