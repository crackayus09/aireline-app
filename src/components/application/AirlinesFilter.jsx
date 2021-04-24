import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";

export const AirlinesFilter = (props) => {
  const listOptions = [];
  const { filterList } = props;
  const [filterOptions, setFilterOptions] = useState(0);

  useEffect(() => {
    for (const filter in filterList) {
      filterList[filter]["status"] = true;
    }
    setFilterOptions(filterList);
  }, [filterList]);

  const filterChangeHandler = (event) => {
    let newOption = { ...filterOptions };
    newOption[event.target.name]["status"] = !newOption[event.target.name][
      "status"
    ];
    setFilterOptions(newOption);
    props.filterHandler(newOption);
  };

  for (const item in filterOptions) {
    listOptions.push(
      <ListGroup.Item key={item}>
        <input
          id={"filter" + item}
          name={item}
          type="checkbox"
          checked={filterOptions[item].status}
          onChange={filterChangeHandler}
          className="mr-2"
        />
        <label htmlFor={"filter" + item}>{filterOptions[item].name}</label>
      </ListGroup.Item>
    );
  }
  return <ListGroup>{listOptions}</ListGroup>;
};
