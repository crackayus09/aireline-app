import React from "react";

import { Col, Row, Button } from "react-bootstrap";
import Moment from "react-moment";
import { Link } from "react-router-dom";

import { CommonContainer } from "../commons/CommonContainer";

export const FlightBooking = (props) => {
  const { flightInfo, flightInfoLength } = props.location.state.item;

  return (
    <>
      <CommonContainer ptext="Success">
        <Row className="justify-content-md-center">
          <Col xs="4" className="text-center">
            Your flight from{" "}
            <b>{flightInfo[0]["DepartureAirportLocationCode"]}</b> -{" "}
            <b>
              {flightInfo[flightInfoLength - 1]["ArrivalAirportLocationCode"]}
            </b>{" "}
            on{" "}
            <b>
              <Moment format="DD MMMM YYYY">
                {flightInfo[0]["DepartureDateTime"]}
              </Moment>
            </b>{" "}
            is confirmed.
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-5">
          <Col xs="4" className="text-center">
            <Link to="/">
              <Button variant="primary">Go To HomePage</Button>
            </Link>
          </Col>
        </Row>
      </CommonContainer>
    </>
  );
};