let btn = document.getElementById('characterButton')// - btn: which will connect to the button in index.html

let display = document.getElementById('display')  // - display: which will target the empty div in index.html

// - create a function called "displayChar" that calls upon the info() function within disneyFetch.js. 
function displayChar() {
    btn.addEventListener("click", INFO)
    }
displayChar();
//  {
//     /*      - Create a new variable to handle the random value from 0-50. */
    let randomCharNumber = Math.floor(Math.random()*3);
    // document.body.createElement("h1");

// //    let document.getElementsByTagName("h1")
//     document.createElement("img");
// }




    /*
            - Create an h1 and img element
                - h1 element will hold the name of the character randomly selected.
                - img element will source to the character imageUrl.
                - for the alt property in the image element, display a string that states 
                
                */

/*
- This will fire off when the user clicks the Character button.
            be sure to comment out unecessary code such as console logs and the invocation of info() within that file.
            * you will need to modify that function to return information rather than just console log it. // How to do this??? "return data;"?
            * remember that it returns a promise.
*/

/* - Within the function
- Create a new variable to handle the random value from 0-50.
- Create an h1 and img element
    - h1 element will hold the name of the character randomly selected.
    - img element will source to the character imageUrl.
    - for the alt property in the image element, display a string that states "Image of" and the characters name.
    - change the style attribute of the image element so that it has a height and width of 300px.
- Append the elements to the empty div in the HTML.
    - The h1 element should be above the image. */