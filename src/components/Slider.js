import React from "react";
import faker from "faker";
import { connect } from "react-redux";
import { Carousel, Container, Row, Col } from "react-bootstrap";

const Slider = (props) => {
  const { items } = props;

  return (
    <Carousel style={{ paddingBottom: "1.8rem" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${items[1].icon}/${Math.floor(Math.random() * 1000)}`}
          // src={faker.image.city()}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3> A creation of {faker.name.lastName()}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${items[1].icon}/${Math.floor(Math.random() * 1000)}`}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3> A creation of {faker.name.lastName()}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${items[1].icon}/${Math.floor(Math.random() * 1000)}`}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3> A creation of {faker.name.lastName()}</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
