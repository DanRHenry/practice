let officeCharacter = ['Pam', 'Michael', 'Dwight', 'Jim'];
let randomNumber = Math.floor(Math.random()* 5);
let i=randomNumber
officeCharacter = officeCharacter[randomNumber];

switch(officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log('Perfectenschlag');
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    case "Pam":
        console.log("Kinda sounds like prison is better than Dunder Mifflin");
        break;
    default:
        console.log(`I'm sorry, whoever you are, but do I know you?`);
}
