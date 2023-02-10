let inputFieldForP1Name = document.getElementById("inputFieldForP1Name");
let inputFieldForP2Name = document.getElementById("inputFieldForP2Name");
let playBtn = document.getElementById("startGame");

playBtn.addEventListener("click", saveName);

    function saveName() {
        let player1Name = inputFieldForP1Name.value;
        let player2Name = inputFieldForP2Name.value;
      
        localStorage.setItem("playerOneName", player1Name);
        localStorage.setItem("playerTwoName", player2Name);
    }