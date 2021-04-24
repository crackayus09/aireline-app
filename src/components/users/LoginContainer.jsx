import React from "react";

import { Row, Col, Card } from "react-bootstrap";

export const LoginContainer = (props) => {
  return (
    <Row className="justify-content-md-center">
      <Col md="auto">
        <Card>
          <Card.Body>{props.children}</Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
