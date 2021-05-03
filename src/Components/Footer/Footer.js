import React from "react";
import { Button, ButtonGroup, Nav, Navbar } from "react-bootstrap";
import "./Footer.css";
import {footerNavItems} from '../Data/Data'

const Footer = () => {
  return (
    <div className="footer-container">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img className="footer-logo" src="/logomoon.svg" alt="" />
        </Navbar.Brand>
      </Navbar>
      <Navbar className="footer-navBar" expand="lg">
        <Navbar.Toggle className='footer-nav-toggle' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {footerNavItems.map(({ title, path }) => (
              <Nav.Link href={path}>
                {" "}
                <p className="footer-nav-item">{title}</p>
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
      <div className="footer-credit">
        <p className='mx-3 my-4'>Copyright © Archi's Academy 2020</p>
        <p className='mx-3 my-4'>Terms & Conditions • Privacy Policy</p>
        <ButtonGroup size="lg">
          <Button className='footer-credit-btn-active'>EN</Button>
          <Button className='footer-credit-btn'>TR</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Footer;
