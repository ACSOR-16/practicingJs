function createCalculator() {
  let total = 0;
  return {
    add: function(value){
      total += value;
      return total;
    },
    subtract: function(value){
      total -= value;
      return total;
    },
    multiply: function(value){
      total *= value;
      return total;
    },
    divide: function(value){
      total /= value;
      return total;
    },
    clear: function(){
      total =  0;
      return total;
    },
    getTotal: function(){
      return total;
    },
  }
}

// Input:
const calculator = createCalculator()
// calculator.add(10)
console.log(calculator.add(10));
// Output: 10

// const calculator = createCalculator()
// calculator.add(10)
// calculator.subtract(-10)

// Output: 20

// const calculator = createCalculator()
// calculator.add(10)
// calculator.subtract(-10)
// calculator.clear()

// Output: 0