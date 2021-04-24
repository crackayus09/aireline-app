import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

import Moment from "react-moment";

export const AirlineList = (props) => {
  const {
    AirItineraryPricingInfo,
    OriginDestinationOptions,
    AirLineName,
  } = props.listItem;
  const flightInfo = OriginDestinationOptions[0]["FlightSegments"];
  const flightInfoLength = flightInfo.length;
  const airFare = AirItineraryPricingInfo["ItinTotalFare"]["TotalFare"];

  const handleBooking = () => {};

  return (
    <Row className="m-3 bg-info">
      <Col xs={4} className="text-center">
        {AirLineName}
      </Col>
      <Col xs={2} className="text-right">
        <div>
          <Moment format="HH:mm">{flightInfo[0]["DepartureDateTime"]}</Moment>
        </div>
        <div>{flightInfo[0]["DepartureAirportLocationCode"]}</div>
        <div>
          <Moment format="DD MMMM YYYY">
            {flightInfo[0]["DepartureDateTime"]}
          </Moment>
        </div>
      </Col>
      <Col xs={2} className="text-center">
        <div>Time</div>
        <div>
          <Moment
            duration={flightInfo[0]["DepartureDateTime"]}
            date={flightInfo[flightInfoLength - 1]["ArrivalDateTime"]}
          />
        </div>
        <div>{flightInfoLength} Stops</div>
      </Col>
      <Col xs={2}>
        <div>
          <Moment format="HH:mm">
            {flightInfo[flightInfoLength - 1]["ArrivalDateTime"]}
          </Moment>
        </div>
        <div>
          {flightInfo[flightInfoLength - 1]["ArrivalAirportLocationCode"]}
        </div>
        <div>
          <Moment format="DD MMMM YYYY">
            {flightInfo[flightInfoLength - 1]["ArrivalDateTime"]}
          </Moment>
        </div>
      </Col>
      <Col xs={2} className="bg-secondary text-center" onClick={handleBooking}>
        <div>Book Flight</div>
        <div>{airFare.CurrencyCode + " " + airFare.Amount}</div>
      </Col>
    </Row>
  );
};
