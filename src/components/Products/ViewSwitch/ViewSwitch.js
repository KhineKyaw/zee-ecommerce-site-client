import React from "react"

import classes from "./ViewSwitch.module.css"

const ViewSwitch = props => {
  const className = [classes.viewSwitch]

  if (!props.state) className.push(classes.active)

  const onClick = s => {
    props.onSwitch(s)
  }

  return (
    <div className={className.join(" ")}>
      View:
      <button className={classes.btn1} onClick={onClick.bind(null, 0)}>
        <ion-icon name='grid-outline'></ion-icon>
      </button>
      <button className={classes.btn2} onClick={onClick.bind(null, 1)}>
        <ion-icon name='reorder-four-outline'></ion-icon>
      </button>
    </div>
  )
}

export default ViewSwitch
