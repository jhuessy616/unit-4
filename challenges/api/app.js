let url = "https://pokeapi.co/api/v2/pokemon/"
let submitBtn = document.getElementById("submit")
let name = document.getElementById("name")
let weight = document.getElementById("weight")
let moves = document.getElementById("moves")
let img = document.getElementById("img")

let renderData = (data) => {
    console.log(data)
    name.innerText = `Name: ${data.name}`
    weight.innerText = `Weight: ${data.weight}`
    img.src = data.sprites.front_shiny

    data.moves.forEach(move => {
        console.log(move.move.name)
        let p = document.createElement("p")
        p.textContent = `${move.move.name}`
        moves.appendChild(p)
    })
}

let getData = async (pokemon) => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await res.json()
    
    renderData(data)
}


submitBtn.addEventListener("click", (e) => {
    let search = document.getElementById("search-input").value
    
    getData(search)
})