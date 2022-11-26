process.stdin.once('data', input => {
        let enemyName = ('stdin: ', input.toString()); // without .toString, the returned information would be in hexadecimal
    });

    // let name = `darth vader`; // change to input value later
function respond(response) {
    if (response == `darth vader`) { //* the name is an enemy */) {
        console.log(`Go away, Darth Vader!`);
        /* check if their name is 'darth vader' */
    } else if (enemyList.includes(response)) {
      /* tell them to go away */
        console.log(`go away`);
    } else {
        console.log(`well, hello, ${response}!`)
      /* greet them warmly by their name */
    }
}

respond(enemyName);
// process.stdin.once('data', enterName);

// enterName(input) 
//     console.log(input);


// async function getName() {
//     return "Gandalf";
// }

// // console.log(getName());
// getName().then(d => console.log(d));