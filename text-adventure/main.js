// Useful Links:
// https://mixkit.co/free-sound-effects/horror/

// DOM Section

// Bindings
const move = document.getElementById("move");
const text = document.getElementById("inputText").value;
const look = document.getElementById("look");
const take = document.getElementById("take");
const use = document.getElementById("use");
const displayText = document.getElementById("displayText");

// Event Listeners
move.addEventListener("click", go);
look.addEventListener("click", describe);

// Global Variables
let z = 0;
let x = 9;
let y = 9;
let playerLocation = [z, x, y];
let gameBoard = [];
let i = 0;

// Build Game Board Array With Generic Attributes... may not be necessary. 
// Instead, use a check to see if the current location exists as an object, and if not, then display generic text.
// function buildGameBoard(){
//     for (let x = 0; x<=25; x++) {
//         for (let y = 0; y<=25; y++) {
//             for (let z = 0; z >= -5; z--) 
//             gameBoard.push([[z,x,y]]);
//         }
//     }
// }

// buildGameBoard();

class Location {
    constructor(coordinate, name, description, north, east, south, west, up, down, item1, item2, item3) {
        this.coordinate = coordinate;
        this.description = description;
        this.north = north;
        this.east = east;
        this.south = south;
        this.west = west;
        this.up = up;
        this.down = down;
        this.name = name;
        this.item1 = item1;
        this.item2 = item2;
        this.item3 = item3;
    }
}

let locationArray = []

function createLocation(newLocation, coordinate, name, description, north, east, south, west, up, down, item1, item2, item3) {
    newLocation = new Location(coordinate, name, description, north, east, south, west, up, down, item1, item2, item3);
    return locationArray.push(newLocation)
}

// object variable names = ([p]osition, z, xx, yy)
// createLocation("test", [0,9,9], "testlocation", "this is a test")

createLocation("start", [0,9,9], "home", "Starting Point", "You look to the north", 'You look to the south', 'You look to the east', 'You look to the west', 'You look up', 'You look down', 'You see item one', 'You see item 2', 'You see item 3');


createLocation("cemetary",[0,9,10], 'second position.', 'position 2');
createLocation("cemetary",[0,9,11], 'cemetary', 'An old cemetary lies before you.');

// console.log(locationArray);

let currentLocation = [z,x,y];

function go() {
    let text = inputText.value.toLowerCase();
    if (text == "north") {
        displayText.innerHTML = `You move ${text}`;
        y++
        return playerLocation = [z, x, y];
    } else if (text == "east") {
        displayText.innerHTML = `You move ${text}`;
        x++
        return playerLocation = [z, x, y];
    } else if (text == "south") {
        displayText.innerHTML = `You move ${text}`;
        y--
        return playerLocation = [z, x, y];
    } else if (text == "west") {
        displayText.innerHTML = `You move ${text}`;
        x--
        return playerLocation = [z, x, y];
    } else if (text == "up") {
        displayText.innerHTML = `You move ${text}`;
        z++
        return playerLocation = [z, x, y];
    } else if (text == "down") {
        displayText.innerHTML = `You move ${text}`;
        z--
        return playerLocation = [z, x, y];
    } else if (text == "return home") {
        [z, x, y] = [0, 9, 9]
        displayText.innerHTML = `You have warped home...`
        return playerLocation = [z, x, y];
    }else {
        displayText.innerHTML = "That is not a direction";
    }
};

/* 
case 1: if the arrays match, display location text
case 2: if they do not match, search through the array
case 3: if the array is not done and they do not match, keep searching
case 4: if the array is done, and they do not match, display nothing to see text
*/
function describe() {
    let i = 0;
    function search() {
        i++
        if (i < locationArray.length && JSON.stringify(locationArray[i].coordinate) != JSON.stringify(playerLocation)) {
            console.log("case 3", "Player Location: ", playerLocation, "Location Array: ", locationArray[i].coordinate);
            search() // Case 3
        } else if (JSON.stringify(locationArray[i].coordinate) == JSON.stringify(playerLocation)) {
            console.log("case 4a", "Player Location: ", playerLocation, "Location Array: ", locationArray[i].coordinate);
            console.log("i: ", i);
            displayText.innerHTML = `You look around and see ${locationArray[i].description}`; // case 4a
        } else if (locationArray[i].description) {
            console.log("case 4b", "Player Location: ", playerLocation, "Location Array: ", locationArray[i].coordinate);
            displayText.innerHTML = `You look around and see ${locationArray[i].description}`; // case 4b
        } else {
            displayText.innerHTML = `You look around and see ${locationArray[i].description}`; // case 4b

        }
}
    if (JSON.stringify(locationArray[i].coordinate) == JSON.stringify(playerLocation)) {
        console.log("case 1", "Player Location: ", playerLocation, "Location Array: ", locationArray[i].coordinate)
        displayText.innerHTML = `You look around and see ${locationArray[i].description}`; // case 1
    }
    else {
            console.log("case 2", "Player Location: ", playerLocation, "Location Array: ", locationArray[i].coordinate)
            search(); // Case 2
        }
}


// else {displayText.innerHTML = `There's nothing of interest here...`;};

// search for playerLocation in an array of objects. If one exists, use the information, and if not, display a generic object.

// const gameBoardObject = gameBoard.reduce((acc,curr)=> (acc[curr]='',acc),{});
// console.log(gameBoardObject)
/* 
object-named by the coordinates from gameBoard array = {
    
}
*/

// for (position of gameBoard) {
//     let gameBoardObject.key = position
// }

// {
//     key: value,
// }

// let newLocation = playerLocation;
// [level, x, y]


// function whereAmI() {
//     console.log(playerLocation);
// }
