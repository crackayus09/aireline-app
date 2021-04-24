import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";

export const AirlinesFilter = (props) => {
  const listOptions = [];
  const {filterList} = props;

  const filterChangeHandler = (event) => {

  };

  for (const item in filterList) {
    listOptions.push(
      <ListGroup.Item key={item}>
        <input
          id={"filter" + item}
          type="checkbox"
          checked={true}
          onChange={filterChangeHandler}
          className="mr-2"
        />
        <label htmlFor={"filter" + item}>
          {filterList[item]}
        </label>
      </ListGroup.Item>
    );
  }
  return <ListGroup>{listOptions}</ListGroup>;
};
