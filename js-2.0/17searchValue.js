function searchValue(array, value) {
  const flat = array.flat();
  if(!flat.some(num => num === value)){
    throw new Error("value not found")
  }
  
  const row = []
  let column = null

  array.forEach(element => {
    // console.log(element)
    const index = element.findIndex(num => num === value);
    row.push(index);
    if(index >= 0 ){
      column = index
    } 
    
  });
  console.log(row, column);

  return {
    row: row.findIndex(num => num >= 0),
    column: column
  }
  
}

// function searchValueTwo(array, value) {
//   const singleArray = array.flatMap((x) => x);
//   const index = singleArray.findIndex((val) => val === value);
//   if (index === -1) {
//     throw new Error("Valor no found");
//   }

//   const row = Math.floor(index / array[0].length);
//   const column = index % array[0].length;

//   return { row, column };
// }

// Input:
const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const value = 6

console.log(searchValue(array, value))

// Output:
// {
//   row: 1,
//   column: 1,
// }