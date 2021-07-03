import React from "react"

import classes from "./HeaderIconButton.module.css"
import { ReactComponent as BagIcon } from "../SvgIcons/bag-handle-outline.svg"
import { ReactComponent as SearchIcon } from "../SvgIcons/search-outline.svg"
import { ReactComponent as ProfileIcon } from "../SvgIcons/person-outline.svg"

const icons = {
  bag: BagIcon,
  search: SearchIcon,
  profile: ProfileIcon
}

const HeaderIconButton = props => {
  var Icon = null
  const className = [classes.iconbutton]

  if (props.className) {
    className.push(props.className)
  }

  if (props.showNotification) {
    className.push(classes.noti)
  }

  if (props.name) {
    Icon = icons[props.name]
  }

  const Props = { ...props }
  delete Props.children
  delete Props.name
  delete Props.showNotification

  return (
    <button {...Props} className={className.join(" ")}>
      <Icon />
    </button>
  )
}

export default HeaderIconButton
