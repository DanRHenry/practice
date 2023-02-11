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

//Location Class Constructor
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

// Functions

function createLocation(newLocation, coordinate, name, description, north, east, south, west, up, down, item1, item2, item3) {
    newLocation = new Location(coordinate, name, description, north, east, south, west, up, down, item1, item2, item3);
    return locationArray.push(newLocation)
}

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

function describe() {
    let i = 0;
    function search() {
        i++
        if (i < locationArray.length && JSON.stringify(locationArray[i].coordinate) != JSON.stringify(playerLocation)) {
            // console.log("case 3");
            search()
        } else if (locationArray[i] == undefined){
            displayText.innerHTML = `You don't see anything interesting...`; // case 4b
            
        } else if (JSON.stringify(locationArray[i].coordinate) == JSON.stringify(playerLocation)) {
            displayText.innerHTML = `You look around and see ${locationArray[i].description}`; // case 4a
        }
    }
    if (JSON.stringify(locationArray[i].coordinate) == JSON.stringify(playerLocation)) {
        displayText.innerHTML = `You look around and see ${locationArray[i].description}`; // case 1
    }
    else {
        search(); // Case 2
    }
}

//Locations
let currentLocation = [z,x,y];
createLocation("start", [0,9,9], "home", "Starting Point", "You look to the north", 'You look to the south', 'You look to the east', 'You look to the west', 'You look up', 'You look down', 'You see item one', 'You see item 2', 'You see item 3');
createLocation("cemetary",[0,9,10], 'second position.', 'position 2');
createLocation("cemetary",[0,9,11], 'cemetary', 'An old cemetary lies before you.');

// Add functionality to look in a direction.