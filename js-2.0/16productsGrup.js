function groupProducts(products, category) {
  const group = products.filter( product => {
    if(product.category === category){
      return product
    }
  });

  console.log(group);
  return {
  products: group.map(product => product.name).join(", "),
  totalPrice: group.reduce( (a,b) => a + b.price, 0)
  }
}

// Input:
const products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];

console.log(groupProducts(products, "Electronics"))

// Output: {
  // products: "Smartphone, Laptop",
  // totalPrice: 2000,
// }