function calculateTip (billAmount, tipPercentage) {
  const calculate = billAmount * tipPercentage/100;
  return calculate;
}

// function calculateTip(billAmount, tipPercentage) {
//   return billAmount * tipPercentage/100;
// }

console.log(calculateTip(150, 10));