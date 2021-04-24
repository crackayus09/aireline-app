import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

import { CommonNav } from "../commons/CommonNav";
import { BrandBanner } from "../commons/BrandBanner";

import { AirlinesFilter } from "./AirlinesFilter";
import { AirlinesListing } from "./AirlinesListing";

import airlines from "../../static/json/airlines.json";
import listing from "../../static/json/result.json";

export const Listing = () => {
  const [actualListing, setActualListing] = useState(0);
  const [listings, setListings] = useState(0);
  const [filterList, setFilterList] = useState(0);

  useEffect(() => {
    const airObj = {};
    airlines.forEach((data) => {
      airObj[data["iata"]] = data["name"];
      return airObj;
    });

    const listObj = listing["Data"]["PricedItineraries"];
    listObj.forEach((data) => {
      data["AirLineName"] = airObj[data["ValidatingAirlineCode"]];
    });
    setActualListing(listObj);
    setListings(listObj);

    const filterObj = [];
    listObj.forEach((item) => {
      filterObj[item["ValidatingAirlineCode"]] = item["AirLineName"];
    });
    setFilterList(filterObj);
  }, []);

  const filterHandler = () => {};

  return (
    <>
      <CommonNav />
      <Container fluid>
        <BrandBanner ptext="Listing" />
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
      </Container>
    </>
  );
};
