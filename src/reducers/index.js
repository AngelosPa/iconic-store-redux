//2.define the function to handle this actions by using switch(action.type) on "reducers" folder

import allProductsJson from "../data.json";
const allReducers = (state = {}, action) => {
  const { cart, products } = state;
  const { product } = action;
  // an empty {} to secure our app
  const { id, productName, price } = product || {};
  let quantity, inventory, newCart;

  switch (action.type) {
    case "ADD_PRODUCT":
      quantity = cart[id] ? cart[id].quantity : 0;
      inventory =
        product.inventory > 0 ? product.inventory - 1 : product.inventory;
      // we need a shallow copy, then add+ to the bag and remove from the inventory
      return {
        ...state,
        products: {
          ...products,
          [id]: {
            ...product,
            inventory,
          },
        },
        cart: {
          ...cart,
          [id]: {
            id,
            productName,
            price,
            quantity: quantity + 1,
          },
        },
      };
    case "CHECKOUT":
      console.log(
        "Thank you for spending all your money with us, see you soon 😉"
      );
      return {
        products: allProductsJson,
        cart: {},
      };
    case "REMOVE_ONE":
      inventory = products[id].inventory;
      quantity = product.quantity;
      newCart = { ...cart };
      delete newCart[id];
      return {
        ...state,
        cart:
          quantity > 1
            ? { ...cart, [id]: { ...product, quantity: quantity - 1 } }
            : newCart,
        products: {
          ...products,
          [id]: {
            ...product,
            inventory: inventory + 1,
          },
        },
      };
    case "REMOVE_ALL":
      inventory = products[id].inventory;
      quantity = product.quantity;
      newCart = { ...cart };
      delete newCart[id];
      return {
        ...state,
        products: {
          ...products,
          [id]: {
            ...product,
            inventory: inventory + quantity,
          },
        },
        cart: newCart,
      };
    // case"EMPTY_CART":
    // return ;
    default:
      return state;
  }
};

export default allReducers;
