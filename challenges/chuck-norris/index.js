console.log("it works chuck-norris");
let jokeDisplay = document.getElementById("joke-display");
// TODO: Create a function that will conduct the fetch

async function asyncChuckFetch() {
    try {
        const url = "https://api.chucknorris.io/jokes/random";
        const response = await fetch(url)
        const data = await response.json()
        const joke= data.value
        displayHistory(joke);
        

    } catch (err) {
        console.error(err.message);
    }
    
    
       // 1. grab the parent and store it in a variable (ul is the parent).
// 2. create a new element that will be placed on the parent (li).
// 3. replace the innerText of the new element
// 4. append the child to the parent
    function displayHistory(joke) {

    let historyList = document.getElementById("history"); // Parent
        let currentJokeToBeAddedElement = document.createElement("li"); // Child
        if (jokeDisplay.innerText !== "") {
            currentJokeToBeAddedElement.innerText = jokeDisplay.innerText;
            historyList.append(currentJokeToBeAddedElement);
        }
         jokeDisplay.innerText = joke;
}



}



asyncChuckFetch();