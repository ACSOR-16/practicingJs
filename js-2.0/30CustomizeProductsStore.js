class Product {
  constructor(price) {
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    throw new Error("This Method must be implemented in the subclasses");
  }
}

// import { Product } from "./product";

class BasicProduct extends Product {
  constructor(price, description) {
    super(price);
    this.description = description;
  }

  getDescription() {
    return this.description;
  }
}

// import { Product } from "./product";

class WarrantyDecorator extends Product {
  constructor(product) {
    super(product);
    this.product = product;
  }

  getPrice() {
    return this.product.getPrice() + 20;
  }

  getDescription() {
    return `${this.product.getDescription()} with Warranty`;
  }
}

// import { Product } from "./product";

class ShippingInsuranceDecorator extends Product {
  constructor(product) {
    super(product);
    this.product = product;
  }

  getPrice() {
    return this.product.getPrice() + 20;
  }

  getDescription() {
    return `${this.product.getDescription()} with Shipping Insurance`;
  }
}