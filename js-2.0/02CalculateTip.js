function calculateTip (billAmount, tipPercentage) {
  const calculate = billAmount * tipPercentage/100;
  return calculate;
}

console.log(calculateTip(150, 10));