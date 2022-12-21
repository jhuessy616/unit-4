let btn = document.querySelector("button")
console.log(btn)

// btn.addEventListener("click", (e) => {
//     e.preventDefault()
    
//     console.log({
//         email: e.target.form[0].value,
//         name: e.target.form[1].value,
//         message: e.target.form[2].value
//     })
// })

// ? Retrieving and decoding query params using:
// document.location.search --> for data
// URLSearchParams --> constructor for decoding

let params = new URLSearchParams(document.location.search)
console.log(params)
let email = params.get("email")
console.log(email)
let name = params.get("name")
console.log(name)
let msgContent = params.get("msg-content")