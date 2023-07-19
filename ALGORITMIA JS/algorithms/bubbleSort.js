/**
 time complexity    => o( n*n+1+1+1+1+1+1+1 ) = (n^2)
 spacial complexity => o( n )
 Aux space => O( 4 )
*/

function bubbleSort(array) {
  let long = array.length; // O(1)
  for (let i = 0; i < long; i++) {  //O(1)
    for (let j = 0; j < long; j++) { //O(n)
      if (array[i] > array[j + 1]) { //O(1)
        let temporal = array[j]; //O(1)
        array[j] = array[j + 1]; //O(1)
        array[j + 1] = temporal; //O(1) 
      }
    }
  }

  return array; //O(1)
}

console.log(bubbleSort([9,5,3,5,4,7,3,1,8,2]));