import React from "react";
// step 1
import { removeOne, removeAll } from "../actions";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
const ShoppingCartItem = (props) => {
  // step 3
  const { item, removeOne, removeAll } = props;

  return (
    <li>
      <p>
        A copy of {item.productName} | € {item.price} | x {item.quantity}
      </p>
      <div>
        <Button
          variant="dark"
          style={{ margin: "1rem" }}
          onClick={() => removeOne(item)}
        >
          Remove One
        </Button>
        <Button
          variant="dark"
          style={{ margin: "1rem" }}
          onClick={() => removeAll(item)}
        >
          Remove All
        </Button>
      </div>
    </li>
  );
};

// step 2
const mapStoreToProps = (store) => ({});
const mapActionsToProps = {
  removeOne,
  removeAll,
};

export default connect(mapStoreToProps, mapActionsToProps)(ShoppingCartItem);
