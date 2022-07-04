import React, { Component } from "react";
import logo from "../images/logo2.png";
//import { Slant as Hamburger } from "hamburger-react";
import { HamburgerCollapse } from "react-animated-burgers";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Button, Container, NavDropdown, Nav } from "react-bootstrap";

export default class NavbarI extends Component {
  state = {
    isActive: false,
  };

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  closeMenu = () => {
    this.setState({ isActive: false });
  };

  render() {
    return (
      <>
        {/* <style type="text/css">
          {`
        
      `}
        </style> */}

        <Navbar
          bg="light"
          expand="sm"
          style={{
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
        >
          <Navbar.Brand style={{ color: "#004080" }} href="#home">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                style={{
                  color: "#004080",
                  marginLeft: "15px",
                  fontSize: "20px",
                }}
                className="nav-links"
                href="#home"
              >
                Home
              </Nav.Link>
              <NavDropdown
                style={{ marginTop: "10px" }}
                title={
                  <span
                    style={{
                      color: "#004080",
                      marginLeft: "15px",
                      fontSize: "20px",
                    }}
                  >
                    Projects
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Blue World City Islamabad
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Kingdom Valley Islamabad
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  The Green MAK Islamabad
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Islamabad Pearl Enclave
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                style={{
                  color: "#004080",
                  marginLeft: "15px",
                  fontSize: "20px",
                }}
                href="#link"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
      // <nav className="navbar">
      //   <div className="nav-center">
      //     <div className="nav-header">
      //       <Link to="/">
      //         <img src={logo} alt="Propertie" />
      //       </Link>
      //       <button type="button" className="nav-btn">
      //         <HamburgerCollapse
      //           isActive={this.state.isActive}
      //           toggleButton={this.handleToggle}
      //           buttonColor="transparent"
      //           barColor="#af9a7d"
      //           buttonWidth={22}
      //         />
      //       </button>
      //     </div>
      //     <ul
      //       className={this.state.isActive ? "nav-links show-nav" : "nav-links"}
      //     >
      //       <li onClick={this.closeMenu}>
      //         <NavLink
      //           to="/"
      //           exact
      //           activeStyle={{ fontWeight: "bold", color: "#af9a7d" }}
      //         >
      //           Home
      //         </NavLink>
      //       </li>
      //       <li class="nav-item dropdown" onClick={this.closeMenu}>
      //         <a
      //           class="nav-link dropdown-toggle"
      //           href="#"
      //           id="navbarDropdown"
      //           role="button"
      //           data-toggle="dropdown"
      //           aria-haspopup="true"
      //           aria-expanded="false"
      //         >
      //           Dropdown
      //         </a>
      //         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      //           <a class="dropdown-item" href="#">
      //             Blue World City Islamabad
      //           </a>
      //           <a class="dropdown-item" href="#">
      //             Kingdom Valley Islamabad
      //           </a>
      //           <a class="dropdown-item" href="#">
      //             Islamabad Pearl Enclave
      //           </a>
      //           <a class="dropdown-item" href="#">
      //             The Green MAK Islamabad
      //           </a>
      //         </div>
      //       </li>
      //       {/* <li onClick={this.closeMenu}>
      //         <NavLink
      //           to="/apartments"
      //           exact
      //           activeStyle={{ fontWeight: "bold", color: "#af9a7d" }}
      //         >
      //           Apartments
      //         </NavLink>
      //       </li> */}
      //       <li onClick={this.closeMenu}>
      //         <NavLink
      //           to="/about"
      //           exact
      //           activeStyle={{ fontWeight: "bold", color: "#af9a7d" }}
      //         >
      //           About Propriété
      //         </NavLink>
      //       </li>
      //       <li onClick={this.closeMenu}>
      //         <NavLink
      //           to="/contact"
      //           exact
      //           activeStyle={{ fontWeight: "bold", color: "#af9a7d" }}
      //         >
      //           Contact
      //         </NavLink>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
    );
  }
}
