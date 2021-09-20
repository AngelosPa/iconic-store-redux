//4. go to the component that needs to access the store and import
import faker from "faker";
import React from "react";
import data from "../data.json";
import { Card, Button } from "react-bootstrap";
const linkstyle = { width: "40vw", height: "auto" };
const Productview = (props) => {
  return (
    <div style={linkstyle}>
      <Card>
        <Card.Img
          style={{ filter: "sepia(110%)" }}
          variant="top"
          src={faker.image.imageUrl(150, 150, "nature", true, true)}
        />
        <Card.Body>
          <Card.Title>An Artwork of {faker.name.lastName()}</Card.Title>

          <Card.Text>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <p> Price: {data[props.id[1]].price}$ inc VAT</p>{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
//4.1. then send the state

//           5. dont forget to export
export default Productview;
