// Put all letters into an array, letterBag
let letterBag = [
    "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z", "*", "*"
];



let playableLetters = [];

// Populate Playable Letter Array with randomLetter from letterBag
while (playableLetters.length < 7) {
    let randomLetterNumber = Math.floor(Math.random() *letterBag.length +1);
    playableLetters.push(letterBag[randomLetterNumber]);

// Remove playableLetters from the letterBag
    // letterBag.splice(letterBag.indexOf((0), 1)); // Broken. Only removes letters from the end of array.
    // console.log(letterBag);
}
// console.log(playableLetters);

// Connect playableLetters to html's playerTiles
// Define each playerTiles ID # from the playerTileGrid section and add the same i from the playableLetters Array, incrementally
for (let i=0; i<7; i++) {
    let id = document.getElementById(i);
    // console.log(i);
    id.append(playableLetters[i]);
    console.log(id);
    };


/*     <!-- Put these into JS later
A - 1 point <br>
B - 3 points <br>
C - 3 points <br>
D - 2 points <br> 
E - 1 point <br> 
F - 4 points <br>
G - 2 points <br>
H - 4 points <br>
I - 1 point <br>
J - 8 points <br>
K - 5 points <br>
L - 1 point <br>
M - 3 points <br>
N - 1 point <br>
O - 1 point <br>
P - 3 points <br>
Q - 10 points <br>
R - 1 point <br>
S - 1 point <br>
T - 1 point <br>
U - 1 point <br>
V - 4 points <br>
W - 4 points <br>
X - 8 points <br>
Y - 4 points <br>
Z - 10 points <br>
    --> */
