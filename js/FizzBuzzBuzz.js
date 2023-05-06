let count = 0;

function fizzBuzz(num) {
  while (num < 100) {
    num++
    
    if (num % 3 === 0) {
      console.log("fizz");
    }
    if (num % 5 === 0) {
      console.log("buzz");
    }
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("fizzBuzz");
    }
    else {
      console.log(num);
    }
  } 
}

fizzBuzz(count)
