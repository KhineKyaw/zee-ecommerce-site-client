import React, { useState } from "react";

import classes from "./Dropdown.module.css";

import Button from "../Button/Button";

const Dropdown = (props) => {
  const [show, setShow] = useState(false);

  let children = props.children;
  if (!children) props.children = [];
  else if (children.constructor !== Array) children = [children];

  const toggle = () => setShow(!show);

  children = children.map((child) => {
    const onClick = () => {
      toggle();
      props.onChange({ value: child.props.value });
    };
    return React.createElement(DropdownItem, { key: child.key, onClick, ...child.props});
  });

  const activeChild = children.find(
    (child) => child.props.value === props.value
  );

  return (
    <div className={`${classes.dropdown} ${props.className}`}>
      <Button type="outline" onClick={toggle}>
        <p>
          {props.name} ( {activeChild && activeChild.props.children} )
        </p>
        <ion-icon
          className={classes.caret}
          name="caret-down-outline"
        ></ion-icon>
      </Button>
      <div
        className={classes["dropdown-content"]}
        style={show ? { display: "block" } : { display: "none" }}
      >
        {children}
      </div>
    </div>
  );
};

const DropdownItem = (props) => {
  return (
    <Button {...props} className={classes.action}>
      {props.children}
    </Button>
  );
};

Dropdown.Item = DropdownItem;

export default Dropdown;
