import React, { useState } from "react";

import classes from "./TabProducts.module.css";

import Dropdown from "../../components/UI/Dropdown/Dropdown";

const TabProducts = (props) => {
  const [dropdown, setDropdown] = useState("default");
  return (
    <div className={classes.container}>
      <div className={classes["action-bar"]}>
        <span>312 items</span>
        <Dropdown
          value={dropdown}
          onChange={(target) => setDropdown(target.value)}
        >
          <Dropdown.Item value={"default"}>
            Categories (Default All)
          </Dropdown.Item>
          <Dropdown.Item value={"2"}>2</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};

export default TabProducts;
