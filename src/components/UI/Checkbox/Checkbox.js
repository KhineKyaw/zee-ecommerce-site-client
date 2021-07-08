import React from "react"

import classes from "./Checkbox.module.css"

const Checkbox = props => {
  const className = [classes.checkboxwrapper]

  if (props.checked) className.push(classes.checked)

  return (
    <div className={classes.wrapper}>
      {props.children ? <label>{props.children}</label> : null}
      <div onClick={props.onClick} className={className.join(" ")}>
        <ion-icon name='checkmark-sharp'></ion-icon>
      </div>
    </div>
  )
}

export default Checkbox
