console.log("it works page2");
const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const product = urlParams.get("product");

console.log(product);

const player1 = urlParams.get("player1")
console.log(player1)