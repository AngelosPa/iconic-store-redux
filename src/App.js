import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductInfo from "./components/ProductInfo";
import Productview from "./components/Productview";
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingCart from "./components/ShoppingCart";
import "./sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
const App = () => {
  return (
    <Router>
      <Menu />

      <Switch>
        <Container>
          <Row>
            <Col>
              <Route path="/" exact component={ProductList} />
              <Route
                path="/product/:id"
                component={({ match }) => <Productview id={match.params.id} />}
              />
              <Route path="/cart" exact component={ShoppingCart} />
            </Col>
          </Row>
        </Container>
      </Switch>
    </Router>
  );
};

export default App;
