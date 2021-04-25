import React from "react";

import Moment from "react-moment";

export const TimingList = (props) => {
  return (
    <>
      <div>
        <Moment format="HH:mm">{props.time}</Moment>
      </div>
      <div>{props.location}</div>
      <div>
        <Moment format="DD MMMM YYYY">{props.time}</Moment>
      </div>
    </>
  );
};

export const DifferenceList = (props) => {
  return (
    <>
      <div>Time</div>
      <div>
        <Moment
          duration={props.startTime}
          date={props.endTime}
        />
      </div>
      <div>{props.stops} Stops</div>
    </>
  );
};
