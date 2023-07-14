function count(num) {
  for (let index = 0; index < num; index++) {
    console.log(index);
  }
}

function repeatArr(arr) {
  let repeatArray = arr;
  return repeatArray;
}

function convertToString(arr) {
  let result = arr.map( element => element.toString());
  return result
}

function arrayBidi(value) {
  let arr = new Array(value);
  for (let index = 0; index < valor; index++) {
    arr[index] = new Array(value).fill(0);
  }
  return arr;
}