let bookCart = [];

const ADD_TO_CART_ACTION = "addToCart";
const REMOVE_FROM_CART_ACTION = "removeFromCart";
const VIEW_CART_ACTION = "viewCart";

function viewCart() {
  console.log(bookCart)
}

function performCartActions (action, newBook) {
  switch (action) {
    case "addToCart":
      bookCart.push(newBook);
      console.log(bookCart);
      break;
  
    case REMOVE_FROM_CART_ACTION:
      bookCart.pop();
      console.log(bookCart);
      break;

    case "viewCart":
      viewCart
      break;

    default:
      console.log("Invalid action. Please choose a valid option.");
      break;
  }
}

performCartActions(ADD_TO_CART_ACTION, "the king lords");
performCartActions(ADD_TO_CART_ACTION, "300");
performCartActions(ADD_TO_CART_ACTION, "radiance");
performCartActions(REMOVE_FROM_CART_ACTION);