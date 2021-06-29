import React from "react"

import classes from "./RatingBar.module.css"
import RatingStars from "../../UI/RatingStars/RatingStars"

const RatingBar = props => {
  const percent = props.data * 100
  return (
    <div className={classes.wrapper}>
      <RatingStars rating={props.rating} />
      <div className={classes.bar}>
        <div
          className={classes.fill_bar}
          style={{
            width: `${percent}%`
          }}></div>
      </div>
      <div>{percent}%</div>
    </div>
  )
}

export default RatingBar
