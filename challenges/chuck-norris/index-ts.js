"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("it works chuck-norris");
asyncChuckFetch();
// TODO: Create a function that will conduct the fetch
let jokeList = [];
let currentJoke = document.getElementById("current-joke");
function asyncChuckFetch() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = `https://api.chucknorris.io/jokes/random`;
            const response = yield fetch(url);
            const joke = yield response.json();
            console.log(joke.value);
            // clearHistory();
            displayHistory(joke.value);
            // jokeList.forEach((chuckJoke) => displayHistory(chuckJoke));
            // jokeList.push(joke.value);
        }
        catch (err) {
            console.error(err.message);
        }
    });
}
// 1. grab the parent and store it in a variable (ul is the parent).
// 2. create a new element that will be placed on the parent (li).
// 3. replace the innerText of the new element
// 4. append the child to the parent
function displayHistory(joke) {
    let historyList = document.getElementById("history"); // Parent
    let currentJokeToBeAddedElement = document.createElement("li"); // Child
    currentJokeToBeAddedElement.innerText = currentJoke.innerText;
    if (currentJoke.innerText !== "") {
        historyList.appendChild(currentJokeToBeAddedElement);
    }
    currentJoke.innerText = joke;
}
function clearHistory() {
    let historyList = document.getElementById("history"); // Parent
    while (historyList.firstChild) {
        historyList.removeChild(historyList.firstChild);
    }
}
