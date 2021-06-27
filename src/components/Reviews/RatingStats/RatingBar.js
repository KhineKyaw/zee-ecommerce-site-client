import React from "react"

import classes from "./RatingBar.module.css"

const RatingBar = () => {
  return (
    <div className={classes.wrapper}>
      <span>*****</span>
      <span></span>
      <span>80%</span>
    </div>
  )
}

export default RatingBar
