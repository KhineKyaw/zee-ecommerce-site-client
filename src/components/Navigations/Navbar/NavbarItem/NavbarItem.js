import React from "react"

import classes from "./NavbarItem.module.css"

const NavbarItem = props => {
  const className = [classes.item]

  if (props.active) {
    className.push(classes.active)
  }

  return <li className={className.join(" ")}>{props.children}</li>
}

export default NavbarItem
