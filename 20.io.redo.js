console.log('What would you like to say?'); // providing a "call to action"

process.stdin.once('data', input => { // the process.stdin.once pauses the code, with the method 'once'
    console.log('stdin: ', input.toString()); //
});

// Nothing would happen yet.


//! Callback Functions

process.stdin.once('data', callbackFunc); // the .once method only accepts a function in the parens
function callbackFunc(input) {
    console.log(`New Input: ${input}`);
}

function wilUseCallback(expectingFunction) { // Here, the expectingFunction is being immediately replaced by the content of the wilUseCallback arrow function.
    expectingFunction();
}

wilUseCallback(() => console.log('Being passed into the parameter of "willUseCallBack"')); // The empty parens are an anonymous function that represent the parameter, here (expectingFunction)
wilUseCallback(() => console.log('Different info now'));
wilUseCallback(() => console.log('Helllo World, look at my extra l!'));


let firstName = ["Frodo", "Galdalf", "Samwise"];
let lastName = ["Baggins", "The Grey", "Gangee"];

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function hobbit(first, last) {
    let fullName = getFullName(first, last);
    console.log(`${fullName} is pretty cool.`);
}
let i = Math.floor(Math.random()* 3);
hobbit(firstName[i], lastName[i]);