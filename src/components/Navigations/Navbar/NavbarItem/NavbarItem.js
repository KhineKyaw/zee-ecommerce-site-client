import React from "react"
import { Link } from "react-router-dom"

import classes from "./NavbarItem.module.css"

const NavbarItem = props => {
  const className = [classes.item]

  if (props.active) {
    className.push(classes.active)
  }

  return (
    <li className={className.join(" ")}>
      <Link to={props.children.toLowerCase()}>{props.children}</Link>
    </li>
  )
}

export default NavbarItem
