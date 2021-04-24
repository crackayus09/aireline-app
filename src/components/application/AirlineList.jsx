import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

export const AirlineList = (props) => {
  // const airlineLists = props.listings.map(item => {
  //     return <AirlineList listItem={item}></AirlineList>;
  // });
  const {
    AirItineraryPricingInfo,
    DirectionInd,
    OriginDestinationOptions,
    ValidatingAirlineCode,
    AirLineName,
  } = props.listItem;
  const flightInfo = OriginDestinationOptions[0]["FlightSegments"];
  const airFare = AirItineraryPricingInfo['ItinTotalFare']['TotalFare'];

  //   useEffect(() => {
  //       console.log(flightInfo);
  //   }, []);

  return (
    <Row className="m-3 bg-info">
      <Col xs={4}>{AirLineName}</Col>
      <Col xs={2}>
        <div>{flightInfo[0]["DepartureDateTime"]}</div>
        <div>{flightInfo[0]["DepartureAirportLocationCode"]}</div>
        <div>{flightInfo[0]["DepartureDateTime"]}</div>
      </Col>
      <Col xs={2}>
        <div>Time</div>
        <div>{flightInfo.length} Stops</div>
      </Col>
      <Col xs={2}>
        <div>{flightInfo[flightInfo.length - 1]["ArrivalDateTime"]}</div>
        <div>
          {flightInfo[flightInfo.length - 1]["ArrivalAirportLocationCode"]}
        </div>
        <div>{flightInfo[flightInfo.length - 1]["ArrivalDateTime"]}</div>
      </Col>
      <Col xs={2} className="bg-secondary">
          <div>Book Flight</div>
          <div>{airFare.CurrencyCode + " " + airFare.Amount}</div>
      </Col>
    </Row>
  );
};
