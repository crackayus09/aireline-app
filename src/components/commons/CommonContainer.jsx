import React from "react";
import { Container } from "react-bootstrap";
import { CommonNav } from "./CommonNav";
import { BrandBanner } from "./BrandBanner";

export const CommonContainer = (props) => {
  return (
    <>
      <CommonNav />
      <Container fluid>
        <BrandBanner ptext={props.ptext} />
        {props.children}
      </Container>
    </>
  );
};
