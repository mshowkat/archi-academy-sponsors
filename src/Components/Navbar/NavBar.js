import React from "react";
import "./NavBar.css";
import { Button, Nav, Navbar } from "react-bootstrap";
import { navLinks } from "../Data/Data";

const NavBar = () => {
  return (
    <div>
      <Navbar className="custom-navbar" expand="lg">
        <div className="brand-container">
          <Navbar.Brand href="#home" className="logo-container">
            <img src="/logomoon.svg" alt="" />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='nav-toggle-button' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {navLinks.map(({ title, path, id }) => (
              <Nav.Link href={path} key={id}>
                <p className="nav-items">{title.toUpperCase()}</p>
              </Nav.Link>
            ))}
          </Nav>
          <div className="nav-action">
            <a className="mx-3 nav-login">Login</a>
            <Button variant="outline-success" className="mx-3 nav-skill-test">
              Skill Test
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
