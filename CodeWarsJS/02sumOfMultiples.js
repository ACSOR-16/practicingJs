function sumOfMultiples(n, m) {
  const total = [];

  if (n <= 0 || m < 0) {
    console.log("INVALID");
    return false;
  }

  for (let index = n; index < m; index +=n) {
    if (index % 2 === 0 || index % 3 === 0 ) {
      const element = index;
      total.push(element);

    } else {
      const element = index;
      total.push(element);
    }
  }

  const sumTotal = total.reduce( (accumulator, currentValue) => accumulator + currentValue, 0);
  // return sumTotal;
  console.log(total, sumTotal);
}

function sumMul(n, m) {
  if (n >= m) return "INVALID"

  let sumTotal = 0;

  for (let i = n; i < m; i+=n) {
    sumTotal += i;
    console.log(sumTotal);
  }

  console.log(sumTotal);
}

sumOfMultiples(2, 9);
sumOfMultiples(3, 13);
sumOfMultiples(4,-7);
sumOfMultiples(35,3640);

sumMul(2, 9);
sumMul(3, 13);
sumMul(4,-7);
sumMul(35,3640);