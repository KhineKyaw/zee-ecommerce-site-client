import React from "react"

import classes from "./RatingBar.module.css"

const RatingBar = props => {
  return (
    <div className={classes.wrapper}>
      <div>*****</div>
      <div className={classes.bar}>
        <div
          className={classes.fill_bar}
          style={{
            width: `${props.data}%`
          }}></div>
      </div>
      <div>{props.data}%</div>
    </div>
  )
}

export default RatingBar
