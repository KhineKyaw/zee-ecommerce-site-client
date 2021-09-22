import React from "react"
import { NavLink } from "react-router-dom"

import classes from "./NavbarItem.module.css"

const NavbarItem = props => {
  const className = [classes.item]

  // if (props.active) {
  //   className.push(classes.active)
  // }

  return (
    <NavLink
      activeClassName={classes.active}
      className={className.join(" ")}
      {...props}>
      {props.children}
    </NavLink>
  )
}

export default NavbarItem
