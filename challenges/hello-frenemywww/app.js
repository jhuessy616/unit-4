

let userInput = document.getElementById("user-input");
let computerResponse = document.getElementById("computer-response");
let nameForm = document.getElementById("name-form");
nameForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let input= userInput.value

    let enemyList = ['darth vader', 'voldemort', 'palpatine', 'lex luthor'];
    let stringEnemyList = enemyList.toString();
    
if (input.toLowerCase().trim()=== "darth vader"){
    computerResponse.textContent = "Noooooo! That's impossible!";
    computerResponse.style.color = "red"
  }
   else if (enemyList.includes(input.toLowerCase().trim()) || (stringEnemyList.includes(input.toLowerCase().trim()))) {
    computerResponse.textContent = "GO AWAY!";
    computerResponse.style.color = "red"
  }
  else {
    computerResponse.textContent = "Hi " + input.trim() + ", it's so good to see you!";
    computerResponse.style.color = "green"
}
    nameForm.reset();
    })