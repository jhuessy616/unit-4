// ! PAul playing with colors and what changes what 
// ? Review DOM Selector

// HTML Collection Access
let listItem = document.querySelectorAll(".list-item")
listItem[0].textContent = "Get milk and bread"

listItem.forEach(i => i.style.color = "red")

// ! Included in the list but unable to be accessed until after initialization.
console.log(listItem[5])

// ? How to create an element?

let li = document.createElement("li")
li.textContent = "Get more project time"
// li.style.color = "red"
li.className = "list-item"


// HTMLCollection
console.log(document.getElementsByClassName("list-item"))
// Node List
console.log(document.querySelectorAll(".list-item"))

/* 
    * HTML Collection selector DOES NOT update DOM-created elements
    * NodeList selector DOES update DOM-created elements
*/

let list = document.getElementsByClassName("list")[0]
list.appendChild(li)