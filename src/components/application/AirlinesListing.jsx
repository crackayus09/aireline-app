import React from "react";

import { AirlineList } from "./AirlineList";

export const AirlinesListing = (props) => {
  const { listings } = props;
  const airlineLists = [];
  for (const item in listings) {
    airlineLists.push(
      <AirlineList listItem={listings[item]} key={Math.random()}></AirlineList>
    );
  }
  return <>{airlineLists}</>;
};
