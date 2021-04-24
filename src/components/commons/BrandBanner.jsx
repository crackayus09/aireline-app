import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Image } from "react-bootstrap";

export const BrandBanner = (props) => {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Image src="" style={{ height: "150px" }} roundedCircle fluid />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h3>{props.ptext || "Login"}</h3>
        </Col>
      </Row>
    </>
  );
};
