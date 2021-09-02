//4. go to the component that needs to access the store and import

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const ProductInfo = (props) => {
  const { store, id } = props;
  console.log(store);
  const product = store.products[id];
  console.log(product);
  return (
    <div className="product-info">
      <h2>{product.productName}</h2>
      <img src={`${product.icon}`} />
      <h4>{product.price}€</h4>
      <Link to="/product">Back</Link>
    </div>
  );
};
//4.1. then send the state
const mapStoreToProps = (store) => ({
  store,
});
  //           5. dont forget to export
export default connect(mapStoreToProps)(ProductInfo);
