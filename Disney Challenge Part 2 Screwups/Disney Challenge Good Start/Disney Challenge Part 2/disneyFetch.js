/* 
    ! CHALLENGE
    - Create a folder within your Labs folder called "Disney Challenge"
        - index.html
        - disneyFetch.js
        
    - Create a boilerplate for index.html
        - Change the title to: "Disney API"
        - link the disneyFetch.js at the bottom of the body element.

*/


//- Create two different variables

function trial() {
    console.log("trial works, so the button works");
}

const url = `./disneyCharactersAPI.json`; // - one will hold the URL provided
let randomNumber = Math.floor(Math.random()*3); // - one will generate a random number from 0-50 (whole number)
/*
    - Create an async function called INFO that will accept two different parameters
        - the url
        - the random number
*/
async function INFO(url, randomCharNumber) {
    fetch(url)
/* 
        - JSONify the data returned */
    try {   //  - Within the function, create a TRY/CATCH.
        let response = await fetch(url); // - TRY to fetch the url
        let results = await response.json();
        let data = results.data[randomCharNumber];
        // - console.log 3 different positions:
        console.log("Full Results: ", data); // - The overall promise returned * hint: use the random number to target an object within the array provided.
        console.log("Name Value: ", data.name); // - The name of a single character
        console.log("Image URL: ", data.imageURL); // - The imageURL of the character that is provided.
        // - CATCH any error that is returned.
    } catch (error) {
        console.error(error);
    }
}
INFO(url, randomNumber); // - Invoke your function and pass with both variables as arguments.
/*

    ------------------------------------------------------------------------------
    API: Disney URL to use
    https://api.disneyapi.dev/characters
    
    
    Additional Documentation:
    https://disneyapi.dev/
    */