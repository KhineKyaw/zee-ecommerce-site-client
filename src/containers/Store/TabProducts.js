import React from "react";

import classes from "./TabProducts.module.css";

import Dropdown from "../../components/UI/Dropdown/Dropdown";

const TabProducts = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <span>312 items</span>
        <Dropdown>
          <Dropdown.Item text="1" onClick={() => null} />
          <Dropdown.Item text="2" onClick={() => null} />
        </Dropdown>
      </div>
    </div>
  );
};

export default TabProducts;
