import React from "react"

import classes from "./Card.module.css"

const Card = props => {
  const className = [classes.card]

  if (props.className) {
    className.push(props.className)
  }

  // Remove unnecessary props
  const Props = { ...props }
  delete Props.children

  return (
    <div {...Props} className={className.join(" ")}>
      {props.children}
    </div>
  )
}

export default Card
