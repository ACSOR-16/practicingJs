function count(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  
  }
}

console.time('Duration of the algorithm')
count(5);
console.timeEnd('Duration of the algorithm')