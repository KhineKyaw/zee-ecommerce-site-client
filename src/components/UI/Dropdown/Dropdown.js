import React, { useState } from "react";

import classes from "./Dropdown.module.css";

import Button from "../Button/Button";

const Dropdown = (props) => {
  const [show, setShow] = useState(false);
  const items = !Array.isArray(props.children)
    ? props.children.type === Dropdown.Item
      ? [props.children]
      : []
    : props.children.filter(({ type }) => type === Dropdown.Item);
  return (
    <div className={classes.dropdown}>
      <Button
        className={classes["dropdown-button"]}
        onClick={() => setShow(!show)}
      >
        {items.length !== 0 && items[0].props.text}
      </Button>
      <div
        className={classes["dropdown-content"]}
        style={show ? { display: "block" } : { display: "none" }}
      >
        {items}
      </div>
    </div>
  );
};

Dropdown.Item = (props) => {
  return <Button className={classes.action}>{props.text}</Button>;
};

export default Dropdown;
