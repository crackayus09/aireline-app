import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import { CommonNav } from "../commons/CommonNav";
import { BrandBanner } from "../commons/BrandBanner";

export const Listing = () => {
    return (
      <>
        <CommonNav />
        <Container fluid>
          <BrandBanner ptext="Listing"/>
        </Container>
      </>
    );
  };