function myMap(array, myFunction) {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    result.push(myFunction(element));
  }
  return result;
  // console.log(result);
}

// Input: 
myMap([1,2,3,4], (num) => num * 2)
console.log(myMap);
// Output: [2,4,6,8]

// Input: 
// myMap([
//   {name: "Milo", age: 2},
//   {name: "Snow", age: 6}],
//   (pet) => pet.name)

// Output: ["Milo", "Snow"]