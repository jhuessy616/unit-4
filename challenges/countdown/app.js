let startTimeout = document.getElementById("start-timeout")
let timeoutDisplay = document.getElementById("timeout-display")
let startInterval = document.getElementById("start-interval")
let intervalDisplay = document.getElementById("interval-display")
startInterval.style.display = "none"

startTimeout.addEventListener("click", (e) => {
    timeoutDisplay.textContent = "Getting ready!"
    setTimeout(() => {
        timeoutDisplay.textContent = "READY????"
        startInterval.style.display = "block"
        startTimeout.style.display = "none"
    }, 1000);
})



startInterval.addEventListener("click", (e) => {
    console.log(e)
    
    let count = 5
    
    let myInterval = setInterval(() => {
        startInterval.disabled = true
        if (count > 0) {
            intervalDisplay.style.color = "red"
            intervalDisplay.textContent = count
            count --
        } else {
            intervalDisplay.style.color = "green"
            intervalDisplay.textContent = "GO!"
            clearInterval(myInterval)
            startInterval.disabled = false
        }
    }, 1000)
    console.log(myInterval)
})


// ANother way with flags
let isRunning = false

startInterval.addEventListener("click", (e) => {
    let count = 5
    
    if (!isRunning) {
        let myInterval = setInterval(() => {
            isRunning = true
            // startInterval.disabled = true
            if (count > 0) {
                intervalDisplay.style.color = "red"
                intervalDisplay.textContent = count
                count --
            } else {
                intervalDisplay.style.color = "green"
                intervalDisplay.textContent = "GO!"
                clearInterval(myInterval)
                isRunning = false
                // startInterval.disabled = false
            }
        }, 1000)
    }
})