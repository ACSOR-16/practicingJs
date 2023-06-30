function findArray(arr1, arr2){
  const arr3 = [];

  if( arr1.length === 0 || arr2.length === 0){
    return [];
  }
  
  for (let i = 0; i < arr2.length; i++) {
      const element = arr1[arr2[i]];
      arr3.push(element)
  }
  
  console.log(arr3);
  return arr3;
}

function findArray(arr1, arr2){
  console.log(
    arr2.filter( i  => i< arr1.length ).map( i => arr1[i])
  );
  // return arr2.filter( i  => i< arr1.length ).map( i => arr1[i] )
}

findArray(['a', 'a', 'a', 'a', 'a'], [2, 4]);
findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]);
findArray([1, 2, 3, 4, 5], [0])
findArray([1, 2, 3, 4, 5], [4,2,0])
findArray([1,2,3], [])