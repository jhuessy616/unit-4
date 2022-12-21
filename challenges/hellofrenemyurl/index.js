let response = document.getElementById("computer-response");
let form = document.getElementById("name-form");
let input = document.getElementById("user-input");
let submitBtn = document.getElementById("submit");
let enemies = [
  "Darth Vader",
  "Voldemort",
  "Palpatine",
  "Darthrob",
  "Dolores Umbridge",
  "Lex Luthor",
];

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // Going Further
  let filteredList = enemies.filter((enemy) => {
    // Darth Vader from the array
    // Darth from the input
    let name = enemy.toLowerCase().split(" ");
    if (name.indexOf(input.value.toLowerCase()) > -1) {
      return enemy;
    }
  });
  let result = enemies.find((enemy) =>
    enemy.toLowerCase().includes(input.value.toLowerCase())
  );
  console.log(result);

  if (filteredList.length > 0) {
    response.textContent = `Go Away ${input.value}`;
    response.style.color = "red";
  } else {
    // response.textContent = `Welcome ${input.value}`;
    // response.style.color = "lightblue";
    document.location = `greeting.html?name=${input.value}`;
  }

  input.value = "";
});