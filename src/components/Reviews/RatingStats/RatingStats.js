import React from "react"

import classes from "./RatingStats.module.css"
import RatingBar from "./RatingBar"

const RatingStats = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.stats}>4/5</div>
      <div>
        <RatingBar />
      </div>
    </div>
  )
}

export default RatingStats
