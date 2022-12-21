let response = document.getElementById("computer-response")
let form = document.getElementById("name-form")
let input = document.getElementById("user-input")
let submitBtn = document.getElementById("submit")
let enemies = ["Darth Vader", "Voldemort", "Palpatine", "Dolores Umbridge", "Lex Luthor"]

submitBtn.addEventListener("click", (event) => {
    event.preventDefault()
    
    // original
//     enemies.includes(input.value)
//     ? response.textContent = `Go away, ${input.value}`
//     : response.textContent = `Welcome, ${input.value}`
// })

  // Going Further
    let result = enemies.find(enemy => enemy.toLowerCase().includes(input.value.toLowerCase()))
    
    if (result) {
        response.textContent = `Go Away ${input.value}`
        response.style.color = "red"
    } else {
        response.textContent = `Welcome ${input.value}`
        response.style.color = "lightblue"
    }

    input.value = ""
})


// could use a break problem would be if there's another match later on  
//  for (enemy of enemies) {
//         if (enemy == "Dolores Umbridge") {
//             console.log(enemy)
//             break
//         }
//     }
    
  
    
    
    // TODO me trying to write out a break need to look at todays video
//     forEach((enemy) => {
//         if (enemy.includes(input.value)) {
//             response.textContent = `Go away, ${input.value}`;
//             break
//         }
//         else {
//             response.textContent = `Go away, ${input.value}`;
//         }
//     }
// })
    //   for (enemy of enemies) {
    //     if (enemy.includes(input.value)) {
    //         response.textContent = `Go away, ${input.value}`;
    //       break}
    //     else { response.textContent = `Welcome, ${input.value}`; }
    // }
     
    // })
    


