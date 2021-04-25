import React from "react";

import { Form, Button } from "react-bootstrap";

import { CommonContainer } from "../commons";
import { LoginContainer } from ".";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../../actions";

export const LoginPage = () => {
  const userRef = React.useRef();
  const pwdRef = React.useRef();
  const history = useHistory();
  const dispatcher = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userName = userRef.current.value;
    const pwd = pwdRef.current.value;

    if (userName === "admin@demo.com" && pwd === "admin") {
      dispatcher(login());
      history.push("/listing");
    }
  };

  return (
    <>
      <CommonContainer>
        <LoginContainer>
          <Form className="text-center" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={userRef}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                ref={pwdRef}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </LoginContainer>
      </CommonContainer>
    </>
  );
};
