function capitalize(someWord) {
    let upperCase = someWord.toUpperCase(); // creates a string from someWord in upper-case letters
    let lowerCase = someWord.toLowerCase(); // creates a string from someWord in lower-case letters

    let upperCaseArray = (Array.from(upperCase)); // creates an array from upper case letters
    let lowerCaseArray = (Array.from(lowerCase)); // creates an array from lower case letters

    let firstLetter = upperCaseArray.shift(); // defines the first letter as the first letter from upperCaseArray, which for some reason becomes a string again.
    let restOfLetters = lowerCaseArray.splice(1); // defines the rest of the letters from the lower case array

    let rest = ((restOfLetters.join(""))); // joins the rest of the letters back into a string
    let wholeWord = (firstLetter+rest); // combines first and rest into string
    return wholeWord;
}

console.log(capitalize('tomato'));     // should print 'Tomato'
console.log(capitalize('BACON'));      // should print 'Bacon'
console.log(capitalize('LeTTuCe'));    // should print 'Lettuce'
console.log(capitalize('mayonnAISE')); // should print 'Mayonnaise'
console.log(capitalize('hEnRy'));
// do not edit below this line
module.exports = { capitalize };
