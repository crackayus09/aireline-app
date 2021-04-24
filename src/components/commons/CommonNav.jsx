import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../static/img/plane.png";

export const CommonNav = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Link to="/">
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top text-white"
          />
          {"   "}
          X Airlines
        </Navbar.Brand>
      </Link>
    </Navbar>
  );
};