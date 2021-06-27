import React from "react"

import classes from "./Layout.module.css"

const Layout = props => {
  const className = [classes.layout]

  if (props.className) {
    className.push(props.className)
  }

  return <div className={className.join(" ")}>{props.children}</div>
}

export default Layout
