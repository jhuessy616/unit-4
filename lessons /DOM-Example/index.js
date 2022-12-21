console.log("Running from the Index.js file");

// use getElementById to change the text of the id="header to Hello World"

/* 
1. create a variable to store the header element
2. document.getElementById('[id name]')
*/

let header = document.getElementById("header");
console.log(header.innerText); // output: "DOCUMENT OBJECT MODEL (DOM)"
// innerText is the text inbetween the two tags
console.log("INNER HTML", document.getElementById("header").innerHTML);
// header.innerText = "Hello <em>World</em>"; will print the em 
header.innerHTML = "Hello <em>World</em>";

// Difference between innerText and innerHTML
// InnerHTML will convert HTML code while innerText will treat it as a string literal
// also exists textcontent

// ? Change the color of the header to blue
header.style.color = "blue";
header.style.fontSize = "45px";


// ! getElementsByClassName


let errorList = document.getElementsByClassName("error-list");
console.log(errorList);

// ? Change the first bullet point inner text to  "The First Error has Changed"

errorList[0].innerHTML = "The First Error has Changed";
// can also use innerText

// change second color to be red
errorList[1].style.color = "red";

// ? Create a for loop that will loop the error list and change all the colors to purple
for (let i = 0; i < errorList.length; i++){
    errorList[i].style.color = "purple";
}
for (error of errorList) {
    error.style.color = "blue";
}

// An HTMLCollection is not an Array!
/* 
An HTMLCollection may look like an array, but it is not.
You can loop through an HTMLCollection and refer to its elements with an index.
But you cannot use Array methods like push(), pop(), or join() on an HTMLCollection. */

// ! getElementsByTagName
let pTags = document.getElementsByTagName("p");
console.log("pTags", pTags);

// ? Make the first  LI Tag italic
//  use style font-style: "italic"

let liTags = document.getElementsByTagName("li");
console.log("liTags", liTags);
liTags[0].style.fontStyle = "italic";
// with this you could target any li on the page 

// Dom can be particularly helpful for long style changes.

// ! querySelector
// - querySelector - it will only give you the first element that meets the requirements.
//  will returb an element
// ? Store the first H1 tag using querySelector
let querySelectorHeader = document.querySelector("h1");
console.log("querySelector header", querySelectorHeader.innerText);

// ? consol.log the innerText of para as the ID using querySelector

let querySelectorIdExample = document.querySelector("#para");
console.log(querySelectorIdExample.innerText);

// using class example 
let querySelectorClassExample = document.querySelector(".error-list");
console.log("querySelectorClassExample", querySelectorClassExample.innerText);

// ! querySelectorAll
// - querySelectorAll will give you all the elements that match the requirements

let querySelectorAllHeaders = document.querySelectorAll("h1");
console.log("querySelectorAllHeaders", querySelectorAllHeaders);

let querySelectorAllHeader3 = document.querySelectorAll("h3");
console.log("querySelectorAllHeader3", querySelectorAllHeader3);
