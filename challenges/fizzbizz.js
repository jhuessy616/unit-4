/*
FIZZBUZZ LOOP CHALLENGE (pair coding)
************
- write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
        - prints out the number if none of the above are true.
- create a loop that counts to 100.
- Pass each iteration through a conditional.
*/

for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log("fizz buzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

// With Paul make it a function
function fizzBuzz(count) {
  //  start    stop        step
  for (i = 1; i <= count; i = i + 1) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);

// can do two ifs but they will print on dif lines 
// if (i % 3 == 0)

  
    

    function fizzBuzz(start, stop, step) {
        //  start    stop        step
        for (i = start; i <= stop; i = i + step) {
            // tenaries 
            i % 15 == 0 ? console.log("Fizz Buzz")
                : i % 3 == 0 ? console.log("Fizz")
                    : i % 5 == 0 ? console.log("Buzz")
                        : console.log(i)
        }
    }
fizzBuzz(1, 100, 1)
                 
// arrow functions 
let fizzBuzz = (start, stop, step) => {
    //  start    stop        step
    for (i = start; i <= stop; i = i + step) {
        // if (i % 15 == 0) {
        //     console.log("Fizz Buzz")
        // } else if (i % 3 == 0) {
        //     console.log("Fizz")
        // } else if (i % 5 == 0) {
        //     console.log("Buzz")
        // } else {
        //     console.log(i)
        // }

        i % 15 == 0 ? console.log("Fizz Buzz")
        : i % 3 == 0 ? console.log("Fizz")
        : i % 5 == 0 ? console.log("Buzz")
        : console.log(i)
    }
}

fizzBuzz(0, 1000, 2)