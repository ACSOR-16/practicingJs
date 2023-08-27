function doTask1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Task 1'), 300);
  })
}

function doTask2() {
  return new Promise( resolve => {
    setTimeout(() => resolve('Task 2'), 300);
  })
}

function doTask3() {
  return new Promise( resolve => {
    setTimeout(() => resolve('Task 3'), 300);
  })
}

// import { doTask1, doTask2, doTask3 } from './tasks';

function runCode() {
  const strings = [];
  return doTask1()
    .then(task1 => {
    strings.push(task1);
    return doTask2();
    })
    .then(task2 => {
      strings.push(task2);
      return doTask3();
    })
    .then(task3 => {
      strings.push(task3);
      return console.log(strings);;
    });

}

runCode();