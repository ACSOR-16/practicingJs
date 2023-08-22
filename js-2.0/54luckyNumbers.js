function twoSum(array1, array2) {
  return Number(array1.join('')) + Number(array2.join(''))
}

// console.log(twoSum([1, 2, 3], [0, 7]));
//=> 130);

function luckyNumber(value) {
  const valueOne = String(value).split('').join('')
  const valueTwo = String(value).split('').reverse().join('');
  
  if (valueOne === valueTwo) {
    return true;
  } else {
    return false;
  }

}

console.log(luckyNumber(1441));
//=>  true

console.log(luckyNumber(123));
//=> false);

function errorMessage(input) {
  if (!input) {
    return "Required field"
  } else if (Number(input)) {
    return ""
  } else {
    return 'Must be a number besides 0'
  }
}

console.log(errorMessage('123'));
// => ''

console.log(errorMessage(undefined));
// => 'Required field'

console.log(errorMessage('abc'));
// => 'Must be a number besides 0'