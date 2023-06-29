function isSquare(n){
  if (Number.isInteger(Math.sqrt(n))) return "Is square";
  else console.log("Is not square");
}

isSquare(3);
isSquare(4);
isSquare(9);
isSquare(26);