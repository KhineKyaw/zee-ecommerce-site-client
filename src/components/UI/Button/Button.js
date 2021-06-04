import React from "react"

import styles from "../Style.module.css"
import classes from "./Button.module.css"

const Button = props => {
  const className = [styles.clear_bo, classes.main]

  if (props.className) {
    className.push(props.className)
  }

  if (props.type) {
    className.push(classes[props.type])
  }
  // Remove unnecessary props
  const Props = { ...props }
  delete Props.children

  return (
    <button {...Props} className={className.join(" ")}>
      {props.children}
    </button>
  )
}

export default Button
