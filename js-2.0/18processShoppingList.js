function processShoppingList(list) {
  list.forEach( product => {
    if(product["name"].includes("dales")){
      console.log(product.price);  
      product.price = product.price * (1 - 0.2);
    }

    product.price = (product.price * product.quantity)
    delete product.quantity
  })

  return list.reduce( (acc, curr) => acc + curr.price, 0)
}


// function processShoppingListTwo(list) {
//   let total = 0;

//   let newList = list.map(item => {
//     if (item.name.includes("oferta")) {
//       item.price = item.price * 0.8;
//     }
//     item.price = item.price * item.quantity;

//     total += item.price;

//     let { quantity, ...auxItem } = item;
//     return auxItem;
//   })

//   Object.assign(list, newList);

//   return total;
// }


// Input:
const shoppingList = [
  { name: "Bread", price: 20, quantity: 2 },
  { name: "Milk", price: 25, quantity: 1 },
  { name: "Apples dales ", price: 10, quantity: 3 },
]

console.log(processShoppingList(shoppingList))

// Output: 89
console.log(shoppingList)
// the original array must be modifyEl
// Output:
// [
//   { name: "Bread", price: 40 },
//   { name: "Milk", price: 25 },
//   { name: "Apple dales ", price: 24 },
// ]