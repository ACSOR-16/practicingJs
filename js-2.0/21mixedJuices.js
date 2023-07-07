function timeToMixJuice(name) {
  switch (name) {
  case 'Pure Strawberry Joy':
    return 0.5
    break;
  case 'Energizer':
    return 1.5
    break;
  case 'Green Garden':
    return 1.5
    break;
  case 'Tropical Island':
    return 3
    break;
  case 'All or Nothing':
    return 5
    break;
  default:
    return 2.5
  }
}

function limesToCut(wedgesNeeded, limes) {
  const array = [];
  let toCut = 0;
  let i = 0;

  while (toCut <= wedgesNeeded) {
    if (limes[i] == "small") {
      toCut += 6;
    }
    if (limes[i] == "medium") {
      toCut += 8;
    }
    if (limes[i] == "large") {
      toCut += 10;
    }
    if (!limes[i] || wedgesNeeded == 0) {
      break;
    }
    array.push(limes[i])
    i++;
  }

  console.log(array.length);
}

function remainingOrders(timeLeft, orders) {
  let i = 0;
  let time = 0
  
  do {    
    orders.shift(orders[i])
    time += timeToMixJuice(orders[i]);
    i++;
  } while (time <= timeLeft)

  console.log(orders);
}

remainingOrders (7, [
  'Tropical Island',
  'Energizer',
  'Limetime',
  'All or Nothing',
  'Pure Strawberry Joy',
]);
remainingOrders(13, [
  'Pure Strawberry Joy',
  'Pure Strawberry Joy',
  'Vitality',
  'Tropical Island',
  'All or Nothing',
  'All or Nothing',
  'All or Nothing',
  'Green Garden',
  'Limetime',
])

limesToCut(42, [
  'small', 
  'large', 
  'large', 
  'medium', 
  'small', 
  'large', 
  'large',
  'medium',
]);
limesToCut(25, [
  'small', 
  'small', 
  'large', 
  'medium', 
  'small'
]);
limesToCut(0, [
  'small', 
  'large', 
  'medium'
]);