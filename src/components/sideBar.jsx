import React from "react";
import SideBarItem from "./sideBarItem";
import { Navbar, Nav } from "react-bootstrap";

const Sidebar = props => {
  return (
    <Navbar
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
      expand="lg"
    >
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">
          {props.data.about.firstName}
          {props.data.about.lastName}
        </span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={props.data.about.imageUrl}
            alt={props.data.about.firstName}
          />
        </span>
      </a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="collapse navbar-collapse"
      >
        <Nav className="mr-auto">
          <SideBarItem data={props.data} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;
