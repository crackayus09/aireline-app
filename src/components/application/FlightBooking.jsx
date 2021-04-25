import React from "react";

import { Col, Row, Button } from "react-bootstrap";
import Moment from "react-moment";
import { Link, Redirect } from "react-router-dom";

import { CommonContainer } from "../commons";

export const FlightBooking = (props) => {
  if (!props.location.state || !("item" in props.location.state)) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  const { flightInfo, flightInfoLength } = props.location.state.item;

  return (
    <>
      <CommonContainer ptext="Success">
        <Row className="justify-content-center mt-2">
          <Col xs="12" md="6" lg="4" className="text-center">
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
        <Row className="justify-content-center mt-5">
          <Col xs="12" md="6" lg="4" className="text-center">
            <Link to="/">
              <Button variant="primary">Go To HomePage</Button>
            </Link>
          </Col>
        </Row>
      </CommonContainer>
    </>
  );
};
