import React from "react";
import { Row, Col, Image } from "react-bootstrap";

export const BrandBanner = (props) => {
  return (
    <>
      <Row className="justify-content-center">
        <Col md="auto">
          <Image src="" style={{ height: "150px" }} roundedCircle fluid />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto">
          <h3>{props.ptext || "Login"}</h3>
        </Col>
      </Row>
    </>
  );
};
