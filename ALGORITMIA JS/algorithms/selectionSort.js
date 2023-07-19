/**
 time complexity    => o( n*n+1+1+1+1+1+1+1 ) = (n^2)
 spacial complexity => o( n + 5 )
 aux space => O( 5 ) = O( n )
*/

function selectionSort(array) {
  let long = array.length; // O(1)
  
  for (let i = 0; i < long; i++) { // O(n)
    let min = i;; // O(1)
    for (let j = 0; j < long; j++) { // O(n)
      if (array[j] < array[min]) { // O(1)
        min = j; // O(1)
      }
      
    }
    if (min != i) { // O(1)
      let temporal = array[i]; // O(1)
      array[i] = array[min]; // O(1)
      array[min] = temporal; // O(1)
    }
  }

  return array
}