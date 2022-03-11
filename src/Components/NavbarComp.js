import React, { Component } from "react";
import logo from "../images/images-ursu/vila-ursu-logo.png";
import { FaAlignRight, FaCentercode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link as LinkScroll } from "react-scroll";
export default class NavbarComp extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: ~this.state.isOpen });
  };

  render() {
    return (
      <Navbar
        sticky="true"
        bg="dark"
        variant="dark"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand>
          <img src={logo} className="ursu-logo" />
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#">
              <Link to="/" className="nav-link">
                <h4>Acasa</h4>
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <LinkScroll
                to="contact"
                duration={100}
                spy={true}
                smooth={true}
                className="nav-link"
              >
                <h4>Contact</h4>
              </LinkScroll>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to="/rooms" className="nav-link">
                <h4>Camere</h4>
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to="/restaurant" className="nav-link">
                <h4>Restaurant</h4>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
