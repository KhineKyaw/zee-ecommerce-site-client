import React from "react"

import classes from "./SectionDivider.module.css"

const SectionDivider = props => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.item1}>{props.item1}</div>
      <div className={classes.item2}>{props.item2}</div>
    </div>
  )
}

export default SectionDivider
