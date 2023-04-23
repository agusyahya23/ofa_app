import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 180) {
      setSticky(true);
    } else if (window.scrollY < 180) {
      setSticky(false);
    }
  };

  return (
    <Navbar
      color="dark"
      opacity="0.3"
      light
      container="md"
      expand="md"
      sticky={sticky ? "top" : ""}
    >
      <NavbarBrand href="/">
        <img className="logo" src="/images/ofa_official.png"></img>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink href="#landing">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#service">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
