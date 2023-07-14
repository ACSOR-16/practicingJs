const performance = require('perf_hooks');

function count(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  
  }
}

let startTime = performance.performance.now();
count(5);
let endTime = performance.performance.now();
let duration = endTime - startTime;

console.log(`The algorithm count ha has lasted ${duration}ms`);