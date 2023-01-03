let friendGreeting = document.getElementById("friend-greeting");

let queryString = window.location.search;
console.log(queryString)
let params = new URLSearchParams(queryString);
console.log(params)
let friendName = params.get("name");
console.log(friendName)
friendGreeting.textContent = "Hello " + friendName;
