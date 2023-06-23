let isTurnOnLight = false

function printSOS() {
  console.log(". . . _ _ _ . . .");
}

function turnOnOfLights(params) {
  if (isTurnOnLight) {
    isTurnOnLight = false;
  } else {
    isTurnOnLight = true;
  }
}

turnOnOfLights();
console.log(isTurnOnLight);

let i = 0;
while (isTurnOnLight && i <= 10) {
  printSOS();
  i++;
}