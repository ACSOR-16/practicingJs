function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq))) {
    console.log(" Is a sqr");
    for (let i = sq + 1; i < i + 1; i++) {
      const element = i;
      console.log(element);
      if (Number.isInteger(Math.sqrt(element))) {
        return element;
      }
    }
  } else {
    console.log("Is not a sqrt");
    return -1;
  }

}

// function findNextSquare(sq) {
//   return Math.sqrt(sq)%1 ? -1 : Math.pow(Math.sqrt(sq)+1,2);
// }

findNextSquare(114);
findNextSquare(9);
