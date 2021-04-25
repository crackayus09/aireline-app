import React, { useEffect } from "react";

import { Navbar, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../actions";

import logo from "../../static/img/plane.png";

export const CommonNav = () => {
  const loginStatus = useSelector((state) => state.logger);
  const dispatcher = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatcher(logout());
    history.push("/");
  };

  useEffect(() => {
    if (!loginStatus) {
      history.push("/");
    }
  }, [history, loginStatus]);

  return (
    <Navbar bg="danger" variant="dark" sticky="top">
      <Link to="/">
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top text-white"
          />
          {"   "}X Airlines
        </Navbar.Brand>
      </Link>
      <Navbar.Collapse className="justify-content-end">
        {loginStatus ? (
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          ""
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
