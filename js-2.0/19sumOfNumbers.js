function getSum(a, b) {
  let initial = a;
  let final = b;
  let sumTotal = 0;

  if (a >= b) {
    initial = b;
    final = a;
  }
  for (let i = initial; i <= final; i++) {
    const element = i;
    sumTotal += element
  }
  
  console.log(sumTotal);

}


getSum(1, 0)  //--> 1 (1 + 0 = 1)
getSum(1, 2)  //--> 3 (1 + 2 = 3)
getSum(0, 1)  //--> 1 (0 + 1 = 1)
getSum(1, 1)  //--> 1 (1 since both are same)
getSum(-1, 0) // --> -1 (-1 + 0 = -1)
getSum(-1, 2) // --> 2 (-1 + 0 + 1 + 2 = 2)
getSum(0,-1) // --> -1 (-1 + 0)