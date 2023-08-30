class Pay {

  constructor() {}

  makePay(quantity) {
    return {
      realized: true,
      quantity,
    };
  }
}

// import { Pay } from "./Pay.class.js";

class PayPal extends Pay {

  constructor(email) {
    super();
    this._email = email;
  }

  makePay(quantity) {
    return {
      ...super.makePay(quantity),
      platform: "PayPal",
      email: this._email,
    };
  }
}

// import { Pay } from "./Pay.class.js";

class Card extends Pay {
  constructor(cardNumber) {
    super();
    this._cardNumber = cardNumber;
  }

  makePay(quantity) {
    if (this.cardNumber.length !== 16) {
      throw new Error("invalid card");
    }

    const lastCardNumbers = this._cardNumber.toString().slice(-4);

    return {
      ...super.makePay(quantity),
      lastCardNumbers,
    };
  }
}

// import { Pay } from "./Pay.class.js";

class Cash extends Pay {
  constructor() {
    super();
  }
}

// exercise

function processPay(method, quantity) {
  return method.makePay(quantity);
}