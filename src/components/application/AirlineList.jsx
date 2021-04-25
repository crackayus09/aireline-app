import React, { useState } from "react";

import "../../static/css/listing.css";

import { Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import { TimingList, DifferenceList } from ".";

export const AirlineList = (props) => {
  const {
    AirItineraryPricingInfo,
    OriginDestinationOptions,
    AirLineName,
  } = props.listItem;
  const flightInfo = OriginDestinationOptions[0]["FlightSegments"];
  const flightInfoLength = flightInfo.length;
  const airFare = AirItineraryPricingInfo["ItinTotalFare"]["TotalFare"];

  const [bookedItem, setBookedItem] = useState({
    trigger: false,
    item: {},
  });

  const handleBooking = (item) => {
    setBookedItem({
      trigger: true,
      item,
    });
  };

  if (bookedItem.trigger && Object.keys(bookedItem.item).length) {
    const { item } = bookedItem;
    return (
      <Redirect
        to={{
          pathname: "/booking",
          state: { item },
        }}
      />
    );
  }

  return (
    <Row className="listing-margin bg-info">
      <Col xs="3" className="text-center m-auto">
        {AirLineName}
      </Col>
      <Col md="2" className="d-none d-md-block m-auto text-right">
        <TimingList
          time={flightInfo[0]["DepartureDateTime"]}
          location={flightInfo[0]["DepartureAirportLocationCode"]}
        />
      </Col>
      <Col md="3" className="d-none d-md-block m-auto text-center">
        <DifferenceList
          startTime={flightInfo[0]["DepartureDateTime"]}
          endTime={flightInfo[flightInfoLength - 1]["ArrivalDateTime"]}
          stops={flightInfoLength}
        />
      </Col>
      <Col md="2" className="d-none d-md-block m-auto">
        <TimingList
          time={flightInfo[flightInfoLength - 1]["DepartureDateTime"]}
          location={
            flightInfo[flightInfoLength - 1]["DepartureAirportLocationCode"]
          }
        />
      </Col>
      <Col xs="6" className="d-block d-md-none m-auto text-center">
        <div>
          <TimingList
            time={flightInfo[0]["DepartureDateTime"]}
            location={flightInfo[0]["DepartureAirportLocationCode"]}
          />
        </div>
        <div className="mt-2">
          <DifferenceList
            startTime={flightInfo[0]["DepartureDateTime"]}
            endTime={flightInfo[flightInfoLength - 1]["ArrivalDateTime"]}
            stops={flightInfoLength}
          />
        </div>
        <div className="mt-2">
          <TimingList
            time={flightInfo[flightInfoLength - 1]["DepartureDateTime"]}
            location={
              flightInfo[flightInfoLength - 1]["DepartureAirportLocationCode"]
            }
          />
        </div>
      </Col>
      <Col
        xs="3"
        md="2"
        className="bg-secondary text-center d-flex"
        onClick={() => {
          handleBooking({ flightInfo, flightInfoLength });
        }}
      >
        <div className="m-auto">
          <div>Book Flight</div>
          <div>{airFare.CurrencyCode + " " + airFare.Amount}</div>
        </div>
      </Col>
    </Row>
  );
};
