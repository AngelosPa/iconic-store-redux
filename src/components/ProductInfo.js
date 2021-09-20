//4. go to the component that needs to access the store and import
import faker from "faker";
import React from "react";
import { addProduct } from "../actions";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
const ProductInfo = (props) => {
  const { item, addProduct } = props;
  item.productName = faker.name.lastName();

  return (
    <Card>
      <Card.Img
        style={{ filter: "sepia(110%)" }}
        variant="top"
        src={faker.image.imageUrl(150, 150, "nature", true, true)}
      />
      <Card.Body>
        <Card.Title>An Artwork of {item.productName}</Card.Title>

        <Card.Text>
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <p> Price: {item.price}$ inc VAT</p>{" "}
          <h5>
            {item.inventory > 0 ? (
              `x ${item.inventory} prints available`
            ) : (
              <span style={{ color: "red" }}>sold out</span>
            )}
          </h5>
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => addProduct(item)}
          disabled={item.inventory === 0}
        >
          {item.inventory > 0 ? "Add to cart" : "Sold out"}
        </Button>
      </Card.Body>
    </Card>
  );
};
//4.1. then send the state
const mapStoreToProps = (store) => {};
const mapActionsToProps = {
  addProduct,
};
//           5. dont forget to export
export default connect(mapStoreToProps, mapActionsToProps)(ProductInfo);
