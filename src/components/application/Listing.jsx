import React, { useState, useEffect } from "react";

import { Col, Row } from "react-bootstrap";

import { CommonContainer } from "../commons/CommonContainer";

import { AirlinesFilter } from "./AirlinesFilter";
import { AirlinesListing } from "./AirlinesListing";

import airlines from "../../static/json/airlines.json";
import listing from "../../static/json/result.json";

export const Listing = () => {
  const [actualListing, setActualListing] = useState({});
  const [listings, setListings] = useState({});
  const [filterList, setFilterList] = useState({});

  useEffect(() => {
    const airObj = {};
    airlines.forEach((data) => {
      airObj[data["iata"]] = data["name"];
      return airObj;
    });

    const listObj = listing["Data"]["PricedItineraries"];
    const filterObj = {};
    listObj.forEach((data) => {
      const airlineName = airObj[data["ValidatingAirlineCode"]];
      data["AirLineName"] = airlineName;
      filterObj[data["ValidatingAirlineCode"]] = { name: airlineName };
    });
    setActualListing(listObj);
    setListings(listObj);
    setFilterList(filterObj);
  }, []);

  const filterHandler = (options) => {
    const primeListing = { ...actualListing };
    for (const item in primeListing) {
      const itemCode = primeListing[item].ValidatingAirlineCode;
      if (!options[itemCode].status) {
        delete primeListing[item];
      }
    }
    setListings(primeListing);
  };

  return (
    <>
      <CommonContainer ptext="Listing">
        <Row>
          <Col xs={3}>
            <AirlinesFilter
              filterList={filterList}
              filterHandler={filterHandler}
            />
          </Col>
          <Col xs={9}>
            <AirlinesListing listings={listings} />
          </Col>
        </Row>
      </CommonContainer>
    </>
  );
};
