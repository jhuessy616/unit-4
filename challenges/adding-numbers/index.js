// TODO: Be able to grab input 1 and input 2 values
// TODO: Be able to grab element of the form so I can add event listener to it. 
// Todo:function to be called when the user clicks on the submit(form eventlistener)

let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");
let sumDisplay = document.getElementById('sum-display');
let paraDisplay = document.querySelector("p");

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.log("handle submit worked");
    if (isNaN(input1.value) || isNaN(input2.value)){
        alert("You have typed in an invalid value: needs to be a number")
        // return will exit out of the function. no more lines of code run. 
    return;
}
     //  add a + or you can parseInt(input1.value) or Number(input1.value)
    let total = +input1.value + +input2.value

    // alert("The total is: " + total);
    sumDisplay.innerText = total;
      paraDisplay.style.display = "block";

}

