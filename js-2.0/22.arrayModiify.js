function arrayModified() {
  Array.prototype.myFilter = function (func) {
    const newArray = [];

    for (let index = 0; index < this.length; index++) {
      const element = this[index];
      console.log(this);
      if (func(element)) {
        console.log(func);
        newArray.push(element);
      }
    }

    return console.log(newArray);
  };
}

// Input:
const array = [1,2,3,4,5,6]
arrayModified()
array.myFilter(num => num % 2 === 0)
// Output: [2,4,6]