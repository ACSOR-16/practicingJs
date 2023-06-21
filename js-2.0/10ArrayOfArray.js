function findArray(arr1, arr2) {
  let arr3 = arr1.map( element => {
    if (element === arr2.forEach(element => {
      return element
    })) {
      return element;
    }
  });

  // for (let i = 0; i < arr1.length; i++) {
  //   for (let index = 0; index < arr2.length; index++) {
  //     const element2 = arr2[index];
  //     console.log(element2 + " pertence al array 2");
  //     if( i == element2) {
  //       const element = arr1[i];
  //       arr3.push(element);
        
  //       console.log(element);
  //     }
  //   }
  // }
  
  console.log(arr3);
  return arr3;
}

// findArray(['a', 'a', 'a', 'a', 'a'], [2, 4]);
// findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]);
// findArray([1, 2, 3, 4, 5], [0])
findArray([1, 2, 3, 4, 5], [4,2,0])
