import React, { Fragment } from "react";
import { connect } from "react-redux";
import { checkout } from "../actions";
import { Button } from "react-bootstrap";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = (props) => {
  const { items, checkout } = props;
  const itemsInCart = items.map((item) => (
    <ShoppingCartItem item={item} key={item.id} />
  ));
  return (
    <Fragment>
      <ul>{itemsInCart}</ul>
      <p>
        Total: €
        {items.reduce((sum, item) => sum + item.price * item.quantity, 0)}
      </p>
      <div>
        <>
          <style type="text/css">
            {`
.btn-xxl {
padding: 1rem 1.5rem;
font-size: 1.5rem;
}
`}{" "}
          </style>
          ;
          <Button variant="dark" size="xxl" onClick={checkout}>
            Checkout
          </Button>
        </>
      </div>
    </Fragment>
  );
};

const mapStoreToProps = (store) => ({
  items: Object.values(store.cart),
});
const mapActionsToProps = {
  checkout,
};
export default connect(mapStoreToProps, mapActionsToProps)(ShoppingCart);
