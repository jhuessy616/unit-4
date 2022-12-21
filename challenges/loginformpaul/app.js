
/* 
 ? Login Form

 * Create a form in your index.html that consists of:
 * email & password inputs
 * make sure to give it basic styling with flex or grid to center it
 * create a "submit" button that when pressed will take the content out of the form and update a makeshift db array
*/

let db = []
console.log(db)

let btn = document.getElementById("submit")

// btn.addEventListener("click", (event) => {
//     event.preventDefault()

//     db.push({
//         email: event.target.form[0].value,
//         password: event.target.form[1].value
//     })
//     console.log(db)
// })