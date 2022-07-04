import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import useWindowDimensions from "./usewindow";

/**
 * @author
 * @function Navbar
 **/

const Navbarr = (props) => {
  const { width } = useWindowDimensions();

  return (
    <Navbar
      bg="light"
      expand="sm"
      style={{
        paddingLeft: "10%",
        paddingRight: "10%",
      }}
    >
      <Navbar.Brand style={{ color: "#004080" }} className="nav-links">
        <Link to="/">Royal Houses</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="nav-links" href="#home">
            <Link to="/">Home</Link>
          </Nav.Link>
          <NavDropdown
            className="nav-links projects"
            style={{
              marginTop: width > 576 ? "8px" : "0px",
              marginLeft: width > 576 ? "15px" : "0px",
            }}
            title={<span style={{ color: "#004080" }}>Projects</span>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              style={{ padding: "0 10px" }}
              className="nav-links"
              href="#action/3.1"
            >
              <Link to="/projects/Blue-World-City-Islamabad">
                Blue World City Islamabad
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-links" href="#action/3.2">
              <Link to="/projects/Kingdom-Valley-Islamabad">
                Kingdom Valley Islamabad
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-links" href="#action/3.3">
              <Link to="/projects/The-Green-MAK-Islamabad">
                The Green MAK Islamabad
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-links" href="#action/3.4">
              <Link to="/projects/Islamabad-Pearl-Enclave">
                Islamabad Pearl Enclave
              </Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            className="nav-links"
            style={{
              marginTop: width > 576 ? "8px" : "0px",
              marginLeft: width > 576 ? "15px" : "0px",
            }}
            title={<span style={{ color: "#004080" }}>Prices</span>}
            id="basic-nav-dropdown-prices"
          >
            <NavDropdown.Item
              style={{ padding: "0 10px" }}
              className="nav-links"
              href="#action/3.1"
            >
              <Link to="/prices/Blue-World-City-Islamabad">
                Blue World City Islamabad
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-links" href="#action/3.2">
              <Link to="/prices/Kingdom-Valley-Islamabad">
                Kingdom Valley Islamabad
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-links" href="#action/3.3">
              <Link to="/prices/The-Green-MAK-Islamabad">
                The Green MAK Islamabad
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-links" href="#action/3.4">
              <Link to="/prices/Islamabad-Pearl-Enclave">
                Islamabad Pearl Enclave
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            className="nav-links"
            href="#link"
            style={{ marginLeft: width > 576 ? "15px" : "0px" }}
          >
            <Link to="/contact">Contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbarr;
