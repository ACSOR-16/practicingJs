function arrayModified() {
  Array.prototype.myFilter = function (func) {
    const newArray = [];

    for (let index = 0; index < this.length; index++) {
      const element = this[index];
      if (func(element)) {
        newArray.push(element);
      }
    }

    return newArray;
  };
}

// Input:
const array = [1,2,3,4,5,6]

array.myFilter(num => num % 2 === 0)
// Output: [2,4,6]