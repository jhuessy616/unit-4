// ? Review DOM Selector
let listItem = document.querySelectorAll(".list-item")
listItem[0].textContent = "Get milk and bread"

// ? How to create an element?

let li = document.createElement("li")
li.textContent = "Get more project time"
// li.style.color = "red"
li.className = "list-item"
console.log(li)
// document.body.appendChild(li)
// ^this will append at the end. no bueno, after div box. 


// one way 
// if you want it to match it needs to be an HTML COllection not element
let list = document.getElementsByClassName("list")[0]
list.appendChild(li)

// let list = document.querySelector(".list")
// console.log(list)
// list.appendChild(li)


// HTMLCollection
console.log(document.getElementsByClassName("list-item"))
// Node List
console.log(document.querySelectorAll(".list-item"))

/* 
    * HTML Collection selector DOES update DOM-created elements
    * NodeList selector DOES NOT update DOM-created elements
*/

// HTMLCollection
// console.log(document.getElementsByClassName("list-item"))
// ^ this will keep set styling 
// Node List
// console.log(document.querySelectorAll(".list-item"))
// ^ this will not 
// let list = document.getElementsByClassName("list")[0]
// list.appendChild(li)

// ! Event Listeners
/* 
    * allows us to listen for an event and trigger a function when it occurs
    * utilizes .addEventListener method on target element
        * takes an event as a string (first parameter)
        * takes a callback fx that fires when the event occurs
        * .addEventListener("event", (event) => { callback fx })
*/


let input = document.querySelector(".input")

// ? Ex of event listener that displays text being typed

// input.addEventListener("keyup", (event) => {
//     console.log(event.target.value)
// })

let btn = document.querySelector(".submit")

btn.addEventListener("click", (e) => {
    // 1. Create new element
    let li = document.createElement("li")
    // 2. Append the value of what's in input to the element
    li.textContent = input.value
    // 3. Give new element a class name for styling purposes
    li.className = "list-item"
    // 4. Append new item to our list
    list.appendChild(li)
    // 5. Clear the input field
    input.value = ""
})
//  ^ last bit will clear out input
// Challenge
/* */

//  or without using input
// btn.addEventListener("click", (e) => {
//     console.log(e.target.previousElementSibling.value)
// })

// ! Build out an event listener on remove button to console log event on click
// ! 1:55
// ! .remove

// let removeBtn = document.querySelector(".remove")

// removeBtn.addEventListener("click", (e) => {
//     console.log(e);
// })

// removeBtn.addEventListener("click", (e) => {
//     list.removeChild(list.lastElementChild)
// })

// rmvBtn.addEventListener("click", e => {
//     let length = document.getElementsByClassName("listItem").length - 1
//     let li = document.getElementsByClassName("listItem")[length]
//     console.log(li)
//     let ul = document.getElementById("ulToDo")
//     ul.removeChild(li)
// })

// ! remove a specific thing

let rmvBtn = document.querySelector(".remove")

let allItems = document.getElementsByClassName("list-item")


// This kept alerting you can't do that even when you could 
rmvBtn.addEventListener("click", (e) => {
    
    for (i of allItems) {
        if (i.textContent == input.value) {
            i.remove()
        }
        else {
            null
        }
    }
    input.value = ""
    // list.removeChild(list.lastElementChild)
})

function forBtn() {
    console.log("Button clicked!")
}
    



