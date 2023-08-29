function sortByAvailabilityAndPrice(products) {
  const stock = [];
  const noStock = []
  products.forEach(element => {
    element.inStock ? stock.push(element) : noStock.push(element);
  });

  const arrayFinal = stock.sort( (a,b) => a.price - b.price).concat(noStock.sort( (a,b) => a.price - b.price)) 
  console.log(arrayFinal);
}

// function sortByAvailabilityAndPrice(products) {
//   return [...products].sort((a, b) => {
     
//     if (b.inStock != a.inStock)
//       return a.inStock ? -1 : 1

//     return (a.price - b.price)
//   })
// }

//input:
const products = [
  { name: "product1", price: 10, inStock: true },
  { name: "product2", price: 20, inStock: false },
  { name: "product3", price: 15, inStock: true },
  { name: "product4", price: 5, inStock: false },
]

// console.log(products);
sortByAvailabilityAndPrice(products)

// Output:
// [
  // { name: "product1", price: 10, inStock: true },
  // { name: "product3", price: 15, inStock: true },
  // { name: "product4", price: 5, inStock: false },
  // { name: "product2", price: 20, inStock: false },
// ]