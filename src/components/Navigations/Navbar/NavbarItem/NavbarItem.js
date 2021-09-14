import React from "react"
import { useHistory } from "react-router-dom"

import classes from "./NavbarItem.module.css"

const NavbarItem = props => {
  const className = [classes.item]
  const history = useHistory()

  const onClick = () => {
    history.push(props.children.toLowerCase())
  }

  if (props.active) {
    className.push(classes.active)
  }

  return (
    <li onClick={onClick} className={className.join(" ")}>
      {props.children}
    </li>
  )
}

export default NavbarItem
