let frienGreeting = document.getElementById("friend-greeting");

let friendGreeting = document.getElementById("friend-greeting");

let queryString = window.location.search;

let params = new URLSearchParams(queryString);

let friendName = params.get("name");

friendGreeting.textContent = "Hello " + friendName;
