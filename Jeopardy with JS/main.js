/* 
Add a select user (from json file) if available

On click of pass button, give up turn to other player
Change firstRound to fit in the viewport

*/
let guess = document.getElementById("guess");

let answerInput = document.getElementById("answerInput");
let playerOneScoreName = document.getElementById("playerOneScoreName");
let playerTwoScoreName = document.getElementById("playerTwoScoreName");

// playerOneScoreName.innerText = `${localStorage.playerOneName}'s Score:`;

if (localStorage.playerOneName != "") {
    playerOneScoreName.innerText = `${localStorage.playerOneName}'s Score:`;
} else {
    playerOneScoreName.innerText = ""
};

if (localStorage.playerTwoName != "") {
    playerTwoScoreName.innerText = `${localStorage.playerTwoName}'s Score:`;
} else {
    playerTwoScoreName.innerText = ""
};

