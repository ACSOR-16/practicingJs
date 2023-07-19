/**
 time complexity    => o( n + 3 ) = (n)
 spacial complexity => o( n )
 aux space => O( 1 )
*/

function linearSearch(array, key) {
  for (let index = 0; index < array.length; index++) { //O(n)
    if (array[index] === key) { // O (1)
      return index; // O (1)
    }    
  }
  return -1; // O (1)
}