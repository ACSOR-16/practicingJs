function doTask1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Task 1'), 300);
  });
}

function doTask2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Task 2'), 300);
  });
}

function doTask3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Task 3'), 300);
  });
}

async function runCode() {
  const rta1 = await doTask1();
  const rta2 = await doTask2();
  const rta3 = await doTask3();
  return console.log([rta1, rta2, rta3]);
}

runCode()