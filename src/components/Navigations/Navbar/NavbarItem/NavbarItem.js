import React from "react";
import { Link } from "react-router-dom";

import classes from "./NavbarItem.module.css";

const NavbarItem = (props) => {
  const className = [classes.item];

  if (props.active) {
    className.push(classes.active);
  }

  return (
    <Link className={className.join(" ")} {...props}>
      {props.children}
    </Link>
  );
};

export default NavbarItem;
