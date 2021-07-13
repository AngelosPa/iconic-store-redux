//1. define the actions on "actions" folder (actions can change the state that u want) type:"WHAT U WANT IN CAPITAL"
// it must be always a function returning an object
const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    product,
  };
};

const removeOne = (product) => {
  return {
    type: "REMOVE_ONE",
    product,
  };
};

const removeAll = (product) => {
  return {
    type: "REMOVE_ALL",
    product,
  };
};

const checkout = () => {
  return {
    type: "CHECKOUT",
  };
};

export { addProduct, removeOne, removeAll, checkout };
