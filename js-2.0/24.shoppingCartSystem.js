export class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  addToCart() {
    throw new Error(
      "La logic de este method must be implemented por las child class"
    );
  }
}
// import { Product } from "./product";

import { Product } from "./product";

export class Article extends Product {
  addToCart() {
    return `adding ${this.quantity} units of the article ${this.name} to the cart`;
  }
}

export class Service extends Product {
  addToCart() {
    return `adding the ${this.name} service to te cart`;
  }
}

export class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    product.addToCart();
    this.products.push(product);
  }

  deleteProduct(product) {
    this.products = this.products.filter((item) => item.name !== product.name);
  }

  calculateTotal() {
    const total = this.products.reduce(
      (sum, currentItem) => currentItem.price * currentItem.quantity + sum, 0
    );
    return total;
  }
  
  getProducts(){
    return this.products
  }
}