import React from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
const linkstyle = { color: "inherit", textDecoration: "none" };
const Menu = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "antiquewhite" }} expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={linkstyle}>
              Iconic Store
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="View our Artworks" id="basic-nav-dropdown">
                {data.map((item) => (
                  <NavDropdown.Item>
                    <Link to={`/product/:${item.id}`} style={linkstyle}>
                      {item.productName}
                    </Link>
                  </NavDropdown.Item>
                ))}

                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link>
                <Link to="/cart" style={linkstyle}>
                  Cart{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1 style={{ textAlign: "center" }}>WELCOME </h1>
    </>
  );
};

export default Menu;
