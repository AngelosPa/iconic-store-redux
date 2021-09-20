import React from "react";
import faker from "faker";

import { connect } from "react-redux";
import Slider from "./Slider";
import { Container, Row, Col } from "react-bootstrap";
import Productinfo from "./ProductInfo";
const ProductList = (props) => {
  const { items } = props;

  return (
    <Container>
      <Row>
        <Col>
          <Slider items={items} />
        </Col>
      </Row>
      <Row>
        {items.map((item) => (
          <Col>
            <Productinfo item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
const mapStoreToProps = (store) => ({
  items: Object.values(store.products),
});
export default connect(mapStoreToProps)(ProductList);
